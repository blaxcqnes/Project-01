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

let navMob = document.querySelector('#C-navMob');

let navMobBurger = document.querySelector('#navMobBurger');

let navMobMenu = document.querySelector('#navMobMenu');

let navMobContent = document.querySelector('#navMobContent');

let navMobClose = document.querySelector('#navMobClose');

if (smallAndMobileScreens.matches) {
  navMobBurger.style.opacity = '1';
  navMobBurger.addEventListener('click', function () {
    navMobBurger.style.zIndex = '1';
    navMob.style.width = '100%';
    navMob.style.height = 'auto';
    navMob.style.transition = 'all 0.2s ease-in';
    navMobMenu.style.height = '100%';
    navMobMenu.style.opacity = '1';
    navMobMenu.style.width = '88%';
    navMobMenu.style.transition = 'all 0.2s ease-in';
    navMobContent.style.opacity = '1';
    navMobContent.style.width = '95%';
    navMobContent.style.height = '100%';
    navMobContent.style.transition = 'all 0.2s ease-in';
    navMobClose.style.zIndex = '2';

    navMobClose.addEventListener('click', function () {
      navMobClose.style.zIndex = '-1';
      navMob.style.width = '0';
      navMob.style.height = '0';
      navMob.style.transition = 'all 0.2s ease-out';
      navMobMenu.style.width = '0';
      navMobMenu.style.opacity = '0';
      navMobMenu.style.height = '0';
      navMobMenu.style.transition = 'all 0.2s ease-out';
      navMobContent.style.width = '0';
      navMobContent.style.opacity = '0';
      navMobContent.style.height = '0';
      navMobContent.style.transition = 'all 0.2s ease-out';
      navMobBurger.style.zIndex = '2';
    });
  });
}
