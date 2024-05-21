// Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.

function inverseChaine(str){
    str = str.split("")
    str = str.reverse()
    str = str.join("")
    console.log(str)
    return str
}

//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.

function compterCaractere(car){
    let compte = car.length
    console.log(compte)
    return compte
    
}

//Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
function premièrelettremajuscule(str){
    
    let words = []
    
    for(i=0 ; i<words.length ; i++){
        
        let firsLetter = str.toUpperCase().charAt(0)
        
        
    
    }
    words.push(firsLetter)
    console.log(words)
}

premièrelettremajuscule('salam tout le monde')