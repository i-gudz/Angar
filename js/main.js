var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
    menu: '#menu',
    normalScrollElements: ' .modal ',
    lazyLoad: true
});

var menu = document.querySelector(".menus"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
    toggle.classList.toggle("menu-open");
};

function toggleMenu() {
    menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);