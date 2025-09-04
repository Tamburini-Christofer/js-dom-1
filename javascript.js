//Prendiamo la classe della lampadina Accesa tramite il QuerySelector 
const accesaLampadina = document.querySelector("#accesa");

//Prendiamo la classe della lampadina Spenta tramite il QuerySelector 
const spentaLampadina = document.querySelector("#spenta");

//Prendiamo il meme di quel figo di Will Smith tramite la classe assegnata 
let WillSmith = document.querySelector("#willsmith");

//Il bottone lo prendiamo con l'Id per cambiare
let bottone = document.getElementById("bottone")

//Creiamo una variabile che sostenga che la lampadina sia spenta
let lampadinaSpenta = true;

//Creiamo una funzione che possa switchare
function OnOff () {

//Se la lampadina è spenta
    if (lampadinaSpenta) {

//La lmpadina accesa diventerà block e quindi visibile
        accesaLampadina.style.display = "block";
//La lampadina spenta diventerà none e quindi invisibile
        spentaLampadina.style.display = "none";
//Will Smith apparrirà con il meme grazie al Block
        WillSmith.style.display = "block";
//Il testo del bottone verrà sovrascritto
        bottone.textContent = "Spegni";
//Il Background del bottone diventerà rosso
        bottone.style.backgroundColor = ("red");
//La funzione porterà la lampadina allo stato di false
        lampadinaSpenta = false;
    } else {
//La lampadina accesa diventerà invisibile
        accesaLampadina.style.display = "none";
//La lampadina spenta diventerà visibile
        spentaLampadina.style.display = "block";
//Will Smith se ne andrà come alla notte degli Oscar
        WillSmith.style.display = "none";
//Il testo del bottone verrà sovrascritto 
        bottone.textContent = "Accendi";
//Il background del bottone tornerà blu
        bottone.style.backgroundColor = ("blue");
//La funzione tornerà true
        lampadinaSpenta = true;
    }
}

//Aggiuno l'evento del click sul bottone e attivo la funzione
bottone.addEventListener ("click",OnOff);
