# Building a Live Ticker for your Fund or Strategy

## Introduction

validityBase is a trusted platform for building shareable live verified tickers for any trading strategy. 

vBase creates a point-in-time record of your portfolios to build a live Ticker. These portfolios are saved and then used as the basis for calculating live investment performance dashboards for your strategy. 

This guide will walk you through the process of getting a live veriifed vBase Ticker for your strategy.


## Steps to Verify a Track Record

### Step 1: Generate a CSV of your **Current** Portfolio

vBase ingests portfolio data from simple CSVs. Below is an example of a portfolio file. Your file should follow this format, using any widely recognized SEC Master for ticker symbols.

Use this format to generate a CSV file of your current portfolio. 

<<Example File>>

<<Screenshot>>


### Step 2: First-time Setup

1. Go to [app.vbase.com](https://www.vbase.com/)
2. If you don't yet have an account, register for a free account by clicking [Create an Account](https://app.vbase.com/accounts/signup/) in the upper right and following the registration process. 
3. Sign in to your vBase Account
4. Go into your user profile, click the Collections tab. Shortcut: https://app.vbase.com/profile/#collections 
5. Create a collection name for the strategy you plan to stamp. This is the strategy name that will be visible publicly when you share your live ticker. 



### Step 3: Stamping your Portfolio

Stamping your portfolio means calculating the digital fingerprint of the CSV file you created in Step 1,  and publishing that fingerprint to a public blockchain. By publishing the fingerprint, you assign an independently verifiable timestamp to your portfolio. 

vBase can do this via our API, our Excel tools, or our web application. This guide will explain how to create Stamps in the web application. See these docs for instructions to use the [API] and the [Excel tools]. 



1. Go to Stamp page (https://app.vbase.com/stamp/)
2. Load your portfolio CSV for a particular strategy into the Stamper dialog box
3. Check the box that this Stamp belongs to a Collection
4. Select from the Collection dropdown menu the name of your Strategy
5. Click Make a Stamp
6. Generate and Stamp a new CSV of your portfolio on a regular cadence or each time you have a major rebalance 
<br><br>

**Notes:** 

(1) A digital fingerprint is a SHA3 256-bit [cryptographic hash](https://csrc.nist.gov/glossary/term/cryptographic_hash_function), which provides a unique identifier for your portfolio CSV file without disclosing its contents.

(2) If you ever wish to confirm your Portfolio CSV was properly Stamped, simply load it into the [vBase Verify](https://app.vbase.com/verify/) interface
<br>


### Step 4: View and Share your Live Strategy Ticker

Your Live Ticker is visible at portfolios.vbase.com/?name=StrategyName







### What Makes Your Live Ticker Special 


## Best Practices
- **Ensure Accuracy:** Provide complete and accurate data to avoid discrepancies.
- **Use Secure Methods:** Upload data through secure channels to maintain confidentiality.
- **Review Regularly:** Periodically verify track records to ensure ongoing transparency.
- **Cross-Check:** Compare reports with internal records to confirm accuracy.

## Conclusion
ValidityBase simplifies and enhances the verification of track records, ensuring credibility and trust in fund performance. By following the steps above, you can confidently validate financial histories and make informed decisions.

For further assistance, visit [ValidityBase Support](https://validitybase.com/support).
