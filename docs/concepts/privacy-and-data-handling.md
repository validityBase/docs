# Privacy and Data Handling

**Creating a vBase audit trail does not make the underlying data public.** vBase publishes cryptographic fingerprints (known as Content IDs or hashes) of the data to a public blockchain, not the underlying data itself. 

Depending on the workflow, vBase supports two data-handling models:

1. **Local-only** — the Content ID is calculated locally and only the resulting cryptographic fingerprint is sent to vBase. The underlying data remains within the producer's environment and is never shared with vBase.
2. **Privately shared with vBase** — the producer chooses to send vBase data for optional services such as backup storage, performance dashboards, or managed data delivery.

In both models, the underlying data remains private and is never published to the public blockchain.

This page explains what information is public, how local-only workflows operate, and when optional vBase services require access to underlying data.

For the broader system architecture, see [Technical Architecture](technical-architecture.md).

## What Is Public?

The public audit trail records vBase creates contain only cryptographic identifiers:

- **Content ID** — the cryptographic fingerprint of the stamped content
- **Stamper blockchain address**
- **Collection ID**, where applicable

The publication of the audit trail record to a blockchain also creates a transaction record with a publicly verifiable timestamp. 

**The underlying data is never published to the blockchain.**

A Content ID is a SHA3-256 cryptographic hash of the content, not the content itself. For more detail on how Content IDs work, see [Verification and Trust Model](verification-and-trust-model.md).

## Local-Only Workflows

Underlying data does not need to be shared with vBase in order to create an audit trail. Content IDs are calculated locally using widely available hashing libraries. Only the Content ID enters the vBase audit-trail flow; the underlying data remains within the producer's environment.

Because SHA3-256 is a public standard with widely available implementations, any future data consumer with the same underlying data can independently calculate the same Content ID and compare it with the public audit trail. This does not require proprietary vBase software, methodology, or infrastructure.

For example, the vBase Web App calculates a file's Content ID directly in the user's browser, while API users can calculate it within their own environment.

## Sharing Data with vBase

vBase offers optional services that require access to the underlying data:

- **Backup storage** — vBase can retain copies of stamped data for future validation. See [Building a Verifiable History](building-a-verifiable-history.md) for guidance.

- **Performance dashboards for trading signals and portfolios** — vBase can receive portfolio or strategy outputs to build and maintain performance dashboards.

- **Managed data delivery** — for some data providers, vBase helps deliver underlying data to end users as part of a managed delivery workflow.

These are optional convenience and managed-service features layered on top of the core audit-trail system. **If you do not need vBase to provide one of these services, the underlying data does not need to be shared with vBase.**

Content that is privately shared with or stored by vBase remains separate from the public audit trail and is not published to the blockchain.

**Your data remains yours.** When you share data with vBase, its use is governed by our [Terms of Service](https://www.vbase.com/terms-of-service/) and [Privacy Policy](https://www.vbase.com/privacy-policy/). vBase does not acquire ownership of user data or its derivatives, and may use it only as necessary to provide and support the services you have chosen. vBase does not sell user data or use it for unrelated purposes.

## Data Handling by Workflow

Common workflows can be summarized as follows:

| Workflow | Underlying content shared with vBase? | Underlying content made public by vBase? |
|---|---|---|
| **Stamp a precomputed Content ID** | **No** | **No** |
| **Web App: stamp file, storage disabled** | **No** | **No** |
| **Web App: stamp file, storage enabled** | **Yes** | **No** |
| **Web App: stamp text** | **Yes** | **No** |
| **API: submit a precomputed Content ID** | **No** | **No** |
| **API: submit file or data** | **Yes** | **No** |
| **Web App: verify file** | **No** | **No** |
| **Verify by Content ID** | **No** | **No** |
| **Performance dashboard service** | **Yes** | **No** |
| **Managed data delivery** | **Yes** | **No** |

## Related Documentation

- [Technical Architecture](technical-architecture.md)
- [Verification and Trust Model](verification-and-trust-model.md)
- [Building a Verifiable History](building-a-verifiable-history.md)
- [How to Use the vBase Stamper](../web-tools/how-to-use-vbase-stamper.md)
- [How to Use vBase Verify](../web-tools/how-to-use-vbase-verify.md)