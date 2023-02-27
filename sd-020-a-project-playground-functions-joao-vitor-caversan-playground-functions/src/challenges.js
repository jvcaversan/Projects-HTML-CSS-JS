// Desafio 1
function compareTrue(valor1, valor2) {
 if (valor1 === true && valor2 === true) {
   return true; 
 }else {
   return false;
}
}
console.log(compareTrue);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  
  let arrayString = frase.split(' ');
  
  return arrayString; 
  
}

// Desafio 4
function concatName(arrayNomes) {
let nome1 = arrayNomes[0];
let nome2 = arrayNomes[arrayNomes.length - 1];
let retorno = nome2 + ', ' + nome1;
return retorno;



}

// Desafio 5
function footballPoints(wins, ties) {
let resultado = (wins * 3) + (ties * 1);

return resultado;
}

// Desafio 6
function highestCount(arrayNumeros){
let maiorNumero = arrayNumeros[0];
for(let i = 0; i < arrayNumeros.length; i += 1){
  if(arrayNumeros[i] > maiorNumero){
  maiorNumero = arrayNumeros[i];
}
}
let contagem = 0;
for(let i = 0; i < arrayNumeros.length; i += 1){
  if(maiorNumero === arrayNumeros[i]){
    contagem = contagem + 1;

  }
}
return contagem;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseabs = Math.abs(mouse);
  let cat1abs = Math.abs(cat1);
  let cat2abs = Math.abs(cat2);
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if(distance1 ===  distance2){
    return "os gatos trombam e o rato foge";
  }

  if(distance1 > distance2){
    return "cat2";
  }else{
    return "cat1";
  }
}


// Desafio 8
function fizzBuzz(arrayNumeros) {
  let numeros = [];

  for(let i = 0; i < arrayNumeros.length; i += 1){
    
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      numeros.push('fizzBuzz');
    }else if (arrayNumeros[i] % 3 === 0){
      numeros.push('fizz');
    }else if (arrayNumeros[i] % 5 === 0){
      numeros.push('buzz');
    }else {
      numeros.push('bug!');
    }
  }
    return numeros;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
