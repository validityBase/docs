---
description: 'Establishing Data Provenance with vBase: A Secure and Lightweight Approach'
---

# How vBase Works

## What is a vBase Stamp

vBase operates by creating eternally verifiable cryptographic commitments that we call vBase Stamps.&#x20;

A vBase Stamp includes the following:

1. The blockchain address of the user making the stamp
2. A unique content identifier of the underlying data records (aka a data fingerprint, aka a cryptographic hash)
3. A collectionID, which is a hash  of the dataset name to which the record belongs (see [What is a Collection](#collection) below.

This cryptrographic information is published to a public blockchain and serves as a fingerprint for the underlying data. When this fingerprint is published to a public blockchain, its time of publication is established by distributed consensus and thus serves as an **verifiable tamper-proof timestamp** for the underlying data. &#x20;

Here is a graphical example of a vBase Stamp&#x20;

<figure><img src="vBase Stamp 3.png" alt=""><figcaption></figcaption></figure>



## What is a vBase Collection <a href="#collection" id="collection"></a>

vBase enables the aggregation of on-chain Stamps into Collections. Each Collection is a set of Stamps with verifiable membership, assured and verifiabvle via on-chain cryptographic commitments.

By aggregating Stamps into Collections, you can identify which of your on-chain fingerprints belong to which dataset. This is useful in verifiably defining individual trading strategies, experiments, sensor readings, risk models, etc. 


## Primary Benefits

Using vBase Stamps and Collections, a data user receiving a dataset can verify the following: 

- The dataset is complete&mdash; no data is extra or missing. 
- The exact timestamp of when each record was created.
- The total number of other datasets the data producer has created. 



## Basic Example

If you want to prove when you created invention.pdf, vBase Stamping the file generates a unique fingerprint and records it on a public blockchain, creating a verifiable, permanent timestamp for the file.

Anyone can later verify this timestamp by recalculating the file's fingerprint and checking when the fingerprint was previously published. 

NOTE: invention.pdf was never shared as part of the stamping process, it remained local on your computer. 


## Expanded Example 

Imagine you generate a new CSV file daily that records all stock trades executed by your algorithm. Each day, after the trades are finalized, you vBase Stamp the CSV file, creating a unique fingerprint and recording it on the blockchain. You assign each CSV to a Collection called "My Winning Strategy"

Over time, this process builds a verifiable track record of your trading strategy. Anyone can later audit the performance of "My Winning Strategy" by checking the sequence of timestamps and verifying that no historical CSVs were modified, no trades have been added and no trades are missing&mdash; ensuring transparency and integrity. 

vBase also makes verifiable whether you ran 100 other strategies or only "My Winning Strategy". 

While this can be verified independently of vBase by comparing the public blockchain records to the data, vBase provides an easy-to-use robust interface for executing the verification process. 


## High-level overview of the vBase process

vBase serves as an easy button for creating and validating cryptographic commitments. The following chart illustrates a typical vBase data production and validation process:

<figure><img src="vBase_ProcessSummary_NonTech.svg" alt=""><figcaption><p>The vBase Process</p></figcaption></figure>



A few comments on each step of the process below:&#x20;

1. vBase does not interfere with the existing data production process. Producers generate and store data using their established processes and systems.
2. When producers wish to establish data provenance, they call lightweight vBase commitment APIs. The APIs can receive data content IDs (fingerprints, hashes) or be granted read access to the data to perform all the necessary operations automatically.
3. The vBase commitment service records content IDs and timestamps that establish data integrity and provenance while preserving privacy. The service is provided by a smart contract running on a blockchain, making the resulting commitments highly secure and tamper-proof and enabling long-term validation by any party.
4. vBase does not disrupt the existing data sharing and distribution processes. Producers can continue sharing data with consumers using their familiar processes without interference. Similarly, vBase respects consumers' data access and does not disturb their established procedures.
5. Likewise, vBase does not interfere with consumers' data access.
6. Consumers seeking to validate data and establish its provenance can easily achieve this through the lightweight vBase verification APIs.
7. These APIs perform data checks against the recorded commitments, thereby validating what data was known in the past and precisely when it became known.

By adopting vBase, organizations can ensure data provenance and maintain their data's reliability and security without disrupting their current workflows. This non-intrusive approach guarantees data integrity while preserving user privacy, ultimately enhancing trust and accountability throughout the data lifecycle.
