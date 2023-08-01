const loader = document.querySelector('.loader');
let mainHeader = document.querySelector('.main-header')

window.onscroll = () => {
    let top = window.scrollY;
    let offset = main.offsetTop - 400;
    let height = main.offsetHeight;

    if(top >= offset && top < offset + height) {
        main.classList.add('animate__animated')
    } else {
        main.classList.remove('animate__animated')
    }
}

const removePreloader = () => preloader.remove();
  let preloader = loader
  if (preloader) {
    window.addEventListener("load", () => setTimeout(removePreloader, 500));
}

addEventListener('scroll', function() {
    if(this.window.scrollY >= 20) {
        document.body.classList.add('fixed-header')
    } else {
        document.body.classList.remove('fixed-header')
    }
})


