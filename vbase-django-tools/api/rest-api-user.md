<!-- Generator: Widdershins v4.0.1 -->

<h1 id="vbase-api">vBase API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<a target='_blank' href='https://docs.vbase.com/'>vBase Documentation</a>

Base URLs:

* <a href="https://app.vbase.com/api/v1">https://app.vbase.com/api/v1</a>

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. Bearer token

<h1 id="vbase-api-collections">Collections</h1>

## collections_list

<a id="opIdcollections_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/collections \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`GET /collections`

Get user collections with optional filtering

<h3 id="collections_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_address|query|string|false|Filter by user address|
|is_pinned|query|boolean|false|Filter by pinned status|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "cid": "string",
    "is_pinned": true,
    "is_portfolio": true,
    "is_portfolio_collection": true,
    "is_public": true,
    "created_at": "2019-08-24T14:15:22Z",
    "description": "string"
  }
]
```

<h3 id="collections_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Collections retrieved successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - invalid query parameters|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<h3 id="collections_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|
|» id|integer|false|none|none|
|» name|string|false|none|none|
|» cid|string|false|none|none|
|» is_pinned|boolean|false|none|none|
|» is_portfolio|boolean|false|none|none|
|» is_portfolio_collection|boolean|false|none|none|
|» is_public|boolean|false|none|none|
|» created_at|string(date-time)|false|none|none|
|» description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## collections_create

<a id="opIdcollections_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/collections \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /collections`

Create a new user collection

> Body parameter

```json
{
  "name": "string",
  "cid": "string",
  "description": "string",
  "is_pinned": true
}
```

<h3 id="collections_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Collection name|
|» cid|body|string|true|Collection CID|
|» description|body|string|true|Collection description|
|» is_pinned|body|boolean|true|Whether the collection is pinned|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "cid": "string",
  "is_pinned": true,
  "is_portfolio": true,
  "is_portfolio_collection": true,
  "is_public": true,
  "created_at": "2019-08-24T14:15:22Z",
  "description": "string"
}
```

<h3 id="collections_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Collection created successfully|[Collection](#schemacollection)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - validation error|[Error](#schemaerror)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict - collection already exists|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vbase-api-stamps">Stamps</h1>

## stamp_create

<a id="opIdstamp_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamp/ \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /stamp/`

*[DEPRECATED] Stamp a file, inline data, or CID*

**DEPRECATED**: This endpoint is deprecated. Please use `/api/v1/stamps` instead.

This endpoint allows users to stamp a file, inline data, or an existing CID.
Accepts file, inline data, or CID and returns a stamp record with metadata.
At least one of 'file', 'data', or 'data_cid' must be provided.

Collection can be specified using either:
- collection_cid: Direct CID of the collection
- collection_name: Name of the collection (case-insensitive, will be converted to CID)

Only one collection parameter can be specified.

For 'data' parameter, you can optionally specify 'file_name' to customize the file name
instead of using the auto-generated name based on CID.

> Body parameter

```yaml
file: string
data: '{"hello": "world"}'
file_name: string
data_cid: string
collection_cid: string
collection_name: string
store_stamped_file: true
idempotent: true
idempotency_window: 3600

```

<h3 id="stamp_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|Binary file to be stamped|
|» data|body|string|false|Inline text or JSON data|
|» file_name|body|string|false|Custom file name for data (only used when 'data' is provided)|
|» data_cid|body|string|false|Existing CID to stamp|
|» collection_cid|body|string|false|Optional CID of collection to group stamped object|
|» collection_name|body|string|false|Optional name of collection to group stamped object (case-insensitive)|
|» store_stamped_file|body|boolean|false|Whether to store the stamped file|
|» idempotent|body|boolean|false|Enable idempotency|
|» idempotency_window|body|integer|false|Idempotency window in seconds|

> Example responses

> 200 Response

```json
{
  "commitment_receipt": {
    "transaction_hash": "string",
    "user_address": "string",
    "set_cid": "string",
    "object_cid": "string",
    "timestamp": "string",
    "chain_id": 0
  }
}
```

<h3 id="stamp_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Idempotent request - returning previous stamp.|[IdempotentStampResponse](#schemaidempotentstampresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Stamp created successfully|[StampCreatedResponse](#schemastampcreatedresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - invalid input or idempotent conflict|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## stamps_create

<a id="opIdstamps_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamps \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /stamps`

*Stamp a file, inline data, or CID*

This endpoint allows users to stamp a file, inline data, or an existing CID.
Accepts file, inline data, or CID and returns a stamp record with metadata.
At least one of 'file', 'data', or 'data_cid' must be provided.

Collection can be specified using either:
- collection_cid: Direct CID of the collection
- collection_name: Name of the collection (case-insensitive, will be converted to CID)

Only one collection parameter can be specified.

For 'data' parameter, you can optionally specify 'file_name' to customize the file name
instead of using the auto-generated name based on CID.

> Body parameter

```yaml
file: string
data: '{"hello": "world"}'
file_name: string
data_cid: string
collection_cid: string
collection_name: string
store_stamped_file: true
idempotent: true
idempotency_window: 3600

```

<h3 id="stamps_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|Binary file to be stamped|
|» data|body|string|false|Inline text or JSON data|
|» file_name|body|string|false|Custom file name for data (only used when 'data' is provided)|
|» data_cid|body|string|false|Existing CID to stamp|
|» collection_cid|body|string|false|Optional CID of collection to group stamped object|
|» collection_name|body|string|false|Optional name of collection to group stamped object (case-insensitive)|
|» store_stamped_file|body|boolean|false|Whether to store the stamped file|
|» idempotent|body|boolean|false|Enable idempotency|
|» idempotency_window|body|integer|false|Idempotency window in seconds|

> Example responses

> 200 Response

```json
{
  "commitment_receipt": {
    "transaction_hash": "string",
    "user_address": "string",
    "set_cid": "string",
    "object_cid": "string",
    "timestamp": "string",
    "chain_id": 0
  }
}
```

<h3 id="stamps_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Idempotent request - returning previous stamp.|[IdempotentStampResponse](#schemaidempotentstampresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Stamp created successfully|[StampCreatedResponse](#schemastampcreatedresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - invalid input or idempotent conflict|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## stamps_upload-stamped-file_create

<a id="opIdstamps_upload-stamped-file_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamps/upload-stamped-file \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /stamps/upload-stamped-file`

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

<h3 id="stamps_upload-stamped-file_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» collectionName|body|string|true|Collection name for blockchain verification (case-insensitive)|
|» file|body|string(binary)|true|Previously stamped file to be uploaded|

> Example responses

> 201 Response

```json
{
  "commitment_receipt": {
    "transaction_hash": "string",
    "user_address": "string",
    "set_cid": "string",
    "object_cid": "string",
    "timestamp": "string",
    "chain_id": 0
  },
  "file_object": {
    "file_name": "string",
    "file_path": "string"
  }
}
```

<h3 id="stamps_upload-stamped-file_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|File uploaded successfully|[StampCreatedResponse](#schemastampcreatedresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input or validation failed|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Collection not found or no blockchain records found|[Error](#schemaerror)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Multiple blockchain records found for same user/collection|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## stamps_verify_create

<a id="opIdstamps_verify_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamps/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`POST /stamps/verify`

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
  "filter_by_user": false
}
```

<h3 id="stamps_verify_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cids|body|[string]|true|Array of CIDs to verify|
|» filter_by_user|body|boolean|false|When true, only return results owned by the current user|

> Example responses

> 200 Response

```json
{
  "display_timezone": "string",
  "stamp_list": [
    {
      "transaction_hash": "string",
      "user_address": "string",
      "set_cid": "string",
      "object_cid": "string",
      "timestamp": "string",
      "chain_id": 0
    }
  ]
}
```

<h3 id="stamps_verify_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[VerificationResult](#schemaverificationresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input data|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vbase-api-users">Users</h1>

## users_me_list

<a id="opIdusers_me_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/users/me \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`GET /users/me`

Handle GET request to retrieve user account settings.

> Example responses

> 200 Response

```json
{
  "name": "string",
  "email": "user@example.com",
  "persistent_id": "string",
  "description": "string",
  "display_timezone": "string",
  "date_joined": "2019-08-24T14:15:22Z",
  "last_address": "string",
  "last_name": "string",
  "last_is_verified": true,
  "storage_type": "string"
}
```

<h3 id="users_me_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Account settings retrieved successfully|[AccountSettings](#schemaaccountsettings)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## users_read

<a id="opIdusers_read"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/users/{user_address} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

`GET /users/{user_address}`

Handle GET request to retrieve user account settings.

<h3 id="users_read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_address|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "email": "user@example.com",
  "persistent_id": "string",
  "description": "string",
  "display_timezone": "string",
  "date_joined": "2019-08-24T14:15:22Z",
  "last_address": "string",
  "last_name": "string",
  "last_is_verified": true,
  "storage_type": "string"
}
```

<h3 id="users_read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Account settings retrieved successfully|[AccountSettings](#schemaaccountsettings)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "id": 0,
  "name": "string",
  "cid": "string",
  "is_pinned": true,
  "is_portfolio": true,
  "is_portfolio_collection": true,
  "is_public": true,
  "created_at": "2019-08-24T14:15:22Z",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|cid|string|false|none|none|
|is_pinned|boolean|false|none|none|
|is_portfolio|boolean|false|none|none|
|is_portfolio_collection|boolean|false|none|none|
|is_public|boolean|false|none|none|
|created_at|string(date-time)|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string",
  "details": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|details|string|false|none|none|

<h2 id="tocS_CommitmentReceipt">CommitmentReceipt</h2>
<!-- backwards compatibility -->
<a id="schemacommitmentreceipt"></a>
<a id="schema_CommitmentReceipt"></a>
<a id="tocScommitmentreceipt"></a>
<a id="tocscommitmentreceipt"></a>

```json
{
  "transaction_hash": "string",
  "user_address": "string",
  "set_cid": "string",
  "object_cid": "string",
  "timestamp": "string",
  "chain_id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_hash|string|false|none|none|
|user_address|string|false|none|none|
|set_cid|string|false|none|none|
|object_cid|string|false|none|none|
|timestamp|string|false|none|none|
|chain_id|integer|false|none|none|

<h2 id="tocS_IdempotentStampResponse">IdempotentStampResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentstampresponse"></a>
<a id="schema_IdempotentStampResponse"></a>
<a id="tocSidempotentstampresponse"></a>
<a id="tocsidempotentstampresponse"></a>

```json
{
  "commitment_receipt": {
    "transaction_hash": "string",
    "user_address": "string",
    "set_cid": "string",
    "object_cid": "string",
    "timestamp": "string",
    "chain_id": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment_receipt|[CommitmentReceipt](#schemacommitmentreceipt)|false|none|none|

<h2 id="tocS_FileObject">FileObject</h2>
<!-- backwards compatibility -->
<a id="schemafileobject"></a>
<a id="schema_FileObject"></a>
<a id="tocSfileobject"></a>
<a id="tocsfileobject"></a>

```json
{
  "file_name": "string",
  "file_path": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_name|string|false|none|none|
|file_path|string|false|none|none|

<h2 id="tocS_StampCreatedResponse">StampCreatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemastampcreatedresponse"></a>
<a id="schema_StampCreatedResponse"></a>
<a id="tocSstampcreatedresponse"></a>
<a id="tocsstampcreatedresponse"></a>

```json
{
  "commitment_receipt": {
    "transaction_hash": "string",
    "user_address": "string",
    "set_cid": "string",
    "object_cid": "string",
    "timestamp": "string",
    "chain_id": 0
  },
  "file_object": {
    "file_name": "string",
    "file_path": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment_receipt|[CommitmentReceipt](#schemacommitmentreceipt)|false|none|none|
|file_object|[FileObject](#schemafileobject)|false|none|none|

<h2 id="tocS_VerificationResult">VerificationResult</h2>
<!-- backwards compatibility -->
<a id="schemaverificationresult"></a>
<a id="schema_VerificationResult"></a>
<a id="tocSverificationresult"></a>
<a id="tocsverificationresult"></a>

```json
{
  "display_timezone": "string",
  "stamp_list": [
    {
      "transaction_hash": "string",
      "user_address": "string",
      "set_cid": "string",
      "object_cid": "string",
      "timestamp": "string",
      "chain_id": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_timezone|string|false|none|none|
|stamp_list|[[CommitmentReceipt](#schemacommitmentreceipt)]|false|none|none|

<h2 id="tocS_AccountSettings">AccountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_AccountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "name": "string",
  "email": "user@example.com",
  "persistent_id": "string",
  "description": "string",
  "display_timezone": "string",
  "date_joined": "2019-08-24T14:15:22Z",
  "last_address": "string",
  "last_name": "string",
  "last_is_verified": true,
  "storage_type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|email|string(email)|false|none|none|
|persistent_id|string|false|none|none|
|description|string|false|none|none|
|display_timezone|string|false|none|none|
|date_joined|string(date-time)|false|none|none|
|last_address|string|false|none|none|
|last_name|string|false|none|none|
|last_is_verified|boolean|false|none|none|
|storage_type|string|false|none|none|

