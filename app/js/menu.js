document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const wrapper = document.querySelector('.header__wrapper');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.logo');
  const hamburgerButtonActive = 'hamburger-menu_active';
  const wrapperActive = 'header__wrapper_active';
  const navActive = 'nav_active';
  const logoActive = 'logo_active';
  let windowHeight = window.innerHeight; //document.documentElement.clientHeight;

  const toggleFunc = () => {
    if(hamburgerMenu.classList.contains(hamburgerButtonActive)) {
      hamburgerMenu.classList.remove(hamburgerButtonActive);
      wrapper.classList.remove(wrapperActive);
      anime({
        targets: '.header__wrapper',
        height: 50,
        duration: 200,
        easing: 'easeOutCirc'
      });

      nav.classList.remove(navActive);
      logo.classList.remove(logoActive);
    }else{
      hamburgerMenu.classList.add(hamburgerButtonActive);
      wrapper.classList.add(wrapperActive);

      anime({
        targets: '.header__wrapper',
        height: windowHeight,
        duration: 50,
        easing: 'spring(1, 80, 10, 0)'
      });

      nav.classList.add(navActive);
      logo.classList.add(logoActive);

      anime({
        targets: '.nav__item',
        translateX: -999,
        direction: 'reverse',
        delay: anime.stagger(50, {direction: 'reverse'}, {start: 50}), // increase delay by 100ms for each elements.
        easing: 'easeInOutQuad'
      });
    }
  };

    //open mobile menu
    hamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFunc();
    }, false);

  //collapse mobile menu on click at link
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains(navActive)) {
      e.preventDefault();
      toggleFunc();
      console.log(e.target);
    }
  });
});
