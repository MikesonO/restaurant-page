export function navigation() {
  const links = document.querySelectorAll(".header ul li a");
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (!link.classList.contains("logo-link")) { //Adds active class to link clicked and displays page.
        display(link);
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      } else { //Reload Page when logo is pressed
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
      document.getElementById("home").style.display = "flex";
    } else if (link.textContent == "Menu") {
      document.getElementById("menu").style.display = "flex";
    } else if (link.textContent == "About") {
      document.getElementById("about").style.display = "flex";
    } else if (link.textContent == "Contact") {
      document.getElementById("contact").style.display = "flex";
    }
  }

  //Event Listeners for Homepage Buttons

  //Book Table Button
  const bookTableButton = document.querySelector(".book-btn")
  bookTableButton.addEventListener("click",()=>{
   links[4].click();
  })

  //View Menu Button
  const viewMenuButton = document.querySelector(".view-btn")
  viewMenuButton.addEventListener("click",()=>{
   links[1].click();
  })

  //Send Button
  const sendButton = document.querySelector(".send-btn")
  sendButton.addEventListener("click",() => location.reload());

  //Logo Button
  const logo = document.querySelector(".logo-hamburger")
  logo.addEventListener("click",() => location.reload());


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("header ul")

  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".links").forEach(link => link.addEventListener("click", ()=>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }));

}

