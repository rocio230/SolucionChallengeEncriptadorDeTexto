const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "url('images/conejoDos.png')";
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"], ["i", "ims"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length;i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}


textArea.addEventListener("input", () => {
    if (textArea.value === "") {
        mensaje.style.backgroundImage = "url('images/conejitoUno.png')";
    }
});


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e","enter"], ["i", "ims"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length;i++ ){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}



const btnCopiar = document.querySelector(".btn-copiar");


function copiar() {
    const contenido = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(contenido);

btnCopiar.addEventListener("click", copiar);
}
