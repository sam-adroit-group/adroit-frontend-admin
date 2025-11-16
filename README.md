# Adroit Admin Frontend

Admin panel for managing Adroit data with SSO authentication via AWS Cognito.

## Features

- **SSO Authentication**: Secure login using AWS Cognito
- **Contact Management**: View and manage contacts from DocumentDB
- **Dashboard**: Overview of system data

## Prerequisites

- Node.js 18+ and npm
- AWS Cognito User Pool configured
- Backend API running

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables for local development:
   - Copy `.env.example` to `.env.local`
   - Fill in the values from Terraform outputs (see [ENV_SETUP.md](./ENV_SETUP.md) for details)
   ```bash
   cp .env.example .env.local
   # Then edit .env.local with your values
   ```

3. Get Cognito values from Terraform (after deployment):
```bash
cd ../adroit-terraform
terraform output cognito_user_pool_id
terraform output cognito_client_id
terraform output cognito_domain
```

4. Run development server:
```bash
npm run dev
```

**Note:** For production, environment variables are automatically set via Terraform in AWS Amplify. See [ENV_SETUP.md](./ENV_SETUP.md) for complete details.

5. Build for production:
```bash
npm run build
```

## Environment Variables

- `VITE_API_URL`: Backend API URL
- `VITE_AWS_REGION`: AWS region (default: us-east-2)
- `VITE_USER_POOL_ID`: Cognito User Pool ID
- `VITE_USER_POOL_WEB_CLIENT_ID`: Cognito Client ID
- `VITE_OAUTH_DOMAIN`: Cognito OAuth domain
- `VITE_REDIRECT_SIGN_IN`: OAuth redirect URL for sign in
- `VITE_REDIRECT_SIGN_OUT`: OAuth redirect URL for sign out

## Deployment

The project is configured to deploy via AWS Amplify. Environment variables are set in Terraform configuration.

## Project Structure

```
adroit-frontend-admin/
├── src/
│   ├── components/
│   │   ├── Dashboard/      # Main dashboard component
│   │   ├── ContactsTable/  # Contacts data table
│   │   └── Layout/          # App layout with header
│   ├── App.jsx             # Main app component with auth
│   ├── main.jsx            # Entry point
│   └── aws-exports.js      # AWS Amplify configuration
├── package.json
└── vite.config.js
```




