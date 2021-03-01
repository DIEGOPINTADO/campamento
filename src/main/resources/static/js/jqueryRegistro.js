$(function(){

function validarDni(formulario) {

    if(formulario.dni.value.length>0){

//Recogemos el valor del DNI en una variable.
        var dni = formulario.dni.value;

// En caso que ponga el DNI con guión, se suprime.
        if((dni.length==10)&&(dni.indexOf('-') != -1)){
            dni = dni.replace('-', '');
        }

// En caso que ponga el guión pero le faltan números de identificación
        if(((formulario.dni.value.length<10)&&(formulario.dni.value.length>10))&&(formulario.dni.value.indexOf('-') != -1)){
            alert("Debe de escribir un DNI correcto");
            return false;
        }

//Se separan los números de la letra
        var letraDNI = dni.substring(8, 9).toUpperCase();
        var numDNI = parseInt(dni.substring(0, 8));

//Se calcula la letra correspondiente al número
        var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
        var letraCorrecta = letras[numDNI % 23];

        if(letraDNI!= letraCorrecta){
            alert("Debe de escribir un DNI correcto");
            return false;
        }
    }else{
        alert('Falta por rellenar el campo "DNI"');
        return false;
    }
}
}