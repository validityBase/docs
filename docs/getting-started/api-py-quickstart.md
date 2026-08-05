# Python REST Client Quickstart

Use the `vbase-api` Python client to stamp any file through the REST API. This
example uses demand forecasts, but the same process applies to other
predictive datasets, alternative data, portfolios, research results, and other
files. For raw HTTP, see
[Using the REST API directly](#using-the-rest-api-directly).


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

A collection groups related stamps. You might use one collection for versions
of a dataset, a series of predictions, an alternative data feed, or a portfolio
history. Create it once; duplicate names return a conflict error.

```python
client.create_collection(
    name="daily-demand-forecasts",
    description="Daily demand forecasts by region",
)
```

You can also create and manage collections at
[app.vbase.com/profile#collections](https://app.vbase.com/profile#collections).


## Prepare a file

Ordinary file stamping does not require a particular format. For this example,
save the following CSV as `demand_forecast_2025-01-31.csv`:

```
as_of,region,predicted_demand
2025-01-31,north,127.4
2025-01-31,south,141.8
```

The file does not need to be a CSV or use specific columns. If you are preparing
a portfolio for vBase portfolio tools, see the
[portfolio format requirements](stamping-portfolios.md). Those requirements
apply to that specific portfolio use case.


## Stamp the file

Pass the file path and collection name. By default, vBase records its content
ID and timestamp on-chain and stores the file.

```python
stamp = client.create_stamp(
    file="demand_forecast_2025-01-31.csv",
    collection_name="daily-demand-forecasts",
)

print(stamp.commitment_receipt.timestamp)
print(stamp.commitment_receipt.transaction_hash)
```

Stamp each version that you want to include in the record.

Resending identical content is idempotent for 3,600 seconds by default. See
[Idempotency](api-py-guide.md#idempotency) before changing this behavior.

Close the client's HTTP session when the script is finished:

```python
client.close()
```


## Using the REST API directly

If you prefer curl or another HTTP client, the base URL is
`https://app.vbase.com/api/v1/`. Authenticate with a `Bearer` token.

**Create a stamp:**

```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=daily-demand-forecasts" \
  -F "file=@demand_forecast_2025-01-31.csv" \
  -F "store_stamped_file=true"
```

Full interactive documentation is available at
[app.vbase.com/swagger/](https://app.vbase.com/swagger/).


## Next steps

- [Python REST Client Guide](api-py-guide.md) covers common operations and
  behavior.
- [Python client API reference](../../vbase-api-py/index.md) lists every method
  and response model.
- [Private Stamping with Delayed Reveal](private-stamping.md) explains
  how to stamp a file without sending its contents to vBase.
- [Portfolio Format](stamping-portfolios.md) covers the specific requirements
  for vBase portfolio tools.
- [Verified Track Record](verified-track-record.md) is a portfolio-specific
  example of sharing a stamped history.
