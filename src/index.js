import createHeader from "./modules/structure/header";
import createMain from "./modules/structure/main";

function pageLoad() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(createHeader);
  content.appendChild(createMain);

}

pageLoad();