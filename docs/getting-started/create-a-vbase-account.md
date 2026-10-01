---
description: Sign up for vBase and get the credentials needed for the Web App and authenticated API access
---

# Create a vBase account

Create a vBase account to use the Web App and authenticated developer APIs.

After signing up, you can stamp and verify content in the browser or obtain an API key for programmatic access.

## Create your account

1. Go to the [vBase sign-up page](https://app.vbase.com/accounts/signup/).
2. Enter your email address, display name, and password, or select **Sign Up with Google**.
3. Complete the sign-up process.
4. Open the confirmation email from vBase and follow the link to verify your email address.
5. Go to [app.vbase.com](https://app.vbase.com/) and sign in.

Your account is now ready to use.

## Before creating test Stamps

vBase Stamps create permanent blockchain records associated with your account. Before using vBase for production data, decide how you want to separate testing from live activity.

You can either:

* Use one account for testing and create a separate account when you are ready to begin a live, verifiable record; or
* Create a Collection named `TEST` and place your test Stamps there.

This helps keep experimental activity clearly separated from the Collections and audit trail records you may later share with clients, investors, or other verifiers.

## Find your account settings

After signing in:

1. Open the account menu in the upper-right corner of the Web App.
2. Select **User Profile**.
3. Open the **Account Settings** tab.

Your account settings include information associated with your vBase account and the credentials needed for authenticated API access.

## Get your API key

You need an API key to use the vBase Python API Client or REST API.

From **Account Settings**:

1. Locate your API key.
2. Copy it and store it securely.
3. Use it as a bearer token when authenticating API requests.

Do not share your API key publicly or commit it to source control. For local development, store it in an environment variable or another secure secrets-management system.

For example:

```bash
export VBASE_API_KEY="your-api-key"
```

Windows PowerShell:

```powershell
$env:VBASE_API_KEY="your-api-key"
```

## Next steps

Choose the interface or integration that fits your workflow:

* [Use the vBase Web App](../web-tools/web-app-overview.md)
* [Start with the Python API Client](api-py-quickstart.md)
* [Read the REST API Guide](../../vbase-django-tools/api/rest-api-user-guide.md)
* [Choose How to Use vBase](choose-how-to-use-vbase.md)
