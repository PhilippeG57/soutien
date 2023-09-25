let nombre1 = document.getElementById("nombre1");
let nombre2 = document.getElementById("nombre2");

let buttons = document.querySelectorAll("button");
let result = document.getElementById("resultat");

// console.log(buttons.length); renvoie 4 dans la console

//Bouton correspontant à l'addition
buttons[0].addEventListener("click", function(){
    console.log("ok addition");
    result.value = parseInt(nombre1.value)+parseInt(nombre2.value);
})


//Bouton correspontant à la soustraction
buttons[1].addEventListener("click", function(){
    console.log("ok soustraction");
    result.value = parseInt(nombre1.value)-parseInt(nombre2.value);
})


//Bouton correspontant à la multiplication
buttons[2].addEventListener("click", function(){
    console.log("ok multiplication");
    result.value = parseInt(nombre1.value)*parseInt(nombre2.value);
})

//Bouton correspontant à la division
buttons[3].addEventListener("click", function(){
    console.log("ok division");
    result.value = parseInt(nombre1.value)/parseInt(nombre2.value);
})