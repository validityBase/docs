# Private Stamping with Delayed Reveal

Stamp sensitive information before you are ready to disclose it. This workflow
applies to predictive datasets, alternative data, research results, portfolios,
and other files that you may share later. A recipient can match the exact file
to the public blockchain record and confirm when it was stamped.

The process has two steps:

1. **Stamp privately.** Calculate the file's Content ID (CID) on your computer
   and stamp the CID without uploading the file.
2. **Reveal when ready.** Share the exact file with selected recipients for
   verification, or upload it to vBase if you want vBase to store it.

## How it works

A Content ID is the SHA3-256 hash of the file, written as a `0x`-prefixed
hexadecimal string. The API sends the CID and stamp details to vBase, but it
does not send the file. The CID is public, so anyone with the exact file can
hash it and find the matching stamp.

A CID is a hash, not encryption. Someone who can guess the exact contents can
hash each guess and compare the results with the public CID. This workflow is
suitable for detailed files whose exact bytes are hard to guess. A short value
drawn from a predictable set needs a separate privacy method.

When you upload the file, vBase calculates its CID and confirms that your
account stamped it in the same collection. Any change to the file, including
whitespace, line endings, or encoding, creates a different CID and prevents a
match.

If you start with structured data rather than a file, save the data to a file
before calculating the CID. Keep that exact file for later verification.
Writing the same values again with different spacing, field order, encoding, or
line endings will produce a different CID.


## Prerequisites

- Python 3.8 or later with `vbase-api` installed (`pip install vbase-api`)
- A vBase API key stored in `VBASE_API_KEY`; see
  [Configure your API key](api-py-quickstart.md#configure-your-api-key)
- An existing collection; see [Create a collection](api-py-quickstart.md#create-a-collection)
- A separate account for testing before you use your main account

If you are stamping a portfolio for use with vBase portfolio tools, the CSV
must meet the
[portfolio format requirements](stamping-portfolios.md#what-counts-as-a-valid-portfolio-upload).
This requirement applies only to that portfolio use case.


## Step 1: Stamp privately

Calculate the CID on your computer and pass it as `data_cid`. No part of the
file leaves your machine during this step.

The following example uses a private portfolio file. The same process applies
to predictive datasets, alternative data, research results, and other files.

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

A successful stamp returns a commitment receipt:

```json
{
  "commitment_receipt": {
    "object_cid": "0x...",
    "set_cid": "0x...",
    "user_address": "0x...",
    "transaction_hash": "0xabc...",
    "timestamp": "2025-06-01T09:00:00Z",
    "chain_id": 8453
  }
}
```

Keep the file exactly as it was when you calculated the CID. You need this file
to show that it matches the stamp or to upload it later.


## Step 2: Reveal when ready

### Share with a recipient

Send the file to the person who needs to verify it. They can use
[vBase Verify](https://app.vbase.com/verify/). The app hashes the file in their
browser and finds the matching stamp. It does not upload the file, and the
person does not need a vBase account.

See [Verification Methods](verification-methods.md) for other ways to verify a
stamp.

### Store the file with vBase

Upload the file if you want vBase to store it or use it with a feature that
requires stored files. Use the same account and collection that you used for
the stamp. vBase checks that the file's CID matches a stamp in that collection
before storing it.

```python
import os
from vbase_api import VBaseAPIClient

with VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"]) as client:
    result = client.upload_stamped_file(
        collection_name="global-macro-2025",
        file="portfolio_2025-01-31.csv",
    )

print(f"Uploaded: {result.file_object.file_name}")
```

**Using curl:**

```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=global-macro-2025" \
  -F "file=@portfolio_2025-01-31.csv"
```

You can upload files in any order. Uploading or sharing a file does not change
its stamp time.


## Portfolio-specific dashboard example

This section applies only to portfolios. Email
[hello@vbase.com](mailto:hello@vbase.com) with the collection name to set up
portfolio dashboards and analytics. See
[Verified Track Record](verified-track-record.md) for an example of sharing a
portfolio history with allocators.
