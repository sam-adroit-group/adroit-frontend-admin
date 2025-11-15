const awsConfig = {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION || 'us-east-2',
    userPoolId: import.meta.env.VITE_USER_POOL_ID || '',
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID || '',
    oauth: {
      domain: import.meta.env.VITE_OAUTH_DOMAIN || '',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: import.meta.env.VITE_REDIRECT_SIGN_IN || 'http://localhost:5173/',
      redirectSignOut: import.meta.env.VITE_REDIRECT_SIGN_OUT || 'http://localhost:5173/',
      responseType: 'code'
    }
  }
};

export default awsConfig;



