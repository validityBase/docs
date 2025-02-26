# Using Excel to Make Stamps 

The vBase Excel library allows you to make verifiable data and datasets using vBase directly from Excel. 

The instructions below show how this can be done either inside the Excel application itself, or inside Excel's VBA environment. 

# Installation

There are two ways to get started with vBase's Excel Tools
- Option 1 - Use the vBase XLSM File
- Option 2 - Install via Excel VBA Tools


## Option 1 - Use the vBase XLSM File

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



## Option 2 - Install via Excel VBA Tools

1. [Download the vBase Excel Library Setup Files](setup.download)
2. Uninstall the library if it is already installed on your machine.
3. Install the new version using `setup.exe`.
4. Run Microsoft Excel.
5. Ensure that the 'Developer' ribbon tab is visible. If it is not, enable it in the Excel options:
    1. Right-click on the ribbon and select 'Customize the Ribbon'.
    2. Check the 'Developer' checkbox in the ribbon tabs tree.
       ![Customize the Ribbon](images/customize-the-ribbon.png)
6. Go to the Developer ribbon tab and click on the 'Visual Basic' button.
7. In Microsoft Visual Basic for Applications, add a reference to the library: **Tools** -> **References** -> find **vBase**.
   ![Add Reference](images/add-reference.png)
8. Insert Module
9. Copy and paste relevant code into a new module from sample VBA code below


# Getting Started

## XLSM 

1. Once `vBase_Stamper.xlsm` is open, click to Enable Macros inside the spreadsheet
2. Fill in the Stamping Parameters table on the sheet 'vBase Setup'
3. Now you can run the vBase Functions listed in the 'vBase Setup' worksheet
4. To Stamp a Range of cells in your workbook, call the function =StampRangeDataDefault(Range) (e.g. StampRangeDataDefault(C20:D22))
    - Alternatively, you can use the shortcut Ctrl+Shift+E to Stamp the highighted range using the StampRange macro
5. Stamps made via the Excel become part of a Collection




## VBA 

The VBA code below demonstrates how to use the library:


```vbnet
Sub BuildAndVerifyDataset()

    On Error GoTo ErrorHandler

    Dim vBaseBuidler As New vBase.vBaseBuilder
    Dim vBaseClient As vBase.vBaseClient
    Dim vBaseDataset As vBase.vBaseDataset
    Dim verificationResult As vBase.verificationResult
    Dim transactionReceipt As vBase.Web3Receipt

    Dim datasetName As String
    Dim forwarderUrl As String
    Dim apiKey As String
    Dim privateKey As String

    datasetName = "<DATASET NAME>"
    forwarderUrl = "<FORWARDER URL>"
    apiKey = "<API KEY>"
    privateKey = "<PRIVATE KEY>"

    Set vBaseClient = vBaseBuidler.CreateForwarderClient(forwarderUrl, apiKey, privateKey)
    Set vBaseDataset = vBaseBuidler.CreateDataset(vBaseClient, datasetName, vBase.ObjectTypes_String)

    Set transactionReceipt = vBaseDataset.AddRecord ("<Record 1 Data>")
    ' Add more records
    Set transactionReceipt = vBaseDataset.AddRecord ("<Record N Data>")

    MsgBox "Last transaction hesh: " & transactionReceipt.transactionHash & vbNewLine & "Last transaction timestamp: " & transactionReceipt.timestamp

    Set verificationResult = vBaseDataset.VerifyCommitments()

    MsgBox "Verification passed: " & verificationResult.VerificationPassed

    Exit Sub

ErrorHandler:
    MsgBox "Use [Ctrl+Insert] to copy this message to the clipboard." & vbNewLine & "Error: " & Err.Description, vbCritical

End Sub
```

or

```vbnet
Sub VerifyDataset()

    On Error GoTo ErrorHandler

    Dim vBaseBuidler As New vBase.vBaseBuilder
    Dim vBaseClient As vBase.vBaseClient
    Dim vBaseDataset As vBase.vBaseDataset
    Dim verificationResult As vBase.verificationResult

    Dim forwarderUrl As String
    Dim apiKey As String
    Dim privateKey As String

    datasetName = "<DATASET NAME>"
    forwarderUrl = "<FORWARDER URL>"
    apiKey = "<API KEY>"
    privateKey = "<PRIVATE KEY>"

    Set vBaseClient = vBaseBuidler.CreateForwarderClient(forwarderUrl, apiKey, privateKey)
    Set vBaseDataset = vBaseBuidler.CreateDatasetFromJson(vBaseClient, "<Dataset JSON>")

    Set verificationResult = vBaseDataset.VerifyCommitments()

    MsgBox "Verification passed: " & verificationResult.VerificationPassed
Exit Sub

ErrorHandler:
    MsgBox "Use [Ctrl+Insert] to copy this message to the clipboard." & vbNewLine & "Error: " & Err.Description, vbCritical

End Sub
```
