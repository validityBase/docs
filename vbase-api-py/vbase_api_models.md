# vbase_api_models module

vBase API Models

Data models for vBase API request and response objects.
See [https://app.vbase.com/swagger](https://app.vbase.com/swagger) for API documentation.

### *class* vbase_api.vbase_api_models.AccountSettings(name: str, email: str, persistent_id: str, description: str, display_timezone: str, date_joined: str, last_address: str, last_name: str, last_is_verified: bool, storage_type: str)

Bases: `object`

User account settings.

#### name

User’s name

* **Type:**
  str

#### email

User’s email address

* **Type:**
  str

#### persistent_id

Persistent user ID

* **Type:**
  str

#### description

User description

* **Type:**
  str

#### display_timezone

Display timezone

* **Type:**
  str

#### date_joined

Date user joined

* **Type:**
  str

#### last_address

Last blockchain address

* **Type:**
  str

#### last_name

User’s last name

* **Type:**
  str

#### last_is_verified

Whether last address is verified

* **Type:**
  bool

#### storage_type

Storage type (e.g., ‘ipfs’)

* **Type:**
  str

#### date_joined *: str*

#### description *: str*

#### display_timezone *: str*

#### email *: str*

#### *classmethod* from_dict(data: dict) → [AccountSettings](#vbase_api.vbase_api_models.AccountSettings)

Create AccountSettings from a dictionary.

#### last_address *: str*

#### last_is_verified *: bool*

#### last_name *: str*

#### name *: str*

#### persistent_id *: str*

#### storage_type *: str*

### *class* vbase_api.vbase_api_models.Collection(id: int, name: str, cid: str, is_pinned: bool, is_public: bool, created_at: str, description: str)

Bases: `object`

Collection model representing a vBase collection.

#### id

Collection ID

* **Type:**
  int

#### name

Collection name

* **Type:**
  str

#### cid

Collection CID

* **Type:**
  str

#### is_pinned

Whether the collection is pinned

* **Type:**
  bool

#### is_public

Whether the collection is public

* **Type:**
  bool

#### created_at

Creation timestamp

* **Type:**
  str

#### description

Collection description

* **Type:**
  str

#### cid *: str*

#### created_at *: str*

#### description *: str*

#### *classmethod* from_dict(data: dict) → [Collection](#vbase_api.vbase_api_models.Collection)

Create a Collection from a dictionary.

#### id *: int*

#### is_pinned *: bool*

#### is_public *: bool*

#### name *: str*

### *class* vbase_api.vbase_api_models.CommitmentReceipt(transaction_hash: str, user_address: str, set_cid: str, object_cid: str, timestamp: str, chain_id: int)

Bases: `object`

Commitment receipt from blockchain stamping.

#### transaction_hash

Blockchain transaction hash

* **Type:**
  str

#### user_address

User’s blockchain address

* **Type:**
  str

#### set_cid

Set CID

* **Type:**
  str

#### object_cid

Object CID

* **Type:**
  str

#### timestamp

Timestamp of the stamp

* **Type:**
  str

#### chain_id

Blockchain chain ID

* **Type:**
  int

#### chain_id *: int*

#### *classmethod* from_dict(data: dict) → [CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)

Create a CommitmentReceipt from a dictionary.

#### object_cid *: str*

#### set_cid *: str*

#### timestamp *: str*

#### transaction_hash *: str*

#### user_address *: str*

### *class* vbase_api.vbase_api_models.Error(error: str, details: str | None = None)

Bases: `object`

Error response model.

#### error

Error message

* **Type:**
  str

#### details

Optional error details

* **Type:**
  str | None

#### details *: str | None* *= None*

#### error *: str*

#### *classmethod* from_dict(data: dict) → [Error](#vbase_api.vbase_api_models.Error)

Create an Error from a dictionary.

### *class* vbase_api.vbase_api_models.FileObject(file_name: str, file_path: str)

Bases: `object`

File object metadata.

#### file_name

Name of the file

* **Type:**
  str

#### file_path

Path to the file

* **Type:**
  str

#### file_name *: str*

#### file_path *: str*

#### *classmethod* from_dict(data: dict) → [FileObject](#vbase_api.vbase_api_models.FileObject)

Create a FileObject from a dictionary.

### *class* vbase_api.vbase_api_models.IdempotentStampResponse(commitment_receipt: [CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt))

Bases: `object`

Response for idempotent stamp requests (200 status).

#### commitment_receipt

The commitment receipt from blockchain

* **Type:**
  [vbase_api.vbase_api_models.CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)

#### commitment_receipt *: [CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)*

#### *classmethod* from_dict(data: dict) → [IdempotentStampResponse](#vbase_api.vbase_api_models.IdempotentStampResponse)

Create an IdempotentStampResponse from a dictionary.

### *class* vbase_api.vbase_api_models.StampCreatedResponse(commitment_receipt: [CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt), file_object: [FileObject](#vbase_api.vbase_api_models.FileObject) | None = None)

Bases: `object`

Response for newly created stamp (201 status).

#### commitment_receipt

The commitment receipt from blockchain

* **Type:**
  [vbase_api.vbase_api_models.CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)

#### file_object

Optional file object metadata

* **Type:**
  [vbase_api.vbase_api_models.FileObject](#vbase_api.vbase_api_models.FileObject) | None

#### commitment_receipt *: [CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)*

#### file_object *: [FileObject](#vbase_api.vbase_api_models.FileObject) | None* *= None*

#### *classmethod* from_dict(data: dict) → [StampCreatedResponse](#vbase_api.vbase_api_models.StampCreatedResponse)

Create a StampCreatedResponse from a dictionary.

### *class* vbase_api.vbase_api_models.VerificationResult(display_timezone: str, stamp_list: List[[CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)])

Bases: `object`

Result from verifying CIDs.

#### display_timezone

Timezone for display

* **Type:**
  str

#### stamp_list

List of commitment receipts for verified stamps

* **Type:**
  List[[vbase_api.vbase_api_models.CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)]

#### display_timezone *: str*

#### *classmethod* from_dict(data: dict) → [VerificationResult](#vbase_api.vbase_api_models.VerificationResult)

Create a VerificationResult from a dictionary.

#### stamp_list *: List[[CommitmentReceipt](#vbase_api.vbase_api_models.CommitmentReceipt)]*
