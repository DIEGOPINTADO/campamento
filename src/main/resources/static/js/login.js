
$(function(){
    $("#btn_CrearCuenta").click(function(){
        $("body").append("<div id='fondo-oscuro'><div id='formulario_registro'>"+
        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
        "<span aria-hidden='true'>×</span>"+
        "</button>"+
        "<form class='formulario'>"+
        "<div class='form-group'>"+
        "<label for='inputAddress2'>Nombre Completo</label>"+
        "<input type='text' class='form-control' id='reg_nombre' placeholder='Ingrese su nombre Completo'>"+
        "</div>"+
        "<div class='form-row'>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputEmail4'>Telefono</label>"+
        "<input type='text' class='form-control' id='reg_telefono' placeholder='Ingrese su Telefono'>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputEmail4'>Fecha Nac.</label>"+
        "<input type='date' class='form-control' id='reg_fecha' placeholder='Ingrese su Fecha Nacimiento'>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputEmail4'>DNI</label>"+
        "<input type='text' class='form-control' id='reg_dni' placeholder='Ingrese su DNI'>"+
        "</div>"+
        "</div>"+
        "<div class='form-row'>"+
        "<div class='form-group col-md-6'>"+
        "<label for='inputPassword'>Contraseña</label>"+
        "<input type='password' autocomplete='on' class='form-control' id='reg_contrasena' placeholder='Ingrese contraseña'>"+
        "</div>"+
        "<div class='form-group col-md-6'>"+
        "<label for='inputAddress3'>Cargo</label>"+
        "<input type='text' class='form-control' id='reg_cargo' placeholder='Ingrese cargo'>"+
        "</div>"+
        "</div>"+
        "<div class='form-row'>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputState'>Distrito</label>"+
        "<select id='reg_distrito' class='form-control'>"+
        "<option selected>Seleccione...</option>"+
        "<option>Piura</option>"+
        "<option>Veintiséis de Octubre</option>"+
        "<option>Castilla</option>"+
        "</select>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputState'>Provincia</label>"+
        "<select id='reg_provincia' class='form-control'>"+
        "<option selected>Seleccione...</option>"+
        "<option>Ayabaca</option>"+
        "<option>Huancabamba</option>"+
        "<option>Morropón</option>"+
        "<option>Paita</option>"+
        "<option>Sechura</option>"+
        "<option>Sullana</option>"+
        "<option>Talara</option>"+
        "<option>Piura</option>"+
        "</select>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
        "<label for='inputState'>Sexo</label>"+
        "<select id='reg_sexo' class='form-control'>"+
        "<option selected>Seleccione...</option>"+
        "<option>Masculino</option>"+
        "<option>Femenino</option>"+
        "</select>"+
        "</div>"+
        "</div>"+
        "<button type='button' class='btn btn-success' name='guardar_usuario' id='reg_usuario'>Registrarme</button>"+
        "</form>"+
        "</div></div>");

        $(".close").click(function(){
            $("#fondo-oscuro").remove();
        })



//REGISTRO DE NUEVO USUARIO

$("#reg_usuario").click(function(){
  var nombre = $("#reg_nombre").val();
  var telefono = $("#reg_telefono").val();
  var fecha = $("#reg_fecha").val();
  var dni = $("#reg_dni").val();
  var contrasena = $("#reg_contrasena").val();
  var cargo = $("#reg_cargo").val();
  var distrito = $("#reg_distrito").val();
  var provincia= $("#reg_provincia").val();
  var sexo = $("#reg_sexo").val();

  var ruta1 = 'http://localhost/php/registro_usuarioPechp.php';
  var RegistroformData = new FormData();
  RegistroformData.append("nombre",nombre);
  RegistroformData.append("telefono",telefono);
  RegistroformData.append("fecha",fecha);
  RegistroformData.append("dni",dni);
  RegistroformData.append("contrasena",contrasena);
  RegistroformData.append("cargo",cargo);
  RegistroformData.append("distrito",distrito);
  RegistroformData.append("provincia",provincia);
  RegistroformData.append("sexo",sexo);
  
  fetch(ruta1,{
      method:'POST',
      body:RegistroformData
  })
  alert("Se enviara registro a aprobar");
  $("#fondo-oscuro").remove();
})

    });

})



//INICIAR SESION

$("#btn-iniciar-sesion").click(function(){
    var usuario = $("#txt-dni").val();
    var clave = $("#txt-contrasena").val();

    var ruta = 'http://localhost/php/usuariosPechp.php';
    var LoginformData = new FormData();
    LoginformData.append("dni", usuario);
    LoginformData.append("contrasena", clave);


fetch(ruta, {
      method: 'POST',
      body: LoginformData
})
.then(function (response) {
    return response.json();
})
      .then(function (datosLogin) {
          
          if(datosLogin == "-1"){
              alert("El usuario no existe");
          }else if(datosLogin == "-2"){
              alert("La contraseña es incorrecta");
          }else{
              
              $(datosLogin).each(function(index,value){
                localStorage.setItem("nombresUsuario", value.datosLogin);
              })

              sesion();
          }
})
})

function sesion(){
alert("Bienvenido");
window.location="menu.html";
}



$("#cerrar_sesion").click(function(){
  fin_sesion();
})

function fin_sesion(){
  window.location="index.html";
  }

/*
$(".btnCuenta_CerrarSesion").click(function(){
    localStorage.removeItem("nombreUsuario");
    $(".CuentaLogin a").remove();
    $(".CuentaLogin").html('<a><button type="button" class="btn btnCuenta">Mi Cuenta</button></a>');
    $(".div_Cuenta").css("display","none");
    window.location = "/";
  })*/