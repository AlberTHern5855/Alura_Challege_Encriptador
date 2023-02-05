const textArea = document.querySelector(".inputText");
const mensaje = document.querySelector(".outputText");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".inputText").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);
    
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}



function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value ="";
        mensaje.style.backgroundImage = "none";
        copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value ="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

