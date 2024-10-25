let preguntaActual = 1;
const totalPreguntas = 10;

function mostrarSiguientePregunta() {
    document.getElementById(`pregunta${preguntaActual}`).style.display = 'none';
    preguntaActual++;
    if (preguntaActual <= totalPreguntas) {
        document.getElementById(`pregunta${preguntaActual}`).style.display = 'flex';
    }
    if (preguntaActual === totalPreguntas) {
        document.getElementById('btnSiguiente').style.display = 'none';
        document.getElementById('btnFinalizar').style.display = 'block';
    }
    document.getElementById('btnSiguiente').disabled = true;
}

function verificarRespuesta() {
    const pregunta = document.querySelector(`input[name="q${preguntaActual}"]:checked`);
    if (preguntaActual === totalPreguntas && pregunta) {
        document.getElementById('btnFinalizar').disabled = false;
    } else if (pregunta) {
        document.getElementById('btnSiguiente').disabled = false;
    }
}

function calcularResultado() {
    const form = document.getElementById('quizForm');
    const resultado = document.getElementById('resultado');

    let contadorA = 0;
    let contadorB = 0;
    let contadorC = 0;
    let contadorD = 0;

    for (let i = 1; i <= totalPreguntas; i++) {
        const pregunta = form['q' + i];
        for (let j = 0; j < pregunta.length; j++) {
            if (pregunta[j].checked) {
                switch (pregunta[j].value) {
                    case '1':
                        contadorA++;
                        break;
                    case '2':
                        contadorB++;
                        break;
                    case '3':
                        contadorC++;
                        break;
                    case '4':
                        contadorD++;
                        break;
                }
                break;
            }
        }
    }

    const resultados = [
        { letra: 'A', valor: contadorA },
        { letra: 'B', valor: contadorB },
        { letra: 'C', valor: contadorC },
        { letra: 'D', valor: contadorD }
    ];

    resultados.sort((a, b) => b.valor - a.valor);
    const resultadoFinal = resultados[0].letra;

    switch (resultadoFinal) {
        case 'A':
            resultado.innerHTML = `
                <div class="resultado-imagen">
                    <img src="./assets/test/r1.png" alt="Resultado Vampiro">
                </div>
                <div class="resultado-content">
                    <h3>Resultado: Vampiro (Drácula)</h3>
                    <p>Eres elegante y mortal. Te encanta controlar las situaciones y seducir a quienes te rodean con tu aura de misterio. El disfraz perfecto para ti es el de vampiro clásico.</p>
                </div>`;
            break;
        case 'B':
            resultado.innerHTML = `
                <div class="resultado-imagen">
                    <img src="./assets/test/r2.png" alt="Resultado Frankenstein">
                </div>
                <div class="resultado-content">
                    <h3>Resultado: Frankenstein o Científico loco</h3>
                    <p>Tu mente brillante y obsesiva te lleva a crear lo inimaginable. El disfraz perfecto para ti es el de Frankenstein o científico loco.</p>
                </div>`;
            break;
        case 'C':
            resultado.innerHTML = `
                <div class="resultado-imagen">
                    <img src="./assets/test/r3.png" alt="Resultado Fantasma">
                </div>
                <div class="resultado-content">
                    <h3>Resultado: Fantasma o Espíritu</h3>
                    <p>Eres etéreo y misterioso/a. Un disfraz de fantasma o espíritu será perfecto para ti.</p>
                </div>`;
            break;
        case 'D':
            resultado.innerHTML = `
                <div class="resultado-imagen">
                    <img src="./assets/test/r4.png" alt="Resultado Hombre Lobo">
                </div>
                <div class="resultado-content">
                    <h3>Resultado: Hombre lobo (Licántropo)</h3>
                    <p>Eres salvaje, indomable y gobernado/a por tus instintos. El disfraz perfecto para ti es el de hombre lobo.</p>
                </div>`;
            break;
    }
    

    // Ocultar formulario y mostrar el botón de "Reiniciar" junto al resultado
    form.style.display = 'none';
    document.getElementById('btnReiniciar').style.display = 'block';
}
function reiniciarTest() {
    // Reiniciar el formulario y las preguntas
    const form = document.getElementById('quizForm');
    form.reset();
    form.style.display = 'block';
    document.getElementById('resultado').innerHTML = '';

    // Restablecer la primera pregunta
    document.getElementById(`pregunta${preguntaActual}`).style.display = 'none';
    preguntaActual = 1;
    document.getElementById(`pregunta${preguntaActual}`).style.display = 'flex';

    // Restablecer botones
    document.getElementById('btnReiniciar').style.display = 'none';
    document.getElementById('btnSiguiente').style.display = 'block';
    document.getElementById('btnSiguiente').disabled = true;  // Deshabilitado hasta seleccionar una respuesta
    document.getElementById('btnFinalizar').style.display = 'none';  // Asegurar que 'Finalizar' esté oculto
    document.getElementById('btnFinalizar').disabled = true;  // Asegurar que 'Finalizar' esté deshabilitado
}

