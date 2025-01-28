# verify_s3_objects

```none

Verify validityBase (vBase) dataset commitments for S3 objects. 
Verifies timestamped signatures (commitments) for one or more S3 objects. 
A commitment proves that an object was known to a user at a given point-in-time
and belonged to a given dataset.
Such commitments establish provenance and PIT accuracy of datasets and its records.
```

```default
verify_s3_objects [-h] --dataset_name DATASET_NAME --bucket BUCKET [--key_prefix KEY_PREFIX]
                  [--key_pattern KEY_PATTERN] [--use_aws_access_key] [--verbose] [--test]
```

## verify_s3_objects options

* [**`-h`**](), [**`--help`**]() - show this help message and exit
* [**`--dataset_name`**]() `DATASET_NAME` - vBase dataset to verify (default: `None`)
* [**`--bucket`**]() `BUCKET` - S3 bucket name containing dataset records (default: `None`)
* [**`--key_prefix`**]() `KEY_PREFIX` - S3 object key prefix: 
  If supplied, objects matching the prefix will be used to verify commitments. (default: `None`)
* [**`--key_pattern`**]() `KEY_PATTERN` - S3 object key pattern: 
  If supplied, objects matching the wildcard pattern will be used to verify commitments. (default: `None`)
* [**`--use_aws_access_key`**]() - use AWS authentication: If specified, AWS Access Key defined in .env will be used. 
  In this case, .env must define AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY variables.
* [**`--verbose`**]() - verbose output
* [**`--test`**]() - use a test vBase contract

```none

examples:
```
