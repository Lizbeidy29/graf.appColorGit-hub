/* ==========================================================
   SELECTOR DE COLOR RGB
   ==========================================================

   Este archivo controla toda la funcionalidad de la aplicación.

   El usuario puede modificar:

   R = Rojo
   G = Verde
   B = Azul

   Cada valor puede estar entre 0 y 255.

   Ejemplo:

   RGB(255, 0, 0) = Rojo
   RGB(0, 255, 0) = Verde
   RGB(0, 0, 255) = Azul

   ========================================================== */


/* ==========================================================
   OBTENER LOS CONTROLES RGB
   ========================================================== */

/*
   Buscamos en el HTML el elemento que tiene
   el ID "rojo".
*/
const rojo = document.getElementById("rojo");


/*
   Buscamos el control del verde.
*/
const verde = document.getElementById("verde");


/*
   Buscamos el control del azul.
*/
const azul = document.getElementById("azul");


/* ==========================================================
   OBTENER LOS ELEMENTOS QUE MOSTRARÁN LOS VALORES
   ========================================================== */

/*
   Elemento donde mostraremos el valor actual del rojo.
*/
const valorRojo = document.getElementById("valorRojo");


/*
   Elemento donde mostraremos el valor actual del verde.
*/
const valorVerde = document.getElementById("valorVerde");


/*
   Elemento donde mostraremos el valor actual del azul.
*/
const valorAzul = document.getElementById("valorAzul");


/* ==========================================================
   OBTENER EL RECUADRO DEL COLOR
   ========================================================== */

/*
   Este elemento será utilizado para cambiar
   el color de fondo.
*/
const colorBox = document.getElementById("colorBox");


/*
   Este elemento mostrará el código hexadecimal
   dentro del recuadro.
*/
const hexColor = document.getElementById("hexColor");


/* ==========================================================
   OBTENER LOS ELEMENTOS DE INFORMACIÓN
   ========================================================== */

/*
   Elemento donde mostraremos el código RGB.
*/
const rgbColor = document.getElementById("rgbColor");


/*
   Elemento donde mostraremos el código hexadecimal.
*/
const hexColorText = document.getElementById("hexColorText");


/* ==========================================================
   FUNCIÓN PARA CONVERTIR RGB A HEXADECIMAL
   ========================================================== */

/*
   Esta función recibe tres valores:

   r = rojo
   g = verde
   b = azul

   Y devuelve un código hexadecimal.

   Ejemplo:

   convertirHexadecimal(255, 0, 0)

   devuelve:

   #FF0000
*/
function convertirHexadecimal(r, g, b) {


    /* ------------------------------------------------------
       CONVERTIR ROJO
       ------------------------------------------------------ */

    /*
       Number(r)

       Convierte el valor recibido a número.

       .toString(16)

       Convierte el número decimal a hexadecimal.

       .padStart(2, "0")

       Se asegura de que siempre tengamos
       dos caracteres.

       Ejemplo:

       5 → 05
       15 → 0F
       255 → FF
    */

    const rojoHex = Number(r)
        .toString(16)
        .padStart(2, "0");


    /* ------------------------------------------------------
       CONVERTIR VERDE
       ------------------------------------------------------ */

    const verdeHex = Number(g)
        .toString(16)
        .padStart(2, "0");


    /* ------------------------------------------------------
       CONVERTIR AZUL
       ------------------------------------------------------ */

    const azulHex = Number(b)
        .toString(16)
        .padStart(2, "0");


    /* ------------------------------------------------------
       UNIR LOS TRES VALORES
       ------------------------------------------------------ */

    /*
       Si tenemos:

       Rojo  = FF
       Verde = 80
       Azul  = 00

       El resultado será:

       #FF8000
    */

    return `#${rojoHex}${verdeHex}${azulHex}`.toUpperCase();

}


/* ==========================================================
   FUNCIÓN PRINCIPAL
   ========================================================== */

/*
   Esta función se ejecuta cada vez que
   el usuario mueve alguno de los controles.
*/
function actualizarColor() {


    /* ------------------------------------------------------
       OBTENER LOS VALORES ACTUALES
       ------------------------------------------------------ */

    /*
       .value obtiene el valor del control.

       Por ejemplo:

       rojo.value = 255
       verde.value = 100
       azul.value = 50
    */

    const r = rojo.value;

    const g = verde.value;

    const b = azul.value;


    /* ------------------------------------------------------
       MOSTRAR LOS VALORES EN LA PÁGINA
       ------------------------------------------------------ */

    /*
       Cambiamos el contenido de los elementos
       correspondientes.
    */

    valorRojo.textContent = r;

    valorVerde.textContent = g;

    valorAzul.textContent = b;


    /* ------------------------------------------------------
       CREAR EL COLOR RGB
       ------------------------------------------------------ */

    /*
       Construimos una cadena con el formato:

       rgb(rojo, verde, azul)

       Ejemplo:

       rgb(255, 100, 50)
    */

    const colorRGB = `rgb(${r}, ${g}, ${b})`;


    /* ------------------------------------------------------
       CONVERTIR RGB A HEXADECIMAL
       ------------------------------------------------------ */

    /*
       Utilizamos nuestra función
       convertirHexadecimal().
    */

    const colorHEX = convertirHexadecimal(r, g, b);


    /* ------------------------------------------------------
       CAMBIAR EL COLOR DEL RECUADRO
       ------------------------------------------------------ */

    /*
       style.backgroundColor permite cambiar
       el color de fondo mediante JavaScript.
    */

    colorBox.style.backgroundColor = colorRGB;


    /* ------------------------------------------------------
       MOSTRAR EL HEXADECIMAL DENTRO DEL RECUADRO
       ------------------------------------------------------ */

    hexColor.textContent = colorHEX;


    /* ------------------------------------------------------
       MOSTRAR EL CÓDIGO RGB
       ------------------------------------------------------ */

    rgbColor.textContent = colorRGB;


    /* ------------------------------------------------------
       MOSTRAR EL CÓDIGO HEXADECIMAL
       ------------------------------------------------------ */

    hexColorText.textContent = colorHEX;

}


/* ==========================================================
   DETECTAR CAMBIOS EN LOS CONTROLES
   ========================================================== */

/*
   "addEventListener"

   Permite detectar eventos.

   El evento "input" ocurre inmediatamente
   cuando el usuario mueve el control deslizante.
*/


/*
   Detectamos cambios en el rojo.
*/
rojo.addEventListener("input", actualizarColor);


/*
   Detectamos cambios en el verde.
*/
verde.addEventListener("input", actualizarColor);


/*
   Detectamos cambios en el azul.
*/
azul.addEventListener("input", actualizarColor);


/* ==========================================================
   EJECUTAR LA FUNCIÓN AL INICIAR
   ========================================================== */

/*
   Ejecutamos la función una vez al cargar
   la página para establecer el color inicial.

   Como inicialmente tenemos:

   R = 0
   G = 0
   B = 0

   El resultado será:

   RGB(0, 0, 0)
   #000000
*/
actualizarColor();