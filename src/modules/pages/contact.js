function createContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("style", "display: none");


  contact.append(contactInfo())

  return contact;
}

function contactInfo() {
  const contactInfoContainer = document.createElement("div");
  const address = document.createElement("div");
  const telephone = document.createElement("div");
  const email = document.createElement("div");
  const openingTime = document.createElement("div");

  //Adress
  const locationIcon = document.createElement("i");
  const addressHeader = document.createElement("h3");
  const addressInfo1 = document.createElement("p");
  const addressInfo2 = document.createElement("p");

  locationIcon.setAttribute("class", "fa-solid fa-location-dot");
  addressHeader.textContent = "Address";
  addressInfo1.textContent = "Peninsula Square";
  addressInfo2.textContent = "London SE10 0DX";

  address.setAttribute("class", "address");
  address.append(locationIcon, addressHeader, addressInfo1, addressInfo2);

  //Telephone
  const telephoneIcon = document.createElement("i");
  const telephoneHeader = document.createElement("h3");
  const telephoneInfo1 = document.createElement("p");
  const telephoneInfo2 = document.createElement("p");

  telephoneIcon.setAttribute("class", "fa-solid fa-phone");
  telephoneHeader.textContent = "Call Us";
  telephoneInfo1.textContent = "+44 1234 456789";
  telephoneInfo2.textContent = "01332 412 251";

  telephone.setAttribute("class", "telephone");
  telephone.append(telephoneIcon, telephoneHeader, telephoneInfo1, telephoneInfo2);

  //Email
  const emailIcon = document.createElement("i");
  const emailHeader = document.createElement("h3");
  const emailInfo1 = document.createElement("p");
  const emailInfo2 = document.createElement("p");

  emailIcon.setAttribute("class", "fa-solid fa-envelope");
  emailHeader.textContent = "Email Us";
  emailInfo1.textContent = "info@domain.com";
  emailInfo2.textContent = "contact@domain.com";

  email.setAttribute("class", "email");
  email.append(emailIcon, emailHeader, emailInfo1, emailInfo2);


  //Opening Time
  const openingTimeIcon = document.createElement("i");
  const openingTimeHeader = document.createElement("h3");
  const openingTimeInfo1 = document.createElement("p");
  const openingTimeInfo2 = document.createElement("p");

  

  openingTimeIcon.setAttribute("class", "fa-solid fa-clock");
  openingTimeHeader.textContent = "Opening Hours";
  openingTimeInfo1.textContent = "Monday - Friday";
  openingTimeInfo2.textContent = "10:30AM - 08:00PM";

  openingTime.setAttribute("class", "opening-time");
  openingTime.append(openingTimeIcon, openingTimeHeader, openingTimeInfo1, openingTimeInfo2);


  contactInfoContainer.setAttribute("class","contact-info-container")
  contactInfoContainer.append(address, telephone, email, openingTime);
  return contactInfoContainer;

}

function contactForm() {
  //Hit us up!
}

// function maps(){

// }

export default createContact();