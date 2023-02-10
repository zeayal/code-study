// document.body.style.border = '5px solid red'

setInterval(() => {
    const navbars = document.getElementsByClassName('navbar_logo__LTPlN');
    if (navbars.length) {
        navbar = navbars[0];
        navbar.parentNode.removeChild(navbar);
        // navbar.addEventListener('click', function () {
        //     console.log('navbar', navbar);

        // })
        // navbar.onclick = function () {
        //     console.log('navbar', navbar);
        //     navbar.parentNode.removeChild(navbar);
        // }

    }
}, 2000)
