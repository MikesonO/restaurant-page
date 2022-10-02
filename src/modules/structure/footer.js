function createFooter() {
  const footer = document.createElement("main");
    footer.classList.add("footer");
    footer.appendChild(link())

    return footer;
  }

  function link(){
    const a = document.createElement("a");

    a.textContent = "MikesonO";

    a.setAttribute("href","https://github.com/MikesonO/restaurant-page");
    return a;
  }

  export default createFooter();