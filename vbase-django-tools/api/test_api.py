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


API_TOKEN = os.getenv("API_TOKEN")
BASE_URL = os.getenv("BASE_URL", "https://dev.app.vbase.com")


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
    # test_stamp_data()
    # test_stamp_data_cid()
    # test_verify()
