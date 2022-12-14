function createFooter() {
  const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.appendChild(link())

    return footer;
  }

  function link(){
    const a = document.createElement("a");
    const github = document.createElement("i");

    a.textContent = "Created by MikesonO  ";

    github.setAttribute("class","fa-brands fa-github")
    a.setAttribute("href","https://github.com/MikesonO/restaurant-page");
    a.setAttribute("target","_blank");

    a.append(github);
    return a;
  }

  export default createFooter();