
    $("#registroPersonal").click(function(){
        $(".registro_vehiculo").css("display","none");
        $(".registro_material").css("display","none");
        $(".registro_combustible").css("display","none");
        $(".registro_personal").css("display","block");
        $(".ingreso_materiales").css("display","none");
        $(".foto_principal").css("display","none");
      })
      
      $("#registroVehiculo").click(function(){
        $(".registro_personal").css("display","none");
        $(".registro_material").css("display","none");
        $(".registro_combustible").css("display","none");
        $(".registro_vehiculo").css("display","block");
        $(".ingreso_materiales").css("display","none");
        $(".foto_principal").css("display","none");
      })

      $("#registroMaterial").click(function(){
        $(".registro_personal").css("display","none");
        $(".registro_vehiculo").css("display","none");
        $(".registro_combustible").css("display","none");
        $(".registro_material").css("display","block");
        $(".ingreso_materiales").css("display","none");
        $(".foto_principal").css("display","none");
      }) 

      $("#registroCombustible").click(function(){
        $(".registro_personal").css("display","none");
        $(".registro_vehiculo").css("display","none");
        $(".registro_material").css("display","none");
        $(".registro_combustible").css("display","block");
        $(".ingreso_materiales").css("display","none");
        $(".foto_principal").css("display","none");
      })

      $("#ingresoMateriales").click(function(){
        $(".registro_personal").css("display","none");
        $(".registro_vehiculo").css("display","none");
        $(".registro_material").css("display","none");
        $(".registro_combustible").css("display","none");
        $(".ingreso_materiales").css("display","block");
        $(".foto_principal").css("display","none");
      })

      $(".logo").click(function(){
        $(".registro_personal").css("display","none");
        $(".registro_vehiculo").css("display","none");
        $(".registro_material").css("display","none");
        $(".registro_combustible").css("display","none");
        $(".ingreso_materiales").css("display","none");
        $(".foto_principal").css("display","block");
      })