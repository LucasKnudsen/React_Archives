import { ShowToast } from '../../utils'
import toast from 'react-hot-toast'

export const authErrorHandler = (error) => {
  console.log(error.message)
  if (error.errors) {
    ShowToast.error(error.errors[0].message)
  } else if (
    error.message ===
    'Cannot reset password for the user as there is no registered/verified email or phone_number'
  ) {
    ShowToast.error('Du mangler at bekræfte din bruger.')
  } else if (error.message === 'User is already confirmed.') {
    ShowToast.error('Din bruger er allerede bekræftet.')
  } else if (error.message === 'Username cannot be empty') {
    ShowToast.error('Brugernavnet er tomt.')
  } else if (
    error.message ===
    'PreSignUp failed with error Denne mail er allerede i brug..'
  ) {
    ShowToast.error('Denne mail er allerede i brug..')
  } else if (error.message === 'Incorrect username or password.') {
    ShowToast.error('Fejlagtigt brugernavn eller kodeord..')
  } else {
    switch (error.code) {
      case 'InvalidParameterException':
        ShowToast.error(
          'Der var en fejl i dine oplysninger. Se igennem og prøv igen.'
        )
        break

      case 'UsernameExistsException':
        ShowToast.error('Der findes allerede en bruger med det brugernavn.')
        break

      case 'ExpiredCodeException':
        ShowToast.error(
          'Ugyldig verificeringskode. Dobbeltjek din email eller spørg efter en ny kode forneden.'
        )
        break

      case 'CodeMismatchException':
        ShowToast.error('Vi kunne ikke genkende koden? Skrev du den rigtigt?')
        break

      case 'LimitExceededException':
        ShowToast.error('Du har prøvet for mange gange. Prøv igen om lidt tid!')
        break

      case 'UserNotConfirmedException':
        ShowToast.error(
          'Du mangler at bekræfte din email. Klik ind på "opret en bruger" for at bekræfte.'
        )
        break

      case 'UserNotFoundException':
        ShowToast.error('Brugeren kan ikke genkendes.')
        break

      default:
        ShowToast.error('Der skete en fejl. Prøv igen senere!')
        break
    }
  }
}

export default authErrorHandler
