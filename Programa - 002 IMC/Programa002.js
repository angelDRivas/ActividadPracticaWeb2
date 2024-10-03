// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Función para obtener la recomendación según el IMC
function obtenerRecomendacion(imc) {
    if (imc > 25) {
        return "Peso Alto, haga dieta y ejercicio.";
    } else if (imc >= 22 && imc <= 25) {
        return "Peso Correcto.";
    } else {
        return "Peso Bajo, coma más.";
    }
}

// Solicitar datos al usuario
const nombre = prompt("Ingrese su nombre:");
const peso = parseFloat(prompt("Ingrese su peso (kg):"));
const altura = parseFloat(prompt("Ingrese su altura (m):"));

// Calcular IMC
const imc = calcularIMC(peso, altura);

// Obtener recomendación
const recomendacion = obtenerRecomendacion(imc);

// Mostrar resultados
alert(`Nombre: ${nombre}\nPeso: ${peso} kg\nAltura: ${altura} m\nIMC: ${imc.toFixed(2)}\nRecomendación: ${recomendacion}`);
