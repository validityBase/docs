# Choosing Your Integration

vBase offers three integration paths. Pick the one that fits your environment.

---

## At a glance

| | REST API | `vbase-api-py` | `vbase-py` |
|---|---|---|---|
| **What it is** | HTTP API | Python wrapper around the REST API | Low-level Python core library |
| **Best for** | Any language or tool | Python users (most cases) | Expert Python developers |
| **Requires** | HTTP client | `pip install vbase-api-py` | `pip install vbase-py` |
| **Interface** | HTTP endpoints | `VBaseAPIClient` class | `VBaseClient` + commitment services |
| **Complexity** | Low | Lowest | High |

---

## REST API

**Use this if** you are not working in Python — R, JavaScript, C#, Excel macros, shell scripts, or any other environment that can make HTTP requests.

The REST API is the foundation that all other integrations build on. It is a standard HTTP API with Bearer token authentication.

- Base URL: `https://app.vbase.com/api/v1/`
- Swagger UI: [app.vbase.com/swagger/](https://app.vbase.com/swagger/)
- Docs: [REST API User Guide](../../vbase-django-tools/api/rest-api-user-guide.md)

```bash
curl -X POST https://app.vbase.com/api/v1/stamps \
  -H "Authorization: Bearer $VBASE_API_KEY" \
  -F "collection_name=my-strategy" \
  -F "file=@portfolio.csv"
```

---

## `vbase-api-py` — Python REST client

**Use this if** you are working in Python. This is the recommended starting point for the vast majority of users.

`vbase-api-py` is a thin Python wrapper around the REST API. It handles authentication, file upload, and response parsing so you can stamp a portfolio in a few lines.

```bash
pip install vbase-api-py
```

```python
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key="YOUR_API_KEY")
stamp = client.create_stamp(file="portfolio.csv", collection_name="my-strategy")
print(stamp.commitment_receipt.timestamp)
```

- Docs: [vbase-api-py reference](../../vbase-api-py/index.md)
- Quickstart: [API Python Quickstart](api-py-quickstart.md)
- Private stamping: [Private Portfolio Stamping](private-portfolio-stamping.md)

---

## `vbase-py` — Python core library

**Use this if** you need direct, low-level access to the vBase commitment infrastructure. Most users should not start here.

`vbase-py` exposes the commitment service directly — raw CID computation, set and object management, batch operations, point-in-time simulation, and typed objects (including privacy-preserving salted types). It requires understanding of content identifiers, blockchain addresses, and the vBase data model.

Appropriate use cases:

- Custom CID schemes or non-file data types
- Batch commitments across many objects
- Point-in-time (PIT) simulation for research or backtesting
- Building a higher-level integration or tool on top of vBase
- Direct interaction with the commitment service without the REST API

```bash
pip install vbase-py
```

- Docs: [vbase-py reference](../../vbase-py/api.md)

If you are unsure whether you need `vbase-py`, you almost certainly want `vbase-api-py` instead.
