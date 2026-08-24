---
description: 'Establishing Data Provenance with vBase: A Secure and Lightweight Approach'
---

# How vBase Works


## What Exactly can vBase Verify?

vBase tools compare a dataset to a tamperproof data history. Doing so conclusively verifies: 

- The dataset is complete&mdash; no data is extra or missing. 
- The exact timestamp of when each record was created.
- The total number of other datasets the data producer has created. 

## How is the Data History Created?

vBase tools help anyone create and verify timestamped data fingerprints, which can be used to prove when someone had particular data. We call these timestamped data fingerprints vBase Stamps. 

Conceptually a vBase Stamp is just a unique fingerprint of your data published with your signature at an independently verifiable time. 

vBase also enables the aggregation of Stamps into Collections. Each Collection is a set of Stamps with independently verifiable membership. 


## What is a Data Fingerprint? 

A data fingerprint is a standardized mathematical calculation run over the binary representation of any data or digital object which outputs  a fixed-length string. 

[Cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function) can be used to transform any data into a 256-bit code. This 256-bit code serves as a unique fingerprint of the underlying data, since if even a single 1 or 0 in the data were changed, the hash function would output a completely different 256-bit code. 

As default, vBase uses the [SHA-3 function](https://en.wikipedia.org/wiki/SHA-3) for cryptographic hashing. 

## How does vBase Make Verifiable Timestamps? 

vBase publishes data fingerprints to a public blockchain. The timestamp of when a block containing a particular fingerprint is added is established through the consensus of blockchain nodes. This timestamp is verifiable against any copy of the blockchain and cannot be altered without disrupting the integrity of the entire chain.

As a result, this timestamp is globally verifiable and tamperproof. 

## What Role Does vBase Play? 

Anyone can calculate a hash of their data and publish that hash to a blockchain, they don't need vBase for this. However, this process is cumbersome, involving blockchain wallets, cryptocurrencies, querying blockchain nodes, etc. 

vBase tools make this verification process simple and scalable, making it accessible for both scaled applications and non-technical users. 