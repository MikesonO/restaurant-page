function createAbout() {
  const about = document.createElement("div");
  about.setAttribute("id", "about");
  about.setAttribute("style", "display: none");

  about.appendChild(aboutContainer());

  return about;
}

function aboutContainer() {
  const container = document.createElement("div");
  const titleContainer = document.createElement("div");
  const aboutTitle = document.createElement("h1");
  const textContainer = document.createElement("div");

  container.setAttribute("class", "about-container");
  aboutTitle.setAttribute("class", "about-title");
  aboutTitle.textContent = "Our Story";
  textContainer.setAttribute("class","about-text-container");

  titleContainer.appendChild(aboutTitle);
  textContainer.append(
    createParagraph("Family","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    createParagraph("Freshness","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    );


  container.append(titleContainer, textContainer);

  return container;
}

function createParagraph(heading, text, moreText) {
  const paragraph = document.createElement("div");
  const aboutHeading = document.createElement("h1");
  const aboutText = document.createElement("p");
  const moreAboutText = document.createElement("p");
  const paragraphContainer = document.createElement("div");

  aboutHeading.textContent = heading;
  aboutHeading.setAttribute("class","about-heading");
  aboutText.textContent = text;
  moreAboutText.textContent = moreText;
  paragraphContainer.setAttribute("class","about-paragraph");

  paragraphContainer.append(aboutText, moreAboutText);
  paragraph.append(aboutHeading, paragraphContainer);

  return paragraph;
}

export default createAbout();