# Choosing Your Integration

vBase works from the browser, from Python, from the command line, and from Excel. Pick the path that fits your environment.

| What you want to do | Recommended option |
|---|---|
| Stamp or verify in your browser | [Web App](start-your-journey.md) |
| Automate from Python | [`vbase-api`](../../vbase-api-py/index.md) |
| Integrate from another language | [REST API](../../vbase-django-tools/api/rest-api-user-guide.md) |
| Explore REST endpoints interactively | [Swagger UI](https://app.vbase.com/swagger/) |
| Stamp from Excel | [Excel and COM Tools](../../vbase-cs/user-guide.md) |
| Run command-line workflows | [CLI](../../vbase-cli/index.md) |
| Low-level or direct blockchain access | [`vbase`](../../vbase-py/api.md) |

## Web App

Use [app.vbase.com](https://app.vbase.com) to manage collections and create or
verify stamps without installing software. [Get started](start-your-journey.md).

## `vbase-api` — Python REST client

The recommended option for Python users. It handles REST authentication, file
uploads, and response parsing. Its package name is `vbase-api`; its import name
is `vbase_api`.

```bash
pip install vbase-api
```

- Package: [`vbase-api` on PyPI](https://pypi.org/project/vbase-api/)
- Source: [`validityBase/vbase-api-py` on GitHub](https://github.com/validityBase/vbase-api-py)
- Docs: [Python client API reference](../../vbase-api-py/index.md)
- Quickstart: [Python REST Client Quickstart](api-py-quickstart.md)
- Private stamping: [Private Portfolio Stamping](private-portfolio-stamping.md)

## REST API

Accessible from any language or tool that can make HTTP requests — R,
JavaScript, C#, shell scripts, and more. `vbase-api` wraps this interface; the
lower-level `vbase` SDK does not.

- Base URL: `https://app.vbase.com/api/v1/`
- Swagger UI: [app.vbase.com/swagger/](https://app.vbase.com/swagger/)
- Docs: [REST API User Guide](../../vbase-django-tools/api/rest-api-user-guide.md)

## Excel and COM Tools

Stamp and verify from Excel or another COM-compatible application. See the
[COM Library Overview](../../vbase-cs/user-guide.md).

## CLI

Stamp and verify from a terminal or shell script. See the
[Command Line Interface](../../vbase-cli/index.md).

## `vbase` — core Python SDK

Use `vbase` for direct, low-level access to commitment services and blockchains.
It supports CID computation, sets and objects, batch operations, point-in-time
simulation, and typed objects. Most users should use `vbase-api`.

Appropriate use cases:

- Custom CID computation and typed data
- Batch commitments
- Point-in-time simulation
- Low-level integrations that do not use the REST API

```bash
pip install vbase
```

- Package: [`vbase` on PyPI](https://pypi.org/project/vbase/)
- Source: [`validityBase/vbase-py` on GitHub](https://github.com/validityBase/vbase-py)
- Docs: [`vbase` API reference](../../vbase-py/api.md)
