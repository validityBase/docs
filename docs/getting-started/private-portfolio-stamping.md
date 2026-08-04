# Private Portfolio Stamping with Delayed Reveal

Build a verifiable track record before disclosing positions:

1. **Stamp privately** — record the portfolio's Content ID (CID) without
   uploading the file.
2. **Reveal later** — upload the file. vBase verifies its CID and associates it
   with the original commitment.

The original timestamps show that each portfolio existed before its subsequent
returns were known.


## Prerequisites

- Python 3.8 or later with `vbase-api` installed
- A vBase API key stored in `VBASE_API_KEY`
- An existing collection; see the
  [Python REST Client Quickstart](api-py-quickstart.md#create-a-collection)


## How it works

The CID is the SHA3-256 digest of the exact file bytes, encoded as a
`0x`-prefixed hexadecimal string. On upload, vBase recomputes the CID and finds
the matching commitment for the authenticated account and collection. The
original stamp timestamp remains unchanged.

**Keep the exact file.** Changes to spacing, line endings, or encoding change
the CID and prevent a match.

**Test first.** Run both steps with a separate test account before stamping live
portfolios.


## Step 1: Stamp privately

Compute the CID locally and pass it as `data_cid`. No file bytes are sent.

```python
import hashlib
import os
from pathlib import Path
from vbase_api import VBaseAPIClient

portfolio_file = Path("portfolio_2025-01-31.csv")
cid = "0x" + hashlib.sha3_256(portfolio_file.read_bytes()).hexdigest()

with VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"]) as client:
    stamp = client.create_stamp(
        data_cid=cid,
        collection_name="global-macro-2025",
        store_stamped_file=False,
    )

print(f"Stamped at:  {stamp.commitment_receipt.timestamp}")
print(f"Transaction: {stamp.commitment_receipt.transaction_hash}")
```

**Using curl:**

```bash
CID=$(openssl dgst -sha3-256 portfolio_2025-01-31.csv | awk '{print "0x"$2}')

curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "data_cid=$CID" \
  -F "collection_name=global-macro-2025" \
  -F "store_stamped_file=false"
```

## Step 2: Reveal when ready

Using the same account and collection, upload the original file:

```python
import os
from vbase_api import VBaseAPIClient

with VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"]) as client:
    result = client.upload_stamped_file(
        collection_name="global-macro-2025",
        file="portfolio_2025-01-31.csv",
    )

print(f"Revealed: {result.file_object.file_name}")
```

**Using curl:**

```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=global-macro-2025" \
  -F "file=@portfolio_2025-01-31.csv"
```

Files can be revealed in any order. Their original timestamps remain unchanged.


## Dashboard activation

Contact [hello@vbase.com](mailto:hello@vbase.com) with the collection name to
configure portfolio dashboards and performance analytics.

See [Verified Track Record](verified-track-record.md) for details on sharing your history with allocators.
