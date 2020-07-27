export function debounce(func, wait, time){

  return (...event) => clearTimeout(time, time = setTimeout( () => func(...event), wait) )
}

export function modal(type, msg){

  let modal = document.createElement('div')
      modal.setAttribute('role', 'dialog')
      modal.classList.add('modal')

  let content = document.createElement('div')
      content.classList.add('modal--content')

  let text = {
    warning: `<span class="flaticon-warning"></span><p>${msg}</p><button class="btn secondary flaticon-close modal--close "><span>FECHAR</span></button>`,
  }
  
  content.innerHTML = text[type]
  content.classList.add(type)

  modal.appendChild(content)
  document.querySelector('body').appendChild(modal)
   
  document.querySelector('.modal--close').addEventListener('click', event => {
    modal.classList.add('close')
    setTimeout( () => {
      modal.remove()
    }, 600)
  })

}
