# Environment Variables Setup Guide

This guide explains how to pass `import.meta.env` values for the Adroit Admin Frontend.

## How Vite Environment Variables Work

Vite exposes environment variables to your code via `import.meta.env`. Only variables prefixed with `VITE_` are exposed to client-side code.

## Local Development

### Option 1: Create `.env.local` file (Recommended)

1. Create a `.env.local` file in the `adroit-frontend-admin` directory:

```bash
cd adroit-frontend-admin
# Create the file manually or use this template:

cat > .env.local << 'EOF'
VITE_API_URL=http://localhost:3000
VITE_AWS_REGION=us-east-2
VITE_USER_POOL_ID=
VITE_USER_POOL_WEB_CLIENT_ID=
VITE_OAUTH_DOMAIN=
VITE_REDIRECT_SIGN_IN=http://localhost:5173/
VITE_REDIRECT_SIGN_OUT=http://localhost:5173/
EOF
```

2. Fill in the values in `.env.local`:

```env
VITE_API_URL=http://localhost:3000
VITE_AWS_REGION=us-east-2
VITE_USER_POOL_ID=us-east-2_XXXXXXXXX
VITE_USER_POOL_WEB_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxx
VITE_OAUTH_DOMAIN=adroit-admin-xxxx.auth.us-east-2.amazoncognito.com
VITE_REDIRECT_SIGN_IN=http://localhost:5173/
VITE_REDIRECT_SIGN_OUT=http://localhost:5173/
```

3. Get the values from Terraform outputs:

```bash
cd adroit-terraform
terraform output cognito_user_pool_id
terraform output cognito_client_id
terraform output cognito_domain
```

### Option 2: Pass via command line

```bash
VITE_USER_POOL_ID=xxx VITE_USER_POOL_WEB_CLIENT_ID=xxx npm run dev
```

### Option 3: Use `.env` file (not recommended for secrets)

Create a `.env` file (without `.local`) - this is committed to git and should only contain non-sensitive defaults.

## Production (AWS Amplify)

Environment variables are automatically passed via **Terraform configuration**. The values are set in `aws-adroit-admin-amplify.tf`:

```hcl
environment_variables = {
  VITE_API_URL = "${aws_api_gateway_stage.prod.invoke_url}"
  VITE_USER_POOL_ID = aws_cognito_user_pool.admin_user_pool.id
  VITE_USER_POOL_WEB_CLIENT_ID = aws_cognito_user_pool_client.admin_client.id
  # ... etc
}
```

These are automatically available during the Amplify build process. **No `.env.production` file is needed** - Amplify injects these as environment variables during build.

## Environment Variable Priority

Vite loads environment variables in this order (higher priority overrides lower):

1. `.env.[mode].local` (e.g., `.env.production.local`)
2. `.env.local` (loaded in all modes except test)
3. `.env.[mode]` (e.g., `.env.production`)
4. `.env`

For Amplify builds, the `environment_variables` from Terraform take precedence.

## Verifying Variables

To verify variables are loaded correctly, you can temporarily add this to your code:

```javascript
console.log('Environment variables:', {
  userPoolId: import.meta.env.VITE_USER_POOL_ID,
  clientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
  oauthDomain: import.meta.env.VITE_OAUTH_DOMAIN
});
```

## Troubleshooting

### Variables not available in browser

- Ensure variables are prefixed with `VITE_`
- Restart the dev server after changing `.env` files
- Check browser console for undefined values

### Amplify build fails or variables missing

- Verify Terraform applied successfully: `terraform output`
- Check Amplify Console > App Settings > Environment variables
- Ensure build spec doesn't try to copy non-existent `.env.production` file

### Local development not working

- Ensure `.env.local` exists (not just `.env`)
- Restart dev server: `npm run dev`
- Check that values are not empty strings

