document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const wrapper = document.querySelector('.header__wrapper');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.logo');
  const hamburgerButtonActive = 'hamburger-menu_active';
  const wrapperActive = 'header__wrapper_active';
  const navActive = 'nav_active';
  const logoActive = 'logo_active';

  const toggleFunc = () => {
    if(hamburgerMenu.classList.contains(hamburgerButtonActive)) {
      hamburgerMenu.classList.remove(hamburgerButtonActive);
      wrapper.classList.remove(wrapperActive);
      nav.classList.remove(navActive);
      logo.classList.remove(logoActive);
    }else{
      hamburgerMenu.classList.add(hamburgerButtonActive);
      wrapper.classList.add(wrapperActive);
      nav.classList.add(navActive);
      logo.classList.add(logoActive);

    }

    /*if(nav.classList.contains(mobileMenuActive)) {
      nav.classList.remove(mobileMenuActive);
      header.classList.remove(headerHide);
    }else{
      nav.classList.add(mobileMenuActive);
      header.classList.add(headerHide);
    }*/
  };

    //open mobile menu
    hamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFunc();
    }, false);

/*    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerButtonActive = 'hamburger-menu_active';
    const nav = document.querySelector('.nav');
    const mobileMenuActive = 'nav_active';
    const header = document.querySelector('.header');
    const headerHide = 'header_hide';
    const headerWrapper = document.querySelector('.header__wrapper');
    const logo = document.querySelector('.logo');

    const toggleFunc = () => {
      if(hamburgerMenu.classList.contains(hamburgerButtonActive)) {
        hamburgerMenu.classList.remove(hamburgerButtonActive);
        logo.classList.remove('logo_active');
        headerWrapper.style.padding = null;
      }else{
        hamburgerMenu.classList.add(hamburgerButtonActive);
        logo.classList.add('logo_active');
        headerWrapper.style.padding = '0';
      }

      if(nav.classList.contains(mobileMenuActive)) {
        nav.classList.remove(mobileMenuActive);
        header.classList.remove(headerHide);
      }else{
        nav.classList.add(mobileMenuActive);
        header.classList.add(headerHide);
      }
    };

    //open mobile menu
    hamburgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFunc();
    }, false);

    //collapse mobile menu on click at link
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && nav.classList.contains(mobileMenuActive)) {
        e.preventDefault();
        toggleFunc();
      }
    });*/
});
