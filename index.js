const tasks = [
  {
    todo: "Do something nice for someone I care about",
    completed: true,
  },
  {
    todo: "Memorize the fifty states and their capitals",
    completed: false,
  },
  {
    todo: "Watch a classic movie",
    completed: false,
  },
  {
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
  {
    todo: "Solve a Rubik's cube",
    completed: false,
  },
  {
    todo: "Bake pastries for me and neighbor",
    completed: false,
  },
  {
    todo: "Go see a Broadway production",
    completed: false,
  },
  {
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
  },
  {
    todo: "Invite some friends over for a game night",
    completed: false,
  },
  {
    todo: "Have a football scrimmage with some friends",
    completed: false,
  },
  {
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
  },
  {
    todo: "Organize pantry",
    completed: true,
  },
  {
    todo: "Buy a new house decoration",
    completed: false,
  },
  {
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
  },
  {
    todo: "Clean out car",
    completed: false,
  },
  {
    todo: "Draw and color a Mandala",
    completed: true,
  },
  {
    todo: "Create a cookbook with favorite recipes",
    completed: false,
  },
  {
    todo: "Bake a pie with some friends",
    completed: false,
  },
  {
    todo: "Create a compost pile",
    completed: true,
  },
  {
    todo: "Take a hike at a local park",
    completed: true,
  },
  {
    todo: "Take a class at local community center that interests you",
    completed: false,
  },
  {
    todo: "Research a topic interested in",
    completed: false,
  },
  {
    todo: "Plan a trip to another country",
    completed: true,
  },
  {
    todo: "Improve touch typing",
    completed: false,
  },
  {
    todo: "Learn Express.js",
    completed: false,
  },
  {
    todo: "Learn calligraphy",
    completed: false,
  },
  {
    todo: "Have a photo session with some friends",
    completed: false,
  },
  {
    todo: "Go to the gym",
    completed: false,
  },
  {
    todo: "Make own LEGO creation",
    completed: false,
  },
  {
    todo: "Take cat on a walk",
    completed: false,
  },
];
// ESERCIZIO 1:

// Usando JS, crea un elemento HTML per ognuna delle seguenti task:
// L'elemento deve mostrare il testo della task ed avere un sfondo verde in caso sia
// completata, rosso se non lo e'.

// ESERCIZIO 2:

// Modificando il codice precedente, assicurati che solo le task NON completate siano mostrate sulla pagina.

// ESERCIZIO 3:

// Aggiungi un input che filtri le task in base alla proprieta' todo

//? Esercizio 1:

const divG = document.querySelector(".greenRs");
const divR = document.querySelector(".redRs");
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    // let tasksGreen = tasks[i];
    // console.log(tasksGreen);
    divG.innerHTML += `<ul><li>${tasks[i].todo}</li></ul>`;
    // divG.style.color = "green";
    divG.classList.add("greenResult");

    // div.innerHTML = "";
  } else {
    divR.innerHTML += `<ul><li>${tasks[i].todo}</li></ul>`;
    // divR.style.color = "red";
    divR.classList.add("redResult");
  }
}
// Nascondere Lista Completate
const button = document.querySelector("button");

const hideGreen = function () {
  let selectList = document.querySelector(".greenRs");
  selectList.classList.toggle("hide");
};
button.addEventListener("click", hideGreen);

//? Filtrare

//! Per ottenere il valore dell'input (1 modo)
// const getValue = function (input) {
//   return input.value;
// };
// const getTask = function () {
//   const valInput = input.value;
// };
//! - Per ottenere il valore dell'input con l'Evento(2 modo)
// const getTask = function (changeEvent) {
//   return changeEvent.target.value;
// };

// Preparo la funzione Evento da richiamare
const mostraTarget = function (keyupEvent) {
  return keyupEvent.target.value;
};
//? Seleziono ul html
const ul = document.querySelector("#tasksList");
let noResult = "Nessun risultato!";

const filterList = function (keyupEvent) {
  ul.innerHTML = "";
  // console.log(keyupEvent);

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].todo
        .toLowerCase()
        .includes(mostraTarget(keyupEvent).toLowerCase())
    ) {
      ul.innerHTML += `<li>${tasks[i].todo}</li>`;
    }
    // Se non ci sono risultati
    // if (todoResult.length === 0) {
    //   p.innerText = `${noResult}`;
    // }
    // inputText.value = "";
  }
  if (mostraTarget(keyupEvent).length === 0) {
    ul.innerHTML = "";
  }
};
const inputText = document.querySelector(".inputTesto");
inputText.addEventListener("keyup", filterList);
// console.log(inputText);
// inputText.onkeyup = filterList;
