import { validateEmail, toast } from './utils'

const sendEmailForm = document.getElementById('send-email-form')
const emailInput = document.getElementById('email')
const emailErrorMsg = document.getElementById('email-error-msg')
const emailErrorIcon = document.getElementById('email-error-icon')

sendEmailForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = emailInput.value
  const isEmailValid = validateEmail(email)

  if (isEmailValid) {
    toast('✅ Check your email')
    emailInput.value = ''
    emailInput.classList.remove('error')
    emailErrorMsg.classList.remove('error')
    emailErrorIcon.classList.remove('error')
  } else {
    toast('❌ Please provide a valid email')
    emailInput.classList.add('error')
    emailErrorMsg.classList.add('error')
    emailErrorIcon.classList.add('error')
  }
})
