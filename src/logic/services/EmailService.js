import AWS from 'aws-sdk'
import toast from 'react-hot-toast'
import mimemessage from 'mimemessage'

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  accessKeyId: process.env.NEXT_PUBLIC_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SES_SECRET_ACCESS_KEY,
  region: 'us-east-1',
})

export const handleContactEmail = async ({
  input,
  resetForm,
  mailTo,
  type,
}) => {
  let html = ''

  switch (type) {
    case 'CONTACT_DASHBOARD':
      html = buildDashboardContactEmail(input)
      break

    default:
      html = buildHomeContactEmail(input)
      break
  }

  console.log(html)
  const params = {
    Destination: {
      ToAddresses: [mailTo || 'am@zolutionstech.com'],
    },
    Message: {
      Body: {
        Html: {
          Data: html,
          Charset: 'UTF-8',
        },
        Text: {
          Data: input.message,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: 'Contact submission from website - ' + input.subject,
        Charset: 'UTF-8',
      },
    },
    Source: 'Condo Smart <am@zolutionstech.com>',
    ReplyToAddresses: [input.email],
  }

  try {
    await ses.sendEmail(params).promise()
    toast.success('Successs')
    resetForm()
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  } finally {
    console.log('Finally..')
  }
}

const buildHomeContactEmail = (input) => {
  return `
    <div >
      <p>
        <strong>Name: </strong>
        ${input.name}
      </p> 
      <p>
        <strong>Email: </strong>
        ${input.email || 'Not specified'}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      ${input.message
        .split('\n')
        .map((row) => `<p >${row}</p>`)
        .join('')}
    </div>
  `
}

const buildDashboardContactEmail = (input) => {
  return `
    <div >
      <p>
        <strong>Name: </strong>
        ${input.name}
      </p>
      <p>
        <strong>Contact preferences: </strong>
        ${input.preference}
      </p>
      <p>
        <strong>Phone: </strong>
        ${input.phoneNumber || 'Not specified'}
      </p>
      <p>
        <strong>Email: </strong>
        ${input.email || 'Not specified'}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      ${input.message
        .split('\n')
        .map((row) => `<p >${row}</p>`)
        .join('')}
    </div>
  `
}

// const handleRawMessage = () => {
//   const mailContent = mimemessage.factory({
//     contentType: 'multipart/mixed',
//     body: [],
//   })

//   mailContent.header('From', input.name + ' <am@zolutionstech.com>')
//   mailContent.header('To', mailTo || 'am@zolutionstech.com')
//   mailContent.header('Subject', input.subject)

//   const alternateEntity = mimemessage.factory({
//     contentType: 'multipart/alternate',
//     body: [],
//   })
//   const htmlEntity = mimemessage.factory({
//     contentType: 'text/html;charset=utf-8',
//     body: html,
//   })
//   const plainEntity = mimemessage.factory({
//     body: 'This is the plain text version of the message.',
//   })

//   alternateEntity.body.push(htmlEntity)
//   alternateEntity.body.push(plainEntity)

//   mailContent.body.push(alternateEntity)
//   // if (file) {
//   //   const attachmentEntity = await attachFile(file, base64)
//   //   mailContent.body.push(attachmentEntity)
//   // }
//   return mailContent
//   AWS.sendRawEmail({ RawMessage: { Data: mailContent.toString() } })
// }

// const getBase64 = async (file) => {
//   return new Promise((resolve) => {
//     let baseURL = ''
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => {
//       baseURL = reader.result
//       resolve(baseURL)
//     }
//   })
// }

// const attachFile = async (file) => {
//   const base64 = await getBase64(file)
//   const entity = mimemessage.factory({
//     contentType: file.type,
//     contentTransferEncoding: 'base64',
//     body: base64,
//   })

//   entity.header('Content-Disposition', `attachment ;filename="${file.name}"`)

//   return entity
// }
