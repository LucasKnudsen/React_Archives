const awsConfig = {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_ENDPOINT,
  aws_appsync_region: 'eu-central-1',
  aws_appsync_authenticationType: process.env.REACT_APP_AUTH_TYPE,

  Auth: {
    region: 'eu-central-1',
    userPoolId: process.env.REACT_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_CLIENT,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL,
    identityPoolRegion: 'eu-central-1',
  },
}

export default awsConfig
