# vBase REST API Documentation

## About the REST API

The REST API provides a programmatic interface to interact with our services, allowing you to stamp files, inline data, or existing CIDs. This API is designed to be flexible and secure, supporting various data formats and authentication methods.

## Getting Started with the REST API

To begin using the REST API, you need to have a valid API token for authentication. The API is accessible via standard HTTP methods and returns JSON responses.

### How to Obtain an API Key

1. **Log in** to your vBase account at [https://app.vbase.com](https://app.vbase.com)
2. In your User Profile, navigate to ["Account Settings"](https://app.vbase.com/profile#account_settings)
3. Copy the API key from this screen and store it securely

### Base URL
```
https://app.vbase.com/api/v1/
```

## About the OpenAPI Description for the REST API

The REST API description uses OpenAPI 3.1.0. It describes endpoint request
formats, mutually exclusive inputs, response fields, and nullable values for
API clients and SDK generators. Swagger UI provides an interactive interface
for exploring and testing API calls.

Access the Swagger UI at:
```
https://app.vbase.com/swagger/
```

For programmatic clients (agents, SDKs), fetch the OpenAPI 3.1 JSON at:
```
https://app.vbase.com/swagger.json
```

The Swagger UI route also supports:
```
https://app.vbase.com/swagger/?format=openapi
```

These schema URLs remain available without authentication. The URL
`swagger.json` is retained for compatibility; the document identifies itself
with `"openapi": "3.1.0"`. ReDoc is available at
[app.vbase.com/redoc/](https://app.vbase.com/redoc/).

## Authenticating to the REST API

Protected API operations require your API key in the `Authorization` header.
The OpenAPI description identifies which operations require authentication;
public operations, including stamp certificate download, remain anonymous.
Use this header format for protected operations:

```
Authorization: Bearer <your-api-token>
```

The token is your opaque vBase API key, not a JWT. In Swagger UI's Authorize
dialog, enter the API key itself; the HTTP bearer scheme adds the `Bearer`
prefix to the request header.

Before running the curl examples, [obtain an API key](#how-to-obtain-an-api-key)
and set `VBASE_API_KEY` as shown in [Examples](rest-api-user-examples.md).

## curl Command Conventions

These examples use Bash quoting. When quoting a static value, put single
quotes around the complete argument, such as
`--form-string 'data_cid=0x...'`. Simple tokens such as `POST` and URLs
without shell-special characters can remain unquoted. Use double quotes
when an argument needs shell variable expansion, such as
`-H "Authorization: Bearer $VBASE_API_KEY"`. Do not add quotes around the value
after `=`: those quotes would become part of the value sent to the API.

For multipart requests, use `--form-string 'name=value'` for text fields
(including CIDs, data, names, booleans, and numbers) and `-F 'file=@path'`
for file uploads. In `--form-string 'data={"status":"approved"}'`, the
double quotes belong to the JSON value. Bash `$'...'` quoting is used
only when escape sequences, such as newlines in a CSV body, are needed.
See the [curl form options](https://curl.se/docs/manpage.html#--form-string)
and [Bash quoting rules](https://www.gnu.org/software/bash/manual/html_node/Quoting.html).

## Request Body Formats

Swagger UI offers a request content-type selector for JSON, multipart, and
URL-encoded stamp writes. Choose `application/json` for inline data or a CID,
and `multipart/form-data` to upload a file. The downloadable schema is OpenAPI
3.1.0; it uses full `/api/v1` paths, `components`, and response `content`.

`POST /v1/stamps` and `POST /v1/stamps/upload-stamped-file` accept either form
fields (`multipart/form-data` or `application/x-www-form-urlencoded`) or a JSON
object with `Content-Type: application/json`. Both formats use the same field
names. File uploads require `multipart/form-data`; in JSON, send inline content
as the string field `data`. Arrays and objects are not accepted as field values.

`POST /v1/collections` also accepts a JSON object, URL-encoded form fields, or
multipart form fields with the same collection field names.

## Commitment Receipt Fields

Commitment receipts use `set_cid` for the blockchain set containing the stamped
object (the SDK field is `setCid`). For a collection-associated stamp, this is
the collection's CID, stored internally as `UserCollection.set_cid`. Collection
objects expose that same identifier as `cid`,
and API requests select a collection with `collection_cid`. Receipts retain
`set_cid`; they do not duplicate it as `collection_cid`.

## Paginating Collections

`GET /v1/collections` returns every collection as a JSON array by default. To
page through the list, pass `limit` (1–1000) and optionally `offset` (requires
`limit`). Paged responses keep the array shape and add an `X-Total-Count`
header, plus a `Link: <url>; rel="next"` header while more results remain.
With `is_pinned=false`, blockchain-only collections follow database collections
in collection-hash order and have no database ID or creation timestamp. The next
link is relative to the API host. Database collections are ordered newest first; a
collection created while you page can shift later pages by one item.

```bash
curl -i 'https://app.vbase.com/api/v1/collections?limit=100' \
-H "Authorization: Bearer $VBASE_API_KEY"
```

## Request Validation Rules

For endpoints that use strict request schemas, unknown or unrecognized request
keys are rejected with `400 Bad Request`. Only documented request fields are
accepted. The stamp endpoint also retains its existing camelCase aliases, such
as `dataCid` and `storeStampedFile`; examples use snake_case names.

For `POST /api/v1/stamps`, send a JSON object, multipart form, or URL-encoded form. File
uploads require multipart. Select exactly one content source: a file, nonempty
`data`, or `data_cid`. At most one nonempty collection selector,
`collection_cid` or `collection_name`, is allowed. Empty optional text fields do
not select another content source. If `data` contains JSON, send that JSON as a
string in the form field or JSON body; `data` itself must remain a string.
In multipart requests, an empty text `file` field is ignored and can accompany
`data` or `data_cid`. An uploaded file with a name remains selected even if it
has zero bytes, so it conflicts with another content source.

Stamp idempotency is disabled unless `idempotent=true` is supplied. Storage is
enabled only when `store_stamped_file=true` is supplied. An idempotent replay
returns HTTP 200; a new stamp returns HTTP 201. The creation response contains
`file_object: null` when there is no stored file object.

## Keeping your API credentials secure

- Never share your API token publicly
- Store your API token securely
- Use environment variables to store your API token
- Never commit API tokens to version control

## API Endpoints

### Account Stamp Credits

`GET /api/v1/billing/credits` returns the authenticated account's stored stamp
balance and plan. Use the same bearer API key as other protected endpoints:

```bash
curl https://app.vbase.com/api/v1/billing/credits \
  -H "Authorization: Bearer $VBASE_API_KEY"
```

Example response:

```json
{
  "subscription_plan": "free",
  "next_renewal_date": "2026-10-25",
  "free_stamp_credits": 0,
  "paid_stamp_credits": 200,
  "total_stamp_credits": 200
}
```

Free credits are the stored expiring credits; paid credits are non-expiring.
The total is their sum, including any negative stored balance. Free plans use
`"free"`; paid plans use their existing base-plan slug, excluding add-ons. The
plan is null if no plan is available. The renewal date is a UTC date or null
when unknown. An account without a balance row returns zero credits and a null
renewal date.

Results are cached per account for 10 seconds and can lag spending, purchases,
plan changes, or renewal by that amount. This request does not renew credits
or create a balance. Spending checks use live balances. Credit balances are
separate from request throughput quotas and rate-limit headers.

### Verify User Collection

**POST** `/v1/collections/verify`

This endpoint verifies a stamped collection against blockchain records for the
authenticated user.

#### Request Format

Send a JSON object with `Content-Type: application/json`. CSV bodies and
multipart uploads are no longer accepted by this API and return HTTP 415:

```json
{
  "error": "Unsupported Content-Type. Use application/json.",
  "timestamp": "2026-10-29T12:00:00Z"
}
```

To migrate, convert CSV rows to `objects` entries with `timestamp` (CSV `t`),
`cid` (CSV `c`), and optional `file_name` (CSV `f`). Put optional collection
identity fields at the top level and send the JSON body directly, rather than
uploading a file. The Verify page continues to support CSV and ZIP input.

For JSON requests, top-level `collection_name` and `user_address` are optional.
If they are omitted or set to `null`, the backend will try to infer collection
metadata from the submitted records.

The `context` object is also optional and may be omitted or set to `null`.
Each entry in `objects` may omit `file_name` or set it to `null`.

Use `Accept: application/json` for the response.

#### Example Requests

**JSON body:**
```bash
curl -X POST https://app.vbase.com/api/v1/collections/verify \
-H "Authorization: Bearer $VBASE_API_KEY" \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "collection_name": "my-collection",
  "user_address": "0x123",
  "objects": [
    {
      "timestamp": "2024-01-01T00:00:00+00:00",
      "cid": "cid1",
      "file_name": "example.csv"
    }
  ]
}'
```

#### Example Response

Verification timestamps use ISO 8601 UTC with an explicit offset. Clients control
timezone rendering; verification responses do not include `display_timezone`.

**Response (200):**
```json
{
  "collections": [
    {
      "name": "my-collection",
      "cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
      "user_address": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d",
      "matched_receipts": [
        {
          "transaction_hash": "0xbe3f57e7ad7b00e79f88b3f9ffc9fdee84d3251cfc2d121386d8fe793b0d782a",
          "user_address": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d",
          "set_cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
          "object_cid": "0x6f3328cba0ffde8429e66008708419751921bf41737e32a0fcd173849e325561",
          "timestamp": "2025-07-23T11:42:15+00:00",
          "chain_id": 8453
        }
      ],
      "unmatched_objects": [
        {
          "cid": "0xaeda4cf7d65f9d67b128bf795b5f237183550a814c9d4aa83c7e84f027d4aeec",
          "timestamp": "2025-07-23T20:34:58+00:00"
        }
      ],
      "unmatched_receipts": []
    }
  ]
}
```

Each entry in `collections` identifies the verified collection by:

- `name`: collection name
- `cid`: collection/set CID
- `user_address`: resolved owner address used for verification
- `matched_receipts`: blockchain receipts matched to submitted objects for this collection
- `unmatched_objects`: submitted objects with no matching blockchain receipt for this collection
- `unmatched_receipts`: blockchain receipts with no matching submitted object for this collection

### Upload Stamped File

**POST** `/v1/stamps/upload-stamped-file`

This endpoint allows you to upload a file or inline data that has been previously stamped and verified against blockchain records.

#### Overview

The upload stamped file endpoint calculates the object CID from the submitted file or inline data, verifies that matching blockchain commitments exist for the authenticated user and collection, uploads the content, and associates each uploaded file with its matching commitment.

Content must be provided as either `file` or `data`, but not both. `file_name` is required whenever `data` is provided.

If the same stamped content is uploaded again with a different file name, the endpoint is idempotent: it returns the existing file object with HTTP 200 and does not create another uploaded copy for the same commitment.

If multiple commitments in the collection match the same object CID, the first successful upload stores one timestamped file copy for each matching commitment. The API response contains one matching `commitment_receipt` and `file_object`.

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| collection_name | String | No | Collection name (case-insensitive, must not be empty). Provide this or `collection_cid`. |
| collection_cid | String | No | Collection CID (hex hash). Provide this or `collection_name`. |
| file | File | No | Previously stamped file to upload. Provide this or `data`, but not both. |
| data | String | No | Inline text / JSON data to upload. Provide this or `file`, but not both. |
| file_name | String | Conditional | Required when `data` is provided. |

**Note**: User address is automatically determined from the authenticated user's profile, so no `user_address` parameter is needed.
At least one of `collection_name` or `collection_cid` must be present, and exactly one of `file` or `data` must be present.

#### Validation Process

The endpoint performs the following validations in sequence:

1. **Input Validation**: Validates collection name is not empty, validates collection identifiers (`collection_name`/`collection_cid`), enforces exactly one content source (`file` xor `data`), and requires `file_name` whenever `data` is provided.
2. **User Address Resolution**: Automatically determines user address from authenticated user's profile
3. **Collection Lookup**: Finds the collection by name or CID for the authenticated user
4. **CID Calculation**: Calculates object CID from the uploaded file, or from inline data when no file is provided
5. **Blockchain Verification**: Verifies that matching commitments exist in blockchain records for the user's address and collection
6. **File Association**: Uploads the file and associates it with each matching commitment that does not already have a file
7. **Idempotent Duplicate Handling**: Returns the existing file object with HTTP 200 when a matching commitment is already associated with a file

Unknown or unrecognized form or JSON fields are rejected with `400 Bad Request`.

#### Response Codes

| Status Code | Description | When It Occurs |
|-------------|-------------|----------------|
| 200 | File already uploaded | Matching commitment already has an associated file; no duplicate copy is created |
| 201 | File uploaded successfully | File passes all validations and uploads successfully for one or more matching commitments |
| 400 | Invalid input or validation failed | Empty collection name or missing required parameters |
| 404 | Collection not found or no blockchain records found | Collection doesn't exist or no matching blockchain records |
| 500 | File processing, blockchain, or upload errors | CID calculation fails, blockchain errors, or upload failures |

#### Example Requests

**Successful Upload:**
```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
-H "Authorization: Bearer $VBASE_API_KEY" \
--form-string 'collection_name=My Collection' \
-F 'file=@stamped_file.pdf'
```

**Successful Upload Using Collection CID and Inline Data:**
```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
-H "Authorization: Bearer $VBASE_API_KEY" \
--form-string 'collection_cid=0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800' \
--form-string 'data={"status":"approved"}' \
--form-string 'file_name=stamped_data.json'
```

**Successful Upload Using a JSON Body:**
```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
-H "Authorization: Bearer $VBASE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{"collection_cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800", "data": "{\"status\":\"approved\"}", "file_name": "stamped_data.json"}'
```

**Response (201):**
```json
{
  "commitment_receipt": {
    "transaction_hash": "0xbe3f57e7ad7b00e79f88b3f9ffc9fdee84d3251cfc2d121386d8fe793b0d782a",
    "user_address": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d",
    "set_cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
    "object_cid": "0xf2ad58a03e4d1e4cf11f046e32b0e12fb9d835f63fa79fd5a4769d24ea5b3949",
    "timestamp": "2025-01-01 12:00:00+00:00",
    "chain_id": 1
  },
  "file_object": {
    "file_name": "stamped_file_2025-01-01_12-00-00+0000.pdf",
    "file_path": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d/collections/My Collection/stamped/stamped_file_2025-01-01_12-00-00+0000.pdf"
  }
}
```

**Duplicate Upload Response (200):**
```json
{
  "commitment_receipt": {
    "transaction_hash": "0xbe3f57e7ad7b00e79f88b3f9ffc9fdee84d3251cfc2d121386d8fe793b0d782a",
    "user_address": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d",
    "set_cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
    "object_cid": "0xf2ad58a03e4d1e4cf11f046e32b0e12fb9d835f63fa79fd5a4769d24ea5b3949",
    "timestamp": "2025-01-01 12:00:00+00:00",
    "chain_id": 1
  },
  "file_object": {
    "file_name": "stamped_file_2025-01-01_12-00-00+0000.pdf",
    "file_path": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d/collections/My Collection/stamped/stamped_file_2025-01-01_12-00-00+0000.pdf"
  }
}
```

**Error Responses:**

**Collection Not Found (404):**
```json
{
  "error": "Collection not found"
}
```

**No Blockchain Records (404):**
```json
{
  "error": "No records found for this object_cid: 0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800"
}
```

If a matching blockchain receipt is verified but its local `UserStampedFiles`
row is missing, the endpoint recreates that row with `success` stamp status and
the authenticated user, object CID, collection CID, receipt timestamp, and full
receipt. It then continues the upload and returns the normal `201` response.
Repeating the request reuses the recovered row and stored file rather than
creating a duplicate.

**File Processing Error (500):**
```json
{
  "error": "Failed to process file for object CID generation"
}
```

#### Error Handling

The API uses structured error responses with appropriate HTTP status codes to help you handle different error scenarios:

- **4xx Client Errors**: Issues with your request (missing parameters, invalid data, not found)
- **5xx Server Errors**: Internal processing issues (file processing, blockchain connectivity, upload failures)

Always check the HTTP status code first, then parse the error message for specific details about what went wrong.

#### Best Practices

1. **Validate Input**: Ensure collection names are not empty before sending requests
2. **Handle Errors**: Implement proper error handling for all status codes
3. **File Validation**: Only upload files that have been previously stamped
4. **Collection Management**: Ensure collections exist before attempting uploads
5. **Retry Logic**: Implement retry logic for 5xx errors (server issues)
6. **Rate Limiting**: Respect API rate limits to avoid throttling

## Saved certificate downloads

`POST /api/v1/stamps/certificate` validates the selected stamp, then loads a matching
current certificate generated by the materialization command when its saved PDF is
available. If no usable saved PDF exists, it generates the certificate on the fly
without saving it. Downloads do not update certificate state or upload new PDFs.

Stored PDFs retain the display information and hash instructions from when they were
generated; freshly rendered public PDFs use the current display information and neutral
hash guidance. Anonymous access and `Cache-Control: no-store` remain unchanged.
