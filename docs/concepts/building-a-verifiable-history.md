# Building a verifiable history

This page describes **best practices for setting up a stamping process** so that the resulting audit trail is as useful as possible to future consumers and verifiers.

The core principle is that the audit trail should faithfully reflect the data product's production history. The goal is to answer a user's question: **Had I been receiving this data live all along, what would I have seen at each point in time?**

That means stamping production releases and revisions as they occur and preserving the exact stamped content.

For an overview of Stamps, Content IDs, Collections, and verification, see [How vBase Works](../getting-started/how-vbase-works.md).

## Stamp the production record

Stamp the content that you would have delivered to a live customer, user, or client at that point in time.

For example:

- A data provider might stamp each day's client data delivery
- A trading strategy might stamp each new trade or portfolio rebalance
- A forecasting model might stamp each published forecast
- A research process might stamp each recommendation or report
- A model developer might stamp successive model outputs, model versions, or parameter updates

### Choose the right unit to Stamp

A production release may consist of one file or many. Choose a stamping unit that corresponds to what a customer would recognize as the release.

For example:

- If each file is independently meaningful and delivered separately, stamp the individual files.
- If customers receive a single archive, the archive itself may be the natural object to stamp. 

Also consider stamping important inputs that could later become useful products or diligence artifacts themselves. For example, a national inflation forecast may be built from state-level estimates that customers later want to evaluate or purchase separately. This does not mean stamping every intermediate artifact. Focus on inputs with a reasonable chance of being independently valuable.


## Use Collections for each dataset or product

A **Collection** groups the Stamps for a particular dataset, strategy, model, portfolio, or other product into a single audit trail, allowing its recorded history to be evaluated as a whole.

Assign each production release or revision for that product to the same Collection.

If you have—or expect to have—multiple distinct products, use separate Collections for each one. For example, a data provider offering three different datasets would generally maintain three separate Collections rather than combining them into one.

Avoid mixing unrelated datasets, strategies, models, or experimental activity in the same Collection.

Broader questions about other products or histories maintained by the same producer are addressed through the vBase identity and verification model. See [Verification and Trust Model](verification-and-trust-model.md).


## Preserve the exact stamped content

Future verification requires access to the exact content represented by each Stamp. Make sure the exact content you stamp remains available for later verification, either in your own storage or using optional vBase storage. 

Avoid relying on recreating data later. Even if a reconstructed file contains the same logical data, differences in formatting, row ordering, or metadata can produce a different hash (Content ID).

Stamps remain part of a Collection's audit trail even if the underlying content is lost, and the remaining objects can still be verified individually. However, if a stamped object is missing, a verifier will be unable to validate the Collection's full audit trail because one or more audit trail records will be unaccounted for. How significant this is depends on the use case and the role of the missing data in the history.

vBase can optionally store copies of stamped objects through the Web App and API, which can be useful as a backup or when you prefer to maintain the audit trail and corresponding content together.

For details on when vBase receives or stores content, see [Privacy and Data Handling](privacy-and-data-handling.md).



## Stamp promptly

Create a Stamp as close as practical to the point when the relevant output is finalized or made available.

A Stamp establishes that the exact content represented by its Content ID existed **no later than its blockchain timestamp**. It does not establish the exact moment the content was originally created.

For predictive data, forecasts, trading signals, and similar products, earlier timestamps are often more valuable because they establish that the prediction or signal existed before more of the outcome was known. A forecast stamped two months before an event generally provides more useful evidence of predictive value than the same forecast first stamped the day before the event.


### If you miss a Stamp

Occasional gaps are to be expected in any production data pipeline. If no data release was produced, there is nothing to stamp; simply resume stamping when production resumes.

If a release was produced but not stamped, stamp it when the omission is discovered and continue the normal process. The resulting timestamp will establish that the content existed by the later stamping time.

A missed Stamp does not invalidate the rest of the audit trail. An audit trail with verified provenance for 99% of production releases is still far more informative than one with no independently verifiable history.




## Record revisions and corrections

Historical data, estimates, and model outputs are often revised or corrected after publication.

Stamp revisions and corrections when they occur. Each revised version receives a different Content ID and a new Stamp, while the earlier Stamps remain permanently visible in the audit trail. This preserves the point-in-time revision history.

For example:

```text
Jan 5    Original release stamped
Jan 12   New release stamped
Jan 15   Correction to Jan 5 release stamped
```

This distinction matters because a future consumer may want to answer two different questions:

- What does the dataset say today?
- What would I actually have known on January 10?

A well-maintained audit trail can answer both. 

Revisions and corrections should generally remain in the same Collection as the original history so their relationship to that history is preserved.

In many datasets, it is clear from the data itself which earlier values or records a revision replaces. Where that relationship is not obvious, make it explicit in the data or if necessary in the accompanying metadata.


## Backfilled data

A backfill is historical data from before the live audit trail period.

Backfilled data may be stamped when useful—for example, to establish a verifiable baseline for the dataset as it exists when the vBase audit trail begins. It is not necessary to stamp a backfill if the objective is simply to build a verifiable history going forward.

A Stamp on backfilled data establishes only that the content existed **by the time it was stamped**. It cannot establish that the same content existed during the earlier period the data describes.

For example:

```text
Data describes:        June 2024
First vBase Stamp:     August 2026

Established by Stamp:  Content existed by August 2026
Not established:       Content existed in June 2024
```

From the point live stamping begins, subsequent data releases can build a verifiable point-in-time audit trail.


## Full snapshots vs. incremental updates

A recurring dataset can be stamped as either **full snapshots** or **incremental updates**.

- **Full snapshots** contain the complete dataset state at each release.
- **Incremental updates** contain only new or changed information.

Either approach can work. The important requirement is that the stamped sequence contains enough information to reconstruct the dataset as it would have appeared at any point in the recorded history.

Use a consistent approach and make the meaning of each stamped object clear.



## Automate recurring workflows

For recurring production data, automation is usually the best way to stamp promptly and consistently.

The vBase Python API Client, REST API, and other integrations can make stamping part of the same production workflow that generates or publishes the data. This reduces timestamp delays and the risk of missed releases caused by manual processes.

[Choose an integration for automated workflows](../getting-started/choose-how-to-use-vbase.md).


## Keep testing separate from production

Test Stamps can be useful while setting up a workflow. Consider using a separate testing account or a clearly designated test Collection before beginning the live audit trail.

## A recommended workflow

For many recurring workflows, the basic pattern is:

1. **Generate the production output as usual**
2. **Stamp it at or as close as practical to delivery, assigning it to the appropriate Collection**
3. **Preserve the exact stamped content**
4. **Stamp revisions and corrections as they occur**
5. **Continue the process consistently**

The result is a dataset or product with an independently verifiable record of its timing, integrity, revision history, and completeness.


## Next steps

- [Learn How vBase Works](../getting-started/how-vbase-works.md)
- [Use the vBase Stamper](../web-tools/how-to-use-vbase-stamper.md)
- [Verification and Trust Model](verification-and-trust-model.md)
- [Privacy and Data Handling](privacy-and-data-handling.md)