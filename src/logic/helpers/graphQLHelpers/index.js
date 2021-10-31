import API from '@aws-amplify/api'

export const graphqlHelper = async (query, params) => {
  switch (true) {
    case Array.isArray(params):
      let inputObj = {}
      params.forEach((val, i) => (inputObj[`input${i + 1}`] = val))
      return API.graphql({
        query: query,
        variables: inputObj,
        authMode: process.env.REACT_APP_AUTH_TYPE,
      })

    case Boolean(params):
      return API.graphql({
        query: query,
        variables: { input: params },
        authMode: process.env.REACT_APP_AUTH_TYPE,
      })

    default:
      return API.graphql({
        query: query,
        authMode: process.env.REACT_APP_AUTH_TYPE,
      })
  }
}

export const subscriptionHelper = async (query, params, callback) => {
  let inputObj = {}

  if (Array.isArray(params)) {
    params.forEach((val, i) => (inputObj[`input${i + 1}`] = val))
  } else {
    inputObj = { input: params }
  }

  let subscription = API.graphql({
    query: query,
    variables: inputObj,
    authMode: process.env.REACT_APP_AUTH_TYPE,
  }).subscribe({
    next: ({ value }) => {
      callback(value?.data)
    },
    error: (error) => {
      logDev(error)
    },
  })
  return subscription
}
