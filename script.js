function borrarTexto() {
  document.getElementById('texto').value = '';
}
function encriptarTexto() {
  const texto = document.getElementById('texto').value;
  if (!/^[a-z\s]+$/.test(texto)) {
    alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    document.getElementById('texto').value = '';
    return;
  }
  const textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  
  const cuadroRespuesta = document.getElementById('cuadro_respuesta_texto');
  cuadroRespuesta.innerHTML = `
    <button class="boton-copiar" onclick="copiarTexto()">Copiar</button>
    <p id="texto_encriptado">${textoEncriptado}</p>
  `;
}

function desencriptarTexto() {
  const texto = document.getElementById('texto').value;
  if (!/^[a-z\s]+$/.test(texto)) {
    alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    document.getElementById('texto').value = '';
    return;
  }
  const textoDesencriptado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  const cuadroRespuesta = document.getElementById('cuadro_respuesta_texto');
  cuadroRespuesta.innerHTML = `
    <button class="boton-copiar" onclick="copiarTexto()">Copiar</button>
    <p id="texto_encriptado">${textoDesencriptado}</p>
  `;
}

function copiarTexto() {
  const textoEncriptado = document.getElementById('texto_encriptado').innerText;
  navigator.clipboard.writeText(textoEncriptado).then(() => {
    document.getElementById('texto').value = ''; // Borra el contenido del cuadro de texto
    document.getElementById('texto').focus(); // Devuelve el foco al cuadro de texto
    document.getElementById('texto_encriptado').classList.add('texto-seleccionado');
  });
}


