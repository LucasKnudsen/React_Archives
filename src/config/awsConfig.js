import { Linking } from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn'

const urlOpener = async (url, redirectUrl) => {
  try {
    await InAppBrowser.isAvailable()
    const { type, url: newUrl } = await InAppBrowser.openAuth(
      url,
      redirectUrl,
      {
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false,
        ephemeralWebSession: false,
      }
    )

    if (type === 'success') {
      Linking.openURL(newUrl)
    }
  } catch (error) {
    console.log('InAppBrowserError', error)
  }
}

const awsConfig = {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_ENDPOINT,
  aws_appsync_region: 'eu-central-1',
  aws_appsync_authenticationType: process.env.REACT_APP_AUTH_TYPE, // API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS and OPENID_CONNECT
  aws_appsync_apiKey: process.env.REACT_APP_API_KEY,

  Auth: {
    region: 'eu-central-1',
    userPoolId: process.env.REACT_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_CLIENT,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL,
    identityPoolRegion: 'eu-central-1',
  },

  Storage: {
    AWSS3: {
      bucket: 'mff-food-pictures', //REQUIRED -  Amazon S3 bucket name
      region: 'us-west-2', //OPTIONAL -  Amazon service region
    },
  },

  oauth: {
    urlOpener,
    domain: 'bacco.auth.eu-central-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'bacco://oauth',
    redirectSignOut: 'bacco://',
    responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
}

export default awsConfig
