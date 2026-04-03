// Frontend application — communicates with the backend REST API

// Base URL of the backend server
const API_URL = 'https://render-node-tutorial-31rd.onrender.com';

// ================= PING =================

// Reference to the ping button and result paragraph
const pingBtn = document.getElementById('pingBtn');
const pingResult = document.getElementById('pingResult');

// Send a GET request to /ping and display the server timestamp
async function ping() {
  pingResult.textContent = 'Conectando...';
  pingResult.style.color = '#555';
  try {
    const res = await fetch(`${API_URL}/ping`);
    const data = await res.json();
    pingResult.textContent = `✅ Conexión exitosa. Hora del servidor: ${data.now}`;
    pingResult.style.color = 'green';
  } catch (err) {
    pingResult.textContent = '❌ Error: no se pudo conectar al servidor.';
    pingResult.style.color = 'red';
  }
}

pingBtn.addEventListener('click', ping);