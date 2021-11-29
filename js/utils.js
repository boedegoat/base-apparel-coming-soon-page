export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function toast(msg) {
  const toast = document.createElement('div')
  toast.classList = 'toast'
  toast.innerHTML = `
    <div class="bg-white font-bold px-5 py-3 rounded-md drop-shadow-xl max-w-max mx-auto text-center text-sm">
      ${msg}
    </div>
  `
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.classList.toggle('show')
  }, 0)
  setTimeout(() => {
    toast.classList.toggle('show')
    toast.ontransitionend = () => toast.remove()
  }, 2500)
}
