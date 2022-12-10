const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')


  const sendMail = (to:string,filmName:string) => {
    const msg = {
      to: `${to}`, 
      from: 'halibtunc@gmail.com', 
      subject: 'Film Suggestion',
      text: `${filmName}`,
      html: `<a style="display:'inline-block';padding:'10px';backgroundColor:"blue" "href='https://dev.d1k1o8vw5h0khr.amplifyapp.com'> Let Go To MUUUUVİ</a>`,
    }
    
  return  sgMail.send(msg)
      .then(() => {
      console.log('Email sent')
    }).catch((error: any) => {
    console.error(error)
    })
  }

  export default sendMail
