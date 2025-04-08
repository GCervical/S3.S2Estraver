/* app.js - Taller Integrador de JavaScript
   Conceptos: Variables, constantes, estructuras de control (if, try-catch), operadores matemáticos con Math y manejo de cadenas.
*/

/* ===========================
   Ejercicio 1: Registro de Hotel
   ===========================
   Se capturan los datos del formulario para calcular el total a pagar por la estancia.
   Si el número de noches es mayor o igual a 5, se aplica un descuento del 10%.
*/
document.getElementById('hotelForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe y recargue la página
  
    // Capturamos y convertimos los valores ingresados
    let nights = parseInt(document.getElementById('nights').value);
    let price = parseFloat(document.getElementById('price').value);
  
    // Uso de una constante para el porcentaje de descuento
    const descuento = 0.10; // 10% de descuento
  
    let total;
    // Estructura condicional para evaluar si aplica descuento
    if (nights >= 5) {
      total = nights * price * (1 - descuento);
    } else {
      total = nights * price;
    }
  
    // Mostrar el resultado en el div correspondiente, usando toFixed para formatear el número
    document.getElementById('hotelResult').innerHTML = `<p>Total a pagar: S/ ${total.toFixed(2)}</p>`;
  });
  
  
  /* ===========================
     Ejercicio 2: Login Simple
     ===========================
     Se simula un proceso de login utilizando estructuras condicionales y try-catch para el manejo de errores.
  */
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Se capturan los valores de usuario y contraseña
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    try {
      // Datos predefinidos para el login
      const userValido = "admin";
      const passValido = "12345";
  
      // Estructura condicional para la validación
      if (username === userValido && password === passValido) {
        document.getElementById('loginResult').innerHTML = `<p>Bienvenido, ${username}.</p>`;
      } else {
        // Lanzar un error en caso de credenciales incorrectas
        throw new Error("Credenciales incorrectas.");
      }
    } catch (error) {
      // Captura y muestra el error
      document.getElementById('loginResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
  
  
  /* ===========================
     Ejercicio 3: Calculadora de Multiplicación
     ===========================
     Se utiliza el operador de multiplicación y la función Math para redondear el resultado.
  */
  document.getElementById('multiplyForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Se capturan y convierten los números ingresados
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
  
    // Operador de multiplicación
    let resultado = num1 * num2;
  
    // Uso de Math.round para redondear el resultado
    resultado = Math.round(resultado);
  
    document.getElementById('multiplyResult').innerHTML = `<p>Resultado de la multiplicación: ${resultado}</p>`;
  });
  
  
  /* ===========================
     Ejercicio 4: Manejo de Cadenas
     ===========================
     Se demuestra la concatenación, obtención de longitud de una cadena, extracción de subcadena y búsqueda de un carácter.
  */
  document.getElementById('stringForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Capturamos el nombre completo y eliminamos espacios innecesarios
    let fullName = document.getElementById('fullName').value.trim();
  
    // Concatenación de cadenas para formar un mensaje personalizado
    let mensajeBienvenida = "Bienvenido " + fullName + " a nuestro sistema.";
  
    // Obtener la longitud de la cadena
    let nombreLength = fullName.length;
  
    // Extraer los primeros 5 caracteres de la cadena
    let subcadena = fullName.substring(0, 5);
  
    // Buscar la posición de la letra 'a' (si existe)
    let posLetraA = fullName.indexOf('a'); // Devuelve -1 si no se encuentra
  
    // Construir el resultado a mostrar
    let resultHTML = `<p>${mensajeBienvenida}</p>`;
    resultHTML += `<p>Tu nombre tiene ${nombreLength} caracteres.</p>`;
    resultHTML += `<p>Los primeros 5 caracteres son: ${subcadena}</p>`;
    
    if (posLetraA !== -1) {
      resultHTML += `<p>La letra 'a' se encuentra en la posición ${posLetraA}.</p>`;
    } else {
      resultHTML += `<p>La letra 'a' no se encuentra en tu nombre.</p>`;
    }
  
    document.getElementById('stringResult').innerHTML = resultHTML;
  });
  