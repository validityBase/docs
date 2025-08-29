# vBase Django Tools API Documentation

## About the REST API

The REST API provides a programmatic interface to interact with our services, allowing you to stamp files, inline data, or existing CIDs. This API is designed to be flexible and secure, supporting various data formats and authentication methods.

## Getting Started with the REST API

To begin using the REST API, you need to have a valid API token for authentication. The API is accessible via standard HTTP methods and returns JSON responses.

### Base URL
```
https://app.vbase.com/api/v1/
```

## About the OpenAPI Description for the REST API

Our REST API is documented using OpenAPI, providing a comprehensive description of available endpoints, parameters, and response formats. You can explore the API using the Swagger UI, which offers an interactive interface for testing API calls.

Access the Swagger UI at:
`https://app.vbase.com/swagger/`

## Authenticating to the REST API

Authentication is required for all API requests. Use the Bearer token method by including an `Authorization` header in your requests. The format should be:

```
Authorization: Bearer <your-api-token>
```

## Keeping your API credentials secure

- Never share your API token publicly
- Store your API token securely
- Use environment variables to store your API token
- Never commit API tokens to version control

## API Endpoints

### Stamp Endpoint

**POST** `/v1/stamp/`

This endpoint allows you to stamp files, inline data, or existing CIDs.

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file | File | No | Binary file to be stamped |
| data | String | No | Inline text or JSON data |
| dataCid | String | No | Existing CID to stamp |
| collectionCid | String | No | Optional CID of a collection the file belongs to |
| storeStampedFile | Boolean | No | Indicates whether the stamped file should be stored (only applies if a file is provided). |
| idempotent | Boolean | No | Enables idempotency |
| idempotencyWindow | Integer | No | Idempotency window in seconds |

Note: At least one of 'file', 'data', or 'dataCid' must be provided.

#### Response Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Idempotent request - returning previous stamp |
| 201 | Stamp created successfully |
| 400 | Invalid input or idempotent conflict |
| 500 | Internal server error |

#### Example Requests CURL

1. Stamping a file:
```bash
curl -X POST https://app.vbase.com/api/v1/stamp/ \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "file=@testfile.txt" \
-F "storeStampedFile=true" \
-F "idempotent=true" \
-F "idempotencyWindow=3600"
```

2. Stamping inline data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamp/ \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "data='1212121212'" \
-F "storeStampedFile=true" \
-F "idempotent=true" \
-F "idempotencyWindow=3600"
```

3. Stamping an existing CID:
```bash
curl -X POST https://app.vbase.com/api/v1/stamp/ \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "dataCid='0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800'" \
-F "idempotent=true" \
-F "idempotencyWindow=3600"
```

### Verify Endpoint

**POST** `/v1/verify/`

Checks whether one or more Content IDs (CIDs, SHA3 hashes) have previously been stamped on-chain via vBase. If a match is found, the API returns full stamp details (e.g., timestamp, blockchain address, and related metadata).

#### Request Body

| Field | Type | Required | Description |
|-----------|------|----------|-------------|
| cids | Array<String> | Yes | List of CIDs (SHA3 hashes) to verify. |
| filterByUser | Boolean | No | When true, only return results owned by the current (authenticated) user. |


#### Response Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Ok - returning the stamp |
| 400 | Invalid input data |
| 500 | Internal server error |

#### Example Requests CURL

1. Verifying CIDs:
```bash
curl -X POST "https://dev.app.vbase.com/api/v1/verify/" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "cids": ["0xdb...5"],
    "filterByUser": false
  }'
```

#### Example Requests PYTHON
```python
"""
A Python client for the VBase API to stamp files and data.
"""
from typing import TypedDict, Optional, Dict, Any, List
import json
import os
import logging
import requests
from dotenv import load_dotenv

load_dotenv()

# Configure logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("VBaseClient")
REQUEST_TIMEOUT = 1000


class StampData(TypedDict, total=False):
    """
    TypedDict for the data to be sent in the stamp request.
    """

    data: Optional[str]
    dataCid: Optional[str]
    collectionCid: Optional[str]
    storeStampedFile: bool
    idempotent: bool
    idempotencyWindow: int


class VBaseClientAPI:
    """
    A client for interacting with the VBase API.
    """

    def __init__(self, base_url: str, api_token: str):
        self.base_url = base_url.rstrip("/")
        self.api_token = api_token
        self.stamp_url = f"{self.base_url}/api/v1/stamp/"
        self.verify_url = f"{self.base_url}/api/v1/verify/"

    def stamp(
        self,
        input_data: Optional[StampData] = None,
        input_files: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Send a stamp request to the VBase API.
        """
        headers = {"Authorization": f"Bearer {self.api_token}"}
        if input_files is None:
            input_files = {}

        try:
            resp = requests.post(
                self.stamp_url,
                data=input_data,
                files=input_files,
                headers=headers,
                timeout=REQUEST_TIMEOUT,
            )
            resp.raise_for_status()
        except requests.HTTPError as e:
            body = getattr(e.response, "text", "")
            logger.error(
                "stamp: HTTP %s at %s. Body: %s",
                getattr(e.response, "status_code", "?"),
                self.stamp_url,
                body,
            )
            raise
        except requests.RequestException as e:
            logger.error("stamp: Request failed to %s: %s", self.stamp_url, e)
            raise

        try:
            return resp.json()
        except json.JSONDecodeError:
            logger.error(
                "stamp: Failed to parse JSON. Status=%s Body=%s",
                resp.status_code,
                resp.text,
            )
            raise

    def verify(
        self,
        object_hashes: List[str],
        filter_by_user: Optional[bool] = False,
    ) -> Dict[str, Any]:
        """Send a verification request to the VBase API."""
        headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        payload = {
            "cids": object_hashes,
            "filter-by-user": bool(filter_by_user),
        }

        try:
            resp = requests.post(
                self.verify_url, json=payload, headers=headers, timeout=REQUEST_TIMEOUT
            )
            resp.raise_for_status()
        except requests.HTTPError as e:
            body = getattr(e.response, "text", "")
            logger.error(
                "verify: HTTP %s at %s. Body: %s",
                getattr(e.response, "status_code", "?"),
                self.verify_url,
                body,
            )
            raise
        except requests.RequestException as e:
            logger.error("verify: Request failed to %s: %s", self.verify_url, e)
            raise

        try:
            return resp.json()
        except json.JSONDecodeError:
            logger.error(
                "verify: Failed to parse JSON. Status=%s Body=%s",
                resp.status_code,
                resp.text,
            )
            raise


API_TOKEN = "YOUR-API-KEY"
BASE_URL = "https://app.vbase.com"

def test_stamp_file():
    """
    Test function to stamp a file.
    """
    client = VBaseClientAPI(base_url=BASE_URL, api_token=API_TOKEN)
    data: StampData = {
        "storeStampedFile": "true",
        "idempotent": "true",
        "idempotencyWindow": "3600",
    }

    with open("test_api.py", "rb") as f:
        files = {
            "file": f,
        }
        result = client.stamp(data, files)

    logger.info("Stamping file result:")
    logger.info(result)


def test_stamp_data():
    """
    Test function to stamp a file.
    """
    client = VBaseClientAPI(base_url=BASE_URL, api_token=API_TOKEN)
    data: StampData = {
        "data": "1212121212",
        "storeStampedFile": "true",
        "idempotent": "true",
        "idempotencyWindow": "3600",
    }
    result = client.stamp(data)
    logger.info("Stamping file result:")
    logger.info(result)


def test_stamp_data_cid():
    """
    Test function to stamp a file.
    """
    client = VBaseClientAPI(base_url=BASE_URL, api_token=API_TOKEN)
    data: StampData = {
        "dataCid": "0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
        "idempotent": "true",
        "idempotencyWindow": "3600",
    }
    result = client.stamp(data)
    logger.info("Stamping file result:")
    logger.info(result)


def test_verify():
    """
    Test function to verify CIDs.
    """
    client = VBaseClientAPI(base_url=BASE_URL, api_token=API_TOKEN)
    object_cids = ["0xdba7e3f5ccf6e119894d5396221b75c149f77fc158a45333eb284382a8112a55"]
    result = client.verify(object_cids, filter_by_user=False)
    logger.info("Verify file result:")
    logger.info(result)


# EXAMPLE USAGE
if __name__ == "__main__":
    test_stamp_file()
    test_stamp_data()
    test_stamp_data_cid()
```