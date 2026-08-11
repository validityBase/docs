# vBase Django Tools API Documentation

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

Our REST API is documented using OpenAPI, providing a comprehensive description of available endpoints, parameters, and response formats. You can explore the API using the Swagger UI, which offers an interactive interface for testing API calls.

Access the Swagger UI at:
```
https://app.vbase.com/swagger/
```

For programmatic clients (agents, SDKs), fetch the OpenAPI/Swagger JSON at:
```
https://app.vbase.com/swagger.json
```

The Swagger UI route also supports:
```
https://app.vbase.com/swagger/?format=openapi
```

## Authenticating to the REST API

Authentication is required for all API requests. Use the Bearer token method by including an `Authorization` header in your requests. The format should be:

```
Authorization: Bearer <your-api-token>
```

## Request Validation Rules

For endpoints that use strict request schemas, unknown or unrecognized request
keys are rejected with `400 Bad Request`. Only documented request fields are
accepted.

## Keeping your API credentials secure

- Never share your API token publicly
- Store your API token securely
- Use environment variables to store your API token
- Never commit API tokens to version control

## API Endpoints

### Verify User Collection

**POST** `/v1/collections/verify`

This endpoint verifies a stamped collection against blockchain records for the
authenticated user.

#### Request Formats

Choose the request body format with `Content-Type`:

- `application/json`: send the verify request JSON body
- `text/csv`: send the raw CSV string in the body

For JSON requests, top-level `collection_name` and `user_address` are optional.
If they are omitted or set to `null`, the backend will try to infer collection
metadata from the submitted records.

The `context` object is also optional and may be omitted or set to `null`.
Each entry in `objects` may omit `file_name` or set it to `null`.

For CSV requests, the leading metadata section
`collection_name,user_address,collection_timezone` is optional.

Legacy `multipart/form-data` uploads are also supported with a `.csv` or `.json`
file in the `file` field.

Use `Accept: application/json` for the response.

#### Example Requests

**JSON body:**
```bash
curl -X POST https://app.vbase.com/api/v1/collections/verify \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
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

**CSV body:**
```bash
curl -X POST https://app.vbase.com/api/v1/collections/verify \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-H "Content-Type: text/csv" \
-H "Accept: application/json" \
--data-binary $'collection_name,user_address,collection_timezone\nvb-test,0x4A281DdC750359d5C0D2D51A890cefA43485EF2d,\nt,c,f\n2025-07-23 11:42:15+00:00,0x6f3328cba0ffde8429e66008708419751921bf41737e32a0fcd173849e325561,application-logs2025-07-15T19_46_13.098Z-2025-07-16T19_46_13.098Z_2025-07-23_11-42-15+0000.json\n2025-07-23 20:34:58+00:00,0xaeda4cf7d65f9d67b128bf795b5f237183550a814c9d4aa83c7e84f027d4aeec,attribcache140_2025-07-23_20-34-58+0000.bin\n'
```

**Legacy multipart upload:**
```bash
curl -X POST https://app.vbase.com/api/v1/collections/verify \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-H "Accept: application/json" \
-F "file=@collection.json;type=application/json"
```

#### Example Response

**Response (200):**
```json
{
  "display_timezone": "UTC",
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

Unknown or unrecognized form fields are rejected with `400 Bad Request`.

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
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_name=My Collection" \
-F "file=@stamped_file.pdf"
```

**Successful Upload Using Collection CID and Inline Data:**
```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_cid=0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800" \
-F "data={\"status\":\"approved\"}" \
-F "file_name=stamped_data.json"
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
