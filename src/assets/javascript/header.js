let containerHeader = document.querySelector('[data-header="container"]');
let navHeader = document.querySelector('[data-header="nav"]')
let spanHeader = document.querySelectorAll('[data-header="span"]')
let iconHeader = document.querySelectorAll('[data-header="icon"]')

if (containerHeader) {
  window.addEventListener('scroll', function(e) {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if ( containerHeader && scrollTop > 10) {
      containerHeader.classList.add("container-header-vertical");
      navHeader.classList.add("nav-header-vertical");
      iconHeader.forEach((e)=>{
        e.classList.remove('icon-header')
      })
      spanHeader.forEach((e)=>{
        e.classList.add("span-none")
      })
    } else {
      containerHeader.classList.remove("container-header-vertical");
      navHeader.classList.remove("nav-header-vertical");
      spanHeader.forEach((e)=>{
      e.classList.remove("span-none")
      })
    }
})
}

