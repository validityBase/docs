# vbase-cloud-services
"""
A Python client for the VBase API to stamp files and data.
"""
from typing import TypedDict, Optional, Dict, Any
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
    storeStampedFiles: bool
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

    def stamp(
        self,
        input_data: Optional[StampData] = None,
        input_files: Optional[Dict[str, Any]] = None,
    ) -> requests.Response:
        """
        Send a stamp request to the VBase API.
        """
        headers = {"Authorization": f"Bearer {self.api_token}"}
        if input_files is None:
            input_files = {}

        try:
            response = requests.post(
                self.stamp_url,
                data=input_data,
                files=input_files,
                headers=headers,
                timeout=REQUEST_TIMEOUT,
            )
            response.raise_for_status()
        except requests.RequestException as e:
            logger.error("Request to VBase API failed: %s", e)
            logger.error(
                "Response: %s",
                response.text if "response" in locals() else "No response",
            )
            raise

        try:
            return response.json()
        except Exception as e:
            logger.error("Failed to parse JSON from stamp response: %s", response.text)
            raise e


API_TOKEN = os.getenv("API_TOKEN")
BASE_URL = os.getenv("BASE_URL", "https://dev.app.vbase.com")


def test_stamp_file():
    """
    Test function to stamp a file.
    """
    client = VBaseClientAPI(base_url=BASE_URL, api_token=API_TOKEN)
    data: StampData = {
        "storeStampedFiles": "true",
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
        "storeStampedFiles": "true",
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
        "storeStampedFiles": "true",
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
