# vBase Django Tools API Documentation

## About the REST API

The REST API provides a programmatic interface to interact with our services, allowing you to stamp files, inline data, or existing CIDs. This API is designed to be flexible and secure, supporting various data formats and authentication methods.

## Getting Started with the REST API

To begin using the REST API, you need to have a valid API token for authentication. The API is accessible via standard HTTP methods and returns JSON responses.

### Base URL
```
https://app.vbase.com/api/v1/
```

## About the OpenAPI Description for the REST API

Our REST API is documented using OpenAPI, providing a comprehensive description of available endpoints, parameters, and response formats. You can explore the API using the Swagger UI, which offers an interactive interface for testing API calls.

Access the Swagger UI at:
```
https://app.vbase.com/api/v1/
```

## Authenticating to the REST API

Authentication is required for all API requests. Use the Bearer token method by including an `Authorization` header in your requests. The format should be:

```
Authorization: Bearer <your-api-token>
```

## Keeping your API credentials secure

- Never share your API token publicly
- Store your API token securely
- Use environment variables to store your API token
- Never commit API tokens to version control
