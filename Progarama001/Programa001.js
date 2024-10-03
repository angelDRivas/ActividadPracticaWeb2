// Mostrar el Número de Artículos que existen en el Documento
const articulos = document.querySelectorAll('h3');
console.log(`Número de Artículos: ${articulos.length}`);

// Identificar líneas divisorias dentro del Documento y número de líneas
const lineasDivisorias = document.querySelectorAll('hr');
console.log(`Número de líneas divisorias: ${lineasDivisorias.length}`);

// Identificar los elementos de lista dentro del Documento y número de elementos en total
const listaElementos = document.querySelectorAll('#elemen li');
console.log(`Número de elementos en 'Lista Elementos': ${listaElementos.length}`);

// Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.
const enlacesListaElementos = document.querySelectorAll('#elemen a');
console.log(`Número de elementos en 'Lista Elementos': ${listaElementos.length}`);
enlacesListaElementos.forEach(enlace => {
    console.log(`Código del enlace en 'Lista Elementos': ${enlace.outerHTML}`);
});

// Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.
const enlacesMenu = document.querySelectorAll('#menu a');
console.log(`Número de enlaces en 'Menú': ${enlacesMenu.length}`);
enlacesMenu.forEach(enlace => {
    console.log(`Código del enlace en 'Menú': ${enlace.outerHTML}`);
});

// Identificar imágenes dentro del Documento y número de imágenes en total.
const imagenes = document.querySelectorAll('img');
console.log(`Número total de imágenes en el Documento: ${imagenes.length}`);

// Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque.
const imagenesArticulo2 = document.querySelectorAll('#text2 + figure img');
console.log(`Número de imágenes en 'Artículo 2': ${imagenesArticulo2.length}`);
if (imagenesArticulo2.length > 0) {
    console.log(`Primera imagen en 'Artículo 2': ${imagenesArticulo2[0].outerHTML}`);
}

// Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
const imagenesArticulo3 = document.querySelectorAll('#imgAr3 img');
console.log(`Número de imágenes en 'Artículo 3': ${imagenesArticulo3.length}`);
if (imagenesArticulo3.length >= 4) {
    console.log(`Código de la segunda imagen en 'Artículo 3': ${imagenesArticulo3[1].outerHTML}`);
    console.log(`Código de la cuarta imagen en 'Artículo 3': ${imagenesArticulo3[3].outerHTML}`);
}

// Identificar enlaces del Documento y número de enlaces en total.
const todosLosEnlaces = document.querySelectorAll('a');
console.log(`Número total de enlaces en el Documento: ${todosLosEnlaces.length}`);

// Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.
const enlacesArticulo1 = document.querySelectorAll('#text1 a');
console.log(`Número de enlaces en 'Artículo 1': ${enlacesArticulo1.length}`);
