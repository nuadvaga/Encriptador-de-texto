function configurar(){

    let encriptar = document.getElementById('encriptar');
    encriptar.addEventListener('click',encryptText,false);

    let desencriptar = document.getElementById('desencriptar');
    desencriptar.addEventListener('click',decryptText,false);

    let copiar = document.getElementById("copy-button");
    copiar.addEventListener('click',copyToClipboard,false);

}

function encryptText() {

    let outputText = document.getElementById('output-text');
    outputText.style.backgroundImage="none";

    let patron = /^[a-z\s]+$/;

    let inputText = document.getElementById("input-text").value;

    let validacion = inputText.match(patron);
  

    if (validacion != null){

        let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
        document.getElementById("output-text").value = encryptedText;

    }else{

    

        alert("El programa solo acepta letras minusculas para encriptar");


    }
}

function decryptText() {

    let outputText = document.getElementById('output-text');
    outputText.style.backgroundImage="none";
    
    let patron = /^[a-z\s]+$/;

    let inputText = document.getElementById("input-text").value;

    let validacion = inputText.match(patron);

    if (validacion != null){
        let decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        document.getElementById("output-text").value = decryptedText;
    }else{
    
        alert("El programa solo acepta letras minusculas para desencriptar");

    }
}



const copyToClipboard = async () =>{

   
    let outputText = document.getElementById('output-text');

    let textoSalida = outputText.value;

    outputText.value="";

    outputText.style.backgroundImage="url(imagen.png)";

    let inputText = document.getElementById('input-text');

    inputText.value = textoSalida;

    let texto = document.querySelector("#output-text").value;

       try {

            if (texto != ""){

                await navigator.clipboard.writeText(texto);

                alert("Texto copiado");
    

            }else{

                alert("La salida se encuetra vacia, vuelve a intentar con un texto para encriptar");
            }

           
        } catch (err) {

            alert("El texto no se puedo copiar: ", err);
            
        }
    }

window.addEventListener('load',configurar,false);



