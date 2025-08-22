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
| collectionCid | String | No | Optional CID of collection to group stamped object |
| storeStampedFile | Boolean | No | Whether to store the stamped file |
| idempotent | Boolean | No | Enable idempotency |
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
-F "storeStampedFile=true" \
-F "idempotent=true" \
-F "idempotencyWindow=3600"
```

#### Example Requests PYTHON
```python
# vbase-cloud-services
"""
A Python client for the VBase API to stamp files and data.
"""
from typing import TypedDict, Optional, Dict, Any
import logging
import requests
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

    def stamp(self, input_data: Optional[StampData] = None, input_files: Optional[Dict[str, Any]] = None) -> requests.Response:
        """
        Send a stamp request to the VBase API.
        """
        headers = {
            "Authorization": f"Bearer {self.api_token}"
        }
        if input_files is None:
            input_files = {}

        try:
            response = requests.post(
                self.stamp_url,
                data=input_data,
                files=input_files,
                headers=headers,
                timeout=REQUEST_TIMEOUT
            )
            response.raise_for_status()
        except requests.RequestException as e:
            logger.error("Request to VBase API failed: %s", e)
            logger.error("Response: %s", response.text if 'response' in locals() else 'No response')
            raise

        try:
            return response.json()
        except Exception as e:
            logger.error("Failed to parse JSON from stamp response: %s", response.text)
            raise e


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
        "storeStampedFile": "true",
        "idempotent": "true",
        "idempotencyWindow": "3600",
    }
    result = client.stamp(data)
    logger.info("Stamping file result:")
    logger.info(result)


# EXAMPLE USAGE
if __name__ == "__main__":
    test_stamp_file()
    test_stamp_data()
    test_stamp_data_cid()

```