function envio_w()
    {
      var i;
      var nombre=document.getElementById("nombre");
      var pedido=document.getElementById("pedido");
      var direccion=document.getElementById("direccion");
      var link_w=document.getElementById("link_w");
      var temp=0;
      var temp_string;
      var cadena="DATOS%20Y%20PEDIDO%0A%0D";
      cadena=cadena+"nombre:%20"+formateo_cadena(nombre.value)+"%0A%0D";
      //console.log(cadena);
      cadena+="pedido:%20"+formateo_cadena(pedido.value)+"%0A%0D";
      //console.log(cadena);
      cadena+="entregar%20en:%20"+formateo_cadena(direccion.value)+"%0D%0A";
      //console.log(cadena);
      var cadena_w="https://wa.me/5218331923114?text="+cadena;
      //console.log(cadena_w)
      link_w.href=cadena_w;
      //console.log(cadena);
    }

    function formateo_cadena(variable)
    {
      cadena_fc="";
      temp_string=variable;
      uc=0;
      ui=0;
      for (i=0;i<=variable.length;i++)
      {
        uc=temp_string.indexOf(" ",ui);
        //console.log(uc)
        if (uc!=-1)
        {
          if (ui==0)
          {
            cadena_fc=cadena_fc+temp_string.slice(ui,uc)+"%20";
          }
          else
          {
            cadena_fc=cadena_fc+temp_string.slice(ui+1,uc)+"%20";
          }
          temp_string=temp_string.replace(" ","_");
          ui=uc;
        }
        //console.log(cadena_fc);
      }
      cadena_fc="%20"+cadena_fc+temp_string.slice(ui+1);
      console.log(cadena_fc);
      return cadena_fc
    }