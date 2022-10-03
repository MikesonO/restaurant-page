import backgroundImage from '../../images/steak.jpeg';

function createHome(){
  const home = document.createElement("div");
  home.setAttribute("id","home");

  home.appendChild(createBackground());

  return home
}

function createBackground(){
  const backgroundContainer = document.createElement("div");
  const background = document.createElement("img");

  backgroundContainer.classList.add("background-container");
  background.setAttribute("src",backgroundImage);
  background.setAttribute("alt", "Image of Steak");
  
  backgroundContainer.appendChild(background);
  backgroundContainer.appendChild(createHomeContent());

  return backgroundContainer;
}

function createHomeContent(){
  const homeContainer = document.createElement("div");
  const homeText = document.createElement("h1");
  const bookTableBtn = document.createElement("button");
  const viewMenuBtn = document.createElement("button");

  homeContainer.setAttribute("class","home-container")
  homeText.textContent = "London's Premium and Authentic SteakHouse"
  bookTableBtn.textContent = "Book a Table";
  viewMenuBtn.textContent = "View Menu";
  bookTableBtn.setAttribute("class","book-btn");
  viewMenuBtn.setAttribute("class","view-btn");


  homeContainer.append(homeText, bookTableBtn,viewMenuBtn);
  
  return homeContainer;
}


export default createHome();