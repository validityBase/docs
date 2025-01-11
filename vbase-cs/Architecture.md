# Abstractions

The software consists of the following components:  

- **Ethereum Blockchain**: Provides verifiable provenance, establishing the credibility of the data.  
- **Validity Base Forwarder API**: A RESTful API that forwards data to the blockchain on behalf of the client.  
- **Validity Base Client**: A client application that interacts with the Forwarder API to send data to the blockchain.  

![Abstraction Diagram](https://img.plantuml.biz/plantuml/png/SoWkIImgAStDuUAATix9JCqhYLLGBaZCIKqlIatDu-9ApialJL6evb9GY7RBBofFB4f9BOe5yLnBCbABKajpmPmofyJYL8NWtCIY4WNd_BoIeiJaabYkMYuaGtLrxP2DKB1Iy0W92U125W8hGPYBO2haw-hYiWG0)

## Client

The client part consists of the following components:  

- **vBase Core**: The core library that implements communication with the vBase Forwarder API.  
  It is written in .NET Standard 2.0, which makes it compatible with both .NET Core and .NET Framework.  
- **vBase COM Shim**: A COM shim that enables the **vBase Core** library to be used in a COM environment, such as Visual Basic for Applications.  

![Client Diagram](https://img.plantuml.biz/plantuml/png/RP3DRi8m48JlVefHE1DLVO2gu98Usj9392uHXoLPWaLYHyuMg2hUlR83ugVrRUnlPyVpt0jv-MeRfQoh68bk35l1pEwCTxPbAmb-b0A0ZiejrOnaDwMUaR-yXIUSJX5lK-qyBq4zD4OTDLnxPdi7GNz-8D-ODeBvFNW4C6miPWSk6oocaqWkfXECtaszaLTFtmEHpbcGUMfvx_mMG_m-ulFiVpf4l0NrDNWCLGXZvKHS2xU6La2Sp8LiHRx2O_g0qhKTYLarZBsHpPc9xcGht2PBeTXM2Cv__FFpxEKVZLbvyY4r7phN6rl7qemLzcig-TgjYFsCnqyeygKgvjb9w23qHVm2)

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

![vBase Core Class Diagram](https://img.plantuml.biz/plantuml/png/RL31QXin4BthAnxhMwa38TSUWkKQvsJebkHGIfcLPcErAybePbqA_VYoMZVffaOWQPZtvhrvzw9KT8o3CI4fbvuSetcmESQWaPEsNCx1SGCIsDPG9rh8ATn08cYUkBkx3dwwiwsve7Qv_AJYkLo7xbwHUzNJTT3UjbXvcWvMgoy-gxB_-fTttf2m7G8ddQqk6bjI4fuxM_FV4XLpwBwpco6FcyE2tce9wNa9-DOQOrjy-BrUpwjErrpk5jNUjcQBvhR1k_MwljRO-bys8gLVJPKsZvl3pBtefAoCWNj5xYSMy8bFXOMJ2ZeIXdk93Fd4XJJa93U6ayT4VZEY-WK-wf4BZn7TaDqFTwIG_XqaS_Zl3Qg6HqxG8wD6WZPIKTYSQf8t1lXy3799D0XUCkxOqIYCe0RmcMLo1CzzI5pdaTEH1eHu6dWIhkODqES2pqCuyvG-8elGCmiqLzfR0w-xcdjEVep37m00)