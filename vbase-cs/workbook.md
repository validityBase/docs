# Using Excel Workbook to Create Stamps and Collections

The vBase Excel Library enables you to generate verifiable data and datasets directly from Excel.

The instructions below guide you through the process using the latest version of `vBase_Excel_Stamper.xlsm`.



## Installation

1. **[Download the vBase Excel Library Setup Files](https://github.com/validityBase/docs/raw/refs/heads/main/vbase-cs/vBase_Excel_Setup_v11.zip)**.
2. Unzip `vBase_Excel_Setup_v11.zip` into a local directory on your computer.
3. Uninstall any existing version of the library.
4. Install the new version by running `setup.exe`.
5. If open, close `vBase_Excel_Stamper.xlsm`.
6. **Unblock the file (if needed):**
    - In Windows File Explorer, right-click `vBase_Excel_Stamper.xlsm`.
    - Select **Properties**.
    - In the **General** tab, locate the **Security** section.
    - If you see:  
      *"This file came from another computer and might be blocked..."*, check **Unblock**.
    - Click **Apply**, then **OK**.
7. Open `vBase_Excel_Stamper.xlsm` in Excel.
8. When prompted, enable macros.



## Getting Started

1. Fill in the **Stamping Parameters** table on the `vBase Setup` sheet.
2. Run vBase functions listed in the `vBase Setup` worksheet to generate new stamped data.
3. Stamp a range of cells using one of the following methods:
   - Use the function:  
     ```excel
     =StampRangeDataDefault(Range)
     ```
     Example:  
     ```excel
     =StampRangeDataDefault(C20:D22)
     ```
   - Use the shortcut:  
     **Ctrl + Shift + S** to stamp the selected range via the `StampRange` macro.
4. Stamps are assigned to a [Collection](../docs/welcome/what-is-a-stamp.md#collection) based on the Collection Name specified Stamping Parameters.



## Verifying Your Stamps and Collections

### Stamps

To verify that your Excel data has been stamped:
1. Locate the relevant stamped file on your system.
2. Load the file to:  
   * [https://app.vbase.com/verify/#file](https://app.vbase.com/verify/#file)

### Collections

To create a verifiable collection:
1. Zip all the stamped files in the relevant collection directory.  
   _(Exclude system files like `desktop.ini`.)_
2. Verify the collection by loading the zipped file to:  
   * [https://app.vbase.com/verify/#collection](https://app.vbase.com/verify/#collection)
