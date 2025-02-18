# What is a vBase Stamp? 

vBase tools help anyone create and verify timestamped data fingerprints, which can be used to prove when someone had particular data. We call these timestamped data fingerprints vBase Stamps. 

Conceptually a vBase Stamp is just a unique fingerprint of your data published with your signature at an independently verifiable time. 

vBase also enables the aggregation of Stamps into Collections. Each Collection is a set of Stamps with independently verifiable membership. 


## What Gets Published?

A vBase Stamp publishes the following:

1. The blockchain address of the user making the stamp
2. A fingerprint of the underlying data records (aka a content identifier, aka a cryptographic hash)
3. **(optional)** A collectionID, which is a hash  of the dataset name to which the record belongs see [what is a collection](#collection) below.


Here is a graphical example of a vBase Stamp&#x20;

<figure><img src="vBase Stamp 3.png" alt=""><figcaption></figcaption></figure>



## What is a vBase Collection? <a href="#collection" id="collection"></a>

vBase also enables the aggregation of Stamps into Collections. Each Collection is a set of Stamps with independently verifiable membership.

By aggregating Stamps into Collections, you can identify which of your on-chain fingerprints belong to which dataset. This is useful in verifiably defining datasets like trading strategies, experimental results, sensor readings, risk models, etc. 




