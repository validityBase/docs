---
description: Configure a Google Cloud Storage bucket with S3-compatible access for vBase workflows
---

<!-- omit in toc -->
# Setting up a Google Cloud Storage (GCS) S3-compatible bucket

## 1. Introduction

vBase provides a variety of managed services compatible with Amazon Simple Storage Service (S3):

- Automated commitment of buckets and objects for data producers (provers)
- Automated validation of buckets and objects for data consumers (verifiers)
- Derived data and dashboards with verified calculation and cryptographically assured provenance

Users of Google Cloud Storage (GCS) can use the following guide to set up GCS datasets to be shared in an S3-compatible manner, enabling read access by vBase managed services.

This guide uses a dedicated service account with read access to one bucket and an [HMAC access ID and secret](https://docs.cloud.google.com/storage/docs/authentication/hmackeys) for S3-compatible authentication. Store both securely when you create the HMAC key; the secret is only shown at creation. A service-account JSON private-key file is a different credential and is not needed for this route.

Choose either the Console or CLI setup below, then test the connection. The administrator performing setup needs permission to create the bucket and service account, grant bucket access, and [create HMAC keys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys). Organization policies must also permit service-account HMAC key creation and authentication; check the prerequisites in the linked guide.

## 2. Setup using the Google Cloud Console

Below are the instructions for users of the Google Cloud Console web interface:

### 2.1. Set up Google Cloud Storage (GCS)

#### 2.1.1. Create a GCS bucket:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Select your project, then navigate to **Cloud Storage** > **Buckets** > **Create**.
   - Choose a globally unique name for the bucket.
   - Choose **Uniform** access as explained below, and set appropriate lifecycle rules for your data.

#### 2.1.2. Choose the Access Model:

[Uniform bucket-level access](https://docs.cloud.google.com/storage/docs/uniform-bucket-level-access) disables bucket and object ACLs so that access is controlled through IAM. It does not enable an interoperability API and is not required for HMAC authentication. Before enabling it on an existing bucket, review any access that depends on ACLs.

### 2.2. Configure IAM permissions

#### 2.2.1. Create a Service Account for vBase:

   - In the selected project, navigate to **IAM & Admin** > **Service Accounts**.
   - Create a service account named `vbase-access` without granting project-wide roles.

#### 2.2.2. Grant the Service Account Access to the Bucket:

   - Open the target bucket's **Permissions** tab and select **Grant access**.
   - Add the service account's email as the principal.
   - Assign **Storage Object Viewer** (`roles/storage.objectViewer`) on this bucket to allow listing and reading its objects.

#### 2.2.3. Create an HMAC Key:

   - Navigate to **Cloud Storage** > **Settings** > **Interoperability**.
   - Select **Create a key for a service account**, choose `vbase-access`, and select **Create key**.
   - Save the returned access ID and secret securely.

## 3. Setup using the gcloud CLI

Below are the instructions for users of the Google Cloud CLI:

### 3.1. Set up Google Cloud Storage (GCS)

#### 3.1.1. Install and authenticate the gcloud CLI:
   - Install the `gcloud` CLI tool from the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
   - Authenticate to Google Cloud:
     ```bash
     gcloud auth login
     gcloud config set project PROJECT_ID
     ```
   - Replace `PROJECT_ID` with the project ID to use for the bucket and service account.

#### 3.1.2. Create a GCS Bucket:
   - Create a bucket with uniform bucket-level access, as described under [Choose the Access Model](#212-choose-the-access-model):
     ```bash
     gcloud storage buckets create gs://BUCKET_NAME --location=LOCATION \
         --uniform-bucket-level-access
     ```
   - Replace `BUCKET_NAME` with a unique name and `LOCATION` with your preferred location (e.g., `us-central1`).

### 3.2. Grant Access to the Bucket:

Create a dedicated service account and grant it permission to list and read objects in the target bucket.

#### 3.2.1. Create a service account for vBase:
   ```bash
   gcloud iam service-accounts create vbase-access \
       --description="Service account for vBase bucket access" \
       --display-name="vBase Access"
   ```

#### 3.2.2. Grant the service account access to the bucket:
   - Replace `BUCKET_NAME` with your bucket's name:
   ```bash
   gcloud storage buckets add-iam-policy-binding gs://BUCKET_NAME \
       --member="serviceAccount:vbase-access@PROJECT_ID.iam.gserviceaccount.com" \
       --role="roles/storage.objectViewer"
   ```
   - Replace `PROJECT_ID` with your Google Cloud project ID.

#### 3.2.3. Create an HMAC Key:
   ```bash
   gcloud storage hmac create vbase-access@PROJECT_ID.iam.gserviceaccount.com
   ```
   Save the returned access ID and secret securely. See the [HMAC command reference](https://docs.cloud.google.com/sdk/gcloud/reference/storage/hmac/create).

## 4. Test the S3-Compatible Connection

Configure your S3 client with the HMAC access ID as its access key ID, the HMAC secret as its secret access key, and `https://storage.googleapis.com` as its endpoint. Google documents this configuration in its [interoperability guide](https://docs.cloud.google.com/storage/docs/interoperability).

For example, install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and configure a dedicated local profile:

```bash
aws configure --profile gcs-vbase
```

At the prompts, enter the HMAC access ID for **AWS Access Key ID**, the HMAC secret for **AWS Secret Access Key**, `auto` for **Default region name**, and `json` for **Default output format**. This stores the credentials locally; protect the resulting AWS credentials file.

List up to one object in the target bucket:

```bash
aws --profile gcs-vbase --endpoint-url https://storage.googleapis.com \
    s3api list-objects-v2 --bucket BUCKET_NAME --max-keys 1 --no-paginate
```

Read an existing object:

```bash
aws --profile gcs-vbase --endpoint-url https://storage.googleapis.com \
    s3api get-object --bucket BUCKET_NAME --key "OBJECT_NAME" gcs-test-download
```

Replace `BUCKET_NAME` with the bucket name and `OBJECT_NAME` with the full name of a small existing object. Choose an unused local filename in place of `gcs-test-download`. A successful listing and download confirm list and read access through the S3-compatible endpoint. If the bucket is empty, upload a test object using your administrator account first. Newly created HMAC keys and IAM grants may take time to become usable; retry after they propagate.

## 5. Provide Connection Details to vBase

Provide the bucket name, endpoint, HMAC access ID, and HMAC secret to vBase. Transfer the credentials securely using a vault system or encrypted channel.

## 6. (Optional) Automate Provisioning

Use Terraform to automate bucket and IAM setup.
