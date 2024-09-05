let con = document.querySelector('#container');
let burgerONE = document.querySelector('#burgerONE');
let mob = document.querySelector('#MOB');
let closeONE = document.querySelector('#closeONE');
let mobile = window.matchMedia('(min-width: 310px) and (max-width: 1023px)');

if (mobile.matches) {
  burgerONE.style.display = 'inline';
} else {
  burgerONE.style.display = 'none';
}

burgerONE.addEventListener('click', function () {
  burgerONE.style.display = 'none';

  mob.style.cssText = `
  display: flex;
  flex-direction: row;
    `;
});

closeONE.addEventListener('click', function () {
  mob.style.display = 'none';
  burgerONE.style.display = 'inline';
});
