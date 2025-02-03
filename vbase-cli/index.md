# vbase-cli Documentation

## vbase-cli

vBase CLI for object commitment and verification

```shell
vbase-cli [OPTIONS] COMMAND [ARGS]...
```

### Options

### -v, --verbose

Increase verbosity level

### commitment-service

Command group for interacting with a commitment service. Either a node commitment service or a forwarder commitment service must be used.

```shell
vbase-cli commitment-service [OPTIONS] COMMAND [ARGS]...
```

### Options

### --vb-cs-node-rpc-url <vb_cs_node_rpc_url>

vBase commitment service node RPC URL

### --vb-cs-address <vb_cs_address>

vBase commitment service smart contract address

### --vb-forwarder-url <vb_forwarder_url>

vBase forwarder URL

### --vb-api-key <vb_api_key>

vBase API key

### --vb-cs-private-key <vb_cs_private_key>

vBase commitment service private key

#### add-object

Create an object commitment

```shell
vbase-cli commitment-service add-object [OPTIONS]
```

### Options

### --object-cid <object_cid>

Specify object CID

### --object-cid-stdin

Read object CID from stdin

### --pad-object-cid

Pad the object CID with zeros if necessary

#### verify-object

Verify an object commitment

```shell
vbase-cli commitment-service verify-object [OPTIONS]
```

### Options

### --object-cid <object_cid>

Specify object CID

### --object-cid-stdin

Read object CID from stdin

### --pad-object-cid

Pad the object CID with zeros if necessary

### --timestamp <timestamp>

Commitment timestamp

### --timestamp-stdin

Read timestamp from stdin

### --timestamp-tol <timestamp_tol>

Tolerance for commitment timestamp as a pd.Timedelta string
