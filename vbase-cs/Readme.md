# How to build the solution

1. Install the [Microsoft Visual Studio Installer Projects](https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2022InstallerProjects) extension for Visual Studio 2022.
1. Clone or check out the project.
1. Build the solution using Visual Studio.
1. Build the setup project using Visual Studio (MSBuild is not supported).

**Or alternatively, you can download the installer from the
[GitHub workflow run](https://github.com/validityBase/vbase-cs/actions) artifacts.**

# Setup Development Environment

1. Install **Visual Studio 2022** or later.
2. Install the [Microsoft Visual Studio Installer Projects](https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2022InstallerProjects) extension for Visual Studio 2022.
3. Create a `vBase.Core.Tests\settings.local.yml` file and configure the vBase Forwarder credentials to run the unit tests locally.
   ```yaml
   ApiKey: "FORWARDER_API_KEY"
   PrivateKey: "VBASE_PRIVATE_KEY"
   ```

# How to Sign an MSI Using a Code Signing Certificate

1. Install the [Windows SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/)
1. Make sure that the certificate is installed in the certificate store.
1. Run the command
```cmd
signtool sign /fd SHA256 /n "<CERTIFICATE_NAME>" /t http://timestamp.url.com /v "vBase.msi"
```

# Known issues
1. The MSI installer installs the SDK library in the `Program Files (x86)` directory instead of `Program Files`.
