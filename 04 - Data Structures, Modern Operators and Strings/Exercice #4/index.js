// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Data Structures, Modern Operator & Strings #4</h1>`;

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").innerText = "CLICK HERE";

// underscore_case
//    first_name
// Some_Variable
//   calculate_AGE
//    delayed_departure

// underscoreCase
// firstName
// someVariable
// calculateAge
// delayedDeparture

//on met en place l'action sur le bouton click here
document.querySelector("button").addEventListener("click", () => {
  console.log("click");
  //la variable nous permet de récupérer la valeur du text area
  let sentences = document.querySelector("textarea").value;
  //pour ensuite split la valeur en phrase unique dans un array
  const lines = sentences.split("\n");
  console.log(sentences);
  console.log(lines);

  //on utilise une boucle (for of) pour itérer sur chacune des lignes (divise le bloque de phrase en ligne)
  for (let line of lines) {
    // on veut récupérer deux valeurs pour pouvoir mettre une majuscule sur la première lettre de la deuxième valeur
    //Pour cela on met chaque ligne en lowercase, on trim pour enlever les espaces et on spit pour avoir deux valeurs disinctes
    const [first, second] = line.toLowerCase().trim().split("_");

    //on uppercase la première lettre [0] de la deuxième valeur dans une nouvelle constante
    const camelBack = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(camelBack);
  }
});

// function toCamelCase(rawValues){
//     let formatedValues = []
//     rawValues.forEach((val) => {
//       val = val.trim();
//       let format = val.split('_');
//       format = format.map((w) => {
//         return w.toLowerCase();
//       });
//       for (let i = 1; i < format.length; i++) {
//         format[i] = format[i].split('')
//         format[i][0] = format[i][0].toUpperCase()
//         format[i] = format[i].join('')
//       }
//       console.log(format.join(''))
//       formatedValues.push(format.join(''))
//     });
//     return formatedValues
//   }
