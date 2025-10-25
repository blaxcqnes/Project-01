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

let backToTopFunction = document.querySelector('#backToTopFunction');

let goToButton = document.querySelector('#goToButton');

let oneArrow = document.querySelector('#oneArrow');

let goToContents = document.querySelector('#goToContents');

let goToTopOne = document.querySelector('#goToTopOne');

let goToTopThree = document.querySelector('#goToTopThree');

let goToMidOne = document.querySelector('#goToMidOne');

let goToMidTwo = document.querySelector('#goToMidTwo');

let goToMidThree = document.querySelector('#goToMidThree');

let goToMidFour = document.querySelector('#goToMidFour');

let goToBottomOne = document.querySelector('#goToBottomOne');

let goToBottomTwo = document.querySelector('#goToBottomTwo');

let goToBottomThree = document.querySelector('#goToBottomThree');

//////////////////////////////////////////////////////////////

let navBar = document.querySelector('#navBar');

let navMob = document.querySelector('#navMob');

let navMobBurger = document.querySelector('#navMobBurger');

let navMobMenu = document.querySelector('#navMobMenu');

let navMobContent = document.querySelector('#navMobContent');

//////////////////////////////////////////////////////////////

let navBarHome = document.querySelector('#navBarHome');

let homeFront = document.querySelector('#homeFront');

let homeArrow = document.querySelector('#homeArrow');

let homeLists = document.querySelector('#homeLists');

let navBarAboutUs = document.querySelector('#navBarAboutUs');

let aboutUsFront = document.querySelector('#aboutUsFront');

let aboutUsArrow = document.querySelector('#aboutUsArrow');

let aboutUsLists = document.querySelector('#aboutUsLists');

let navBarProducts = document.querySelector('#navBarProducts');

let productsFront = document.querySelector('#productsFront');

let productsArrow = document.querySelector('#productsArrow');

let productsLists = document.querySelector('#productsLists');

let navBarBlogs = document.querySelector('#navBarBlogs');

let blogsFront = document.querySelector('#blogsFront');

let blogsArrow = document.querySelector('#blogsArrow');

let blogLists = document.querySelector('#blogLists');

//////////////////////////////////////////////////////////////

let navMobClose = document.querySelector('#navMobClose');

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

window.addEventListener('scroll', function () {
  if (window.scrollY >= 300) {
    goToTopOne.style.height = 'unset';
    goToTopOne.style.padding = '10px';
    goToTopOne.style.opacity = '1';
  } else {
    goToTopOne.style.height = '0';
    goToTopOne.style.padding = '0';
    goToTopOne.style.opacity = '0';
  }
}); // scrolling to the top of the page

goToButton.addEventListener('click', function () {
  if (goToContents.classList.contains('goToContents')) {
    goToContents.classList.remove('goToContents');
    goToContents.classList.add('goToContentsVisible');
    oneArrow.style.transform = 'rotateZ(180deg)';
  } else {
    goToContents.classList.remove('goToContentsVisible');
    goToContents.classList.add('goToContents');
    oneArrow.style.transform = 'unset';
  }

  if (window.scrollY >= 300) {
    goToTopOne.style.height = 'unset';
    goToTopOne.style.padding = '10px';
    goToTopOne.style.opacity = '1';
  } else {
    goToTopOne.style.height = '0';
    goToTopOne.style.padding = '0';
    goToTopOne.style.opacity = '0';
  }
}); // button for navigating the page

//////////////////////////////////////////////////////////////

function closeGoToContents() {
  goToContents.classList.add('goToContents');
  oneArrow.style.transform = 'unset';
}

navMobBurger.addEventListener('click', closeGoToContents);

topOne.addEventListener('click', closeGoToContents);

topTwo.addEventListener('click', closeGoToContents);

topThree.addEventListener('click', closeGoToContents);

midOne.addEventListener('click', closeGoToContents);

midTwo.addEventListener('click', closeGoToContents);

midThree.addEventListener('click', closeGoToContents);

midFour.addEventListener('click', closeGoToContents);

bottomOne.addEventListener('click', closeGoToContents);

bottomTwo.addEventListener('click', closeGoToContents);

bottomThree.addEventListener('click', closeGoToContents);

//////////////////////////////////////////////////////////////

goToTopOne.addEventListener('click', function () {
  topOne.scrollIntoView();
  closeGoToContents();
});

goToTopThree.addEventListener('click', function () {
  topThree.scrollIntoView();
  closeGoToContents();
});

goToMidOne.addEventListener('click', function () {
  midOne.scrollIntoView();
  closeGoToContents();
});

goToMidTwo.addEventListener('click', function () {
  midTwo.scrollIntoView();
  closeGoToContents();
});

goToMidThree.addEventListener('click', function () {
  midThree.scrollIntoView();
  closeGoToContents();
});

goToMidFour.addEventListener('click', function () {
  midFour.scrollIntoView();
  closeGoToContents();
});

goToBottomOne.addEventListener('click', function () {
  bottomOne.scrollIntoView();
  closeGoToContents();
});

goToBottomTwo.addEventListener('click', function () {
  bottomTwo.scrollIntoView();
  closeGoToContents();
});

goToBottomThree.addEventListener('click', function () {
  bottomThree.scrollIntoView();
  closeGoToContents();
});

//////////////////////////////////////////////////////////////

function hideNavMob() {
  navMobMenu.style.opacity = '0';
  navMobContent.style.opacity = '0';
  navMob.style.transition = 'all 0.2s ease';
  navMobMenu.style.transition = 'all 0.2s ease';
  navMobContent.style.transition = 'all 0.2s ease';
  navMobBurger.style.zIndex = '2';
  navMobClose.style.zIndex = '-1';
  navMob.style.width = '0';
  navMobMenu.style.width = '0';
  navMobContent.style.width = '0';
  navMobContent.style.visibility = 'hidden';
  homeLists.classList.remove('homeListsVisible');
  homeLists.classList.add('homeLists');
  navBarHome.style.height = '30px';
  homeArrow.style.transform = 'unset';
  aboutUsLists.classList.remove('aboutUsListsVisible');
  aboutUsLists.classList.add('aboutUsLists');
  navBarAboutUs.style.height = '30px';
  aboutUsArrow.style.transform = 'unset';
  productsLists.classList.remove('productsListsVisible');
  productsLists.classList.add('productsLists');
  navBarProducts.style.height = '30px';
  productsArrow.style.transform = 'unset';
  blogLists.classList.remove('blogListsVisible');
  blogLists.classList.add('blogLists');
  navBarBlogs.style.height = '30px';
  blogsArrow.style.transform = 'unset';
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
  navMob.style.transition = 'all 0.2s ease-in';
  navMobMenu.style.transition = 'all 0.2s ease-in';
  navMobContent.style.transition = 'all 0.2s ease-in';
  navMob.style.width = '100%';
  navMobMenu.style.width = '280px';
  navMobContent.style.visibility = 'visible';
  navMobContent.style.width = '95%';
  navMobClose.style.zIndex = '2';
  navMobBurger.style.zIndex = '1';
  navMobMenu.style.opacity = '1';
  navMobContent.style.opacity = '1';
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
    homeArrow.style.transform = 'rotate(90deg)';
    navBarHome.style.height = 'auto';
    homeLists.classList.remove('homeLists');
    homeLists.classList.add('homeListsVisible');
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  } else {
    homeArrow.style.transform = 'unset';
    homeLists.classList.remove('homeListsVisible');
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  }
});

//////////////////////////////////////////////////////////////

aboutUsFront.addEventListener('click', function () {
  if (aboutUsLists.classList.contains('aboutUsLists')) {
    aboutUsArrow.style.transform = 'rotate(90deg)';
    navBarAboutUs.style.height = 'auto';
    aboutUsLists.classList.remove('aboutUsLists');
    aboutUsLists.classList.add('aboutUsListsVisible');
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  } else {
    aboutUsArrow.style.transform = 'unset';
    aboutUsLists.classList.remove('aboutUsListsVisible');
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  }
});

//////////////////////////////////////////////////////////////

productsFront.addEventListener('click', function () {
  if (productsLists.classList.contains('productsLists')) {
    productsArrow.style.transform = 'rotate(90deg)';
    navBarProducts.style.height = 'auto';
    productsLists.classList.remove('productsLists');
    productsLists.classList.add('productsListsVisible');
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  } else {
    productsArrow.style.transform = 'unset';
    productsLists.classList.remove('productsListsVisible');
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    blogsArrow.style.transform = 'unset';
  }
});

//////////////////////////////////////////////////////////////

blogsFront.addEventListener('click', function () {
  if (blogLists.classList.contains('blogLists')) {
    blogsArrow.style.transform = 'rotate(90deg)';
    navBarBlogs.style.height = 'auto';
    blogLists.classList.remove('blogLists');
    blogLists.classList.add('blogListsVisible');
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
  } else {
    blogsArrow.style.transform = 'unset';
    blogLists.classList.remove('blogListsVisible');
    blogLists.classList.add('blogLists');
    navBarBlogs.style.height = '30px';
    /////////////////////////////////////////////////////////////
    homeLists.classList.add('homeLists');
    navBarHome.style.height = '30px';
    homeArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    aboutUsLists.classList.add('aboutUsLists');
    navBarAboutUs.style.height = '30px';
    aboutUsArrow.style.transform = 'unset';
    /////////////////////////////////////////////////////////////
    productsLists.classList.add('productsLists');
    navBarProducts.style.height = '30px';
    productsArrow.style.transform = 'unset';
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

//////////////////////////////////////////////////////////////

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
