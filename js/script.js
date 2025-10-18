let smallAndMobileScreens = window.matchMedia(
  '(min-width: 300px) and (max-width: 766.9px)'
);

let smallScreen = window.matchMedia(
  '(min-width: 300px) and (max-width: 399px)'
);

let mobileScreen = window.matchMedia(
  '(min-width: 399px) and (max-width: 767px)'
);

let tabletScreen = window.matchMedia(
  '(min-width: 767px) and (max-width: 1023px)'
);

let largeScreens = window.matchMedia('(min-width: 1023px)');

let navMob = document.querySelector('#navMob');

let burger = document.querySelector('#burger');

let menu = document.querySelector('#menu');

let navContent = document.querySelector('#navContent');

let closeONE = document.querySelector('#closeONE');

if (smallAndMobileScreens.matches) {
  burger.style.opacity = '1';
  burger.addEventListener('click', function () {
    burger.style.zIndex = '1';
    navMob.style.width = '100%';
    navMob.style.height = 'auto';
    navMob.style.transition = 'all 0.2s ease-in';
    menu.style.height = '100%';
    menu.style.opacity = '1';
    menu.style.width = '88%';
    menu.style.transition = 'all 0.2s ease-in';
    navContent.style.opacity = '1';
    navContent.style.width = '95%';
    navContent.style.height = '100%';
    navContent.style.transition = 'all 0.2s ease-in';
    closeONE.style.zIndex = '2';

    closeONE.addEventListener('click', function () {
      closeONE.style.zIndex = '-1';
      navMob.style.width = '0';
      navMob.style.height = '0';
      navMob.style.transition = 'all 0.2s ease-out';
      menu.style.width = '0';
      menu.style.opacity = '0';
      menu.style.height = '0';
      menu.style.transition = 'all 0.2s ease-out';
      navContent.style.width = '0';
      navContent.style.opacity = '0';
      navContent.style.height = '0';
      navContent.style.transition = 'all 0.2s ease-out';
      burger.style.zIndex = '2';
    });
  });
}
