function createContact(){
  const contact = document.createElement("div");
  contact.setAttribute("id","contact");
  contact.setAttribute("style","display: none");

  return contact;
}

export default createContact();