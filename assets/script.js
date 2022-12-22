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

// Popup Window code
const popupWindow = [
  {
    name: 'Tonic',
    skillList: ['CANOPY', 'Back End Dev', 2015],
    desktopImage: 'Images/popup_window_desktopImg.png',
    mobileImage: 'Images/popup_window_mobImg.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    mobileTech: ['html', 'css', 'javascript'],
    desktopTech: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
];

popupWindow.name = 'Tonic';
popupWindow.skillList = ['CANOPY', 'Back End Dev', 2015];
popupWindow.desktopImage = 'Images/popup_window_desktopImg.png';
popupWindow.mobileImage = 'Images/popup_window_mobImg.png';
popupWindow.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
popupWindow.mobileTech = ['html', 'css', 'javascript'];
popupWindow.desktopTech = [
  'html',
  'css',
  'javascript',
  'github',
  'ruby',
  'bootstrap',
];
popupWindow.liveVersionLink = '#';
popupWindow.sourceCodeLink = '#';

const detail = document.querySelector('#detail');
const detailTitle = document.querySelector('.detail-title');
const detailText = document.querySelector('.detail-text');
const img = document.querySelector('#img');
const detailTag = document.querySelector('#detail-tag');
const modalTag = document.querySelector('#modal-tag');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');
let screenWidth = window.innerWidth;
window.onresize = () => {
  screenWidth = window.innerWidth;
};

function openModal() {
  detail.style.display = 'block';
  detailTitle.textContent = popupWindow.name;
  detailText.textContent = popupWindow.description;
  liveLink.href = popupWindow.liveLink;
  sourceLink.href = popupWindow.sourceLink;
  for (let i = 0; i < popupWindow.skillList.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = popupWindow.skillList[i];
    detailTag.appendChild(li);
  }
  if (screenWidth < 768) {
    img.setAttribute('src', popupWindow.mobileImage);
    for (let i = 0; i < popupWindow.mobileTech.length; i += 1) {
      const liTag = document.createElement('li');
      liTag.textContent = popupWindow.mobileTech[i];
      modalTag.appendChild(liTag);
    }
  } else {
    img.setAttribute('src', popupWindow.desktopImage);
    for (let i = 0; i < popupWindow.desktopTech.length; i += 1) {
      const liTag = document.createElement('li');
      liTag.textContent = popupWindow.desktopTech[i];
      modalTag.appendChild(liTag);
    }
  }
}

function closeModal() {
  detail.style.display = 'none';
  while (modalTag.firstChild) {
    modalTag.removeChild(modalTag.firstChild);
  }
  while (detailTag.firstChild) {
    detailTag.removeChild(detailTag.firstChild);
  }
}

const project = document.querySelectorAll('.more');
project.forEach((btn) => {
  btn.onclick = () => {
    openModal();
  };
});

const close = document.querySelector('#close');
close.onclick = () => {
  closeModal();
};

// Validation contact form

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please enter a valid email';
  } else form.submit();
});
email.onkeypress = () => {
  error.textContent = '';
};
