import { Auth } from 'aws-amplify'

const AuthService = {
  async login(input) {
    try {
      await loginSchema.validate(input.get())
    } catch (error) {
      ShowToast.error(error.message)
      return
    }
    const { username, password } = input.get()
    try {
      await Auth.signIn(username, password)
    } catch (error) {
      authErrorHandler(error)
    }
  },

  async signUp(input) {
    try {
      await signUpSchema.validate(input.get())
    } catch (error) {
      ShowToast.error(error.message)
      return
    }

    const { email, password, name, username } = input.get()

    try {
      const res = await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          email: email.toLowerCase(),
        },
      })
      ShowToast.info('Venligst bekræft din mail for at forstætte.')
      return res || null
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },

  async confirmSignUp(input) {
    try {
      await confirmSignUpSchema.validate(input.get())
    } catch (error) {
      ShowToast.error(error.message)
      return
    }

    const { username, code } = input.get()

    try {
      const response = await Auth.confirmSignUp(username, code)
      return response
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },

  async resendSignUp(input) {
    try {
      await resendCodeSchema.validate(input.get())
    } catch (error) {
      ShowToast.error(error.message)
      return
    }
    try {
      await Auth.resendSignUp(input.get().username)
      ShowToast.success('En ny mail er på vej til ' + input.get().username)
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },

  async sendPasswordResetCode(input) {
    const { username } = input.get()
    try {
      const response = await Auth.forgotPassword(username)
      ShowToast.info('En bekræftelseskode er på vej til din mail')
      return response
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },

  async resetPassword(input) {
    const { username, password, code } = input.get()
    try {
      const response = await Auth.forgotPasswordSubmit(username, code, password)
      ShowToast.info('Din kode blev skiftet.')
      return response
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },

  async signOut() {
    try {
      handleStateReset()
      setTimeout(async () => {
        await Auth.signOut({ global: true })
        ShowToast.success('Du er nu logget ud.')
      }, 300)
    } catch (error) {
      logDev(error)
      authErrorHandler(error)
    }
  },
}

export default AuthService
