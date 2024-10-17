const modal = document.querySelector('.modal')

if(modal){
  const videoConts = document.querySelectorAll('[data-video-src]')
  const modalFrame = modal.querySelector('iframe')
  videoConts.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      const src = e.currentTarget.dataset.videoSrc
      modalFrame.src = src
      modal.classList.add('active')
    })
  })


  const modalBody = modal.querySelector('.modal__body')
  const modalClose = modal.querySelector('.modal__close')

  modalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
  modalClose.addEventListener('click', e => {
    modal.classList.remove('active')
  })
  modal.addEventListener('click', e => {
    modal.classList.remove('active')
  })
}
