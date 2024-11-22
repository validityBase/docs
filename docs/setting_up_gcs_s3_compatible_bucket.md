<!-- omit in toc -->
# Setting up a Google Cloud Storage (GCS) S3-Compatible Bucket

## 1. Introduction

vBase provides a variety of managed services compatible with AWS Simple Storage Service (S3):
- Automated commitment of buckets and objects for data producers (provers)
- Automated validation of buckets and objects for data consumers (verifiers)
- Derived data and dashboards with verified calculation and cryptographically assured provenance

Users of Google Cloud Storage (GCS) can use the following guide to set up GCE datasets to be shared in an S3-compatible manner, enabling read access by vBase managed services.

## 2. Setup Using the Google Cloud Console

Below are the instructions for users of the Google Cloud Console web interface:

### 2.1. Set Up Google Cloud Storage (GCS)

#### 2.1.1. Create a GCS Bucket:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Navigate to **Storage** > **Create Bucket**.
   - Choose a globally unique name for the bucket.
   - Set appropriate permissions and lifecycle rules for your data.

#### 2.1.2. Enable Interoperability with S3:
   - Navigate to **Storage** > **Settings**.
   - Enable **Interoperable Storage Access**.
   - Create an **Access Key** and **Secret Key** for interoperability.

### 2.2. Configure IAM Permissions

#### 2.2.1. Define IAM Roles:
   - Assign role `Storage Object Viewer` to grant the necessary permissions to vBase.
   - Use **Service Accounts** to grant programmatic access.
   
#### 2.2.2. Create IAM Policies:
   - Define bucket policies to restrict or allow access based on conditions like user roles or geographic IP ranges.

## 3. Setup Using the gcloud CLI

Below are the instructions for users of the Google Cloud CLI:

### 3.1. Set Up Google Cloud Storage (GCS)

#### 3.1.1. Install and Authenticate the gcloud CLI:
   - Install the `gcloud` CLI tool from the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
   - Authenticate to Google Cloud:
     ```bash
     gcloud auth login
     ```

#### 3.1.2. Create a GCS Bucket:
   - Use the `gcloud` CLI to create a bucket:
     ```bash
     gcloud storage buckets create BUCKET_NAME --location=LOCATION
     ```
   - Replace `BUCKET_NAME` with a unique name and `LOCATION` with your preferred location (e.g., `us-central1`).

#### 3.1.3. Enable Interoperability with S3:
   - Enable the Interoperability API:
     ```bash
     gcloud storage buckets update BUCKET_NAME --uniform-bucket-level-access
     ```
   - Generate an access key and secret key:
     ```bash
     gcloud storage interoperability access-keys create
     ```
   - Note the `Access Key` and `Secret Key` for later use.

### 3.2. Grant Access to the Bucket:

To create an IAM policy for **vBase** to access the bucket using the **API key only**, you can utilize **service accounts** and **key-based authentication** instead of binding the policy to a specific user's email.

#### 3.2.1. Create a Service Account for vBase:
   ```bash
   gcloud iam service-accounts create vbase-access \
       --description="Service account for vBase bucket access" \
       --display-name="vBase Access"
   ```

#### 3.2.2. Grant the Service Account Access to the Bucket:
   - Replace `BUCKET_NAME` with your bucket's name:
   ```bash
   gcloud storage buckets add-iam-policy-binding BUCKET_NAME \
       --member="serviceAccount:vbase-access@PROJECT_ID.iam.gserviceaccount.com" \
       --role="roles/storage.objectViewer"
   ```
   - Replace `PROJECT_ID` with your Google Cloud project ID.

#### 3.2.3. Generate an API Key for the Service Account:
   ```bash
   gcloud iam service-accounts keys create vbase-key.json \
       --iam-account=vbase-access@PROJECT_ID.iam.gserviceaccount.com
   ```
   This creates a JSON file (`vbase-key.json`) containing the API key and credentials. Share this file securely with vBase.

## 4. Provide API Keys to vBase

Share the access key and secret key securely with vBase using a vault system or by encrypting and sending them.
   
## 5. (Optional) Automate Provisioning

Use Terraform or Cloud Deployment Manager to automate bucket and IAM setup.
