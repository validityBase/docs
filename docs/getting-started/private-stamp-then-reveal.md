# Private Stamping with Delayed File Reveal

## Overview

Some users want full support for vBase portfolio dashboards and analytics while keeping their current portfolio positions confidential. vBase supports this with a two-phase workflow:

1. **Stamp the Content ID** — Record the Content ID (CID) of your portfolio file on the blockchain immediately, without uploading the file contents.
2. **Reveal the file** — Upload the original file at a later time to unlock analytics and dashboard updates.

This approach gives you a tamper-proof, timestamped commitment to your portfolio data without exposing positions until you are ready.

> **How it works:** A Content ID (CID) is a unique cryptographic fingerprint (hash) computed from your file. When you later upload the file, vBase verifies it matches the previously stamped CID — proving the portfolio was known at the original stamp time.


## Prerequisites

- A vBase account with an active API key. Find your key at [app.vbase.com/profile/#account_settings](https://app.vbase.com/profile/#account_settings).
- A portfolio CSV formatted according to [vBase portfolio format recommendations](https://docs.vbase.com/use-case-how-tos/stamping-portfolios).
- A collection created for your strategy. Manage collections at [app.vbase.com/profile/#collections](https://app.vbase.com/profile/#collections).


## Step 1: Compute the Content ID of Your Portfolio File

A Content ID (CID) is the SHA3-256 hash of your file. Before stamping, compute the CID of your portfolio CSV locally.

> **Critical:** You must retain the exact file used to compute the CID. Any modification — including whitespace, line endings, or encoding changes — will produce a different CID and the upload in Step 3 will fail. Store the file securely until you are ready to reveal it.

**Python example:**

```python
import hashlib
from pathlib import Path

cid = "0x" + hashlib.sha3_256(Path("portfolio.csv").read_bytes()).hexdigest()
print(f"Content ID: {cid}")
```

**Shell example (OpenSSL):**

```bash
openssl dgst -sha3-256 portfolio.csv
```


## Step 2: Stamp the Content ID (Without Uploading the File)

Use the [`POST /stamps/`](https://app.vbase.com/swagger/#/Stamps/stamps_create) endpoint with the `data_cid` parameter to record the Content ID on the blockchain without uploading file contents.

**API reference:** [`POST https://app.vbase.com/api/v1/stamps/`](https://app.vbase.com/swagger/#/Stamps/stamps_create)

### Request

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data_cid` | string | Yes | Content ID (SHA3-256) of the portfolio file |
| `collection_name` | string | No | Collection name (strategy identifier) to associate this stamp with |

**curl example:**

```bash
curl -X POST "https://app.vbase.com/api/v1/stamps" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "data_cid=0xa3f1e2...YOUR_CONTENT_ID" \
  -F "collection_name=my-strategy"
```

**Python (requests) example:**

```python
import requests

API_KEY        = "YOUR_API_KEY"
CID            = "0xa3f1e2...YOUR_CONTENT_ID"
COLLECTION     = "my-strategy"

response = requests.post(
    "https://app.vbase.com/api/v1/stamps",
    headers={"Authorization": f"Bearer {API_KEY}"},
    data={"data_cid": CID, "collection_name": COLLECTION},
)
response.raise_for_status()
receipt = response.json()
print(f"Stamp created. Commitment Receipt: {receipt}")
```

### Response

A successful stamp returns a Commitment Receipt containing the Content ID, blockchain transaction details, and timestamp:

```json
{
  "commitment_receipt": {
    "object_cid": "0x...",
    "set_cid": "0x...",
    "user_address": "0x...",
    "transaction_hash": "0xabc...",
    "timestamp": "2025-06-01T09:00:00Z",
    "chain_id": 137
  }
}
```


## Step 3: Reveal the File When Ready

When you are ready to make your portfolio visible and incorporate it into vBase dashboards and analytics, upload the original file using the [`POST /stamps/upload-stamped-file/`](https://app.vbase.com/swagger/#/Stamps/stamps_upload-stamped-file_create) endpoint.

vBase will compute the file's Content ID and verify it matches a previously stamped CID in the collection. If a matching stamp is found, the file is saved and included in dashboard and analytics builds.

**API reference:** [`POST https://app.vbase.com/api/v1/stamps/upload-stamped-file/`](https://app.vbase.com/swagger/#/Stamps/stamps_upload-stamped-file_create)

### Request

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `collection_name` | string | Yes | The collection name used when the CID was stamped in Step 2 |
| `file` | file | Yes | The exact portfolio CSV file whose Content ID was previously stamped |

**curl example:**

```bash
curl -X POST "https://app.vbase.com/api/v1/stamps/upload-stamped-file/" \
  -H "Authorization: Api-Key YOUR_API_KEY" \
  -F "collection_name=my-strategy" \
  -F "file=@portfolio.csv"
```

**Python (requests) example:**

```python
import requests

API_KEY    = "YOUR_API_KEY"
COLLECTION = "my-strategy"

with open("portfolio.csv", "rb") as f:
    response = requests.post(
        "https://app.vbase.com/api/v1/stamps/upload-stamped-file/",
        headers={"Authorization": f"Api-Key {API_KEY}"},
        data={"collection_name": COLLECTION},
        files={"file": f},
    )

response.raise_for_status()
print(f"File accepted: {response.json()}")
```


## Complete Workflow Summary

```
Day 1 (private):
  1. Compute Content ID (SHA3-256) of your portfolio CSV locally
  2. POST /api/v1/stamps/  { data_cid: "<cid>", collection_name: "my-strategy" }
     → Timestamp recorded on blockchain. File contents remain private.
  3. Store the exact portfolio CSV securely for later upload.

Day N (ready to reveal):
  4. POST /api/v1/stamps/upload-stamped-file/  { collection_name: "my-strategy", file: <csv> }
     → File Content ID verified against stamp and incorporated into dashboards.
```


## Verification

After uploading, you can verify the stamp using any of the standard [vBase verification methods](https://docs.vbase.com/web-tools/how-to-use-vbase-verify). The blockchain timestamp will reflect the original stamp time from Step 2, proving the portfolio was known before the file was revealed.


## API Reference

Full interactive documentation for both endpoints is available in the vBase Swagger UI:

- [`POST /stamps/` — Stamp a file, inline data, or Content ID](https://app.vbase.com/swagger/#/Stamps/stamps_create)
- [`POST /stamps/upload-stamped-file/` — Upload a previously stamped file](https://app.vbase.com/swagger/#/Stamps/stamps_upload-stamped-file_create)
