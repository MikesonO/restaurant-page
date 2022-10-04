import createHeader from "./modules/structure/header";
import createMain from "./modules/structure/main";
import createFooter from "./modules/structure/footer";
import "./css/styles.css";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



function pageLoad() {
  const content = document.getElementById("content");
  console.log(content);

  content.append(
    createHeader,
    createMain,
    createFooter
  )

  const links = document.querySelectorAll(".header ul li a");
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (!link.classList.contains("logo-link")) {
        display(link);
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      } else {
        location.reload();
      }


    });
  });

  function display(link) {
    document.getElementById("home").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    if (link.textContent == "Home") {
      document.getElementById("home").style.display = "grid";
    } else if (link.textContent == "Menu") {
      document.getElementById("menu").style.display = "block";
    } else if (link.textContent == "About") {
      document.getElementById("about").style.display = "block";
    } else if (link.textContent == "Contact") {
      document.getElementById("contact").style.display = "block";
    }
  }

}

pageLoad();