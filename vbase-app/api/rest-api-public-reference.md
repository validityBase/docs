<!-- Generator: Widdershins v4.0.1 -->

<h1 id="vbase-api">vBase API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[vBase Documentation](https://docs.vbase.com/)

Base URLs:

* <a href="https://app.vbase.com">https://app.vbase.com</a>

# Authentication

- HTTP Authentication, scheme: bearer Enter your vBase API key. The key is opaque, not a JWT.

<h1 id="vbase-api-collections">Collections</h1>

## List Collections

<a id="opIdcollections_list"></a>

### Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/collections \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`GET /api/v1/collections`

Get user collections with optional filtering

<h3 id="collections_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_pinned|query|boolean|false|Filter by pinned status|
|limit|query|integer|false|Opt-in page size (1-1000). When set, the response carries X-Total-Count and, if more results exist, a Link rel=next header.|
|offset|query|integer|false|Number of collections to skip; requires limit|
|user_address|query|string|false|Filter by user address|

> Example responses

> Collections retrieved successfully

```json
[
  {
    "id": 1,
    "name": "my-collection",
    "cid": "0xabababababababababababababababababababababababababababababababab",
    "is_pinned": false,
    "is_portfolio": false,
    "is_portfolio_collection": false,
    "is_public": false,
    "created_at": "2025-07-23T11:42:15+00:00",
    "description": "Example collection"
  }
]
```

> 400 Response

```json
{
  "error": "string",
  "details": "string"
}
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
|*anonymous*|[[Collection](#schemacollection)]|false|none|[Serializer for collections response]|
|» id|integer,null|false|none|none|
|» name|string,null|false|none|none|
|» cid|string,null|false|none|none|
|» is_pinned|boolean,null|false|none|none|
|» is_portfolio|boolean,null|false|none|none|
|» is_portfolio_collection|boolean,null|false|none|none|
|» is_public|boolean,null|false|none|none|
|» created_at|string,null(date-time)|false|none|none|
|» description|string,null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Total-Count|integer||Unpaged collection count; sent with limit|
|200|Link|string||Relative next-page URL with rel="next"; sent with limit|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create a Collection

<a id="opIdcollections_create"></a>

### Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/collections \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`POST /api/v1/collections`

Create a new user collection

### Body parameter

```json
{
  "name": "string",
  "cid": null,
  "description": "",
  "is_pinned": true
}
```

```yaml
name: string
cid: null
description: ""
is_pinned: true

```

<h3 id="collections_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreateModelRequest](#schemacollectioncreatemodelrequest)|true|none|

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

## collections_verify_create

<a id="opIdcollections_verify_create"></a>

### Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/collections/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`POST /api/v1/collections/verify`

*Verify a user collection against the blockchain*

Verify a collection of stamped objects against the blockchain.

Use the request `Content-Type` to choose the payload format:

**Raw JSON body**
```json
{
  "collection_name": "my-collection",
  "user_address": "0x123...",
  "objects": [
    {
      "cid": "cid1",
      "timestamp": "2024-01-01T00:00:00+00:00"
    }
  ]
}
```

**Raw CSV body**
Send the CSV string directly with `Content-Type: text/csv`, for example:

```csv
collection_name,user_address
vb-test,0x4A281DdC750359d5C0D2D51A890cefA43485EF2d
t,c,f
2025-07-23 11:42:15+00:00,0x6f3328cba0ffde8429e66008708419751921bf41737e32a0fcd173849e325561,application-logs2025-07-15T19_46_13.098Z-2025-07-16T19_46_13.098Z_2025-07-23_11-42-15+0000.json
2025-07-23 20:34:58+00:00,0xaeda4cf7d65f9d67b128bf795b5f237183550a814c9d4aa83c7e84f027d4aeec,attribcache140_2025-07-23_20-34-58+0000.bin
```

`collection_name` and `user_address` are optional in JSON requests. When
omitted, the backend will try to infer metadata from the payload.

For CSV requests, the leading metadata section
`collection_name,user_address` is optional.

**Multipart/form-data (legacy)**
Upload a `.csv` or `.json` file in the `file` field. The payload is normalized
to the same validated API model as raw JSON and raw CSV requests.

`Accept` controls the response type. This endpoint currently returns JSON.
        

### Body parameter

```json
{
  "collection_cid": null,
  "collection_name": null,
  "user_address": null,
  "objects": [
    {
      "cid": "string",
      "timestamp": "string",
      "file_name": null
    }
  ],
  "context": null
}
```

```yaml
collection_cid: null
collection_name: null
user_address: null
objects:
  - cid: string
    timestamp: string
    file_name: null
context: null

```

<h3 id="collections_verify_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifyUserCollectionRequestSchemaRequest](#schemaverifyusercollectionrequestschemarequest)|true|none|

> Example responses

> Verification result

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

> 400 Response

```json
{
  "error": "string",
  "details": "string"
}
```

<h3 id="collections_verify_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Verification result|[VerifyCollectionResponse](#schemaverifycollectionresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input data|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vbase-api-stamps">Stamps</h1>

## Create Stamp (DEPRECATED)

<a id="opIdstamp_create"></a>

### Code samples

```shell
curl --request POST "${VBASE_API_URL:-https://app.vbase.com}/api/v1/stamp/" \
  --header "Authorization: Bearer $VBASE_API_KEY" \
  --form-string 'data=hello'
```

`POST /api/v1/stamp/`

*[DEPRECATED] Stamp a file, inline data, or CID*

        **DEPRECATED**: This endpoint is deprecated. Please use `/api/v1/stamps` instead.

        This endpoint allows users to stamp a file, inline data, or an existing CID.
        Accepts file, inline data, or CID and returns a stamp record with metadata.
        Exactly one of 'file', 'data', or 'data_cid' must be provided.

        Send multipart/form-data or application/x-www-form-urlencoded fields,
        or an application/json object with the same field names. File uploads
        require multipart/form-data; in JSON, 'data' must be a string.

        Collection can be specified using either:
        - collection_cid: Direct CID of the collection
        - collection_name: Name of the collection (case-insensitive, will be converted to CID)

        Only one collection parameter can be specified.

        For 'data' parameter, you can optionally specify 'file_name' to customize the file name
        instead of using the auto-generated name based on CID.
        

### Body parameter

```json
{
  "data": "hello"
}
```

```yaml
data: hello

```

<h3 id="stamp_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|false|Binary upload; a named file may contain zero bytes. An empty text multipart field is instead an unselected placeholder. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|» data|body|any|false|Inline text, including serialized JSON. An empty string does not select data.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» data_cid|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collection_cid|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collection_name|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» store_stamped_file|body|any|false|none|
|»» *anonymous*|body|boolean|false|none|
|»» *anonymous*|body|null|false|none|
|» idempotent|body|boolean|false|none|
|» idempotency_window|body|integer|false|none|
|» file_name|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» dataCid|body|any|false|Compatibility alias for data_cid.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collectionCid|body|any|false|Compatibility alias for collection_cid.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collectionName|body|any|false|Compatibility alias for collection_name.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» storeStampedFile|body|any|false|Compatibility alias for store_stamped_file.|
|»» *anonymous*|body|boolean|false|none|
|»» *anonymous*|body|null|false|none|
|» idempotencyWindow|body|integer|false|Compatibility alias for idempotency_window.|
|» fileName|body|any|false|Compatibility alias for file_name.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|any|false|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collection_cid|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collectionCid|body|string|true|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collection_name|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collectionName|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» file|body|string(binary)|true|Binary upload; a named file may contain zero bytes. An empty text multipart field is instead an unselected placeholder. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|»» *anonymous*|body|any|false|none|
|»»» *anonymous*|body|object|false|none|
|»»»» data|body|string|true|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» data_cid|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» dataCid|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» data|body|string|true|none|
|»» file|body|string|false|none|
|» *anonymous*|body|object|false|none|
|»» file|body|string|false|none|
|»» *anonymous*|body|object|false|none|
|»»» data_cid|body|string|true|none|
|»» *anonymous*|body|object|false|none|
|»»» dataCid|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» *anonymous*||
|»» *anonymous*||
|»» *anonymous*||
|»» *anonymous*||
|»» file||
|»» file||

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

## Create Stamp

<a id="opIdstamps_create"></a>

### Code samples

```shell
curl --request POST "${VBASE_API_URL:-https://app.vbase.com}/api/v1/stamps" \
  --header "Authorization: Bearer $VBASE_API_KEY" \
  --form-string 'data=hello'
```

`POST /api/v1/stamps`

*Stamp a file, inline data, or CID*

        This endpoint allows users to stamp a file, inline data, or an existing CID.
        Accepts file, inline data, or CID and returns a stamp record with metadata.
        Exactly one of 'file', 'data', or 'data_cid' must be provided.

        Send multipart/form-data or application/x-www-form-urlencoded fields,
        or an application/json object with the same field names. File uploads
        require multipart/form-data; in JSON, 'data' must be a string.

        Collection can be specified using either:
        - collection_cid: Direct CID of the collection
        - collection_name: Name of the collection (case-insensitive, will be converted to CID)

        Only one collection parameter can be specified.

        For 'data' parameter, you can optionally specify 'file_name' to customize the file name
        instead of using the auto-generated name based on CID.
        

### Body parameter

```json
{
  "data": "hello"
}
```

```yaml
data: hello

```

<h3 id="stamps_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|false|Binary upload; a named file may contain zero bytes. An empty text multipart field is instead an unselected placeholder. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|» data|body|any|false|Inline text, including serialized JSON. An empty string does not select data.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» data_cid|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collection_cid|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collection_name|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» store_stamped_file|body|any|false|none|
|»» *anonymous*|body|boolean|false|none|
|»» *anonymous*|body|null|false|none|
|» idempotent|body|boolean|false|none|
|» idempotency_window|body|integer|false|none|
|» file_name|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» dataCid|body|any|false|Compatibility alias for data_cid.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collectionCid|body|any|false|Compatibility alias for collection_cid.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» collectionName|body|any|false|Compatibility alias for collection_name.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» storeStampedFile|body|any|false|Compatibility alias for store_stamped_file.|
|»» *anonymous*|body|boolean|false|none|
|»» *anonymous*|body|null|false|none|
|» idempotencyWindow|body|integer|false|Compatibility alias for idempotency_window.|
|» fileName|body|any|false|Compatibility alias for file_name.|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|object|false|none|
|» *anonymous*|body|any|false|none|
|»» *anonymous*|body|any|false|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collection_cid|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collectionCid|body|string|true|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collection_name|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» collectionName|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» file|body|string(binary)|true|Binary upload; a named file may contain zero bytes. An empty text multipart field is instead an unselected placeholder. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|»» *anonymous*|body|any|false|none|
|»»» *anonymous*|body|object|false|none|
|»»»» data|body|string|true|none|
|»»» *anonymous*|body|any|false|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» data_cid|body|string|true|none|
|»»»» *anonymous*|body|object|false|none|
|»»»»» dataCid|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» data|body|string|true|none|
|»» file|body|string|false|none|
|» *anonymous*|body|object|false|none|
|»» file|body|string|false|none|
|»» *anonymous*|body|object|false|none|
|»»» data_cid|body|string|true|none|
|»» *anonymous*|body|object|false|none|
|»»» dataCid|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» *anonymous*||
|»» *anonymous*||
|»» *anonymous*||
|»» *anonymous*||
|»» file||
|»» file||

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

## stamps_certificate_create

<a id="opIdstamps_certificate_create"></a>

### Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamps/certificate \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/pdf'

```

`POST /api/v1/stamps/certificate`

*Download a stamp certificate PDF (public)*

Resolve the exact receipt and return generated PDF bytes directly.

### Body parameter

> Replace these selectors with values from an existing receipt.

```json
{
  "object_cid": "0xabababababababababababababababababababababababababababababababab",
  "transaction_hash": "0xcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcd",
  "chain_id": 8453
}
```

<h3 id="stamps_certificate_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CertificateSelectorRequest](#schemacertificateselectorrequest)|true|none|

> Example responses

> 200 Response

> 400 Response

```json
{
  "error": "string",
  "details": "string"
}
```

<h3 id="stamps_certificate_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|PDF attachment|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid selectors|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Stamp not found|[Error](#schemaerror)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Ambiguous stamp|[Error](#schemaerror)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Certificate temporarily unavailable|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload Stamped File

<a id="opIdstamps_upload-stamped-file_create"></a>

### Code samples

```shell
curl --request POST "${VBASE_API_URL:-https://app.vbase.com}/api/v1/stamps/upload-stamped-file" \
  --header "Authorization: Bearer $VBASE_API_KEY" \
  --form 'collection_name=my-collection' \
  --form 'data=hello' \
  --form 'file_name=example.txt'
```

`POST /api/v1/stamps/upload-stamped-file`

*Upload a stamped file*

        This endpoint allows users to upload a file or inline data that has been
        previously stamped.
        It validates that a matching commitment exists in the blockchain records for the
        authenticated user and specified collection.

        The collection can be specified using either:
        - collection_name: Name of the collection (case-insensitive)
        - collection_cid: CID of the collection

        At least one of 'collection_name' or 'collection_cid' must be provided.
        If both are provided, the stored CID for the named collection must match
        the provided collection_cid.
        The content can be provided as either 'file' or 'data', but not both.
        'file_name' is required whenever 'data' is provided.

        Send multipart/form-data or application/x-www-form-urlencoded fields,
        or an application/json object with the same field names. File uploads
        require multipart/form-data; in JSON, 'data' must be a string.

        The endpoint performs the following validations:
        - Ensures at least one collection identifier is provided.
        - Ensures exactly one of `file` or `data` is provided.
        - Ensures `file_name` is provided when `data` is used.
        - Finds the collection for the authenticated user.
        - Calculates the object CID from the uploaded file, or from inline data
          when no file is provided.
        - Verifies that matching commitments exist in blockchain records for the
          user's address and collection.
        - Uploads the file and associates it with each matching commitment.
        - Returns the existing file object with HTTP 200 when the matching
          commitment is already associated with a file.

        Note: User address is automatically determined from the authenticated user's profile.

        Returns structured error responses with appropriate HTTP status codes:
        - 400: Invalid input or validation failed, or collection_cid does not match collection_name
        - 404: Collection not found or no blockchain records found
        - 500: File processing, blockchain, or upload errors
        

### Body parameter

```json
{
  "collection_name": "my-collection",
  "data": "hello",
  "file_name": "example.txt"
}
```

```yaml
collection_name: my-collection
data: hello
file_name: example.txt

```

<h3 id="stamps_upload-stamped-file_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» collection_name|body|string,null|false|Collection name (case-insensitive)|
|» collection_cid|body|any|false|Collection CID|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» file|body|string(binary)|false|Previously stamped binary file, including a zero-byte file. An empty text multipart field is an unselected placeholder alongside inline data. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|» data|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» file_name|body|any|false|none|
|»» *anonymous*|body|string|false|none|
|»» *anonymous*|body|null|false|none|
|» *anonymous*|body|object|false|none|
|»» collection_name|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» collection_cid|body|string|true|none|
|» *anonymous*|body|object|false|none|
|»» file|body|string(binary)|true|Previously stamped binary file, including a zero-byte file. An empty text multipart field is an unselected placeholder alongside inline data. JSON Schema cannot distinguish those parts when both are represented as file=''.|
|»» data|body|any|false|none|
|» *anonymous*|body|object|false|none|
|»» data|body|string|true|none|
|»» file_name|body|string|true|none|
|»» file|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» data|null|
|»» data||
|»» file||

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|File was already uploaded for the matching commitment. Returns the existing file object.|[StampCreatedResponse](#schemastampcreatedresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|File uploaded and associated with matching commitment(s)|[StampCreatedResponse](#schemastampcreatedresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input or validation failed|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Collection not found or no blockchain records found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|File processing, blockchain, or upload errors|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create Stamp

<a id="opIdstamps_verify_create"></a>

### Code samples

```shell
# You can also use wget
curl -X POST https://app.vbase.com/api/v1/stamps/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`POST /api/v1/stamps/verify`

*Verify one or more Content IDs (CIDs)*

        This endpoint checks whether Content IDs (SHA3 hash) have previously been
        stamped on the blockchain using vBase. If a match is found, the api returns the full stamp details,
        including the timestamp, blockchain address, and other stamp details.
        

### Body parameter

```json
{
  "cids": [
    "string"
  ],
  "filter_by_user": false
}
```

<h3 id="stamps_verify_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifyCIDModelRequest](#schemaverifycidmodelrequest)|true|none|

> Example responses

> OK

```json
{
  "display_timezone": "UTC",
  "stamp_list": [
    {
      "transaction_hash": "0xcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcd",
      "user_address": "0x1212121212121212121212121212121212121212",
      "set_cid": "0xabababababababababababababababababababababababababababababababab",
      "object_cid": "0xefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefef",
      "timestamp": "2025-07-23T11:42:15+00:00",
      "chain_id": 8453
    }
  ]
}
```

> 400 Response

```json
{
  "error": "string",
  "details": "string"
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

## Get User

<a id="opIdusers_read"></a>

### Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/users/{user_address} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`GET /api/v1/users/{user_address}`

*Get public user profile by address*

Return only display name, public address, and verified status.

<h3 id="users_read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_address|path|string|true|none|

> Example responses

> Public user profile

```json
{
  "name": "Example User",
  "last_address": "0xabababababababababababababababababababab",
  "last_is_verified": true
}
```

> 400 Response

```json
{
  "error": "string",
  "details": "string"
}
```

<h3 id="users_read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Public user profile|[PublicUserProfile](#schemapublicuserprofile)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid user address|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Current User

<a id="opIdusers_me_list"></a>

### Code samples

```shell
# You can also use wget
curl -X GET https://app.vbase.com/api/v1/users/me \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

`GET /api/v1/users/me`

*Get user account settings*

Retrieve private account settings for the authenticated user.

> Example responses

> Account settings retrieved successfully

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "persistent_id": "vbase0123456789ab",
  "description": "Example account",
  "display_timezone": "UTC",
  "date_joined": "2025-07-23T11:42:15+00:00",
  "last_address": "0xabababababababababababababababababababab",
  "last_name": "Example User",
  "last_is_verified": true,
  "storage_type": "s3"
}
```

> 404 Response

```json
{
  "error": "string",
  "details": "string"
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

# Schemas

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

Serializer for account settings response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string,null|false|none|none|
|email|string,null(email)|false|none|none|
|persistent_id|string,null|false|none|none|
|description|string,null|false|none|none|
|display_timezone|string,null|false|none|none|
|date_joined|string,null(date-time)|false|none|none|
|last_address|string,null|false|none|none|
|last_name|string,null|false|none|none|
|last_is_verified|boolean,null|false|none|none|
|storage_type|string,null|false|none|none|

<h2 id="tocS_CertificateSelectorRequest">CertificateSelectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacertificateselectorrequest"></a>
<a id="schema_CertificateSelectorRequest"></a>
<a id="tocScertificateselectorrequest"></a>
<a id="tocscertificateselectorrequest"></a>

```json
{
  "object_cid": "string",
  "transaction_hash": "string",
  "chain_id": 9007199254740991,
  "collection_cid": null
}

```

CertificateSelector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object_cid|string|true|none|none|
|transaction_hash|string|true|none|none|
|chain_id|integer|true|none|none|
|collection_cid|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

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

Serializer for collections response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer,null|false|none|none|
|name|string,null|false|none|none|
|cid|string,null|false|none|none|
|is_pinned|boolean,null|false|none|none|
|is_portfolio|boolean,null|false|none|none|
|is_portfolio_collection|boolean,null|false|none|none|
|is_public|boolean,null|false|none|none|
|created_at|string,null(date-time)|false|none|none|
|description|string,null|false|none|none|

<h2 id="tocS_CollectionCreateModelRequest">CollectionCreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreatemodelrequest"></a>
<a id="schema_CollectionCreateModelRequest"></a>
<a id="tocScollectioncreatemodelrequest"></a>
<a id="tocscollectioncreatemodelrequest"></a>

```json
{
  "name": "string",
  "cid": null,
  "description": "",
  "is_pinned": true
}

```

CollectionCreateModel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|cid|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_pinned|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|boolean|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

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

Serializer for commitment receipt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_hash|string,null|false|none|none|
|user_address|string,null|false|none|none|
|set_cid|string,null|false|none|none|
|object_cid|string,null|false|none|none|
|timestamp|string,null|false|none|none|
|chain_id|integer,null|false|none|none|

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

Serializer for error responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|details|string|false|none|none|

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

Serializer for file object in stamp response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_name|string,null|false|none|none|
|file_path|string,null|false|none|none|

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

Serializer for idempotent stamp response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment_receipt|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[CommitmentReceipt](#schemacommitmentreceipt)|false|none|Serializer for commitment receipt|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

<h2 id="tocS_PublicUserProfile">PublicUserProfile</h2>
<!-- backwards compatibility -->
<a id="schemapublicuserprofile"></a>
<a id="schema_PublicUserProfile"></a>
<a id="tocSpublicuserprofile"></a>
<a id="tocspublicuserprofile"></a>

```json
{
  "name": "string",
  "last_address": "string",
  "last_is_verified": true
}

```

Public address lookup response contract.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string,null|false|none|none|
|last_address|string,null|false|none|none|
|last_is_verified|boolean,null|false|none|none|

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

Serializer for created stamp response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment_receipt|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[CommitmentReceipt](#schemacommitmentreceipt)|false|none|Serializer for commitment receipt|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_object|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[FileObject](#schemafileobject)|false|none|Serializer for file object in stamp response|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

<h2 id="tocS_UnmatchedObject">UnmatchedObject</h2>
<!-- backwards compatibility -->
<a id="schemaunmatchedobject"></a>
<a id="schema_UnmatchedObject"></a>
<a id="tocSunmatchedobject"></a>
<a id="tocsunmatchedobject"></a>

```json
{
  "cid": "string",
  "timestamp": "string"
}

```

Serializer for an input object with no matching blockchain receipt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|true|none|none|
|timestamp|string|true|none|none|

<h2 id="tocS_UserCollectionObject">UserCollectionObject</h2>
<!-- backwards compatibility -->
<a id="schemausercollectionobject"></a>
<a id="schema_UserCollectionObject"></a>
<a id="tocSusercollectionobject"></a>
<a id="tocsusercollectionobject"></a>

```json
{
  "cid": "string",
  "timestamp": "string",
  "file_name": null
}

```

UserCollectionObject

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|true|none|none|
|timestamp|string|true|none|none|
|file_name|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

<h2 id="tocS_UserCollectionProcessingContext">UserCollectionProcessingContext</h2>
<!-- backwards compatibility -->
<a id="schemausercollectionprocessingcontext"></a>
<a id="schema_UserCollectionProcessingContext"></a>
<a id="tocSusercollectionprocessingcontext"></a>
<a id="tocsusercollectionprocessingcontext"></a>

```json
{
  "as_of_timestamp": null,
  "data_freshness_timestamp": null
}

```

UserCollectionProcessingContext

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_of_timestamp|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|integer|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_freshness_timestamp|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|integer|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

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

Serializer for stamp verification response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_timezone|string,null|false|none|none|
|stamp_list|array,null|false|none|none|

<h2 id="tocS_VerifyCIDModelRequest">VerifyCIDModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifycidmodelrequest"></a>
<a id="schema_VerifyCIDModelRequest"></a>
<a id="tocSverifycidmodelrequest"></a>
<a id="tocsverifycidmodelrequest"></a>

```json
{
  "cids": [
    "string"
  ],
  "filter_by_user": false
}

```

VerifyCIDModel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cids|[string]|true|none|none|
|filter_by_user|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|boolean|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

<h2 id="tocS_VerifyCollection">VerifyCollection</h2>
<!-- backwards compatibility -->
<a id="schemaverifycollection"></a>
<a id="schema_VerifyCollection"></a>
<a id="tocSverifycollection"></a>
<a id="tocsverifycollection"></a>

```json
{
  "name": "string",
  "cid": "string",
  "user_address": "string",
  "matched_receipts": [
    {
      "transaction_hash": "string",
      "user_address": "string",
      "set_cid": "string",
      "object_cid": "string",
      "timestamp": "string",
      "chain_id": 0
    }
  ],
  "unmatched_objects": [
    {
      "cid": "string",
      "timestamp": "string"
    }
  ],
  "unmatched_receipts": [
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

Serializer for slim collection in verification responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string,null|false|none|none|
|cid|string,null|false|none|none|
|user_address|string,null|false|none|none|
|matched_receipts|[[CommitmentReceipt](#schemacommitmentreceipt)]|false|none|[Serializer for commitment receipt]|
|unmatched_objects|[[UnmatchedObject](#schemaunmatchedobject)]|false|none|[Serializer for an input object with no matching blockchain receipt]|
|unmatched_receipts|[[CommitmentReceipt](#schemacommitmentreceipt)]|false|none|[Serializer for commitment receipt]|

<h2 id="tocS_VerifyCollectionResponse">VerifyCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifycollectionresponse"></a>
<a id="schema_VerifyCollectionResponse"></a>
<a id="tocSverifycollectionresponse"></a>
<a id="tocsverifycollectionresponse"></a>

```json
{
  "display_timezone": "string",
  "collections": [
    {
      "name": "string",
      "cid": "string",
      "user_address": "string",
      "matched_receipts": [
        {
          "transaction_hash": "string",
          "user_address": "string",
          "set_cid": "string",
          "object_cid": "string",
          "timestamp": "string",
          "chain_id": 0
        }
      ],
      "unmatched_objects": [
        {
          "cid": "string",
          "timestamp": "string"
        }
      ],
      "unmatched_receipts": [
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
  ]
}

```

Serializer for collection verification response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_timezone|string|false|none|none|
|collections|[[VerifyCollection](#schemaverifycollection)]|false|none|[Serializer for slim collection in verification responses]|

<h2 id="tocS_VerifyUserCollectionRequestSchemaRequest">VerifyUserCollectionRequestSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyusercollectionrequestschemarequest"></a>
<a id="schema_VerifyUserCollectionRequestSchemaRequest"></a>
<a id="tocSverifyusercollectionrequestschemarequest"></a>
<a id="tocsverifyusercollectionrequestschemarequest"></a>

```json
{
  "collection_cid": null,
  "collection_name": null,
  "user_address": null,
  "objects": [
    {
      "cid": "string",
      "timestamp": "string",
      "file_name": null
    }
  ],
  "context": null
}

```

VerifyUserCollectionRequestSchema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_cid|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_name|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_address|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objects|[[UserCollectionObject](#schemausercollectionobject)]|false|none|[A single stamped object in a user collection.]|
|context|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[UserCollectionProcessingContext](#schemausercollectionprocessingcontext)|false|none|Processing context for a user collection verification request.|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|null|false|none|none|

