# Python REST Client Guide

`vbase-api` (`pip install vbase-api`; `import vbase_api`) is the Python client
for the REST API. You can use it to stamp and verify files or structured data
and to manage collections. See the [quickstart](api-py-quickstart.md) for setup.

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
    name="daily-demand-forecasts",
    description="Daily demand forecasts by region",
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

The examples below use demand forecasts. The same calls work with other
predictive datasets, alternative data, portfolios, research results, and other
files.

### Stamp a file

```python
stamp = client.create_stamp(
    file="demand_forecast_2025-01-31.csv",
    collection_name="daily-demand-forecasts",
)
print(stamp.commitment_receipt.timestamp)
print(stamp.commitment_receipt.transaction_hash)
```

`store_stamped_file=False` prevents vBase from retaining the file, but the file
is still uploaded for CID calculation:

```python
stamp = client.create_stamp(
    file="demand_forecast_2025-01-31.csv",
    collection_name="daily-demand-forecasts",
    store_stamped_file=False,
)
```

Use `upload_stamped_file` to store it later. If the file must not leave your
machine before reveal, see
[Private Stamping with Delayed Reveal](private-stamping.md).

### Stamp structured data

Pass a Python dict or string as `data`. The client serializes dicts with
`json.dumps` before sending them.

```python
stamp = client.create_stamp(
    data={
        "as_of": "2025-01-31",
        "forecasts": [
            {"region": "north", "demand": 127.4},
            {"region": "south", "demand": 141.8},
        ],
    },
    file_name="demand_forecast_2025-01-31.json",
    collection_name="daily-demand-forecasts",
)
```

`file_name` sets the stored filename for `data`. Specify `collection_name` or
`collection_cid`, not both.

### Commitment receipt

Every successful stamp returns a commitment receipt:

```python
receipt = stamp.commitment_receipt
print(receipt.object_cid)        # content identifier
print(receipt.timestamp)          # blockchain timestamp
print(receipt.transaction_hash)   # on-chain transaction
print(receipt.user_address)       # your blockchain address
```

### Idempotency

By default, resending identical content within 3,600 seconds can return the
existing receipt. Set `idempotent=False` only when identical content needs a
new timestamp.

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

`filter_by_user=True` limits results to the authenticated user; the default
searches all users. Pass multiple content IDs in one call:

```python
verification = client.verify_stamps(
    cids=[cid_1, cid_2, cid_3],
)
```

## Uploading a previously stamped file

If you stamped with `store_stamped_file=False` or `data_cid`, you can upload the
file later. The authenticated user must own the collection, and the file's CID
must match a commitment in that collection:

```python
result = client.upload_stamped_file(
    collection_name="daily-demand-forecasts",
    file="demand_forecast_2025-01-31.csv",
)
print(f"Uploaded: {result.file_object.file_name}")
```

## Client lifecycle

Use the client as a context manager to close its HTTP session automatically:

```python
import os
from vbase_api import VBaseAPIClient

with VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"]) as client:
    stamp = client.create_stamp(
        file="demand_forecast_2025-01-31.csv",
        collection_name="daily-demand-forecasts",
    )
    print(stamp.commitment_receipt.timestamp)
```

If you do not use a `with` block, call `client.close()` when finished.

## Reference

- [`vbase-api` on PyPI](https://pypi.org/project/vbase-api/)
- [`validityBase/vbase-api-py` on GitHub](https://github.com/validityBase/vbase-api-py)
- [Python client API reference]()
- [REST API User Guide](../../vbase-django-tools/api/rest-api-user-guide.md)
- [Swagger UI](https://app.vbase.com/swagger/)
