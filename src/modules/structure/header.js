import logoImg from '../../images/burger-icon.png';

function createHeader() {

  function createHeader() {
    const header = document.createElement("header");

    header.classList.add("header");
    header.append(createLinks(),createLogo(),createHamburgerBtn());

    return header;
  }

  const createLinks = () => {
    const links = document.createElement("ul");

    links.append(
      createHomeLink(),
      createMenuLink(),
      createLogoLink(),
      createAboutLink(),
      createContactLink()
    );

    return links;
  };

  //Create Home Nav-Item
  function createHomeLink() {
    const home = document.createElement("li");
    const homeLink = document.createElement("a");

    homeLink.textContent = "Home";
    homeLink.setAttribute("href", "#");
    homeLink.setAttribute("class", "links active");

    home.appendChild(homeLink);
    return home;
  }

  //Create Menu Nav-Item
  function createMenuLink() {
    const menu = document.createElement("li");
    const menuLink = document.createElement("a");

    menuLink.textContent = "Menu";
    menuLink.setAttribute("href", "#");
    menuLink.setAttribute("class", "links");

    menu.appendChild(menuLink);
    return menu;
  }

  //Create Logo Nav-Item
  function createLogoLink() {
    const logo = document.createElement("li");
    const logoLink = document.createElement("a");
    const logoText = document.createElement("h1");
    const logoImage = document.createElement("img");

    logoImage.setAttribute("src", logoImg);
    logoImage.setAttribute("width", "40px");
    logoImage.setAttribute("alt", "Restaurant Logo");
    logoText.textContent = "Urban Burgers";
    logoText.setAttribute("class", "logo");
    logoLink.setAttribute("href", "#");
    logoLink.setAttribute("class", "logo-link");

    logoText.appendChild(logoImage);
    logoLink.appendChild(logoText);
    logo.appendChild(logoLink);
    return logo;
  }

  //Create About Nav-Item
  function createAboutLink() {
    const about = document.createElement("li");
    const aboutLink = document.createElement("a");

    aboutLink.textContent = "About";
    aboutLink.setAttribute("href", "#");
    aboutLink.setAttribute("class", "links");

    about.appendChild(aboutLink);
    return about;
  }


  //Create Contact Link
  function createContactLink() {
    const contact = document.createElement("li");

    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact";
    contactLink.setAttribute("href", "#");
    contactLink.setAttribute("class", "links");

    contact.appendChild(contactLink);
    return contact;
  }

  //Create Hamburger Button
  function createHamburgerBtn(){
    const hamburger = document.createElement("div");
   
    hamburger.setAttribute("class","hamburger");
    hamburger.append(createBlock(),createBlock(),createBlock());

    return hamburger;
  }

  function createBlock(){
    const block = document.createElement("span");
    block.setAttribute("class","block");
    return block;
  }

  //Create Logo for Media Query
  function createLogo(){
    const logo = document.createElement("div");
    const logoLink = document.createElement("a");
    const logoText = document.createElement("h1");
    const logoImage = document.createElement("img");

    logo.setAttribute("class","logo-hamburger")
    logoImage.setAttribute("src", logoImg);
    logoImage.setAttribute("width", "40px");
    logoImage.setAttribute("alt", "Restaurant Logo");
    logoText.textContent = "Urban Burgers";
    logoText.setAttribute("class", "logo");
    logoLink.setAttribute("href", "#");
    logoLink.setAttribute("class", "logo-link");

    logoText.appendChild(logoImage);
    logoLink.appendChild(logoText);
    logo.appendChild(logoLink);
    return logo;
  }

  return createHeader();
}







export default createHeader();