---
description: Why vBase publishes audit trail records to a public blockchain instead of relying on a trusted third party
---

# Why public blockchains?

vBase's goal is to create data audit trails that remain credible and accessible, allowing data consumers to independently verify the provenance of historical data.

A public blockchain is a database whose history is maintained by a distributed network rather than by any single person or institution. Records are ordered and timestamped through the network's consensus process, creating a shared public ledger.

The primary advantage of using a public blockchain is that it allows records to be **publicly timestamped and independently verified without requiring the verifier to rely on either vBase or the data producer**.

vBase uses [Polygon](https://polygon.technology/) as its default public blockchain and handles the blockchain mechanics for users, so most never need to interact with blockchains directly.

For an overview of how Stamps, Content IDs, and Collections work, see [How vBase Works](../getting-started/how-vbase-works.md).


## Publicly timestamped, independently verifiable records

For many datasets, strategies, forecasts, and models, the critical question is not simply what the data says, but **what it said at a particular point in time**.

A timestamp recorded only in a producer's own system requires a future consumer to trust that producer's historical records. A timestamp maintained only by vBase would simply shift that trust to vBase.

A public blockchain provides an external, publicly accessible record that neither party can change. When a vBase Stamp is published to a blockchain, the record establishes that its Content ID existed **no later than the blockchain timestamp**.

One way to think about a blockchain is as a public-notice service that allows automated publication and verification. Information can be published at a particular point in time, and anyone can later independently confirm what was published and when.

This is particularly valuable for predictive products. A forecast, signal, or model output is more meaningful when a consumer can independently confirm that it existed before the outcome it predicts.

## No walled garden

**You do not need vBase to verify a vBase Stamp.**

vBase makes creating, finding, and validating Stamps convenient, but the underlying audit trail records are public rather than locked inside a vBase database or proprietary verification service. Anyone can inspect the blockchain records independently without a vBase account or permission from vBase.

Because both the records and the underlying blockchain interfaces are public, the audit trail does not depend on vBase continuing to operate. If vBase ceased to exist, existing Stamps could still be independently validated, while technically capable users and third parties could create, retrieve, and validate compatible records—or build their own tools to do so—without relying on vBase software or coordination.

vBase is the application layer that makes the system easy to use, not the custodian or gatekeeper of the underlying evidence.

For more detail, see [Verification and Trust Model](verification-and-trust-model.md).

## Persistent provenance

A vBase Stamp does not become stale as time passes. This is useful for data that may need to be verified years later. 

With trusted third-party or certificate-based approaches, older records can become difficult to verify over time. With blockchains, as long as the underlying content (stamped data) and the relevant blockchain records remain available, the content's hash (Content ID) can be calculated and matched against its audit trail records. 

Public blockchain records are highly durable because their history is replicated across many independent participants and archival services, and any surviving copy can be independently checked for integrity.

## Portable provenance

Because the audit trail is recorded separately on a public blockchain, it does not need to travel with the underlying data.

A file or dataset does not need to carry a special certificate, embedded provenance metadata, or sidecar file in order to remain verifiable. It can move through ordinary storage and delivery systems while the audit trail remains separately available.

For example, a file might pass from:

```text
Producer → Customer → Downstream User → Archive
```

As long as the data itself doesn't change as it moves, any later holder can calculate its Content ID and locate the corresponding public audit trail records.

## Why not use a trusted third party?

A trusted third party can provide credible timestamping and integrity verification, but doing so creates an ongoing dependency on that intermediary to preserve the records, operate the verification infrastructure, provide access to the evidence, and remain trusted by market participants.

vBase uses a public blockchain to provide the convenience of a trusted third party without becoming the source of truth. The producer and verifier can instead refer to the same publicly available evidence.

## vBase hides the blockchain complexity

The properties of public blockchains are useful for audit trails, but interacting with blockchains directly can require wallets, transaction fees, smart contracts, and specialized infrastructure.

vBase abstracts that complexity behind familiar Web and API interfaces. In hosted workflows, users do not need to acquire cryptocurrency, submit blockchain transactions manually, or operate blockchain infrastructure.

The blockchain is therefore part of the **trust infrastructure**, not something most users need to interact with directly.

The underlying content itself does not need to be published to the blockchain. For details on what vBase receives, stores, and publishes in different workflows, see [Privacy and Data Handling](privacy-and-data-handling.md).

## Learn more

- [How vBase Works](../getting-started/how-vbase-works.md)
- [Verification and Trust Model](verification-and-trust-model.md)
- [Privacy and Data Handling](privacy-and-data-handling.md)
- [Technical Architecture](technical-architecture.md)