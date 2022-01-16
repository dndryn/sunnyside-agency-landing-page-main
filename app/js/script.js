const greetings = 'Hello everyone!';
console.log(greetings);

const nav = document.querySelector('nav');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const hidden = document.querySelector('.hidden');
const flex = document.querySelector('.flex');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

const toggleFunction = () => {
  console.log('click hamburger');

  if (toggle.classList.contains('toggle--open')) { // close hamburger menu
    toggle.classList.remove('toggle--open');
    overlay.classList.remove('overlay__visible');
    overlay.classList.add('overlay__hidden');
    menu.classList.remove('menu--visible');
    menu.classList.add('menu--hidden');

    /*     body.style.overflowY = "scroll";
        body.style.height = "auto"; */
  }
  else { // open hamburger menu
    toggle.classList.add('toggle--open');
    menu.classList.remove('menu--hidden');
    menu.classList.add('menu--visible');
    overlay.classList.remove('overlay__hidden');
    overlay.classList.add('overlay__visible');
    /* 
        body.style.overflowY = "hidden";
        body.style.height = "100%"; */
  }

}

toggle.addEventListener('click', toggleFunction, false);
overlay.addEventListener('click', toggleFunction, false);



