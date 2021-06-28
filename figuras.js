// Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
  return lado * 4;
}
console.log("El perimetro del cuadrado es: " + perimetroCuadrado(56) + " cm");

function AreaCuadrado(lado) {
  return lado * lado;
}
console.log("El area del cuadrado es: " + AreaCuadrado(56) + " cm^2");

console.groupEnd();
// Codigo del triangulo
console.group("Triangulo")

  function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 + lado2 + base
  }
  console.log("El perimetro del triangulo es: " + perimetroTriangulo(6,6,4) + " cm");

  function areaTriangulo (base,altura) {
    return (base * altura) / 2;
  }
  console.log("El area del triangulo es: " + areaTriangulo(4,5.5) + " cm^2");

  console.groupEnd();

  // Codigo del Circulo
console.group("Circulo")

// Diametro
function diametroCirculo (radio) {
  return radio * 2;
}
console.log("El radio del circulo es: " + diametroCirculo(4) + " cm");
// PI
const PI = Math.PI;
console.log("PI: " + PI + " cm");
// Circunferencia
function perimetroCirculo (radio){
 const diametro =  diametroCirculo(radio);
 return diametro * PI
} 
console.log("El perimetro del circulo es: " + perimetroCirculo(4) + " cm");
// Area
function areaCirculo (radio){
 return (radio * radio) * PI;
} 
console.log("El area del circulo es: " + areaCirculo(4) + " cm");
console.groupEnd();


console.groupEnd();


//Aqui interactuamos con el HTml

calcularPerimetroCuadrado
