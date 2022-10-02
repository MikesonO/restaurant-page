import createHeader from "./modules/structure/header";
import createMain from "./modules/structure/main";
import createFooter from "./modules/structure/footer";

function pageLoad() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(createHeader);
  content.appendChild(createMain);
  content.appendChild(createFooter);

}

pageLoad();