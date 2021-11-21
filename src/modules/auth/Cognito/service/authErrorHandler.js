import toast from 'react-hot-toast'

const authErrorHandler = (error) => {
  switch (error.code) {
    case 'InvalidParameterException':
      toast.error(
        'Der var en fejl i dine oplysninger. Se igennem og prøv igen.'
      )
      break

    case 'UsernameExistsException':
      toast.error('Der findes allerede en bruger med den mail.')
      break

    case 'ExpiredCodeException':
      toast.error(
        'Ugyldig verificeringskode. Dobbeltjek din email eller spørg efter en ny kode forneden.'
      )
      break

    case 'CodeMismatchException':
      toast.error('Vi kunne ikke genkende koden? Skrev du den rigtigt?')
      break

    case 'LimitExceededException':
      toast.error('Du har prøvet for mange gange. Prøv igen om lidt tid!')
      break

    case 'UserNotConfirmedException':
      toast.error(
        'Du mangler at bekræfte din email. Klik ind på "opret en bruger" for at bekræfte.'
      )
      break

    default:
      toast.error('Der skete en fejl. Prøv igen senere!')
      break
  }
}

export default authErrorHandler
