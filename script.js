function hideNavbar() {
    document.querySelector('.navbar-body').classList.add('hide')

    document.querySelector('main').classList.remove('hide');

}

function showNavbar() {
    document.querySelector('.navbar-body').classList.remove('hide')

    document.querySelector('main').classList.add('hide')
}