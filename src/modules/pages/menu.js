import burgerImage from '../../images/burger.png';
import burger2Image from '../../images/burger2.png';
import burger3Image from '../../images/burger3.png';
import burger4Image from '../../images/burger4.png';

function createMenu(){
  const menu = document.createElement("div");
  menu.setAttribute("id","menu");
  menu.setAttribute("style","display: none");

  menu.append(burgers(),createCarousel());


  return menu;
}

function burgers(){
  const burgers = document.createElement("div");
  const heading = document.createElement("h1");
  const burgerMenu = document.createElement("div");

  burgers.setAttribute("class","menu-container");
  heading.setAttribute("class","menu-heading");
  heading.textContent = "Burgers";
  burgerMenu.setAttribute("class","burger-menu");

  burgerMenu.append(
    createBurger("Chick 'N' Licking", "£8.99"),
    createBurger("Burgerlicious", "£7.99"),
    createBurger("The Burgery", "£7.99"),
    createBurger("Buns 'N' Salad", "£6.49")
    )

    burgers.append(heading, burgerMenu);
    return burgers;
}

function createBurger(name, price){
  const burgerContainer = document.createElement("div");
  const burger = document.createElement("div");
  const pricing = document.createElement("div");
  const burgerName = document.createElement("h3");
  const burgerDescription = document.createElement("p");
  const burgerPrice = document.createElement("h1");

  burgerContainer.setAttribute("class","burger-container");
  burgerName.textContent = name;
  burgerDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  burgerPrice.textContent = price;
  burgerPrice.setAttribute("class","burger-price");

  burger.append(burgerName, burgerDescription);
  pricing.appendChild(burgerPrice);
  burgerContainer.append(burger,pricing);

  return burgerContainer;
}



function createCarousel(){
  const carousel = document.createElement("div");
  const carouselHeading = document.createElement("h1");
  const imageContainer = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const food1 = document.createElement("img");
  const food2 = document.createElement("img");
  const food3 = document.createElement("img");
  const food4 = document.createElement("img");

  food1.setAttribute("src", burgerImage);
  food2.setAttribute("src", burger2Image);
  food3.setAttribute("src", burger3Image);
  food4.setAttribute("src", burger4Image);

  
  carousel.setAttribute("class","carousel");
  carouselHeading.setAttribute("class","menu-heading");
  carouselHeading.textContent = "What's new?";
  imageContainer.setAttribute("class","image-container");
  imageWrapper.setAttribute("class","image-wrapper");
  food1.setAttribute("class","carousel-image");
  food2.setAttribute("class","carousel-image");
  food3.setAttribute("class","carousel-image");
  food4.setAttribute("class","carousel-image");



  imageWrapper.append(
    createDivs(food1),
    createDivs(food2),
    createDivs(food3),
    createDivs(food4)
  )

  imageContainer.appendChild(imageWrapper);
  carousel.append(carouselHeading,imageContainer)

  return carousel;
}

function createDivs(image){
  const div = document.createElement("div");
  div.appendChild(image);

  return div;
}

export default createMenu();

