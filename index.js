// // Cuando el usuario hace click en el boton de "abrir carrito"

// // sumar todos los productos que tengo en el carrito y mostrarselo al usuario

// TABLA DE VARIABLES

// A: PRECIO DE PRODUCTO 1 EN CARRITO: NUMERO : DOM STRING
// B: PRECIO DE PRODUCTO 2 EN CARRITO: NUMERO : DOM STRING

// ANUMERO : PRECIO DEL PRODUCTO 1 : NUMERO
// BNUMERO : PRECIO DEL PRODUCTO 2 : NUMERO
// RESULTADO : SUMA "A" Y "B" : NUMERO

// INICIO // ---> click en el boton
// LEO VALOR DE "A"
// LEO VALOR DE "B" 
// DECLARO ANUMERO COMO CONVERTIR "A" A NUMERO
// DECLARO BNUMERO COMO CONVERTIR "B" A NUMERO
// CONVIERTO "A" A NUMERO
// CONVIERTO "B" A NUMERO
//
// DECLARO RESULTADO COMO LA SUMA DE A Y B 
// MUESTRO EL RESULTADO
// FIN

// parseFloat 5.5 -- decimal 5.5 
// parseInt 5.5 -- intero 6
// Number === parsefloat

const sumarTotal = ()=>{
  const precio1 = document.getElementById("#precio1")
  const precio2 = document.getElementById("#precio2")

  let precio1Numero = Number(precio1)
  let precio2Numero = Number(precio2)
  let resultado = precio1Numero + precio2Numero
  return resultado
}

// tabla de variables y pseudocodigo para calcular el area de un triangulo

// INICIO 
// LEO TRIANGULO
// LEO VALOR BASE "A"
// LEO VALOR ALTURA "B"
// DECLARO AREA = A * B 
// DECLARO AREA / 2
// VALOR AREA
// FIN