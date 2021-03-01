
$("#guardar_personal").click(function(){
    var nombre = $("#registro_nombre").val();
    var cargo = $("#registro_cargo").val();
    var telefono = $("#registro_telefono").val();
    var fechaNac = $("#registro_fechaNac").val();
    var dni = $("#registro_dni").val();
    var direccion = $("#registro_direccion").val();
    var distrito = $("#registro_distrito").val();
    var provincia = $("#registro_provincia").val();
    var sexo = $("#registro_sexo").val();

    var ruta = 'http://localhost/php/registro_personal.php';
    var RegistroPersonalformData = new FormData();
    RegistroPersonalformData.append("nombre",nombre);
    RegistroPersonalformData.append("cargo",cargo);
    RegistroPersonalformData.append("telefono",telefono);
    RegistroPersonalformData.append("fechaNac",fechaNac);
    RegistroPersonalformData.append("dni",dni);
    RegistroPersonalformData.append("direccion",direccion);
    RegistroPersonalformData.append("distrito",distrito);
    RegistroPersonalformData.append("provincia",provincia);
    RegistroPersonalformData.append("sexo",sexo);


    fetch(ruta,{
        method:'POST',
        body:RegistroPersonalformData
    })
    alert("Registro Exitoso!");

})

