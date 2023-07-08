
function validarCampo(campo) {
    valor = campo.value;
    if (valor === undefined | valor.length == 0 || /^\s+$/.test(valor)) {
        alert("El campo comentario esta vacio");
        return false;
    }
    return true;
}

function desabilitarCB() {
    document.getElementById("food").disabled = true;
    document.getElementById("games").disabled = true;
    document.getElementById("internacional").disabled = true;
}

  function habilitarCB() {
    document.getElementById("food").disabled = false;
    document.getElementById("games").disabled = false;
    document.getElementById("internacional").disabled = false;
}

function getColor() {
    var color = document.getElementById("color").value;
    document.getElementById("nameColor").value = color;
}

function validarTodo(){
    if( (!validarURL(document.getElementById("urL"))) || (!validarPass(document.getElementById("pass")))){
        return false;
    }
    alert("Campos ingresados correctamente");
}

function myFunction() {
    var control = document.getElementById("radioFemenino");
    if (control.checked) {
        control.checked = false;
    } else {
        control.checked = true;
    }
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

function verificarRadio() {
    for (i = 0; i < document.formulario.elements.length; i++) {
        if (document.formulario[i].type == "radio" && document.formulario[i].checked == true) {
            console.log(document.formulario[i].id);
            return true;
        }
    }
}

function validarPass(campo) {
    var regex = /^[a-zA-Z0-9-_]{8,12}$/;
    if (!campo.value.match(regex)) {
        document.getElementById("errorPass").style.color = "red";
        var mensaje = "Contraseña Inválida";
        document.getElementById("errorPass").innerHTML = mensaje;
        return false;
    }
    return true;
}

function validarURL(campo) {
    var regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!campo.value.match(regex)) {
        document.getElementById("errorUrl").style.color = "red";
        var mensaje = "URL Inválido";
        document.getElementById("errorUrl").innerHTML = mensaje;
        return false;
    }
    return true;
}

const url = document.getElementById("url");
url.addEventListener("input", function (event) {
    if (url.validity.typeMismatch) {
        url.setCustomValidity("Se espera un formato valido");
    }
})

const password = document.getElementById("password");
password.addEventListener("input", function (event) {
    if (password.validity.typeMismatch) {
        password.setCustomValidity("Se espera un formato valido");
    }
})