# Examples

## Stamp Endpoint

### Curl Examples

#### Stamping Without a Collection

1. Stamping a file:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "file=@testfile.txt" \
-F "store_stamped_file=true" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

2. Stamping inline data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "data='1212121212'" \
-F "store_stamped_file=true" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

3. Stamping a Content Identifier (CID) without revealing data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "data_cid='0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800'" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

#### Stamping to a Collection Identified by a Name

1. Stamping a file:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_name=Test Collection" \
-F "file=@testfile.txt" \
-F "store_stamped_file=true" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

2. Stamping inline data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_name=Test Collection" \
-F "data='1212121212'" \
-F "store_stamped_file=true" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

3. Stamping a Content Identifier (CID) without revealing data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_name=Test Collection" \
-F "data_cid='0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800'" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

#### Stamping to a Collection Identified by a Content Identifier (Collection CID)

1. Stamping a file:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_cid=0x36f028580bb02cc8272a9a020f4200e346e276ae664e45ee80745574e2f5ab80" \
-F "file=@testfile.txt" \
-F "store_stamped_file=true" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

2. Stamping a Content Identifier (CID) without revealing data:
```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_cid=0x36f028580bb02cc8272a9a020f4200e346e276ae664e45ee80745574e2f5ab80" \
-F "data_cid='0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800'" \
-F "idempotent=true" \
-F "idempotency_window=3600"
```

## Verify Endpoint

### Curl Examples

1. Verifying CIDs:
```bash
curl -X POST "https://dev.app.vbase.com/api/v1/stamps/verify" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "cids": ["0xdb...5"],
    "filter_by_user": false
  }'
```

## Python Examples

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
    data_cid: Optional[str]
    collection_cid: Optional[str]
    store_stamped_file: bool
    idempotent: bool
    idempotency_window: int


class VBaseClientAPI:
    """
    A client for interacting with the VBase API.
    """

    def __init__(self, base_url: str, api_token: str):
        self.base_url = base_url.rstrip("/")
        self.api_token = api_token
        self.stamp_url = f"{self.base_url}/api/v1/stamps"
        self.verify_url = f"{self.base_url}/api/v1/stamps/verify"

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
            "filter_by_user": bool(filter_by_user),
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
        "store_stamped_file": "true",
        "idempotent": "true",
        "idempotency_window": "3600",
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
        "store_stamped_file": "true",
        "idempotent": "true",
        "idempotency_window": "3600",
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
        "data_cid": "0x229c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
        "idempotent": "true",
        "idempotency_window": "3600",
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
