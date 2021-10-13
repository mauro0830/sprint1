function guardarRegistro() {
    var correoConfirmado = document.getElementById("campoConfirmarCorreo").value;
    if (validar_confirmar_correo(correoConfirmado)){
        alert("Correo correcto");
    } else {
        alert("Validación de correo incorrecta")
    }
    var paisIngresado = document.getElementById("campoPais").value;
    if (validar_pais(paisIngresado)){
        alert("Pais correcto");
    } else {
        alert("Validación de pais incorrecta")
    }
};

function validar_confirmar_correo(string1, string2){
    let correoInicial =  Array.from(string1);
    let correoValidar = Array.from(string2);
    let correoExitoso = true;
    if (correoValidar.length = correoInicial.length){
        for (i=0; i<correoValidar.length; i++){
            if (correoValidar[i] === correoInicial[i]){
                correoExitoso = true;
            } else { 
                correoExitoso = false;
            }
        }
        if (correoExitoso == true){
            return true;
        } else{
            return false;
        } 
    } else {
        return false;
    }
};

function validar_pais(string){
    let paisValidar = Array.from(string);
    let filtroCaracteresEsp = Array.from('@!¿?-_');
    let filtroNumeros = Array.from('0123456789');
    let filtroMayuscula = Array.from('ABCDEFGHYJKLMNÑOPQRSTUVWXYZ');
    let filtroMinuscula = Array.from('abcdefghyjklmnñopqrstuvwxyz');
    if (paisValidar != null){
        for(i=0; i < paisValidar.length; i++){
            if (filtroCaracteresEsp.indexOf(paisValidar[i]) != -1){
                return false;
            } else if (filtroNumeros.indexOf(paisValidar[i]) != -1){
                return false;
            } else if (i == 0){
                if (filtroMayuscula.indexOf(paisValidar[i]) == -1){
                    return false;
                }
            } else if (i == (paisValidar.length-1)){
                if (filtroMinuscula.indexOf(paisValidar[i]) == -1){
                    return false;
                } else {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

module.exports.validar_confirmar_correo = validar_confirmar_correo
module.exports.validar_pais = validar_pais
