# API Quickstart

This guide covers the fastest path to stamping a portfolio with vBase using the Python client. If you prefer raw HTTP, see [Using the REST API directly](#using-the-rest-api-directly).


## Prerequisites

1. Sign up at [app.vbase.com](https://app.vbase.com).
2. Go to [Account Settings](https://app.vbase.com/profile/#account_settings) and copy your API key.

**Use a test account first.** Create a separate vBase account for testing and use its API key while you verify that your pipeline stamps files and validation passes end-to-end. When everything works as expected, swap in your production API key — that is the only change needed. This is the same practice as maintaining a staging and a production environment.


## Install

```bash
pip install vbase-api-py
```


## Create a client

```python
import os
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key=os.environ["VBASE_API_KEY"])
```

Store your key in an environment variable — never hardcode it or commit it to version control.


## Create a collection

A collection is the named container for one strategy's history. Create one per strategy.

```python
client.create_collection(
    name="global-macro-2025",
    description="Global macro strategy, launched January 2025",
)
```

You can also create and manage collections at [app.vbase.com/profile/#collections](https://app.vbase.com/profile/#collections).


## Prepare your portfolio

Build a CSV with one row per position. See [Portfolio Format](stamping-portfolios.md) for the full specification, including accepted column names and weight normalization rules.

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

Pass the CSV file path and your collection name. vBase computes a cryptographic fingerprint of the file, records it on the blockchain with a timestamp, and stores a copy.

```python
stamp = client.create_stamp(
    file="portfolio_2025-01-31.csv",
    collection_name="global-macro-2025",
)

print(stamp.commitment_receipt.timestamp)
print(stamp.commitment_receipt.transaction_hash)
```

Stamp after each rebalance, or on a regular cadence, to build a continuous verified track record.


## Using the REST API directly

If you prefer curl or another HTTP client, the base URL is `https://app.vbase.com/api/v1/`. Authenticate with a `Bearer` token.

**Create a stamp:**

```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=global-macro-2025" \
  -F "file=@portfolio_2025-01-31.csv"
```

Full interactive documentation is available at [app.vbase.com/swagger/](https://app.vbase.com/swagger/).


## Next steps

- [Private Portfolio Stamping](private-portfolio-stamping.md) — stamp without revealing positions; disclose on your schedule.
- [Verified Track Record](verified-track-record.md) — share a live dashboard once you have a history.
