---
description: Create Stamps for files, text, Content IDs, and portfolios directly from your browser
---

# How to use the vBase Stamper

The **vBase Stamper** lets you create independently verifiable audit trail records directly from your browser.

You can stamp:

- A file
- Text entered directly in the Web App
- An existing Content ID
- A portfolio

A vBase account is required to create Stamps.

[Open the vBase Stamper](https://app.vbase.com/stamp/)

For a quick overview, [watch the how-to video](https://www.youtube.com/watch?v=wRJCNvDkKR8).

## Stamp a file

[Open the File Stamper](https://app.vbase.com/stamp/?method=file)

1. Sign in to your vBase account.
2. Drag a file into the upload area or click **Browse for File** and select the file.
3. Optionally, assign the Stamp to an existing **Collection**.
4. Click **Make a Stamp**.

Once the Stamp is created, vBase displays the resulting Stamp (audit trail record).


### File storage

By default, the Web App can retain a backup copy of files you stamp. You can manage this preference in your [Account Settings](https://app.vbase.com/profile/#account_settings).

If file storage is disabled, the file's Content ID is calculated locally in your browser and the underlying file does not need to be uploaded to vBase.

If you choose not to store a backup through vBase, retain the exact original file yourself. You will need it to verify the file against the Stamp later.

## Stamp text

[Open the Text Stamper](https://app.vbase.com/stamp/?method=text)

1. Sign in to your vBase account.
2. Select the **Text** stamping workflow.
3. Enter and format the text you want to stamp.
4. Optionally, assign the Stamp to an existing Collection.
5. Create the Stamp.

The formatting you apply is part of the stamped content, so changes to the text or its formatting will produce a different Content ID.

When you create the Stamp, vBase generates an HTML version of the content. You can download that HTML file for your own records, and vBase also saves a copy of the HTML to your vBase account.

## Stamp a Content ID

[Open the Content ID Stamper](https://app.vbase.com/stamp/?method=hash)

If you have already calculated a Content ID for your data, you can stamp the Content ID directly without submitting the underlying data.

1. Sign in to your vBase account.
2. Select the **Content ID** stamping workflow.
3. Enter the Content ID.
4. Optionally, assign the Stamp to an existing Collection.
5. Create the Stamp.

{% hint style="warning" %}
**Stamping a Content ID directly is an advanced workflow.**

You are responsible for retaining the underlying data corresponding to the Content ID. If you do not retain the exact original data, you may not be able to verify the underlying data against the Stamp later.
{% endhint %}

## Stamp a portfolio

[Open the Portfolio Stamper](https://app.vbase.com/stamp/?method=portfolio)

The portfolio workflow is designed for creating point-in-time records of investment portfolios and strategy positions.

1. Sign in to your vBase account.
2. Open the **Portfolio** stamping workflow.
3. Follow the portfolio workflow to prepare and stamp your portfolio.
4. Repeat the process at the cadence appropriate for your strategy, such as at each rebalance.

For portfolio formats, Collection setup, stamping cadence, and strategy-specific guidance, see [Stamping a Portfolio](../use-cases/stamping-portfolios.md).

## Manage Collections

Collections group related Stamps under a shared identifier and make it possible to build a verifiable history for an entire dataset, strategy, portfolio, or other body of work.

If the content you are stamping belongs to an existing Collection, select that Collection during the stamping workflow. Collections are optional; content stamped without a Collection still receives its own independently verifiable Stamp.

[Create or manage Collections](https://app.vbase.com/profile/#collections)

Once created, the Collection will be available for selection from the Collection dropdown in the regular stamping workflow.

## What happens next

Creating a Stamp records the content's Content ID, the Stamper address, a publicly verifiable timestamp, and, when applicable, its Collection relationship in the vBase audit trail.

[Learn how vBase works](../getting-started/how-vbase-works.md).

## Verify your Stamp

After creating a Stamp, you or another user can verify the corresponding content against its audit trail record using vBase Verify or another verification method. You can also test the workflow yourself by stamping a file and then verifying it.

[Learn how to use vBase Verify](how-to-use-vbase-verify.md).
