export function navigation() {
  const links = document.querySelectorAll(".header ul li a");
  links.forEach((link) => {
    link.addEventListener('click', () => {
      console.log(link);
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
      document.getElementById("home").style.display = "grid";
    } else if (link.textContent == "Menu") {
      document.getElementById("menu").style.display = "flex";
    } else if (link.textContent == "About") {
      document.getElementById("about").style.display = "flex";
    } else if (link.textContent == "Contact") {
      document.getElementById("contact").style.display = "block";
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
}

