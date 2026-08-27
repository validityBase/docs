# How to use vBase Verify

**vBase Verify** lets you check content and historical records against vBase audit trails directly from your browser.

You can verify:

- A file
- An existing Content ID
- A user or blockchain address
- A Collection using a ZIP archive
- A Collection using Amazon S3

You do not need a vBase account to verify a file, Content ID, or user. You must sign in to verify a Collection.

[Open vBase Verify](https://app.vbase.com/verify/)

For a quick overview, [watch the how-to video](https://youtu.be/nzbC3UphfGM).

## Verify a file

[Open File Verification](https://app.vbase.com/verify/?method=file)

Use File Verification when you have a copy of a file and want to determine whether, when, and by whom the exact same content was previously stamped.

1. Open the **File** verification workflow.
2. Select the file you want to verify.
3. vBase calculates the file's Content ID locally in your browser.
4. vBase searches the public ledger records for matching Stamps.
5. Review the matching audit trail records.

The file itself is not uploaded to vBase during verification.

### What the results show

When a matching Stamp is found, vBase displays a verification summary showing the key information associated with the record.

Depending on the Stamp, this may include:

- **Timestamp** — when the Stamp was recorded
- **User** — the vBase account associated with the Stamp
- **User Identity** — whether that user has a verified identity, and since when
- **Collection** — the Collection associated with the Stamp, if applicable

If the same content has been stamped more than once, vBase indicates this and displays the earliest matching Stamp by default. Other matching Stamps may have been created by different users or associated with different Collections.

The **Stamp Details** section provides the underlying technical record:

| Field | Description |
|---|---|
| **Blockchain Address** | The blockchain address associated with the Stamper |
| **Content ID (SHA3-256)** | The cryptographic fingerprint of the verified content |
| **Collection ID (SHA3-256)** | The identifier of the associated Collection, if applicable |
| **Public Blockchain Record** | A link to the underlying blockchain transaction |

You can also download a **Stamp Certificate PDF** summarizing the verification record.

[Learn how vBase verification works](../getting-started/how-vbase-works.md).

### If the file does not match

A file must match the stamped content exactly.

Any change to the file will produce a different Content ID. If no matching Stamp is found, confirm that you are using the exact version of the file that was originally stamped.

## Verify a Content ID

[Open Content ID Verification](https://app.vbase.com/verify/?method=hash)

If you already know the Content ID of the content you want to check, you can search for it directly without providing the underlying data.

1. Open the **Content ID** verification workflow.
2. Enter the Content ID.
3. Search for matching Stamps.
4. Review the available audit trail records.

This workflow is useful when a Content ID has been calculated independently or provided as part of another vBase workflow.

## Verify a user

[Open User Verification](https://app.vbase.com/verify/?method=user)

User Verification lets you review audit trail activity associated with a vBase user or blockchain address.

1. Open the **User** verification workflow.
2. Enter the user or blockchain address you want to review.
3. Search for the user.
4. Review the available Stamps, Collections, and identity information associated with that vBase identity.

This provides broader context around the audit trails maintained under the same vBase identity.

Activity conducted under another identity or outside vBase will not appear in that user's vBase history.

## Verify a Collection

A Collection groups related Stamps into a larger audit trail. Collection verification lets you compare a presented dataset or group of files with the history previously recorded in that Collection.

A vBase account is required to verify Collections.

### Verify a Collection using a ZIP archive

[Open Collection ZIP Verification](https://app.vbase.com/verify/?method=collection&collectionMethod=archive)

Use this workflow when the content you want to verify is available as a ZIP archive.

1. Sign in to your vBase account.
2. Open the **Collection — ZIP Archive** verification workflow.
3. Select the Collection you want to verify.
4. Provide the ZIP archive containing the files to compare with the Collection.
5. Run the verification.
6. Review the results.

Collection verification compares the submitted content with the audit trail previously recorded for the Collection and identifies whether the presented objects correspond to the Stamps in the Collection.

### Verify a Collection using Amazon S3

[Open Collection S3 Verification](https://app.vbase.com/verify/?method=collection&collectionMethod=s3-credentials)

Use this workflow when the content to be verified is stored in Amazon S3.

1. Sign in to your vBase account.
2. Open the **Collection — S3** verification workflow.
3. Select the Collection you want to verify.
4. Provide the requested S3 location and credentials.
5. Run the verification.
6. Review the results.

{% hint style="warning" %}
**Use read-only S3 credentials.** vBase does not store the S3 credentials you provide for Collection verification. However, because credentials are entered into the browser and used to access the S3 bucket data, they should still be treated as sensitive. Use credentials scoped only to the bucket or prefix being verified, with the minimum permissions required to read the relevant files. Avoid using credentials with write, delete, or administrative permissions.
{% endhint %}

This allows a Collection to be checked directly against content stored in S3 rather than first assembling the files into a ZIP archive.

{% hint style="info" %}
Collection verification is different from verifying a single file. File verification asks whether a particular object matches an earlier Stamp. Collection verification compares a group of objects with the recorded history of a Collection.
{% endhint %}

## Understanding verification

A successful verification establishes that the content being reviewed corresponds to content represented by the earlier vBase audit trail record.

It does not, by itself, establish whether the underlying data is accurate, useful, or valuable.

For details on what Stamps, Content IDs, Collections, and verification can establish, see [How vBase Works](../getting-started/how-vbase-works.md).

## Verify programmatically

For recurring or automated verification workflows, use the vBase developer APIs:

- [Python API Client](../getting-started/api-py-quickstart.md)
- [REST API](../../vbase-django-tools/api/rest-api-user-guide.md)
- [Choose another vBase integration](../getting-started/choose-how-to-use-vbase.md)

## Create a Stamp

You can test the complete workflow yourself by stamping a file and then verifying the same file through vBase Verify.

[Learn how to use the vBase Stamper](how-to-use-vbase-stamper.md).