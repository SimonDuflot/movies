const title = document.querySelector(".title");

//Creating element
const text = document.createElement("p");

text.innerHTML = "Un peu de texte..."; // ==> CAREFUL IT IS NOT SAFE TO USE innerHTML, privilégier innerText ou textcontent
text.style.color = "red";

//adding a class
text.classList.add("text-color");

//adding an ID
text.setAttribute("id", "text");

//insert element
text.insertAdjacentElement("beforebegin", text);
title.append(text);

//deleting
text.remove();
