---
description: How Content IDs, Stamps, and Collections form vBase audit trails
---

# Stamps and collections

vBase audit trails are built up from individual audit trail records (**Stamps**). Each Stamp is a public, timestamped record that identifies underlying data using cryptographic fingerprints called **Content IDs**.

Related Stamps can be organized into **Collections**, allowing a producer to build a single audit trail for a dataset, trading strategy, portfolio, model, research process, or other body of work.

This page explains the building blocks of a vBase audit trail. For a higher-level overview, see [How vBase Works](../getting-started/how-vbase-works.md).

## Content IDs

A **Content ID** is a cryptographic fingerprint, or hash, of a file or other digital object.

By default, vBase uses the NIST-standard **SHA3-256** hashing algorithm. A Content ID is a 256-bit hexadecimal value, for example:

`0xf99f54f22ae53ed63d4afe199a1de5fe8981d38c50da0302b8104f3d279531c2`

The same data always produces the same Content ID. Changing even a single byte of the underlying data produces a different Content ID.

This means a Content ID identifies the exact data it represents without revealing the underlying data itself.

Content IDs can be calculated using standard, widely available hashing libraries. Depending on the workflow, vBase can calculate the Content ID from the underlying data or receive a Content ID calculated locally by the producer. Because Content IDs can be calculated locally, the underlying data never needs to be sent to vBase.

A future consumer holding the same data can independently recalculate its Content ID and compare it with the Content ID recorded in the public audit trail.

For more detail on how Content IDs support verification, see [Verification and Trust Model](verification-and-trust-model.md).

## Stamps

A **Stamp** is an individual public, timestamped audit trail record for a file or other digital object.

A Stamp contains:

- **Content ID** — the cryptographic fingerprint of the stamped data
- **Stamper blockchain address** — the blockchain address associated with the account creating the Stamp
- **Collection ID**, where applicable — identifies the Collection to which the Stamp belongs

Publishing the Stamp to a public blockchain creates a blockchain transaction with an independently verifiable publication timestamp.

A Stamp therefore provides evidence that the exact data represented by its Content ID existed **no later than the blockchain publication timestamp**.

The underlying data itself is not included in the Stamp.

### Stamps are permanent records

Once a Stamp is published, the existing blockchain record cannot be edited or replaced, and is stored redundantly across a distributed network. 

For revisions in the data itself, a new Stamp is created with the Content ID of the revised data. The earlier Stamp remains part of the historical record.

For example:

```text
January 10
Jan10_ModelOutput.csv → Content ID A → Stamp A

January 15
Jan10_ModelOutput_revised.csv → Content ID B → Stamp B
```

The two Stamps preserve separate point-in-time records for the two versions of the data and are linked via the Collection ID, which is explained below.

### Stamps identify the Stamper address

Each Stamp is associated with the blockchain address of the **Stamper** that created it.

In some workflows, vBase also associates blockchain addresses with vBase identity information, helping consumers understand which producer created the records they are reviewing.

The blockchain address and its activity are independently visible on the public blockchain. The linkage between blockchain addresses and vBase or real-world identities is provided separately by vBase.

For more detail, see [Verification and Trust Model](verification-and-trust-model.md).

## Collections

A **Collection** is the set of Stamps created by a particular Stamper Address that were each assigned the same **Collection ID** *at the time they were stamped.*

The Collection ID is recorded as part of each Stamp, so membership in a Collection is established when the Stamp is created and becomes part of the public audit trail.

A Collection typically represents an identifiable dataset, trading strategy, portfolio, model, research process, or other body of work whose history the producer wants to maintain as a single audit trail.

For example:

```text
Product: US Inflation Forecasts

January Forecast  → Stamp A │ Stamper address: 0xAlice │ Collection ID: XYZ
February Forecast → Stamp B │ Stamper address: 0xAlice │ Collection ID: XYZ
March Forecast    → Stamp C │ Stamper address: 0xAlice │ Collection ID: XYZ
April Forecast    → Stamp D │ Stamper address: 0xAlice │ Collection ID: XYZ
```

Together these Stamps form the Collection of audit trail records for the dataset: US Inflation Forecasts

### Collection IDs

A **Collection ID** is the identifier recorded in each Stamp that establishes its Collection membership.

By default, vBase calculates the Collection ID as a SHA3-256 hash of the Collection name specified by the stamping account.

The Collection is defined by both the **Stamper address** and the **Collection ID**. Two different Stamper addresses using the same Collection ID do not form a single Collection.

Because the Collection ID is part of the public Stamp, an existing Stamp cannot later be reassigned to a different Collection.

### Collections build a historical record for a dataset or product 

As a producer creates new data, updates, or revisions, each can be stamped using the same Collection ID.

Over time, the resulting set of Stamps forms a point-in-time audit trail for that dataset or product.

Examples include:

- Successive releases of a dataset
- A trading strategy or signal history
- Portfolio rebalances over time
- A model's historical forecasts or predictions
- Successive outputs from a research process

Each Stamp remains independently verifiable, while the Collection allows the records to be evaluated together as one history.

### Collections support completeness verification

Collections make it possible to verify more than individual records.

A consumer can compare a presented dataset or archive with the Stamps recorded in the Collection and determine whether:

- Each presented object matches a Stamp
- Each relevant Stamp in the Collection is represented in the presented data
- Any records are missing or extra relative to the recorded Collection history

For example, if a Collection contains 100 Stamps, a consumer presented with the corresponding historical dataset can verify whether there is a one-to-one correspondence between the dataset and the Collection record.

This allows Collection verification to establish both the point-in-time integrity and the completeness of the presented history **relative to the full set of Stamps recorded in that Collection**.

For best practices on deciding what should belong to a Collection and maintaining a useful point-in-time history, see [Building a Verifiable History](building-a-verifiable-history.md).

### Collections are optional

A Stamp does not need to belong to a Collection.

Standalone Stamps remain independently verifiable and may be appropriate when there is no larger sequence or body of work to organize.

Collections are most useful when a producer expects to create multiple related Stamps over time and wants those records to form a single identifiable audit trail.

## How the pieces fit together

At a high level:

```text
Underlying Data       Stamping Account       Collection Name
       │                     │                     │
       ▼                     ▼                     ▼
  Content ID         Blockchain Address      Collection ID
       │                     │               (if assigned)
       └─────────────────────┼─────────────────────┘
                             ▼
                           Stamp
           (public, timestamped audit trail record)
```

The **Content ID** identifies the underlying data.

The **Stamper Address** identifies the blockchain address that created the Stamp.

The **Collection ID**, when assigned, identifies the audit trail to which the Stamp belongs.

The **Stamp** is the public, timestamped audit trail record containing these identifiers.

A **Collection** is the set of Stamps created by the same Stamper address that share the same Collection ID.

Together, these building blocks allow producers to create point-in-time audit trails as data is produced and allow future consumers to independently verify historical data against those records.

## Learn more

- [How vBase works](../getting-started/how-vbase-works.md) — an overview of building and verifying vBase audit trails
- [Building a Verifiable History](building-a-verifiable-history.md) — best practices for creating a useful audit trail over time
- [Verification and Trust Model](verification-and-trust-model.md) — what Stamps and Collection verification establish and why
- [Privacy and Data Handling](privacy-and-data-handling.md) — what information is public and when underlying data is shared with vBase