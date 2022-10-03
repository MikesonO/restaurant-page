import createHeader from "./modules/structure/header";
import createMain from "./modules/structure/main";
import createFooter from "./modules/structure/footer";
import "./css/styles.css";


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