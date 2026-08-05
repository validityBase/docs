# Use the vBase Web App

The vBase Web App lets you create and verify blockchain-backed records, manage Collections, and configure your account without writing code.

The application has three main areas:

* **Stamp** — Create verifiable records of files, text, Content IDs, and portfolios
* **Verify** — Validate records for files, Content IDs, users, and Collections
* **Profile** — Manage Collections, API credentials, and account settings

[Open the vBase Web App](https://app.vbase.com/)

> **Account requirements**
>
> You need a vBase account to create stamps, manage Collections, and verify Collections.
>
> You do not need an account to verify a file, Content ID, or user.
>
> [Create a vBase account](../getting-started/create-a-vbase-account.md)

## Stamp

Create a stamp for:

* [A file](https://app.vbase.com/stamp/?method=file)
* [Text entered in the browser](https://app.vbase.com/stamp/?method=text)
* [An existing Content ID](https://app.vbase.com/stamp/?method=hash)
* [A portfolio](https://app.vbase.com/stamp/?method=portfolio)

During the stamping workflow, you can optionally assign the stamp to an existing Collection.

<div style="padding-left: 10px;"><img src="Stamp_App_Main.png" width="70%" alt="vBase Stamper"></div><br>

[Read the vBase Stamper guide](how-to-use-vbase-stamper.md)

## Verify

Use vBase Verify to validate records for:

* [A file](https://app.vbase.com/verify/?method=file)
* [A known Content ID](https://app.vbase.com/verify/?method=hash)
* [A user or blockchain address](https://app.vbase.com/verify/?method=user)
* [A Collection from a ZIP archive](https://app.vbase.com/verify/?method=collection&collectionMethod=archive)
* [A Collection from Amazon S3](https://app.vbase.com/verify/?method=collection&collectionMethod=s3-credentials)

Verifying a file, Content ID, or user does not require a vBase account. Collection verification requires you to sign in.

When a matching record is found, vBase displays the available stamp details.

<div style="padding-left: 10px;"><img src="Verify_App_Main.png" width="70%" alt="vBase Verify"></div><br>

For more details on verification, [read the vBase Verify guide](how-to-use-vbase-verify.md)

## Collections and account settings

Collections group related stamps under a shared identifier—for example, the successive files in a dataset, investment track record, portfolio, or research process.

Create and manage Collections from your Profile. Once a Collection exists, you can select it when creating a stamp through the regular stamping workflow.

* [Create or manage Collections](https://app.vbase.com/profile/#collections)
* [Open Account Settings](https://app.vbase.com/profile/#account_settings)

Your Profile also contains your API credentials and other available account and application settings.

<div style="padding-left: 10px;"><img src="Get_API_Key_In_User_Profile.png" width="70%" alt="Account Settings in the vBase Profile"></div><br>

## Next steps

* [How to Use the vBase Stamper](how-to-use-vbase-stamper.md)
* [How to Verify an Object](how-to-use-vbase-verify.md)
* [Choose How to Use vBase](../getting-started/choose-how-to-use-vbase.md)