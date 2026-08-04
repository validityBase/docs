# Private Portfolio Stamping with Delayed Reveal

A manager may want to start building a verifiable track record well before disclosing positions. vBase supports this through a two-step workflow:

1. **Stamp privately** — record a cryptographic fingerprint of your portfolio on the blockchain immediately, without uploading the file contents.
2. **Reveal later** — upload the original file when you are ready. vBase verifies it matches the fingerprint and incorporates it into your dashboards.

This lets you accumulate months of verified, timestamped history in private, then publish the full record at once. Allocators can confirm that every portfolio was known ahead of the returns, not reconstructed after the fact.


## How it works

Every stamp records a Content ID (CID) — the SHA3-256 hash of your portfolio file. When you later upload the file, vBase recomputes the hash and confirms it matches the one on the blockchain. The blockchain timestamp reflects the original stamp time, not the upload time.

**Keep the exact original file.** Any modification — a space, a line ending, encoding — produces a different hash and the upload will fail. Store the file securely until you are ready to reveal it.

**Use a test account first.** Before you begin stamping live portfolios, run the full two-step workflow — stamp a sample file, then reveal it and confirm it appears correctly — using a test API key. Once verified, switch to your production API key. No other change is required.


## Step 1: Stamp privately

Compute the SHA3-256 hash of the portfolio file locally, then pass it as `data_cid`. The file contents never leave your machine — only the hash is sent to vBase.

```python
import hashlib
import os
from pathlib import Path
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"])

portfolio_file = Path("portfolio_2025-01-31.csv")
cid = "0x" + hashlib.sha3_256(portfolio_file.read_bytes()).hexdigest()

stamp = client.create_stamp(
    data_cid=cid,
    collection_name="global-macro-2025",
)

print(f"Stamped at:  {stamp.commitment_receipt.timestamp}")
print(f"Transaction: {stamp.commitment_receipt.transaction_hash}")
```

Save the receipt. You can stamp as many portfolios as you like before revealing any of them.

**Using curl:**

```bash
CID=$(openssl dgst -sha3-256 portfolio_2025-01-31.csv | awk '{print "0x"$2}')

curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "data_cid=$CID" \
  -F "collection_name=global-macro-2025"
```


## Step 2: Reveal when ready

Upload the original file. vBase verifies the CID, associates the file with the earlier stamp, and adds it to your collection history and dashboards.

```python
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

You can reveal files in any order and at any time. The original blockchain timestamps are preserved regardless of when you upload.


## Dashboard activation

Once files are revealed, vBase rebuilds your portfolio dashboards and performance analytics. Contact [hello@vbase.com](mailto:hello@vbase.com) with your collection name to get your dashboard link.

See [Verified Track Record](verified-track-record.md) for details on sharing your history with allocators.
