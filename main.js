const loader = document.querySelector('.loader');
const roller = document.querySelector('.lds-roller');

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
