// Étape 1 - Version simplifié du jeu

 
// deux couleurs à faire deviner
const colorsToGuess = ["yellow", "blue"] 

//le joueur à 12 essais
const numberMaxOfTries = 12

//le joueur à 4 couleurs possible à deviner
const theOnlycolorsinTheGame = ["yellow", "blue", "green", "red"]

//Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
function VerifyColorsinTheGame(input){
    if (!Array.isArray(input)) {
        console.error("Erreur : l'entrée doit être un tableau.");
        return false;
    }
    for (let color of input){
        if (!theOnlycolorsinTheGame.includes(color)){
            return false
        }
    }
    return true
}

//Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
function correctColorsGuessed(input){
    if ((input[0] === colorsToGuess[0] && input[1] === colorsToGuess[1])){
        return true
    }
    else{ return false }
}

//Une fonction qui gère la partie (continuer tant que/fin si gagné)
function gamePlay (input, currentTry) {
    if (correctColorsGuessed(input)){
        return ("Vous avez gagné")
    }
    if(!VerifyColorsinTheGame()){
        return "Error: you can only play with yellow, blue, green, red"
    }
    
    if (currentTry >= numberMaxOfTries){
        return ("Vous avez atteint votre nombre de chances. Essayez une nouvelle partie")
    }
    
    return ("Vous pouvez continuer à jouer")
}
gamePlay()


//Étape 2 - Testons avec une combinaison de 4 couleurs différentes et un choix de 8 couleurs possibles.


// // Quatre couleurs à faire deviner
// const colorsToGuess = ["yellow", "blue", "green", "red"] 

// //le joueur à 12 essais
// const numberMaxOfTries = 12

// //le joueur à 8 couleurs possible à deviner
// const theOnlycolorsinTheGame = ["yellow", "blue", "green", "red", "black", "white", "orange", "purple"]
//

