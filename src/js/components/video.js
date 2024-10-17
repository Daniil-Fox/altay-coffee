const videoCont = document.querySelectorAll('.dishes__img')

videoCont.forEach(cont => {
  const videoDish = cont?.querySelector('video')
  if(videoDish){
    videoDish.addEventListener('play', e => {
      cont.classList.add('active')

    })
    videoDish.addEventListener('pause', e => {
      cont.classList.remove('active')
    })

  }
})

