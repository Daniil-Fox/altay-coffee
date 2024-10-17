const menu = document.querySelector('.menu')

if(menu){
  const burger = document.querySelector('.header__burger')

  burger.addEventListener('click', e => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  })

  const menuItems = menu.querySelectorAll('.nav__link')

  menuItems.forEach(link => {
    link.addEventListener('click', e => {
      burger.classList.remove('active')
    menu.classList.remove('active')
    })
  })
}
