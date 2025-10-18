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
    navMob.style.width = 'auto';
    navMob.style.height = 'auto';
    menu.style.opacity = '1';
    menu.style.width = '44dvh';
    menu.style.height = '100%';
    navContent.style.opacity = '1';
    navContent.style.width = '41dvh';
    navContent.style.height = '100%';
    closeONE.style.zIndex = '2';
    navContent.style.width = '200pt';

    closeONE.addEventListener('click', function () {
      burger.style.zIndex = '2';
      navMob.style.width = '0';
      navMob.style.height = '0';
      menu.style.opacity = '0';
      menu.style.width = '0';
      menu.style.height = '0';
      navContent.style.opacity = '0';
      navContent.style.width = '0';
      navContent.style.height = '0';
      closeONE.style.zIndex = '-1';
    });
  });
}

// let con = document.querySelector('#container');
// let burgerONE = document.querySelector('#burgerONE');
// let mob = document.querySelector('#MOB');
// let closeONE = document.querySelector('#closeONE');
// let topONE = document.querySelector('#topONE');
// let mobile = window.matchMedia('(min-width: 310px) and (max-width: 1023px)');

// if (mobile.matches) {
//   burgerONE.style.display = 'inline';
// } else {
//   burgerONE.style.display = 'none';
// }

// topONE.addEventListener('click', function () {
//   mob.style.display = 'none';
//   burgerONE.style.display = 'inline';
// });

// burgerONE.addEventListener('click', function () {
//   burgerONE.style.display = 'none';

//   mob.style.cssText = `
//   display: flex;
//   flex-direction: row;
//     `;
// });

// closeONE.addEventListener('click', function () {
//   mob.style.display = 'none';
//   burgerONE.style.display = 'inline';
// });
