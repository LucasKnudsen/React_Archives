import { TextField } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { CustomButton } from '../../../../components'

const ContactForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Venligst indtast dit navn'),
    email: Yup.string()
      .email('Ugyldig email')
      .required('Venligst indtast din email'),
    subject: Yup.string().required('Venligst indtast emnet'),
    message: Yup.string().required('Venligst indtast en besked'),
  })

  const { handleSubmit, handleChange, resetForm, touched, errors } = useFormik({
    validationSchema: schema,
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => handleEmail(values),
  })

  const handleEmail = (values) => {
    console.log(values)
    resetForm()
  }

  return (
    <div className="contact-form">
      <TextField
        label="Your name"
        onChange={handleChange('name')}
        error={errors.name}
        helperText={errors.name && errors.name}
        fullWidth
        sx={{ marginBottom: 3 }}
      />
      <TextField
        label="Your email"
        onChange={handleChange('email')}
        fullWidth
        error={errors.email}
        helperText={errors.name && errors.email}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        label="The subject of the message"
        onChange={handleChange('subject')}
        fullWidth
        error={errors.subject}
        helperText={errors.name && errors.subject}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        label="Your message"
        onChange={handleChange('message')}
        fullWidth
        error={errors.message}
        helperText={errors.name && errors.message}
        multiline
        rows={4}
      />
      <CustomButton type="submit" margin="12px 0 0 0" onClick={handleSubmit}>
        Send
      </CustomButton>
    </div>
  )
}

export default ContactForm
