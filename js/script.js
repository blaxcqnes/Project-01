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

let tabletAndlargeScreens = window.matchMedia('(min-width: 767px)');

//////////////////////////////////////////////////////////////

let navBar = document.querySelector('#navBar');

let navMob = document.querySelector('#navMob');

let navMobBurger = document.querySelector('#navMobBurger');

let navMobMenu = document.querySelector('#navMobMenu');

let navMobContent = document.querySelector('#navMobContent');

let navMobClose = document.querySelector('#navMobClose');

let navBarHome = document.querySelector('#navBarHome');

let homeFront = document.querySelector('#homeFront');

let homeLists = document.querySelector('#homeLists');

let navBarAboutUs = document.querySelector('#navBarAboutUs');

let aboutUsFront = document.querySelector('#aboutUsFront');

let aboutUsLists = document.querySelector('#aboutUsLists');

//////////////////////////////////////////////////////////////

let topOne = document.querySelector('#D-topOne');

let topOneHeader = document.querySelector('#topOneHeader');

//////////////////////////////////////////////////////////////

let topTwo = document.querySelector('#E-topTwo');

let topThree = document.querySelector('#F-topThree');

let midOne = document.querySelector('#G-midOne');

let midTwo = document.querySelector('#H-midTwo');

let midThree = document.querySelector('#I-midThree');

let midFour = document.querySelector('#J-midFour');

let bottomOne = document.querySelector('#K-bottomOne');

let bottomTwo = document.querySelector('#L-bottomTwo');

let bottomThree = document.querySelector('#M-bottomThree');

let footer = document.querySelector('#N-footer');

function hideNavMob() {
  navMobClose.style.zIndex = '-1';
  navMob.style.width = '0';
  navMob.style.height = '0';
  navMob.style.transition = 'all 0.2s ease';
  navMobMenu.style.width = '0';
  navMobMenu.style.opacity = '0';
  navMobMenu.style.height = '0';
  navMobMenu.style.transition = 'all 0.2s ease';
  navMobContent.style.width = '0';
  navMobContent.style.opacity = '0';
  navMobContent.style.height = '0';
  navMobContent.style.transition = 'all 0.2s ease';
  navMobBurger.style.zIndex = '2';
  //////////////////////////////////////////////////////////////
  topOne.style.transition = 'all 0.2s ease';
  topOne.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  topTwo.style.transition = 'all 0.2s ease';
  topTwo.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  topThree.style.transition = 'all 0.2s ease';
  topThree.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  midOne.style.transition = 'all 0.2s ease';
  midOne.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  midTwo.style.transition = 'all 0.2s ease';
  midTwo.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  midThree.style.transition = 'all 0.2s ease';
  midThree.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  midFour.style.transition = 'all 0.2s ease';
  midFour.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  bottomOne.style.transition = 'all 0.2s ease';
  bottomOne.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  bottomTwo.style.transition = 'all 0.2s ease';
  bottomTwo.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  bottomThree.style.transition = 'all 0.2s ease';
  bottomThree.style.opacity = '1';
  //////////////////////////////////////////////////////////////
  footer.style.transition = 'all 0.2s ease';
  footer.style.opacity = '1';
  //////////////////////////////////////////////////////////////
}

function showNavMob() {
  navMobBurger.style.zIndex = '1';
  navMob.style.width = '100%';
  navMob.style.height = 'auto';
  navMob.style.transition = 'all 0.2s ease-in';
  navMobMenu.style.height = '100%';
  navMobMenu.style.opacity = '1';
  navMobMenu.style.width = '280px';
  navMobMenu.style.transition = 'all 0.2s ease-in';
  navMobContent.style.opacity = '1';
  navMobContent.style.width = '95%';
  navMobContent.style.height = '100%';
  navMobContent.style.transition = 'all 0.2s ease-in';
  navMobClose.style.zIndex = '2';
  navMobClose.addEventListener('click', hideNavMob);
  /////////////////////////////////////////////////////////////
  topOne.style.transition = 'all 0.2s ease';
  topOne.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  topTwo.style.transition = 'all 0.2s ease';
  topTwo.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  topThree.style.transition = 'all 0.2s ease';
  topThree.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  midOne.style.transition = 'all 0.2s ease';
  midOne.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  midTwo.style.transition = 'all 0.2s ease';
  midTwo.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  midThree.style.transition = 'all 0.2s ease';
  midThree.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  midFour.style.transition = 'all 0.2s ease';
  midFour.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  bottomOne.style.transition = 'all 0.2s ease';
  bottomOne.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  bottomTwo.style.transition = 'all 0.2s ease';
  bottomTwo.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  bottomThree.style.transition = 'all 0.2s ease';
  bottomThree.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
  footer.style.transition = 'all 0.2s ease';
  footer.style.opacity = '0.5';
  ////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////
homeFront.addEventListener('click', function () {
  if (homeLists.classList.contains('homeLists')) {
    navBarHome.style.height = 'auto';
    homeLists.classList.remove('homeLists');
    homeLists.classList.add('homeListsVisible');
    /////////////////////////////////////////////////////////////
    navBarAboutUs.style.opacity = '0';
    navBarAboutUs.style.visibility = 'hidden';
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
  } else {
    homeLists.classList.remove('homeListsVisible');
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    /////////////////////////////////////////////////////////////
    navBarAboutUs.style.opacity = '1';
    navBarAboutUs.style.visibility = 'visible';
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
  }
});
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
aboutUsFront.addEventListener('click', function () {
  if (aboutUsLists.classList.contains('aboutUsLists')) {
    navBarAboutUs.style.opacity = '1';
    navBarAboutUs.style.visibility = 'visible';
    navBarAboutUs.style.height = 'auto';
    aboutUsLists.classList.remove('aboutUsLists');
    aboutUsLists.classList.add('aboutUsListsVisible');
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
  } else {
    aboutUsLists.classList.remove('aboutUsListsVisible');
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
  }
});
//////////////////////////////////////////////////////////////

if (smallAndMobileScreens.matches) {
  navMobBurger.style.opacity = '1';
  navMobBurger.addEventListener('click', showNavMob);
  //////////////////////////////////////////////////////////////
  topOne.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  topTwo.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  topThree.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  midOne.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  midTwo.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  midThree.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  midFour.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  bottomOne.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  bottomTwo.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  bottomThree.addEventListener('click', hideNavMob);
  //////////////////////////////////////////////////////////////
  footer.addEventListener('click', hideNavMob);
}

if (tabletAndlargeScreens.matches) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
      navBar.style.opacity = '1';
      navBar.style.zIndex = '2';
      topOneHeader.style.opacity = '0';
    } else {
      navBar.style.opacity = '0';
      navBar.style.zIndex = '0';
      topOneHeader.style.opacity = '1';
    }
  });
}
