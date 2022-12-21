const bar = document.querySelector(".fa-bars");
const logo = document.querySelector(".logo");
const menu = document.querySelector("#menu");

bar.addEventListener("click", () => {
  bar.classList.toggle("fa-xmark");
  if (menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  bar.classList.toggle("fa-xmark");
  if (menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
});

// Popup Window code

const project_popup = [
  {
    name: "Tonic",
    skillList: ["CANOPY", "Back End Dev", 2015],
    desktopImage: "Images/popup_window_desktopImg.png",
    mobileImage: "Images/popup_window_mobImg.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileTech: ["html", "css", "javascript"],
    desktopTech: ["html", "css", "javascript", "github", "ruby", "bootstrap"],
    liveVersionLink: "#",
    sourceCodeLink: "#",
  },
];

project_popup.name = "Tonic";
project_popup.skillList = ["CANOPY", "Back End Dev", 2015];
project_popup.desktopImage = "Images/popup_window_desktopImg.png";
project_popup.mobileImage = "Images/popup_window_mobImg.png";
project_popup.description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
project_popup.mobileTech = ["html", "css", "javascript"];
project_popup.desktopTech = [
  "html",
  "css",
  "javascript",
  "github",
  "ruby",
  "bootstrap",
];
project_popup.liveVersionLink = "#";
project_popup.sourceCodeLink = "#";

const detail = document.querySelector("#detail");
const detailTitle = document.querySelector(".detail-title");
const detailText = document.querySelector(".detail-text");
const img = document.querySelector("#img");
const modalTag = document.querySelector("#modal-tag");
const liveLink = document.querySelector("#live-link");
const sourceLink = document.querySelector("#source-link");
window.onresize = () => {
  screenWidth = window.innerWidth;
};

function openModal() {
  detail.style.display = "block";
  detailTitle.textContent = project_popup.name;
  detailText.textContent = project_popup.description;
  detailSkill.textContent = liveLink.href = project_popup.liveLink;
  sourceLink.href = project_popup.sourceLink;
  if (screenWidth < 768) {
    img.setAttribute("src", project_popup.mobileImage);
    for (let i = 0; i < project_popup.mobileTech.length; i += 1) {
      const liTag = document.createElement("li");
      liTag.textContent = project_popup.mobileTech[i];
      modalTag.appendChild(liTag);
    }
  } else {
    img.setAttribute("src", project_popup.desktopImage);
    for (let i = 0; i < project_popup.desktopTech.length; i += 1) {
      const liTag = document.createElement("li");
      liTag.textContent = project_popup.desktopTech[i];
      modalTag.appendChild(liTag);
    }
  }
}

function closeModal() {
  detail.style.display = "none";
  while (modalTag.firstChild) {
    modalTag.removeChild(modalTag.firstChild);
  }
}

const project = [...document.querySelectorAll(".more")];
project.forEach((btn) => {
  btn.onclick = () => {
    openModal();
  };
});

const close = document.querySelector("#close");
close.onclick = () => {
  closeModal();
};
