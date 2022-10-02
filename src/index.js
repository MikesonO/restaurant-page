import createHeader from "./modules/structure/header";

function pageLoad() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(createHeader);

}

pageLoad();