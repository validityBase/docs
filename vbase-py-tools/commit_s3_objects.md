# commit_s3_objects

```none

Create validityBase (vBase) dataset commitments for S3 objects. 
Records timestamped signatures (commitments) for one or more S3 objects. 
A commitment proves that an object was known to a user at a given point-in-time
and belonged to a given dataset.
Such commitments establish provenance and PIT accuracy of datasets and its records.
```

```default
commit_s3_objects [-h] --dataset_name DATASET_NAME --bucket BUCKET [--key KEY]
                  [--key_prefix KEY_PREFIX] [--key_pattern KEY_PATTERN]
                  [--version {latest,version_id}] [--version_id VERSION_ID]
                  [--use_aws_access_key] [--verbose] [--test]
```

## commit_s3_objects options

* [**`-h`**](), [**`--help`**]() - show this help message and exit
* [**`--dataset_name`**]() `DATASET_NAME` - vBase dataset to receive commitments (default: `None`)
* [**`--bucket`**]() `BUCKET` - S3 bucket name (default: `None`)
* [**`--key`**]() `KEY` - S3 object key: 
  If supplied, a single object will be committed. 
  –key, –key_prefix, or –key_pattern argument must be provided. (default: `None`)
* [**`--key_prefix`**]() `KEY_PREFIX` - S3 object key prefix: 
  If supplied, objects matching the prefix will be committed. 
  –key, –key_prefix, or –key_pattern argument must be provided. (default: `None`)
* [**`--key_pattern`**]() `KEY_PATTERN` - S3 object key pattern: 
  If supplied, objects matching the wildcard pattern will be committed.  
  –key, –key_prefix, or –key_pattern argument must be provided. (default: `None`)
* [**`--version`**]() `VERSION` - S3 object version: 
  If latest is specified, the latest object will be committed. 
  If version_id is specified, –version_id argument must be provided, 
  and the version specified by version_id will be committed.
  The version_id option is only compatible with single object (–key argument) commitments. (default: `latest`)
* [**`--version_id`**]() `VERSION_ID` - S3 object version ID to commit (default: `None`)
* [**`--use_aws_access_key`**]() - use AWS authentication: If specified, AWS Access Key defined in .env will be used. 
  In this case, .env must define AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY variables.
* [**`--verbose`**]() - verbose output
* [**`--test`**]() - use a test vBase contract

```none

examples:
    python3 -m tools.commit_s3_objects --dataset_name=test --bucket=pitlabs-c2-test --key=commit_s3_objects/test_1.txt --use_aws_access_key
    python3 -m tools.commit_s3_objects --dataset_name=test --bucket=pitlabs-c2-test --key_prefix=commit_s3_objects/ --use_aws_access_key
    python3 -m tools.commit_s3_objects --dataset_name=test --bucket=pitlabs-c2-test --key_pattern=commit_s3_objects/*.txt --use_aws_access_key --verbose
```
