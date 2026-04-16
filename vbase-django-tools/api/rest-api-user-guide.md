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

## Authenticating to the REST API

Authentication is required for all API requests. Use the Bearer token method by including an `Authorization` header in your requests. The format should be:

```
Authorization: Bearer <your-api-token>
```

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

### Upload Stamped File

**POST** `/v1/stamps/upload-stamped-file`

This endpoint allows you to upload a file that has been previously stamped and verified against blockchain records.

#### Overview

The upload stamped file endpoint performs comprehensive validation to ensure the file exists in the blockchain for the specified user and collection. It extracts the object CID from the file, verifies blockchain records, and uploads the file with proper validation.

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| collection_name | String | Yes | Collection name (case-insensitive, must not be empty) |
| file | File | Yes | Previously stamped file to upload |

**Note**: User address is automatically determined from the authenticated user's profile, so no `user_address` parameter is needed.

#### Validation Process

The endpoint performs the following validations in sequence:

1. **Input Validation**: Validates collection name is not empty
2. **User Address Resolution**: Automatically determines user address from authenticated user's profile
3. **Collection Lookup**: Finds the collection by name (case-insensitive) for the authenticated user
4. **CID Extraction**: Extracts object CID from the uploaded file
5. **Blockchain Verification**: Verifies the file exists in blockchain records for the user's address
6. **Record Validation**: Ensures exactly one matching record exists
7. **File Upload**: Uploads the file with blockchain validation

#### Response Codes

| Status Code | Description | When It Occurs |
|-------------|-------------|----------------|
| 201 | File uploaded successfully | File passes all validations and uploads successfully |
| 400 | Invalid input or validation failed | Empty collection name or missing required parameters |
| 404 | Collection not found or no blockchain records found | Collection doesn't exist or no matching blockchain records |
| 409 | Multiple blockchain records found (conflict) | Multiple records found for same user/collection combination |
| 500 | File processing, blockchain, or upload errors | CID extraction fails, blockchain errors, or upload failures |

#### Example Requests

**Successful Upload:**
```bash
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-F "collection_name=My Collection" \
-F "file=@stamped_file.pdf"
```

**Response (201):**
```json
{
  "fileObject": {
    "file_name": "stamped_file_2025-01-01T12:00:00+00:00.pdf",
    "file_path": "/uploads/user123/collection456/stamped_file_2025-01-01T12:00:00+00:00.pdf"
  },
  "commitment_receipt": {
    "user_address": "0x4A281DdC750359d5C0D2D51A890cefA43485EF2d",
    "object_vid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800",
    "timestamp": "2025-01-01 12:00:00+00:00",
    "transaction_hash": "0xbe3f57e7ad7b00e79f88b3f9ffc9fdee84d3251cfc2d121386d8fe793b0d782a",
    "set_cid": "0x329c036f2bcedbb9c44521c22a84d82ae328fef03e942c42b447d4ae67bbd800"
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

**Multiple Records Conflict (409):**
```json
{
  "error": "Multiple records found for the same user_address and collection_name"
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
