import { Hub, Auth } from 'aws-amplify'

import { useEffect } from 'react'

const HubListener = () => {
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          handleUser()
          break
        case 'cognitoHostedUI':
          handleUser()
          break
        case 'signOut':
          handleSignOut()
          break
        case 'signIn_failure':
          console.log('user sign in failed')
          console.log(data)
          break
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data)
          break

        default:
          break
      }
    })
    handleUser()

    return () => {
      Hub.remove('auth', () => console.log('bye Hub'))
    }
  }, [])

  const handleUser = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser()
      if (user) {
        // HANDLE AUTH
        console.log(user)
      }
    } catch (error) {
      console.log('Not signed in')
    }
  }

  const handleSignOut = () => {
    // HANDLE AUTH
  }

  return null
}

export default HubListener
