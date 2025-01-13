# Abstractions

The software consists of the following components:  

- **Ethereum Blockchain**: Provides verifiable provenance, establishing the credibility of the data.  
- **Validity Base Forwarder API**: A RESTful API that forwards data to the blockchain on behalf of the client.  
- **Validity Base Client**: A client application that interacts with the Forwarder API to send data to the blockchain.  

![Abstraction Diagram](https://img.plantuml.biz/plantuml/png/TOsn2i9044Jx_Oe5w_i12ma9YgLWkd35abjKsBkJpPuMmN-NfCarwUODmvjcCb8hKG26JbwSpEFXJS8FPKu0e-GIS0R4uPBrInfO_K9dUx9oYIjyMfeOxv7KiCl9b4Rpy8DAwjofLk0Hhtr_WxfQ9vjtYvYTspk1XbCeKVu0)

## Client

The client part consists of the following components:  

- **vBase Core**: The core library that implements communication with the vBase Forwarder API.  
  It is written in .NET Standard 2.0, which makes it compatible with both .NET Core and .NET Framework.  
- **vBase COM Shim**: A COM shim that enables the **vBase Core** library to be used in a COM environment, such as Visual Basic for Applications.  

![Client Diagram](https://img.plantuml.biz/plantuml/png/RP1BRy8m48Jl_XKZE1DL_G4Lu48FRUaX4fU8mv8imSAFo5aULSL_hs90F5hVnlvsTZp3LYZArbcbVAWOFMqDUy74xqmCth6N7dwK0e26oWtLZDvkJ2qZVttldd0-HRhDT8Yy0BNGw3TakOxC_W62_lf4lZOkWVaZU0HmsbXC3bnQpCUZHCx78_G_JBsMjqZV9oARiM0QoV4-n0rEyTk4pwR_qrt4Ur3VWiUk2c4iWqXm22je1QJ9NCXN52iyPqyeWsj8pD8ozaRM5oQvawzmdoo3Ob-XS_xZdrzch_-mPXafTgdvq8JM-3gLPhnmN579jsv5wcSmU46HBrGncvw5xeI-2ZLaNssT_GK0)

### vBase Core

The **vBase Core** library implements core vBase client functionality.
It consists of the following main classes and interfaces:

- **ICommitmentService**: Represents base commitment operations.
- **Web3CommitmentService**: Ethereum blockchain commitment service, based on the vBase Smart Contract.
  This class is abstract because it does not define the actual implementation for delivering messages to the Smart Contract.
- **ForwarderCommitmentService**: A vBase Smart Contract commitment service where messages are delivered via the vBase Forwarder.
- **vBaseDataset**: Represents a records set on the blockchain, commited with ICommitmentService.
  It also facilitates validation of the commoted recorded data, ensuring that:
  - Exactly the same data records were commited with the specified timestamps.
  - No additional records were commited within the scope of the dataset.
  - All the records in the dataset were commited.

![vBase Core Class Diagram](https://img.plantuml.biz/plantuml/png/RL9TQnin47pNhnZERw4EXBpc8LYkSPuCLKaUIYbxqbwizauoshL3e3--dCvDUgaHw8ETsPaTT2zAHOz3RqnCogKZpsWUR1w6g0CdTLnEqNC34bXdg1Kjv1M-9n4qJzpUNWO_tLfdpgXDBYzK0fVBqCqxSgjwk0pQMeT5e75XiVWMiYg7xtzvfnK9spvoqidghB0c9U6fiZR_3L4nk_Od-mdokDhDw4vBJCzpm0zdZ7Mu-xrSJgEEs_JSp5vRwymQpKs3g-ModjROUfyN1aglJPKsZwlTn3thfAoCdZj5xaOMy8KFXOMJ2beIXd-B3Fd0XJJc9DU6Ky18_j2Y-WK-wvuB7mUqVVQ__9vY-hUHJE5_CgWQ0Jb1zumQ2Tn0HM5pgabU6-3hFievqIXuoxXbJqTXH3L0o2oZ8mJkOkBQZxmUgKSS3ZsFmjMy0RfS4BYF9nxJny0YzCm2pPNsqS3xhEQUKnY_z1y0)