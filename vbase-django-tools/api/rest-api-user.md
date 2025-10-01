<!-- Generator: Widdershins v4.0.1 -->

<h1 id="my-api">My API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for stamp and account

Base URLs:

* <a href="http://app.vbase.com/api/v1">http://app.vbase.com/api/v1</a>

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. Format: Bearer <token>

<h1 id="my-api-collection">collection</h1>

## collection_list

<a id="opIdcollection_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://app.vbase.com/api/v1/collection/ \
  -H 'Authorization: API_KEY'

```

`GET /collection/`

Return selected fields and attributes of the User object, including all related UserBucket entries.

<h3 id="collection_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## collection_create

<a id="opIdcollection_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://app.vbase.com/api/v1/collection/ \
  -H 'Authorization: API_KEY'

```

`POST /collection/`

Create a new UserCollection.

<h3 id="collection_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-stamp">stamp</h1>

## stamp_create

<a id="opIdstamp_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://app.vbase.com/api/v1/stamp/ \
  -H 'Content-Type: multipart/form-data' \
  -H 'Authorization: API_KEY'

```

`POST /stamp/`

*Stamp a file, inline data, or CID*

This endpoint allows users to stamp a file, inline data, or an existing CID.
Accepts file, inline data, or CID and returns a stamp record with metadata.
At least one of 'file', 'data', or 'dataCid' must be provided.

> Body parameter

```yaml
file: string
data: '{"hello": "world"}'
dataCid: string
collectionCid: string
storeStampedFile: true
idempotent: true
idempotencyWindow: 3600

```

<h3 id="stamp_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|Binary file to be stamped|
|» data|body|string|false|Inline text or JSON data|
|» dataCid|body|string|false|Existing CID to stamp|
|» collectionCid|body|string|false|Optional CID of collection to group stamped object|
|» storeStampedFile|body|boolean|false|Whether to store the stamped file|
|» idempotent|body|boolean|false|Enable idempotency|
|» idempotencyWindow|body|integer|false|Idempotency window in seconds|

<h3 id="stamp_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Idempotent request - returning previous stamp.|None|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Stamp created successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input or idempotent conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-upload-stamped-file">upload-stamped-file</h1>

## upload-stamped-file_create

<a id="opIdupload-stamped-file_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://app.vbase.com/api/v1/upload-stamped-file/ \
  -H 'Content-Type: multipart/form-data' \
  -H 'Authorization: API_KEY'

```

`POST /upload-stamped-file/`

*Upload a stamped file*

This endpoint allows users to upload a file that has been previously stamped.
It validates that the file exists in the blockchain for the authenticated user and specified collection.

The endpoint performs the following validations:
1. Validates collection name is not empty
2. Finds the collection by name (case-insensitive) for the authenticated user
3. Extracts object CID from the uploaded file
4. Verifies the file exists in blockchain records for the user's address
5. Ensures exactly one matching record exists
6. Uploads the file with blockchain validation

Note: User address is automatically determined from the authenticated user's profile.

Returns structured error responses with appropriate HTTP status codes:
- 400: Invalid input or validation failed
- 404: Collection not found or no blockchain records found
- 409: Multiple blockchain records found (conflict)
- 500: File processing, blockchain, or upload errors

> Body parameter

```yaml
collectionName: string
file: string

```

<h3 id="upload-stamped-file_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» collectionName|body|string|true|Collection name for blockchain verification (case-insensitive)|
|» file|body|string(binary)|true|Previously stamped file to be uploaded|

<h3 id="upload-stamped-file_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|File uploaded successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input or validation failed|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Collection not found or no blockchain records found|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Multiple blockchain records found for same user/collection|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|File processing error, blockchain error, or upload failure|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-user">user</h1>

## user_list

<a id="opIduser_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://app.vbase.com/api/v1/user/ \
  -H 'Authorization: API_KEY'

```

`GET /user/`

Handle GET request to retrieve user account settings.

<h3 id="user_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-verify">verify</h1>

## verify_create

<a id="opIdverify_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://app.vbase.com/api/v1/verify/ \
  -H 'Content-Type: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /verify/`

*Verify one or more Content IDs (CIDs)*

This endpoint checks whether Content IDs (SHA3 hash) have previously been
stamped on the blockchain using vBase. If a match is found, the api returns the full stamp details,
including the timestamp, blockchain address, and other stamp details.

> Body parameter

```json
{
  "cids": [
    "0xbd...1"
  ],
  "filter-by-user": false
}
```

<h3 id="verify_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cids|body|[string]|true|Array of CIDs to verify|
|» filter-by-user|body|boolean|false|When true, only return results owned by the current user|

<h3 id="verify_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input data|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

