

let Header = document.querySelector('[data-header="container"]')
let navHeader = document.querySelector('[data-header="nav"]')
let spanHeader = document.querySelectorAll('[data-header="span"]')
let iconHeader = document.querySelectorAll('[data-header="icon"]')

if (Header) {
  window.addEventListener('scroll', function(e) {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if ( Header && scrollTop > 10) {
      Header.classList.add("container-header-vertical");
      navHeader.classList.add("nav-header-vertical");
      iconHeader.forEach((e)=>{
        e.classList.remove('icon-header')
      })
      spanHeader.forEach((e)=>{
        e.classList.add("span-none")
      })
    } else {
      Header.classList.remove("container-header-vertical");
      navHeader.classList.remove("nav-header-vertical");
      spanHeader.forEach((e)=>{
      e.classList.remove("span-none")
      })
    }
})
}

