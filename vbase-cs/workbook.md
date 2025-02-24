# Using Excel Workbook to Make Stamps and Collections

The vBase Excel library allows you to make verifiable data and datasets using vBase directly from Excel. 

The instructions below show how this can be done either inside the Excel application using vBase_Excel_Example.xlsm

# Installation

1. [Download the vBase Excel Library Setup Files](setup.download)
2. Uninstall the library if it is already installed on your machine.
3. Install the new version using `setup.exe`.
4. If you have it open, close `vBase_Stamper.xlsm` 
5. In Windows File Explorer, right-click on `vBase_Stamper.xlsm`
    1. Select **Properties**
    2. In the **General** tab, look for a section at the bottom called **Security**
    3. If you see "This file came from another computer and might be blocked to help protect this computer.", check the box for Unblock.
    4. Click **Apply**, then **OK**.
6. Open `vBase_Stamper.xlsm` in Excel
7. Once `vBase_Stamper.xlsm` is open, click to Enable Macros inside the spreadsheet




# Getting Started

1. Fill in the Stamping Parameters table on the sheet 'vBase Setup'
2. Now you can run the vBase Functions listed in the 'vBase Setup' worksheet
3. To Stamp a Range of cells in your workbook, call the function =StampRangeDataDefault(Range) (e.g. StampRangeDataDefault(C20:D22))
    - Alternatively, you can use the shortcut Ctrl+Shift+E to Stamp the highighted range using the StampRange macro
4. Stamps made via the Excel become part of the Collection specified in Stamping Parameters
    



# Verifying Your Stamps and Collections

## Stamps

To confirm that your Excel data was Stamped, find the relevant file on your system, and load it into the vBase interface at app.vbase.com/verify/#file


## Collections

To turn saved files into a verifiable collection, zip all the Stamped Files in the relevant Collection directory (excluding any system files, like desktop.ini)

To confirm your collection verifies correctly, go to [https://app.vbase.com/verify/#collection](https://app.vbase.com/verify/#collection) and load your zipped Collection into the interface 
