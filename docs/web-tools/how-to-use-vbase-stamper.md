# How to use vBase Stamper



The vBase Stamper privately records the timestamp, author, and fingerprint (collectively known as provenance) of any file to a blockchain, making the provenance verifiable forever!

### Step-by-Step Guide (or [Watch the How-to Video](https://www.youtube.com/watch?v=Joh_zw0XoGM))

1. Go to [vBase Stamper](https://app.vbase.com)
2. Sign in (or register for a free account)
3. Click the "Browse for File" button, and select the file to stamp
4. Click "Make a Stamp"

#### What Happens Once You Click "Make a Stamp"

The Stamper App submits your file's content ID (SHA3 hash) inside a blockchain transaction. Once this transaction appears on the blockchain, you receive a confirmation and stamp details, including a trusted tamperproof timestamp.

**Important Note:**\
Be sure to securely store a copy of your file. If you lose or change the stamped file, you can no longer verify its provenance.



***

#### User Notes

* Your browser calculates your file's SHA3-keccak256 content ID on your local computer. Your files remain local and secure and are never seen by vBase.
* [Example of a stamp](https://polygonscan.com/tx/0xe7dbb99c2f521a5c636d4cc7f6fd3c60cdf427c284230aa0093faac338b9d651) in 3rd party blockchain explorer.
* Stamp details are stored on the Polygon blockchain and can be verified independently of vBase by using off-the-shelf blockchain query tools like Dune Analytics.
* [SHA3 is the standard algorithm](https://en.wikipedia.org/wiki/SHA-3) used to secure banking and telecommunications networks, ensuring data security.\
