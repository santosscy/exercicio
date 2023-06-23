const entrada =require('readline-sync'); 
let letra: string = entrada.question ("Digite uma letra: "); 
if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("Isso e uma vogal");
}
else{
    console.log("Isso nao e uma vogal");
}