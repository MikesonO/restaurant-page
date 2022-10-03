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
  
}

pageLoad();