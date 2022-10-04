export function navigation() {
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