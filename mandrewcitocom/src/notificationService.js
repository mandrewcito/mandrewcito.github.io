import miniToastr from 'mini-toastr'

const notificationService = {
  defaultMessage: {
    type: 'info',
    title: 'default title',
    message: 'default message',
    timeout: 3000, // timeout autohide
    cb: undefined // callback funciton
  },
  types: miniToastr.config.types,
  notify: (apayload) => {
    var payload = { ...notificationService.defaultMessage, ...apayload }
    miniToastr[payload.type](payload.message, payload.title, payload.timeout, payload.cb)
  }
}

export default notificationService
