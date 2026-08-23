# Verification and Trust Model

vBase creates **independently verifiable public evidence** for establishing the provenance of data and digital objects. The core audit trail does not require a verifier to rely on either vBase or the data producer as the source of truth. 

vBase may also provide additional metadata and services—such as identity verification, hosted storage, and validation reports—that supplement the public evidence and make it easier to use in verification workflows.

This page explains where the different parts of a vBase verification come from and what each establishes.

For a broader overview of Stamps, Content IDs, Collections, and verification, see [How vBase Works](../getting-started/how-vbase-works.md).

## How Data Is Matched to Stamps

Each vBase Stamp contains a cryptographic hash of the stamped data, which vBase calls a **Content ID**. The Content ID acts as a digital fingerprint: even a small change to the underlying content produces a different hash.

Example Content ID: `0xf99f54f22ae53ed63d4afe199a1de5fe8981d38c50da0302b8104f3d279531c2`

By default, vBase uses **SHA3-256**, a publicly documented cryptographic hashing algorithm [standardized by the U.S. National Institute of Standards and Technology (NIST)](https://csrc.nist.gov/pubs/fips/202/final). SHA3-256 produces a 256-bit hash and is designed as a one-way cryptographic function resistant to collisions and second preimages. As a result, a Content ID does not encode the underlying content, and finding different content that matches an existing Content ID is computationally infeasible.

To verify data, a verifier calculates its Content ID and compares it with the Content ID in the Stamp. A match provides strong cryptographic evidence that the data being evaluated is the same data represented by the publicly timestamped audit trail record.

Because SHA3-256 is a public standard, this calculation does not require vBase software. The Web App can hash files directly in the user's browser, and developer integrations can calculate Content IDs locally and submit only the hash, enabling workflows in which the underlying data is never sent to vBase.

For more detail, see [Privacy and Data Handling](privacy-and-data-handling.md).


## Collection and Dataset Completeness

A **Collection** groups the Stamps associated with a particular dataset, strategy, model, portfolio, or other product. It does this by publishing a **Collection ID** as part of each Stamp. Stamps associated with the same Collection ID therefore form a single identifiable audit trail, typically representing a discrete dataset or product.

By default, vBase uses the SHA3-256 hash of the Collection Name as the Collection ID.

When a verifier is presented with a dataset or data product, they can compare the data with the Collection's audit trail. If each presented object corresponds to a Stamp and the relevant Stamps in the Collection are all accounted for, the verifier can establish that the presented dataset is complete relative to that Collection.

The blockchain timestamps additionally provide independently verifiable evidence of **when each object in the dataset existed**, allowing the verifier to validate the dataset's point-in-time history.

## Identity and Attribution

Collection verification can establish the completeness and point-in-time integrity of a particular dataset or product. A separate challenge for consumers evaluating predictive data is determining whether the history being presented is the producer's only history or one selected from among several. For example, is the trading track record being evaluated the only one the provider maintained, or simply the best-performing one?

vBase addresses this critical question through three layers of identity attribution.

### Layer 1 - Blockchain Address: Complete Public Activity

Each vBase Stamp is **digitally signed** by the Stamper's blockchain address. Because a blockchain is a public ledger, a verifier can independently inspect the complete set of vBase Stamps and Collections made by that address.

### Layer 2 - vBase Identity: Links One or More Blockchain Addresses

A vBase identity can use one or more blockchain addresses. vBase links all addresses used by that identity so their activity can be evaluated together rather than appearing as unrelated histories.

### Layer 3 - Identity Verification: Links vBase Identity to a Real-World Identity

vBase can verify the real-world person or organization associated with a vBase identity. For a verified producer, a consumer can see the vBase audit trails associated with that identity across all of its linked blockchain addresses.

This helps address **selective presentation or cherry-picking**. A consumer evaluating one Collection can see the other Collections associated with the same verified identity and judge the presented history in the context of the producer's broader vBase record.

### Evidentiary Basis and Limits

Activity associated with a blockchain address is independently verifiable from the public blockchain records. The linkage of one or more blockchain addresses to a vBase identity, and the verification of that identity as a particular person or organization, are currently provided by vBase and are not independently verifiable from the blockchain alone.

vBase will only verify one vBase identity for a given person or organization. Thus, all identity-verified vBase activity for a producer is associated with a single verified identity. This does not establish that no audit trails by this producer exist outside vBase or at blockchain addresses not linked to a verified vBase identity.

Where independent corroboration of the real-world identity matters, the association between a stamping address and a person or organization can also be supported through external evidence, such as the producer publishing the address on its own website or in a press release.


## Independent Verification

vBase provides tools that automate Content ID calculation, Stamp lookup, Collection validation, and display of available identity and Collection metadata:

- [vBase Verify via Web App](../web-tools/how-to-use-vbase-verify.md)
- [Python API Client](../getting-started/api-py-quickstart.md)
- [REST API](../../vbase-django-tools/api/rest-api-user-guide.md)

These tools are conveniences, not the source of the underlying public evidence. Technically capable users can inspect the blockchain records independently or build their own software against the public blockchain interfaces.

For instructions on validating blockchain records directly, see [Independent Blockchain Verification](../technical-reference/independent-blockchain-verification.md).

## Trust Model at a Glance

The most important verification claims and their sources of evidence can be summarized as follows:

| Verification claim | What establishes it | Independently verifiable? |
|---|---|---|
| **The presented data is the same data that was stamped** | Recalculating the content's SHA3-256 Content ID and matching it to the Content ID in the Stamp | **Yes** |
| **The data existed by a particular time** | The Stamp's publicly recorded blockchain timestamp | **Yes** |
| **A dataset is complete relative to its point-in-time audit trail** | Matching the presented objects to the Stamps associated with the Collection ID and accounting for the relevant Collection records | **Yes** |
| **The complete vBase activity of a blockchain address** | The complete public blockchain history associated with that address | **Yes** |
| **One or more blockchain addresses belong to a single vBase identity** | vBase account and identity records linking those addresses | **No** — this linkage is currently provided by vBase |
| **A vBase identity represents a particular real-world person or organization** | vBase's identity-verification process | **No** — currently provided by vBase |


## Next Steps

- [How vBase Works](../getting-started/how-vbase-works.md)
- [Building a Verifiable History](building-a-verifiable-history.md)
- [Why Public Blockchains?](why-public-blockchains.md)
- [Privacy and Data Handling](privacy-and-data-handling.md)
- [Technical Architecture](technical-architecture.md)