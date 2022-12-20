const bar = document.querySelector('.fa-bars');
const logo = document.querySelector('.logo');
const menu = document.querySelector('#menu');

bar.addEventListener('click', () => {
  bar.classList.toggle('fa-xmark');
  if (menu.style.display === 'block' && logo.style.display === 'none') {
    menu.style.display = 'none';
    logo.style.display = 'block';
  } else {
    menu.style.display = 'block';
    logo.style.display = 'none';
  }
});

menu.addEventListener('click', () => {
  bar.classList.toggle('fa-xmark');
  if (menu.style.display === 'block' && logo.style.display === 'none') {
    menu.style.display = 'none';
    logo.style.display = 'block';
  } else {
    menu.style.display = 'block';
    logo.style.display = 'none';
  }
});
