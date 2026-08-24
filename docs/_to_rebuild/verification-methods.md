# Stamp Verification Methods

A vBase stamp proves that your file or content existed on or before the date/time it was recorded on a public blockchain. Stamp verification requires you only to possess a copy of the underlying content/file. 


## Why This Matters
Traditional approaches to proving authenticity depend on **centralized databases** or **storing receipts** that can be lost, altered, or disputed.  

With vBase:  
- Verification is **independent** — anyone can check a file against the blockchain.  
- There’s **no single point of trust** (no company-controlled registry you must rely on).  
- There’s **no need to keep track of certificates or receipts** — the blockchain record itself is the proof.  

This makes vBase the only tool that delivers **reliable, permanent verification of content authenticity** without relying on an intermediary.  


## Quick Reference

| Method | Category | Input Needed | Where to Verify |
|--------|----------|--------------|-----------------|
| Method 1 | With vBase | Original file | [vBase Verify](https://app.vbase.com/verify) |
| Method 2 | With vBase | ContentID (hash) | `https://app.vbase.com/verify?cid=<ContentID>` |
| Method 3 | Without vBase | SHA3-256 hash | [Dune dashboard](https://dune.com/vbase/stamp-search) |
| Method 4 | Without vBase | Transaction ID | [PolygonScan](https://polygonscan.com/) |
| Method 5 | Without vBase | ContentID, address, timestamp | vBase Smart contract |
| Method 6 | vBase API | ContentID (hash) | [REST API docs](https://docs.vbase.com/getting-started/rest-api-user-guide) |
| Method 7 | vBase API | ContentID (hash) | [Python SDK docs](https://docs.vbase.com/python-sdk/index) |



## What You’ll Need
- The **original file** that was stamped  
- The **hashing algorithm** used. By default vBase uses `SHA3-256`  


## With vBase Tools

### Method 1: vBase Verify (Recommended)
1. Go to [app.vbase.com/verify](https://app.vbase.com/verify).  
2. Upload your file.  
3. vBase computes the SHA3-256 hash and checks it against the blockchain record.  
4. If a matching stamp is found, you’ll see:  
   - The **timestamp (UTC)**  
   - The **transaction ID**  
   - The **blockchain address**  


### Method 2: Verify via ContentID
1. Compute your file’s SHA3-256 hash using any hashing tool (e.g., [emn178 SHA3-256 tool](https://emn178.github.io/online-tools/sha3_256_checksum.html)) or using the OpenSSL library. 
2. Copy the **ContentID (hash)** and append it to the verify URL:  
   ```
   https://app.vbase.com/verify?cid=<ContentID>
   ```   


## Without vBase Tools

### Method 3: Dune Dashboard
1. Compute your file’s SHA3-256 hash using any hashing tool (e.g., [emn178 SHA3-256 tool](https://emn178.github.io/online-tools/sha3_256_checksum.html)).  
2. Input the hash into the [vBase Dune dashboard](https://dune.com/vbase/stamp-search).  
3. Confirm that the returned record matches your certificate details (timestamp, submitter address).  


### Method 4: Blockchain Explorer
1. Use the **Transaction ID** from your stamping transaction.  
2. Open [PolygonScan](https://polygonscan.com/) and input this transaction id.  
3. Locate the data hash embedded in the transaction input.  
4. Compare the published against the hash of your content.  


### Method 5: Smart Contract Validation
1. Identify the vBase smart contract on **Polygon Mainnet (Chain ID: 137)**:  
   [0x80D2AB15EE5b91cD7A183b8938dC277fE6191F7d](https://polygonscan.com/address/0x80D2AB15EE5b91cD7A183b8938dC277fE6191F7d)  
2. Call the validation function with:  
   ```
   validate(cid, user_address, timestamp)
   ```  
   - `cid`: your file’s ContentID (hash)  
   - `user_address`: the stamper's blockchain address  
   - `timestamp`: the timestamp (in blocks) for the stamp  (note, timestamp can be approximate and you can iterate over many timestamps)
3. Verify that the function returns `true`.  




## API Methods

### Method 6: vBase REST API
- Use the vBase REST API to query a stamp by its ContentID.  
- See the [REST API documentation](https://docs.vbase.com/getting-started/rest-api-user-guide) for endpoint details, authentication, and response formats.  

### Method 7: vBase Python SDK
- Install the vBase Python SDK and call the built-in verification function with a ContentID.  
- See the [Python SDK documentation](https://docs.vbase.com/python-sdk/index) for usage examples.  




## Notes on Validation
- **If a stamp is found:** Your file existed on or before the recorded timestamp.  
- **If no stamp is found:** No blockchain record exists for that file.  
- **Privacy:** Only the cryptographic fingerprint (hash) is stored on-chain. File contents are never exposed. 