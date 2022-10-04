import burgerImage from '../../images/burger.png';
import burger2Image from '../../images/burger2.png';
import burger3Image from '../../images/burger3.png';
import burger4Image from '../../images/burger4.png';

function createMenu(){
  const menu = document.createElement("div");
  menu.setAttribute("id","menu");
  menu.setAttribute("style","display: none");

  menu.append(createCarousel());


  return menu;
}


function createCarousel(){
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

  return imageContainer;
}

function createDivs(image){
  const div = document.createElement("div");
  div.appendChild(image);

  return div;
}

export default createMenu();

