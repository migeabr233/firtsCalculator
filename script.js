//optener el ID de los botones.
const botonmultiplicar = document.getElementById("multiplicar");
const botonrestar = document.getElementById("restar");
const botonsumar = document.getElementById("sumar");
const botondividir = document.getElementById("dividir");
//Optener el ID de los imputs.
const numeroCalcular1 = document.getElementById("primernumeroCalcular");
const numeroCalcular2 = document.getElementById("segundonumeroCalcular");
//texarea resultado
const resultado = document.getElementById("textarea");

//funcion de los botones
//funcion multiplicar y evento.
botonmultiplicar.addEventListener("click", function multiplicar() {
  //Convertir las entradas de texto a numeros.
  const A = parseInt(numeroCalcular1.value);
  const B = parseInt(numeroCalcular2.value);
  multiplicacion = A * B;
  //retornar el resultado.
  resultado.value = multiplicacion;
});
//funcion sumar y evento
botonsumar.addEventListener("click", function sumar() {
  //Convertir las entradas de texto a numeros.
  const A = parseInt(numeroCalcular1.value);
  const B = parseInt(numeroCalcular2.value);
  suma = A + B;
  //retornar el resultado.
  resultado.value = suma;
});
//funcion restar y evento
botonrestar.addEventListener("click", function restar() {
  //Convertir las entradas de texto a numeros.
  const A = parseInt(numeroCalcular1.value);
  const B = parseInt(numeroCalcular2.value);
  resta = A - B;
  //retornar el resultado.
  resultado.value = resta
});
//funcion dividir y evento
botondividir.addEventListener("click", function dividir() {
  //Convertir las entradas de texto a numeros.
  const A = parseInt(numeroCalcular1.value);
  const B = parseInt(numeroCalcular2.value);
  //el calculo
  division = A / B;
  //retornar el resultado.
  resultado.value = division;
});
//funcion para restablecer los valores a cero
function resetear() {
    // Reiniciar los campos del formulario
    numeroCalcular1.value = "";
    numeroCalcular2.value = "";
    resultado.value = "";
  
    // Reiniciar las variables
    multiplicacion = 0;
    suma = 0;
    resta = 0;
    division = 0;
}
//Boton para llamar la funcion
const botonreiniciar = document.getElementById("reiniciar");
botonreiniciar.addEventListener("click", resetear);
