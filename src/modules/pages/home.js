import steakImage from '../../images/burger.png';
import fireOverlay from '../../images/fire.png';

function createHome(){
  const home = document.createElement("div");
  home.setAttribute("id","home");
  home.setAttribute("style","display: grid");

  home.append(createHomeContent(),createBackground());

  return home
}

function createBackground(){
  const backgroundContainer = document.createElement("div");
  const burger = document.createElement("img");
  const fire = document.createElement("img")

  backgroundContainer.classList.add("background-container");
  burger.setAttribute("src",steakImage);
  fire.setAttribute("src",fireOverlay);
  burger.setAttribute("alt", "Image of Steak");
  burger.setAttribute("class","burger");
  fire.setAttribute("alt", "Image of Fire");
  fire.setAttribute("class", "fire-overlay");
  
  backgroundContainer.append(burger,fire);

  return backgroundContainer;
}

function createHomeContent(){
  const homeContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const homeText = document.createElement("h1");
  const detailText = document.createElement("p");

  homeContainer.setAttribute("class","home-container");
  textContainer.setAttribute("class", "text-container");
  homeText.setAttribute("class","home-text");
  homeText.innerHTML = "The <span>Perfect</span> Burgers in London";
  detailText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  textContainer.append(homeText, detailText)
  homeContainer.append(textContainer, createHomeButtons());
  
  return homeContainer;
}


function createHomeButtons(){
  const buttons = document.createElement("div");
  const bookTableBtn = document.createElement("button");
  const viewMenuBtn = document.createElement("button");

  buttons.setAttribute("class","home-btns");
  bookTableBtn.setAttribute("class","book-btn btn");
  viewMenuBtn.setAttribute("class","view-btn btn");

  bookTableBtn.textContent = "Book a Table";
  viewMenuBtn.textContent = "View Menu";

  buttons.append(bookTableBtn,viewMenuBtn);

  return buttons;
}


export default createHome();