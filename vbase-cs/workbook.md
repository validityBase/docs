# Using Excel Workbook to Make Stamps and Collections

The **vBase Excel Library** allows you to create verifiable data and datasets directly from Excel.

The instructions below guide you through the process using **vBase_Excel_Example.xlsm**.



## Installation

1. **[Download the vBase Excel Library Setup Files](setup.download)**
2. **Uninstall any existing version** of the library.
3. **Install the new version** by running `setup.exe`.
4. If open, **close** `vBase_Stamper.xlsm`.
5. **Unblock the file (if needed)**:
    - In Windows **File Explorer**, right-click `vBase_Stamper.xlsm`.
    - Select **Properties**.
    - In the **General** tab, locate the **Security** section.
    - If you see:  
      *"This file came from another computer and might be blocked..."*, check the box for **Unblock**.
    - Click **Apply**, then **OK**.
6. **Open** `vBase_Stamper.xlsm` in Excel.
7. When prompted, **Enable Macros** inside the spreadsheet.


## Getting Started

1. **Fill in** the **Stamping Parameters** table on the `vBase Setup` sheet.
2. **Run vBase Functions** listed in the `vBase Setup` worksheet to generate new Stamped data.
3. **Stamp a range of cells** using either method:
   - Use the function:  
     ```excel
     =StampRangeDataDefault(Range)
     ```
     Example:  
     ```excel
     =StampRangeDataDefault(C20:D22)
     ```
   - Use the shortcut:  
     **Ctrl + Shift + E** to Stamp the highlighted range via the `StampRange` macro.
4. **Stamps are automatically assigned** to a [Collection](../docs/welcome/what-is-a-stamp.md#collection) based on the Stamping Parameters.



## Verifying Your Stamps and Collections

### Stamps

To verify that your Excel data was **Stamped**:
1. Locate the relevant **Stamped File** on your system.
2. **Upload** the file to:  
   * [https://app.vbase.com/verify/#file](https://app.vbase.com/verify/#file)

### Collections

To create a **Verifiable Collection**:
1. **Zip** all the **Stamped Files** in the relevant Collection directory.  
   _(Exclude system files like `desktop.ini`.)_
2. **Confirm** the Collection Verifies by loading the zipped file to:  
   * [https://app.vbase.com/verify/#collection](https://app.vbase.com/verify/#collection)

