// Declare UI Variables...
const openMenu = document.querySelector('#open_menu');
const closeMenu = document.querySelector('#close__menu');
const overLay = document.querySelector('.overlay');
const arrowDown = document.querySelectorAll('#arrowDown');

// runAllEvents...
function runAllEvents(e) {
    // Add event to "Open Menu"
    openMenu.addEventListener('click', openMe);

    // Add event to "Close Menu"
    closeMenu.addEventListener('click', closeMe);
};
runAllEvents();

// open menu function
function openMe(e) {
    const visibility = overLay.getAttribute('data-visible');

    if (visibility === "false") {
        overLay.setAttribute('data-visible', true);
        overLay.setAttribute('aria-expanded', true);
    };
    e.preventDefault();
};

// close menu function
function closeMe(e) {
    const visibility = overLay.getAttribute('data-visible');

    if (visibility === "true") {
        overLay.setAttribute('data-visible', false);
        overLay.setAttribute('aria-expanded', false);
    };
    e.preventDefault();
};

// arrowDown second trial...
for (let i = 0; i < arrowDown.length; i++){
    arrowDown[i].addEventListener('click', (e) => {
        let arrowDownParent = e.target.parentElement;
        console.log(arrowDownParent);
        arrowDownParent.classList.toggle('dropMenu');
    });
};