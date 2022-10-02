import logoImg from '../../images/cow-icon.png';

function createNavigationBar() {

  function createHeader() {
    const header = document.createElement("header");

    header.classList.add("header");
    header.appendChild(createLinks());

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
    homeLink.setAttribute("href","#");

    home.appendChild(homeLink);
    return home;
  }

  //Create Menu Nav-Item
  function createMenuLink() {
    const menu = document.createElement("li");
    const menuLink = document.createElement("a");

    menuLink.textContent = "Menu";
    menuLink.setAttribute("href","#");

    menu.appendChild(menuLink);
    return menu;
  }

  //Create About Nav-Item
  function createAboutLink() {
    const about = document.createElement("li");
    const aboutLink = document.createElement("a");

    aboutLink.textContent = "About";
    aboutLink.setAttribute("href","#");

    about.appendChild(aboutLink);
    return about;
  }


    //Create Logo Nav-Item
    function createLogoLink() {
      const logo = document.createElement("li");
      const logoLink = document.createElement("a");
      const logoText = document.createElement("h1");
      const logoImage = document.createElement("img");

      logoImage.setAttribute("src",logoImg);
      logoImage.setAttribute("width", "40px")
      logoImage.setAttribute("alt","Restaurant Logo")
      logoText.textContent="Steak House";
      logoLink.setAttribute("href","#");

      logoText.appendChild(logoImage);
      logoLink.appendChild(logoText);
      logo.appendChild(logoLink);
      return logo;
    }
  

  //Create Contact Link
  function createContactLink() {
    const contact = document.createElement("li");

    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact";
    contactLink.setAttribute("href","#");

    contact.appendChild(contactLink);
    return contact;
  }

  return createHeader();
}

export default createNavigationBar();