# vBase REST API Client

vBase API Client

This module provides a Python client for interacting with the vBase API.
The client supports operations for collections, stamps, and users.

API Documentation: [https://docs.vbase.com/](https://docs.vbase.com/)
Swagger: [https://app.vbase.com/swagger/](https://app.vbase.com/swagger/)

### *class* vbase_api.VBaseAPIClient(api_key: str, base_url: str = 'https://app.vbase.com', timeout: int = 30)

Bases: `object`

Client for interacting with the vBase API.

The vBase API provides endpoints for stamping data on the blockchain,
managing vBase collections, and verifying stamped content.

* **Parameters:**
  * **api_key** – Bearer token for API authentication
  * **base_url** – Base URL of the vBase API (default: [https://app.vbase.com](https://app.vbase.com))
  * **timeout** – Request timeout in seconds (default: 30)

### Example

```python
client = VBaseAPIClient(api_key="your-bearer-token")
collections = client.list_collections()
stamp = client.create_stamp(data={"hello": "world"})
```

#### API_VERSION *= 'v1'*

#### DEFAULT_BASE_URL *= 'https://app.vbase.com'*

#### \_\_init_\_(api_key: str, base_url: str = 'https://app.vbase.com', timeout: int = 30)

Initialize the vBase API client.

#### close()

Close the session and cleanup resources.

#### create_collection(name: str, description: str, cid: str = None, is_pinned: bool = True) → [Collection](vbase_api_models.md#vbase_api.vbase_api_models.Collection)

Create a new user collection.

* **Parameters:**
  * **name** – Collection name
  * **cid** – Collection CID
  * **description** – Collection description
  * **is_pinned** – Whether the collection is pinned
* **Returns:**
  Created Collection object
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails or collection already exists

### Example

```python
collection = client.create_collection(
    name="My Collection",
    cid="0x1234567890abcdef...",
    description="A sample collection",
    is_pinned=True
)
print(f"Created: {collection.name}")
```

#### create_stamp(file: str | Path | BinaryIO | None = None, data: str | Dict | None = None, file_name: str | None = None, data_cid: str | None = None, collection_cid: str | None = None, collection_name: str | None = None, store_stamped_file: bool = True, idempotent: bool = True, idempotency_window: int = 3600) → [StampCreatedResponse](vbase_api_models.md#vbase_api.vbase_api_models.StampCreatedResponse) | [IdempotentStampResponse](vbase_api_models.md#vbase_api.vbase_api_models.IdempotentStampResponse)

Stamp a file, data, or CID.

At least one of ‘file’, ‘data’, or ‘data_cid’ must be provided.
If you want to add the stamp to a collection,
one collection parameter (collection_cid or collection_name) should be specified.

* **Parameters:**
  * **file** – Binary file to be stamped (path or file-like object)
  * **data** – Inline text or JSON data to be stamped (string or dict)
  * **file_name** – Custom file name for data (only used when ‘data’ is provided)
  * **data_cid** – Existing CID to stamp
  * **collection_cid** – Optional CID of collection to group stamped object
  * **collection_name** – Optional name of collection (case-insensitive)
  * **store_stamped_file** – Whether to store the stamped file (default: True)
  * **idempotent** – Enable idempotency (default: True)
  * **idempotency_window** – Idempotency window in seconds (default: 3600)
* **Returns:**
  StampCreatedResponse (201 status) or IdempotentStampResponse (200 status)
* **Raises:**
  * [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails
  * **ValueError** – If invalid parameters are provided

### Example

```python
# Stamp inline data
stamp = client.create_stamp(data={"hello": "world"})
print(f"Object CID: {stamp.commitment_receipt.object_cid}")

# Stamp a file
stamp = client.create_stamp(file="document.pdf", collection_name="Documents")
if stamp.file_object:
    print(f"File: {stamp.file_object.file_name}")

# Stamp an existing CID
stamp = client.create_stamp(data_cid="Qm...")
```

#### get_collections(user_address: str | None = None, is_pinned: bool | None = None) → List[[Collection](vbase_api_models.md#vbase_api.vbase_api_models.Collection)]

Get collections with optional filtering.

* **Parameters:**
  * **user_address** – Filter by user address
  * **is_pinned** – Filter by pinned status
* **Returns:**
  List of Collection objects
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails

### Example

```python
collections = client.get_collections(is_pinned=True)
for collection in collections:
    print(f"{collection.name}: {collection.cid}")
```

#### get_current_user() → [AccountSettings](vbase_api_models.md#vbase_api.vbase_api_models.AccountSettings)

Retrieve current user account settings.

* **Returns:**
  AccountSettings for the authenticated user
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails

### Example

user = client.get_current_user()
print(f”User email: {user.email}”)

#### get_user(user_address: str) → [AccountSettings](vbase_api_models.md#vbase_api.vbase_api_models.AccountSettings)

Retrieve user account settings by address.

* **Parameters:**
  **user_address** – The user’s blockchain address
* **Returns:**
  AccountSettings for the specified user
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails or user not found

### Example

user = client.get_user(“0x…”)
print(f”User name: {user.name}”)

#### upload_stamped_file(collection_name: str, file: str | Path | BinaryIO) → [StampCreatedResponse](vbase_api_models.md#vbase_api.vbase_api_models.StampCreatedResponse)

Upload a file that has been previously stamped.

This endpoint validates that the file exists in the blockchain for the
authenticated user and specified collection.

* **Parameters:**
  * **collection_name** – Collection name for blockchain verification (case-insensitive)
  * **file** – Previously stamped file to be uploaded (path or file-like object)
* **Returns:**
  StampCreatedResponse with commitment receipt and file object
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If validation fails or file not found in blockchain

### Example

```python
result = client.upload_stamped_file(
    collection_name="My Collection",
    file="stamped_document.pdf"
)
print(f"Uploaded: {result.file_object.file_name}")
```

#### verify_stamps(cids: List[str], filter_by_user: bool = False) → [VerificationResult](vbase_api_models.md#vbase_api.vbase_api_models.VerificationResult)

Verify one or more Content IDs (CIDs).

This endpoint checks whether Content IDs (SHA3 hash) have previously been
stamped on the blockchain using vBase. If a match is found, returns the full
stamp details including timestamp, blockchain address, and other stamp details.

* **Parameters:**
  * **cids** – Array of CIDs to verify
  * **filter_by_user** – When true, only return results owned by the current user
* **Returns:**
  VerificationResult with display timezone and stamp list
* **Raises:**
  [**VBaseAPIError**](#vbase_api.vbase_api_client.VBaseAPIError) – If the request fails

### Example

```python
result = client.verify_stamps(
    cids=["0xbd...1", "0xcd...2"],
    filter_by_user=True
)
for stamp in result.stamp_list:
    print(f"Found stamp at {stamp.timestamp}")
```

### *exception* vbase_api.vbase_api_client.VBaseAPIError(message: str, status_code: int | None = None)

Bases: `Exception`

Base exception for vBase API errors.

#### \_\_init_\_(message: str, status_code: int | None = None)

#### args

### vbase_api.vbase_api_client.create_client(api_key: str, base_url: str = 'https://app.vbase.com', timeout: int = 30) → [VBaseAPIClient](#vbase_api.VBaseAPIClient)

Create a vBase API client.

* **Parameters:**
  * **api_key** – Bearer token for API authentication
  * **base_url** – Base URL of the vBase API
  * **timeout** – Request timeout in seconds
* **Returns:**
  Configured VBaseAPIClient instance

### Example

```python
client = create_client(api_key="your-bearer-token")
collections = client.get_collections()
```
