# Python API Quickstart

The vBase Python API Client is the recommended way to integrate vBase into a Python application or automated workflow.

Use the client to:

* Stamp files or structured data
* Organize related stamps into Collections
* Retrieve your Collections
* Verify previously stamped content
* Access blockchain commitment receipts

> **Package naming**
>
> * Source repository: `vbase-api-py`
> * Install with: `vbase-api`
> * Import as: `vbase_api`

## Install the client

Install the package using `pip`:

```bash
pip install vbase-api
```

The client requires Python 3.8 or later.

## Get your API key

The vBase API uses an API key, also referred to as a bearer token, to authenticate requests.

You can obtain your API key from your vBase account settings.

Store it as an environment variable rather than placing it directly in your source code.

macOS or Linux:

```bash
export VBASE_API_KEY="your-api-key"
```

Windows PowerShell:

```powershell
$env:VBASE_API_KEY="your-api-key"
```

Do not commit your API key to source control or share it publicly.

## Initialize the client

Import `VBaseAPIClient` and initialize it with your API key:

```python
import os

from vbase_api import VBaseAPIClient

client = VBaseAPIClient(
    api_key=os.environ["VBASE_API_KEY"]
)
```

By default, the client connects to:

```text
https://app.vbase.com
```

and uses a request timeout of 30 seconds.

You can confirm that authentication is working by retrieving your account information:

```python
user = client.get_current_user()

print(f"Connected as: {user.email}")
print(f"Blockchain address: {user.last_address}")
```

## Create a Collection

Collections organize related stamps into a verifiable dataset, research process, track record, or other body of work.

Create a Collection by providing a name and description:

```python
collection = client.create_collection(
    name="Daily Positions",
    description="Daily point-in-time portfolio position files"
)

print(f"Collection: {collection.name}")
print(f"Collection CID: {collection.cid}")
```

The returned `Collection` object includes information such as:

* Collection name
* Collection CID
* Description
* Creation timestamp
* Pinning status
* Public visibility status

## Stamp structured data

Use the `data` parameter to stamp a string or Python dictionary:

```python
stamp = client.create_stamp(
    data={
        "as_of": "2026-08-04",
        "strategy": "Example Strategy",
        "positions": [
            {
                "ticker": "ABC",
                "weight": 0.60
            },
            {
                "ticker": "XYZ",
                "weight": 0.40
            }
        ]
    },
    file_name="daily_positions.json",
    collection_name=collection.name
)
```

The response contains a blockchain commitment receipt:

```python
receipt = stamp.commitment_receipt

print(f"Object CID: {receipt.object_cid}")
print(f"Timestamp: {receipt.timestamp}")
print(f"Transaction hash: {receipt.transaction_hash}")
print(f"User address: {receipt.user_address}")
print(f"Chain ID: {receipt.chain_id}")
```

The object CID identifies the exact content that was stamped.

When stamping inline data, the optional `file_name` parameter gives the data a filename in vBase.

You can add the stamp to a Collection using either:

* `collection_name`
* `collection_cid`

Specify only one of these parameters for a stamp.

## Stamp a file

Use the `file` parameter to stamp a file from its path:

```python
file_stamp = client.create_stamp(
    file="daily_positions.csv",
    collection_name=collection.name
)

file_receipt = file_stamp.commitment_receipt

print(f"Object CID: {file_receipt.object_cid}")
print(f"Timestamp: {file_receipt.timestamp}")
```

By default, vBase stores the stamped file as part of the request.

When stored-file metadata is included in the response, you can access it through `file_object`:

```python
if getattr(file_stamp, "file_object", None):
    print(f"Stored file: {file_stamp.file_object.file_name}")
    print(f"File path: {file_stamp.file_object.file_path}")
```

To stamp the file without storing it through vBase, set `store_stamped_file` to `False`:

```python
file_stamp = client.create_stamp(
    file="daily_positions.csv",
    collection_name=collection.name,
    store_stamped_file=False
)
```

You retain the original file while vBase creates a blockchain record of its Content ID.

## Verify a stamp

Use the object CID from the commitment receipt to look for matching vBase stamps:

```python
verification = client.verify_stamps(
    cids=[receipt.object_cid],
    filter_by_user=True
)
```

The result contains a list of matching commitment receipts:

```python
for verified_stamp in verification.stamp_list:
    print(f"Verified CID: {verified_stamp.object_cid}")
    print(f"Timestamp: {verified_stamp.timestamp}")
    print(f"User address: {verified_stamp.user_address}")
    print(f"Transaction hash: {verified_stamp.transaction_hash}")
```

Set `filter_by_user=True` to return only stamps associated with the authenticated user.

To search for matching stamps without limiting the results to the authenticated user, use the default:

```python
verification = client.verify_stamps(
    cids=[receipt.object_cid]
)
```

You can also verify multiple CIDs in one request:

```python
verification = client.verify_stamps(
    cids=[
        receipt.object_cid,
        file_receipt.object_cid
    ]
)

print(f"Matching stamps: {len(verification.stamp_list)}")
```

The verification response also reports the display timezone used for its results:

```python
print(f"Display timezone: {verification.display_timezone}")
```

## Retrieve your Collections

Use `get_collections()` to retrieve Collections:

```python
collections = client.get_collections()

for item in collections:
    print(f"{item.name}: {item.cid}")
```

You can filter the results by pinning status:

```python
pinned_collections = client.get_collections(
    is_pinned=True
)
```

You can also retrieve Collections associated with a particular blockchain address:

```python
user_collections = client.get_collections(
    user_address="0x..."
)
```

## Repeated stamping requests

Stamp creation is idempotent by default, with a default idempotency window of 3,600 seconds.

This helps prevent an identical request from creating unnecessary duplicate stamps within the configured window:

```python
stamp = client.create_stamp(
    file="daily_positions.csv",
    collection_name=collection.name,
    idempotent=True,
    idempotency_window=3600
)
```

A newly created stamp returns a `StampCreatedResponse`. A matching idempotent request may return an `IdempotentStampResponse`.

Both response types contain:

```python
stamp.commitment_receipt
```

Code that only requires the commitment receipt can therefore use the same pattern for either response:

```python
receipt = stamp.commitment_receipt
print(receipt.object_cid)
```

## Upload a previously stamped file

You can upload a file that was previously stamped without being stored through vBase.

vBase validates the file against an existing blockchain stamp for the authenticated user and specified Collection:

```python
result = client.upload_stamped_file(
    collection_name="Daily Positions",
    file="daily_positions.csv"
)

print(f"Uploaded file: {result.file_object.file_name}")
print(f"Object CID: {result.commitment_receipt.object_cid}")
```

The upload fails if the file cannot be matched to a valid existing stamp for that user and Collection.

## Close the client

Close the client when it is no longer needed:

```python
client.close()
```

For scripts, use a `try`/`finally` block to ensure the underlying session is closed even if a request fails:

```python
import os

from vbase_api import VBaseAPIClient

client = VBaseAPIClient(
    api_key=os.environ["VBASE_API_KEY"]
)

try:
    stamp = client.create_stamp(
        data={"hello": "world"}
    )

    print(stamp.commitment_receipt.object_cid)
finally:
    client.close()
```

## Complete example

The following example creates a Collection, stamps structured data into it, and verifies the resulting Content ID:

```python
import os

from vbase_api import VBaseAPIClient

client = VBaseAPIClient(
    api_key=os.environ["VBASE_API_KEY"]
)

try:
    collection = client.create_collection(
        name="Example Collection",
        description="An example vBase Collection"
    )

    stamp = client.create_stamp(
        data={
            "message": "Hello from vBase",
            "version": 1
        },
        file_name="example.json",
        collection_name=collection.name
    )

    object_cid = stamp.commitment_receipt.object_cid

    print(f"Stamped with CID: {object_cid}")

    verification = client.verify_stamps(
        cids=[object_cid],
        filter_by_user=True
    )

    for verified_stamp in verification.stamp_list:
        print(
            f"Verified at {verified_stamp.timestamp}: "
            f"{verified_stamp.object_cid}"
        )
finally:
    client.close()
```

## Next steps

* [Python API Client Reference](vbase_api_client.md)
* [Python API Models Reference](vbase_api_models.md)
* [Interactive REST API Reference](https://app.vbase.com/swagger/)
* [Choose How to Use vBase](../docs/getting-started/choose-how-to-use-vbase.md)

> **Need lower-level blockchain functionality?**
>
> The `vbase-py` Python Blockchain SDK supports lower-level commitment, indexing, and direct blockchain workflows. Most Python integrations should begin with the API Client described above.
