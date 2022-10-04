import createHome from "../pages/home"
import createMenu from "../pages/menu"
import createAbout from "../pages/about"
import createContact from "../pages/contact"

function createMain() {
  const main = document.createElement("main");

    main.append(createHome,createMenu, createAbout, createContact);
    return main;
  }

  export default createMain();
