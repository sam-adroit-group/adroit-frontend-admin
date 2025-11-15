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

2. Create `.env.local` file (for local development):
```env
VITE_API_URL=http://localhost:3000
VITE_AWS_REGION=us-east-2
VITE_USER_POOL_ID=your-cognito-user-pool-id
VITE_USER_POOL_WEB_CLIENT_ID=your-cognito-client-id
VITE_OAUTH_DOMAIN=your-cognito-domain
VITE_REDIRECT_SIGN_IN=http://localhost:5173/
VITE_REDIRECT_SIGN_OUT=http://localhost:5173/
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
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



