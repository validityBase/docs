# Choose How to Use vBase

vBase can be used through the web application, the Python API Client, the REST API, or lower-level SDKs and developer tools.

For most users:

* Use the **Web App** to stamp and verify data in your browser, without writing code. 
* Use the **Python API Client** to automate vBase from Python.
* Use the **REST API** to integrate from another programming language.
* Use the **Python Blockchain SDK** only when you need lower-level or direct blockchain functionality.

## Which integration should I use?

| What you want to do                                    | Recommended integration                                         |
| ------------------------------------------------------ | --------------------------------------------------------------- |
| Stamp or verify data in your browser                   | [Web App](start-your-journey.md)                                |
| Automate stamping and verification from Python         | [Python API Client](../../vbase-api-py/index.md)                |
| Integrate vBase from another language or system        | [REST API](../../vbase-django-tools/api/rest-api-user-guide.md) |
| Explore and test REST endpoints interactively          | [Interactive API Reference](https://app.vbase.com/swagger/)     |
| Interact directly with vBase blockchain infrastructure | [Python Blockchain SDK](python-quickstart-README.md)            |
| Stamp data from Excel                                  | [Excel and COM Tools](../../vbase-cs/user-guide.md)             |
| Run command-line workflows                             | [vBase CLI](../../vbase-cli/index.md)                           |

## Web App — Recommended for non-technical users

Use the vBase web application when you want to create or verify stamps in your browser, without writing code.

[Get Started with the Web App →](start-your-journey.md)

## Python API Client — Easiest approach for technical users

The Python API Client is the recommended integration for most Python users.

It provides a simple interface to the hosted vBase API for:

* Stamping files, structured data, or Content IDs
* Validating Collections and their associated stamps (audit trail records)
* Verifying audit trail records for previously stamped content
* Uploading files associated with earlier stamps

Start here when you want to add vBase to a Python application or automated workflow.

[See the Python API Quickstart →](../../vbase-api-py/index.md)

## REST API

The REST API provides language-independent access to vBase over HTTP.

Use it when:

* You are integrating from a language other than Python
* You want to make HTTP requests directly
* You are building an integration around the OpenAPI specification
* You want greater control over individual API requests

Python users should generally use the Python API Client, which provides a simpler interface to the same hosted vBase services.

[Read the REST API Guide →](../../vbase-django-tools/api/rest-api-user-guide.md)

[Explore the Interactive API Reference →](https://app.vbase.com/swagger/)

## Python Blockchain SDK — Advanced

The `vbase-py` SDK provides lower-level access to vBase commitment, indexing, and blockchain functionality.

Use it when you need:

* Direct blockchain interaction
* Custom commitment-service configuration
* Lower-level indexing or verification logic
* Specialized infrastructure or deployment control
* Support for an existing application already built on `vbase-py`

For ordinary Python stamping, Collection management, and verification workflows, use the Python API Client instead.

[Explore the Python Blockchain SDK →](python-quickstart-README.md)


