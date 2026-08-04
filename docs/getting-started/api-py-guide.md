# Python API Client Guide

The `vbase-api` Python client lets you stamp files, stamp structured data, verify stamps, and manage collections from Python. For the minimal getting-started path, see [API Python Quickstart](api-py-quickstart.md).

## Verify your connection

After creating a client, confirm your key is valid before proceeding:

```python
user = client.get_current_user()
print(f"Connected as: {user.email}")
print(f"Blockchain address: {user.last_address}")
```

## Collections

### Create a collection

```python
collection = client.create_collection(
    name="Daily Positions",
    description="Daily point-in-time portfolio position files",
)
print(f"Collection CID: {collection.cid}")
```

### Retrieve collections

```python
collections = client.get_collections()
for c in collections:
    print(f"{c.name}: {c.cid}")
```

Filter by pinning status:

```python
pinned = client.get_collections(is_pinned=True)
```

Retrieve collections for a specific blockchain address:

```python
user_collections = client.get_collections(user_address="0x...")
```

## Stamping

### Stamp a file

```python
stamp = client.create_stamp(
    file="portfolio_2025-01-31.csv",
    collection_name="global-macro-2025",
)
print(stamp.commitment_receipt.timestamp)
print(stamp.commitment_receipt.transaction_hash)
```

By default, vBase stores the file. To stamp without storing — when you plan to upload the file later — set `store_stamped_file=False`:

```python
stamp = client.create_stamp(
    file="portfolio_2025-01-31.csv",
    collection_name="global-macro-2025",
    store_stamped_file=False,
)
```

The file is uploaded so vBase can compute its content ID, but vBase does not retain it. Use `upload_stamped_file` to store it later. For a fully private workflow where the file never leaves your machine, see [Private Portfolio Stamping](private-portfolio-stamping.md).

### Stamp structured data

Pass a Python dict or string as `data`. vBase serializes it, computes a content ID, and records it on the blockchain.

```python
stamp = client.create_stamp(
    data={
        "as_of": "2025-01-31",
        "positions": [
            {"ticker": "AAPL", "weight": 0.20},
            {"ticker": "MSFT", "weight": 0.15},
        ],
    },
    file_name="positions_2025-01-31.json",
    collection_name="global-macro-2025",
)
```

The optional `file_name` parameter gives the data a filename in vBase. Specify `collection_name` or `collection_cid` — not both.

### Commitment receipt

Every successful stamp returns a commitment receipt:

```python
receipt = stamp.commitment_receipt
print(receipt.object_cid)        # content identifier
print(receipt.timestamp)          # blockchain timestamp
print(receipt.transaction_hash)   # on-chain transaction
print(receipt.user_address)       # your blockchain address
```

## Verifying stamps

Look up existing stamps by content ID:

```python
verification = client.verify_stamps(
    cids=[receipt.object_cid],
    filter_by_user=True,
)
for s in verification.stamp_list:
    print(f"{s.timestamp}  {s.object_cid}")
```

Set `filter_by_user=True` to return only stamps associated with the authenticated user. Omit it to search across all users. You can verify multiple content IDs in one call:

```python
verification = client.verify_stamps(
    cids=[cid_1, cid_2, cid_3],
)
```

## Uploading a previously stamped file

If you stamped with `store_stamped_file=False` or via `data_cid`, upload the original file when you are ready:

```python
result = client.upload_stamped_file(
    collection_name="global-macro-2025",
    file="portfolio_2025-01-31.csv",
)
print(f"Uploaded: {result.file_object.file_name}")
```

See [Private Portfolio Stamping](private-portfolio-stamping.md) for the full delayed-reveal workflow.

## Client lifecycle

Close the client when you are done to release the underlying HTTP session:

```python
client.close()
```

In scripts, use `try`/`finally` to ensure the session closes even if a request fails:

```python
import os
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"])

try:
    stamp = client.create_stamp(
        file="portfolio.csv",
        collection_name="my-strategy",
    )
    print(stamp.commitment_receipt.timestamp)
finally:
    client.close()
```

## Reference

- [vbase-api reference](../../vbase-api-py/index.md)
- [REST API User Guide](../../vbase-django-tools/api/rest-api-user-guide.md)
- [Swagger UI](https://app.vbase.com/swagger/)
