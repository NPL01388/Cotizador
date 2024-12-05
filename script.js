document.getElementById('btnPaquetes').addEventListener('click', function() {
    // Mostrar el formulario de Paquetes y ocultar el de Documentos
    document.getElementById('cotizadorFormPaquetes').style.display = 'block';
    document.getElementById('cotizadorFormDocumentos').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
});

document.getElementById('btnDocumentos').addEventListener('click', function() {
    // Mostrar el formulario de Documentos y ocultar el de Paquetes
    document.getElementById('cotizadorFormDocumentos').style.display = 'block';
    document.getElementById('cotizadorFormPaquetes').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
});

// Formulario Paquetes
document.getElementById("cotizadorFormPaquetes").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores de entrada
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const pesoReal = parseFloat(document.getElementById("peso").value);
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);

    // Calcular peso volumétrico
    const volumen = largo * ancho * alto;
    const pesoVolumetrico = volumen / 6000; // Fórmula para calcular peso volumétrico

    // Calcular el costo de envío por peso real o volumétrico
    let pesoTomado = Math.max(pesoReal, pesoVolumetrico);
    let precio = 0;

    if (pesoTomado <= 5) {
        precio = 15000;
    } else if (pesoTomado <= 10) {
        precio = 20500;
    } else if (pesoTomado <= 20) {
        precio = 27000;
    } else {
        // Para más de 20 kg, precio base y adicional por kg
        precio = 27000 + (pesoTomado - 20) * 3000;
    }

    // Mostrar resultados
    document.getElementById('origenDescripcion').textContent = origen;
    document.getElementById('destinoDescripcion').textContent = destino;
    document.getElementById('pesoReal').textContent = pesoReal.toFixed(1);
    document.getElementById('pesoVolumetrico').textContent = pesoVolumetrico.toFixed(1);
    document.getElementById('pesoTomadoDescripcion').textContent = pesoReal > pesoVolumetrico ? "Peso Real" : "Peso Volumétrico";
    document.getElementById('precio').textContent = precio.toFixed(0);
    document.getElementById('valorFlete').textContent = precio.toFixed(0);

    // Ocultar formularios y mostrar resultados
    document.getElementById('cotizadorFormPaquetes').style.display = 'none';
    document.getElementById('detallePaquetes').style.display = 'block';
    document.getElementById('resultado').style.display = 'block';
});

// Formulario Documentos
document.getElementById("cotizadorFormDocumentos").addEventListener("submit", function(event) {
    event.preventDefault();

    const origenDoc = document.getElementById("origenDoc").value;
    const destinoDoc = document.getElementById("destinoDoc").value;
    const cantidadDoc = parseInt(document.getElementById("cantidadDoc").value);

    // Calcular valor flete
    const precio = 12000 * cantidadDoc;

    // Mostrar resultados de documentos
    document.getElementById('cantidadDocDescripcion').textContent = cantidadDoc;
    document.getElementById('valorFlete').textContent = precio.toFixed(0);

    // Ocultar formularios y mostrar resultado
    document.getElementById('cotizadorFormDocumentos').style.display = 'none';
    document.getElementById('detalleDocumentos').style.display = 'block';
    document.getElementById('resultado').style.display = 'block';
});
