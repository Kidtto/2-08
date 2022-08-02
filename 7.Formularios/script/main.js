'use strict';
//Crear contenedores (Donde se guardan los datos)
/*
1. var = global : Se presta para errores
2. let = local : Variables
3. const = constantes
*/

const btnValidar= document.getElementById('validar'); //Traer elemento por Id
console.log(btnValidar); //Imprimir
//Al addEventListener debo pasarle dos parámetros
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form= document.getElementById('dataForm');
    console.log(form[1].value);
    console.log(form[2].value);
}); //e de evento console.log(form[1].value para que solo se envíen los datos ingresados)
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form= document.getElementById('typeDocument');
    console.log(form[1].value);
    console.log(form[2].value);
});
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form= document.getElementById('lenguajes');
    console.log(form[1].value);
    console.log(form[2].value);
});
