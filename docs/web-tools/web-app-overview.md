# vBase web application overview

Create and verify blockchain-backed records, manage Collections, and configure your vBase account directly from your browser.

{% hint style="info" %}
**Account requirements**

An account is required to create stamps, manage Collections, and verify Collections.

You can verify a file, Content ID, or user without signing in.

[Create a vBase account](../getting-started/create-a-vbase-account.md)
{% endhint %}

## Create a Stamp

Create a permanent, independently verifiable record of content.

| Workflow | Description |
|---|---|
| [Stamp a file](https://app.vbase.com/stamp/?method=file) | Stamp the Content ID calculated from a file |
| [Stamp text](https://app.vbase.com/stamp/?method=text) | Enter and stamp text directly in the browser |
| [Stamp a Content ID](https://app.vbase.com/stamp/?method=hash) | Stamp an existing Content ID |
| [Stamp a portfolio](https://app.vbase.com/stamp/?method=portfolio) | Create a stamp using the portfolio workflow |

During any regular stamping workflow, you can optionally assign the stamp to an existing Collection.

[Read the Stamper guide](how-to-use-vbase-stamper.md)

## Verify a record

Check previously created records and review the available stamp details.

| Workflow | Description |
|---|---|
| [Verify a file](https://app.vbase.com/verify/?method=file) | Calculate a file’s Content ID and find matching stamps |
| [Verify a Content ID](https://app.vbase.com/verify/?method=hash) | Search directly using a known Content ID |
| [Verify a user](https://app.vbase.com/verify/?method=user) | Review records associated with a user or blockchain address |
| [Verify a Collection from ZIP](https://app.vbase.com/verify/?method=collection&collectionMethod=archive) | Compare a ZIP archive with a Collection record |
| [Verify a Collection from S3](https://app.vbase.com/verify/?method=collection&collectionMethod=s3-credentials) | Verify a Collection using an S3 URI and credentials |

[Read the Verify guide](how-to-use-vbase-verify.md)

## Manage Collections and settings

Use your Profile to manage your account and organize related stamps.

| Area | What you can do |
|---|---|
| [Collections](https://app.vbase.com/profile/#collections) | Create and manage Collections that can be selected during stamping |
| [Account Settings](https://app.vbase.com/profile/#account_settings) | Manage API credentials and available account preferences |

## Automate your workflow

For recurring or programmatic stamping and verification, use the [Python API Client](../getting-started/api-py-quickstart.md), our [REST API](../../vbase-django-tools/api/rest-api-user-guide.md) or one of our [other automation interfaces](../getting-started/choose-how-to-use-vbase.md).