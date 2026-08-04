# Python REST Client Quickstart

Use the `vbase-api` Python client to stamp a portfolio through the REST API. For
raw HTTP, see [Using the REST API directly](#using-the-rest-api-directly).


## Prerequisites

1. Sign up at [app.vbase.com](https://app.vbase.com).
2. Go to [Account Settings](https://app.vbase.com/profile#account_settings) and copy your API key.

**Test first.** Verify the workflow with a separate test account. Collections
are account-specific, so re-create them in production before switching API
keys.


## Install

```bash
pip install vbase-api
```

Requires Python 3.8 or later. The package installs as `vbase-api` and imports as
`vbase_api`. The similarly named `vbase` package is the lower-level core SDK.


## Configure your API key

Store the key in an environment variable. Never commit it to version control.

macOS/Linux:

```bash
export VBASE_API_KEY="your-api-key"
```

Windows PowerShell:

```powershell
$env:VBASE_API_KEY="your-api-key"
```


## Create a client

```python
import os
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"])
```


## Create a collection

A collection holds one strategy's history. Create it once; duplicate names
return a conflict error.

```python
client.create_collection(
    name="global-macro-2025",
    description="Global macro strategy, launched January 2025",
)
```

You can also create and manage collections at
[app.vbase.com/profile#collections](https://app.vbase.com/profile#collections).


## Prepare your portfolio

Create a CSV with one row per position. See
[Portfolio Format](stamping-portfolios.md) for accepted columns and weight
rules.

```
symbol,weight
AAPL,0.20
MSFT,0.15
GLD,0.10
TLT,-0.15
SPY,-0.30
```

Weights are normalized decimals. Negative weights are short positions.


## Stamp a portfolio

Pass the file path and collection name. By default, vBase records its content
ID and timestamp on-chain and stores the file.

```python
stamp = client.create_stamp(
    file="portfolio_2025-01-31.csv",
    collection_name="global-macro-2025",
)

print(stamp.commitment_receipt.timestamp)
print(stamp.commitment_receipt.transaction_hash)
```

Stamp after each rebalance or on a regular schedule.

Resending identical content is idempotent for 3,600 seconds by default. See
[Idempotency](api-py-guide.md#idempotency) before changing this behavior.

Close the client's HTTP session when the script is finished:

```python
client.close()
```


## Using the REST API directly

If you prefer curl or another HTTP client, the base URL is `https://app.vbase.com/api/v1/`. Authenticate with a `Bearer` token.

**Create a stamp:**

```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=global-macro-2025" \
  -F "file=@portfolio_2025-01-31.csv" \
  -F "store_stamped_file=true"
```

Full interactive documentation is available at [app.vbase.com/swagger/](https://app.vbase.com/swagger/).


## Next steps

- [Python REST Client Guide](api-py-guide.md) — common operations and behavior.
- [Python client API reference](../../vbase-api-py/index.md) — complete method and response-model reference.
- [Private Portfolio Stamping](private-portfolio-stamping.md) — stamp without revealing positions; disclose on your schedule.
- [Verified Track Record](verified-track-record.md) — share a live dashboard once you have a history.
