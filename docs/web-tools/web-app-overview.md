# Use the vBase Web App

The vBase Web App allows you to stamp and verify files, Content IDs, users, and Collections quickly and easily from your browser.

[Open the vBase Web App](https://app.vbase.com/)

> **Before you begin**
>
> You need a vBase account to create stamps and manage your Collections.  
> [Create a vBase account](../getting-started/create-a-vbase-account.md)

## Stamp

Access the Stamp interface by selecting **Stamp** in the upper-left corner of the application or going directly to:

[https://app.vbase.com/stamp/](https://app.vbase.com/stamp/)

<div style="padding-left: 10px;"><img src="Stamp_App_Main.png" width="50%" alt="Stamp App Page"></div><br>

From this screen, you can:

* Stamp a file
* Stamp a Content ID
* Associate a stamp with a Collection

For background on stamping, see [How vBase Works](../welcome/how-vbase-works.md) and [What Is a Stamp?](../welcome/what-is-a-stamp.md).

### Stamp a file

Drag a file into the upload area or select **Browse for File** to choose one from your computer.

You can also indicate that the stamp belongs to [a particular Collection](../welcome/what-is-a-stamp.md#what-is-a-vbase-collection). Collections group related stamps under a shared identifier.

[Open Stamp a File](https://app.vbase.com/stamp/#file)

For complete step-by-step instructions, see [Stamp an Object](how-to-use-vbase-stamper.md).

### Stamp a Content ID

Instead of uploading a file, you can stamp an existing Content ID directly.

Select **Content ID** above the upload area and enter the Content ID you want to stamp.

> **Advanced feature**
>
> If you stamp a Content ID directly, you are responsible for safely creating and retaining the corresponding original content, or pre-image. Without it, you may be unable to verify the stamped content later.

[Open Stamp a Content ID](https://app.vbase.com/stamp/#cid)

## Verify

Access the Verify interface by selecting **Verify** in the upper-left corner of the application or going directly to:

[https://app.vbase.com/verify/](https://app.vbase.com/verify/)

<div style="padding-left: 10px;"><img src="Verify_App_Main.png" width="50%" alt="Verify App Page"></div><br>

From this screen, you can:

* Verify a file
* Verify a Content ID
* Review a user's stamp history
* Verify a Collection

### Verify a file

Verifying a file checks whether its hash, or Content ID, was previously stamped, when it was stamped, by whom, and as part of which Collection, if any.

Drag the file into the upload area or select **Browse for File**.

Your browser calculates the file's Content ID locally and asks vBase whether matching stamps have previously been created.

[Open Verify a File](https://app.vbase.com/verify/#file)

For complete step-by-step instructions, see [Verify an Object](how-to-use-vbase-verify.md).

### Verify a Content ID

You can also verify a Content ID directly rather than asking the Web App to calculate one from a file.

1. Select **Content ID** above the upload area.
2. Calculate the Content ID of the data object locally. This is usually a SHA3-256 hash.
3. Enter the Content ID to look up whether and when it was previously stamped.

[Open Verify a Content ID](https://app.vbase.com/verify/#cid)

### Review a user's stamp history

To look up the stamp history associated with a user ID, display name, or blockchain address, select **User** above the upload area.

The results show the stamps and Collections previously created by that user.

[Open Verify a User](https://app.vbase.com/verify/#user)

### Verify a Collection

Collection verification compares the Content IDs in an archive with those previously stamped as part of a vBase blockchain Collection.

If the Content IDs match, the archive is shown as valid. The results also display differences between the blockchain timestamps and timestamps asserted in the archive.

[Open Verify a Collection](https://app.vbase.com/verify/#collection)

## When to use the Web App

The Web App is a good choice when you want to:

* Stamp or verify content from a browser
* Create occasional stamps without building an integration
* Review users, Collections, and stamp information visually
* Demonstrate or test a vBase workflow

For recurring or programmatic workflows, use the Python API Client or REST API.

## Next steps

* [Stamp an Object](how-to-use-vbase-stamper.md)
* [Verify an Object](how-to-use-vbase-verify.md)
* [Start with the Python API Client](../getting-started/python-api-quickstart.md)
* [Choose How to Use vBase](../getting-started/choose-how-to-use-vbase.md)
