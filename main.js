const navBtn = document.querySelector('.navBar-drawer')
const navBar = document.querySelector('.navBar');
const openDrawer = document.querySelector('.drawer-navigation')

addEventListener('scroll', function() {
    if(this.window.scrollY >= 20) {
        document.body.classList.add('fixed-header')
    } else {
        document.body.classList.remove('fixed-header')
    }
})

const openDrawerNav = () => {
    openDrawer.classList.toggle('open-drawer')
}