import createHome from "../pages/home"

function createMain() {
  const main = document.createElement("main");

    main.appendChild(createHome);
    return main;
  }

  export default createMain();
