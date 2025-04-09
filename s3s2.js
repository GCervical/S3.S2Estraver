document.getElementById('formApuesta').addEventListener('submit', function(event) {
    event.preventDefault();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';

    try {
      const montoInput = document.getElementById('monto').value;
      const cuotasInput = document.getElementById('cuotas').value;

      if (!montoInput || !cuotasInput) {
        throw new Error('Por favor, complete ambos campos.');
      }

      const monto = parseFloat(montoInput);
      const cuotas = parseFloat(cuotasInput);

      if (isNaN(monto) || isNaN(cuotas)) {
        throw new Error('Valores inválidos. Asegúrese de ingresar números.');
      }
      if (monto <= 0 || cuotas <= 0) {
        throw new Error('Los valores deben ser mayores a cero.');
      }

      const BONO_THRESHOLD = 3.0;
      const BONO_PORCENTAJE = 0.05;

      let ganancia = monto * cuotas;

      let bono = 0;
      if (cuotas > BONO_THRESHOLD) {
        bono = ganancia * BONO_PORCENTAJE;
        ganancia += bono;
      }
//
      const gananciaFormateada = ganancia.toFixed(2);
      const bonoFormateado = bono.toFixed(2);

      let mensaje = `Ganancia potencial: $${gananciaFormateada}`;
      if (bono > 0) {
        mensaje += ` (incluye bono de $${bonoFormateado})`;
      }

      resultadoDiv.textContent = mensaje;

    } catch (error) {
      resultadoDiv.textContent = 'Error: ' + error.message;
    }
  });