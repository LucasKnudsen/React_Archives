import * as Yup from 'yup'

const generateSchema = (fields) => {
  const schema = {}
  fields.forEach((field) => {
    schema[field.key] = Yup.string().required('Some text')
  })
  return Yup.object().shape(schema)
}

const generateInitialValues = (fields) => {
  const values = {}
  fields.forEach(
    (object) => (values[object.key] = input.get()?.[object.key] || '')
  )
  return values
}

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ugyldig email')
    .required('Venligst indtast din email'),
  password: Yup.string().required('Venligst indtast din adgangskode'),
})

export const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('Venligst indtast dit navn')
    .matches(/^\S*$/, 'Ugyldigt mellemrum i brugernavnet'),
  email: Yup.string()
    .email('Ugyldig email')
    .required('Venligst indtast din email'),
  name: Yup.string().required('Venligst indtast dit navn'),
  password: Yup.string()
    .required('Venligst indtast dit kodeord')
    .min(6, 'Koden skal minimum være 6 tegn')
    .matches(/\d/, 'Koden skal indeholde mindst ét tal')
    .matches(/[a-z]/, 'Koden skal indeholde mindst ét lille bogstav')
    .matches(/[A-Z]/, 'Koden skal indeholde mindst ét stort bogstav'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Adgangskoderne matcher ikke'
  ),
})

export const confirmSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ugyldig email')
    .required('Venligst indtast din email'),
  password: Yup.string()
    .required('Venligst indtast dit kodeord')
    .min(6, 'Kodeordet skal minimum være 6 tegn'),
  code: Yup.string().required('Indtast venligst en bekræftelseskode'),
})
