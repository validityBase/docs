# Setup

The following steps guide you through this process of setting up vBase Python Tools (`vbase-py-tools`) in your local environment.

`vbase-py-tools` is a set of common Python tools for high-level data science and infrastructure operations.

> **Note for Windows users:**
> If you’re on Windows, the following instructions will work on the Windows Subsystem for Linux (WSL). WSL provides a Linux environment on your Windows OS. Please follow the following guide to [set up your WSL environment for vBase](https://docs.vbase.com/technical-reference/windows_subsystem_for_linux_guide) and a [test link]()
1. **Get a vBase API key:**
   Please [contact vBase](https://www.vbase.com/contact/) and request an API key if you wish to have the simplest experience. The API key is needed to access the forwarder API service, which simplifies commitment and validation operations but is not required for interacting with vBase.
2. **Create the vBase directory:**
   Create the directory where you want to clone vBase repositories and switch to this directory by running:
   ```bash
   mkdir ~/validityBase && cd ~/validityBase
   ```
3. **Install the vBase Python SDK:**
   Install the `vbase` python package that provides the vBase Python SDK from GitHub:
   ```bash
   pip install git+https://github.com/validityBase/vbase-py.git
   ```
4. **Clone the vBase Python Tools:**
   Clone the `vbase-py-tools` GitHub repository:
   ```bash
   git clone https://github.com/validityBase/vbase-py-tools.git
   ```
5. **vBase Python Tools are installed!**
   Command-line tools can now be run from the `~/validityBase/vbase-py-tools` working directory.
   Enter the directory:
   ```bash
   cd vbase-py-tools
   ```
6. **Install requirements:**
   Install package requirements:
   ```bash
   pip3 install -r requirements.txt
   ```
7. **Configure vbase-py-tools:**
   vBase tools can be configured using an automatic configuration script or manually. We recommend an automatic configuration for the initial setup.
   1. **Option 1: Use the automatic configuration script:**
      Run the following script to configure the settings stored in the `.env` file automatically.
      The script will ask a few questions and initialize the appropriate environment variables.
      ```bash
      python3 -m tools.config_env
      ```

      You will be asked the following questions to configure the settings:
      ```text
      Do you want to configure the vBase API key? (y/n) [yes]:
      ```

      Press `yes` to enter the API key provided to you by vBase.
      This should typically be done once upon the initial configuration.
      The vBase API key and access to the API server are not required
      to use vBase libraries, tools, and commitment services. They provide
      simple and convenient abstractions of the underlying complexities of accessing
      blockchains and managing cryptocurrencies.
      ```text
      Do you want to generate a new private key? (y/n) [yes]:
      ```

      Press `yes` if you wish to generate a new private key and address.
      This should typically be done once upon the initial configuration.
      You should not share the private key.
      The script will print the address associated with the private key.
      ```text
      Do you want to configure AWS access keys?
      ```

      This is the option to configure the environment variables used for AWS access.
      These are the same access keys as those used in AWS CLI tools
      (https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
      If you do not plan to use AWS integration tools, you can skip this option.
   2. **Option 2: Manually configure .env:**
      Configure the environment variables for `vbase-py-tools` by editing `~/validityBase/vbase-py-tools/.env`:

   ```bash
   # Forwarder Configuration
   # URL of the production vBase forwarder service.
   # Users should not change this value.
   VBASE_FORWARDER_URL = "https://api.vbase.com/forwarder/"
   # User API key for accessing the vBase forwarder service.
   # Users should set this value to the API key they received from vBase.
   VBASE_API_KEY = "YOUR_VBASE_API_KEY"
   ...
   # User Private Key
   # The private key for making stamps/commitments.
   # This key signs and controls all operations -- it must be kept secret.
   # vBase will never request this value.
   VBASE_COMMITMENT_SERVICE_PRIVATE_KEY = "YOUR_VBASE_COMMITMENT_SERVICE_PRIVATE_KEY"
   ...
   # AWS configuration:
   AWS_ACCESS_KEY_ID = "YOUR_AWS_ACCESS_KEY_ID"
   AWS_SECRET_ACCESS_KEY = "YOUR_AWS_SECRET_ACCESS_KEY"
   ```

   Below are additional details on the environment variables:
   - `VBASE_API_KEY` is the private API key for accessing the vBase API service.
   - `VBASE_COMMITMENT_SERVICE_PRIVATE_KEY` is the (private) cryptographic key suitable for signing Ethereum transactions.
     It can be generated using any of the mature key generation tools (https://ethereum.org/en/developers/docs/accounts/#account-creation, https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).
     Please keep the key private and do not disclose it to PitLabs or anyone else.
     Only the public address associated with the key is required for validation.
     The private key secures your access to vBase.
   - `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` must be defined for AWS operations
     such as S3 object commitment and validation.
8. **Test Configuration:**
   Test vBase connectivity and basic functionality:
   ```bash
   python3 -m tests.test_vbase_basics
   ```
9. **You are all set!**
   You can now run vBase Python Tools!
10. **Run vbase-py-tools:**
    vBase Python tools are now installed and configured. You can run them from the command line:
    ```bash
    python3 -m tools.commit_s3_objects --h
    ```
