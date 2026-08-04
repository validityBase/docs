# Choosing Your Integration

vBase works from the browser, from Python, from the command line, and from Excel. Pick the path that fits your environment.

| What you want to do | Recommended option |
|---|---|
| Stamp or verify in your browser | [Web App](start-your-journey.md) |
| Automate stamping from Python | [`vbase-api`](../../vbase-api-py/index.md) |
| Integrate from another language | [REST API](../../vbase-django-tools/api/rest-api-user-guide.md) |
| Explore REST endpoints interactively | [Swagger UI](https://app.vbase.com/swagger/) |
| Stamp from Excel | [Excel and COM Tools](../../vbase-cs/user-guide.md) |
| Run command-line workflows | [CLI](../../vbase-cli/index.md) |
| Low-level or direct blockchain access | [`vbase`](../../vbase-py/api.md) |

---

## Web App

**Use this if** you want to create or verify stamps in your browser without writing code.

The vBase web app at [app.vbase.com](https://app.vbase.com) lets you manage collections, stamp files, and verify stamps. No installation required.

[Get started →](start-your-journey.md)

---

## `vbase-api` — Python client

**Use this if** you are working in Python. This is the recommended starting point for most users.

`vbase-api` is a thin Python wrapper around the REST API. It handles authentication, file upload, and response parsing so you can stamp a portfolio in a few lines.

```bash
pip install vbase-api
```

```python
from vbase_api import VBaseAPIClient

client = VBaseAPIClient(api_key="YOUR_API_KEY")
stamp = client.create_stamp(file="portfolio.csv", collection_name="my-strategy")
print(stamp.commitment_receipt.timestamp)
```

- Docs: [vbase-api reference](../../vbase-api-py/index.md)
- Quickstart: [API Python Quickstart](api-py-quickstart.md)
- Private stamping: [Private Portfolio Stamping](private-portfolio-stamping.md)

---

## REST API

**Use this if** you are not working in Python — R, JavaScript, C#, shell scripts, or any environment that can make HTTP requests.

The REST API is the foundation all other integrations build on.

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

## Excel and COM Tools

**Use this if** you work in Excel or need COM integration.

- Docs: [COM Library Overview](../../vbase-cs/user-guide.md)

---

## CLI

**Use this if** you want to run vBase from the command line.

- Docs: [Command Line Interface](../../vbase-cli/index.md)

---

## `vbase` — Python core library

**Use this if** you need direct, low-level access to the vBase commitment infrastructure. Most users should not start here.

`vbase` exposes the commitment service directly — raw CID computation, set and object management, batch operations, point-in-time simulation, and typed objects (including privacy-preserving salted types). It requires understanding of content identifiers, blockchain addresses, and the vBase data model.

Appropriate use cases:

- Custom CID schemes or non-file data types
- Batch commitments across many objects
- Point-in-time (PIT) simulation for research or backtesting
- Building a higher-level integration or tool on top of vBase
- Direct interaction with the commitment service without the REST API

```bash
pip install vbase
```

- Docs: [vbase reference](../../vbase-py/api.md)

If you are unsure whether you need `vbase`, you almost certainly want `vbase-api` instead.
