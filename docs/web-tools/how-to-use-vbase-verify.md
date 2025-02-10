# How to use vBase Verify

The vBase Verify application checks whether any previous stamps have been made for your file or contentID. If a stamp is found, it displays the stamp details.

### Step-by-Step Guide (or [Watch the How To Video](https://www.youtube.com/watch?v=Joh_zw0XoGM))

1. Go to [vBase Verify](https://app.vbase.com/verify)
2. Select the file you wish to validate
3. The Verify App will check all relevant blockchain transactions for your file's content ID
4. If found, the app will display the stamp details.

#### What happens under the hood when you verify a file

When you select a file to verify, the application uses your browser to calculate the file's digital fingerprint (SHA3 Hash). Next, vBase Verify checks whether this digital fingerprint has previously been registered in a vBase smart contract transaction and returns the result.



***

#### User Notes

* Your browser calculates your file's SHA3-keccak256 content ID on your local computer. Your files remain local and secure and are never seen by vBase.
* Stamp details are stored on the Polygon blockchain and can be verified independently of vBase by using off-the-shelf blockchain query tools like Dune Analytics.
