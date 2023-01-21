let btn = document.querySelector('span#btn')
btn.addEventListener('click', () => {
    let areaMenu = document.getElementById('menu-area')
    if (areaMenu.style.width == '0px') {
        areaMenu.style.width = '200px'
    } else {
        areaMenu.style.width = '0px'
    }
})

