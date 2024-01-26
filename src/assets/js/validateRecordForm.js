

jQuery(function () {

  
  return document.getElementById('guardar').addEventListener("click", function validateData(){ 
    
   
    var valSpanPrimNEst = document.getElementById('spanPrimNomEst');
    var valInputPrimNEst = document.getElementById('primNombAl');

    var valSpanSegNEst = document.getElementById('spanSegNomEst');
    var valInputSegNEst = document.getElementById('segNombAl');

    var valSpanPrimApeEst = document.getElementById('spanPrimApeEst');
    var valPrimApellEst = document.getElementById('primApellAl');

    var valSpanSegApellEst = document.getElementById('spanSegApellEst');
    var valInputSegApellEst = document.getElementById('segApellAl');

    var valTipoDocEst = document.getElementById('tipoDocAl');
    var selectedDocType = valTipoDocEst.options[valTipoDocEst.selectedIndex].text;
    var valNumDocEst = document.getElementById('numDocAl');
    var valSpanCedEst = document.getElementById('spanCedEst');

    var valSpanFechNacEst = document.getElementById('spanFechNacEst');
    var valFechNacEst = document.getElementById('fechNacAl');

    var valLugarNacEst = document.getElementById('lugarNacAl');
    var selectedLugNacEst = valLugarNacEst.options[valLugarNacEst.selectedIndex].text;
    var valSpanLugarNacEst = document.getElementById('spanLugarNacEst');

    var valNacionalidad = document.getElementById('nacionalidad');
    var valSpanNacEst = document.getElementById('spanNacEst');

    var valEdadEst = document.getElementById('edadAl');
    var valSpanEdadEst = document.getElementById('spanEdadEst');

    var valsexoEst = document.getElementById('sexoAl');
    var selectedSexEst = valsexoEst.options[valsexoEst.selectedIndex].text;
    var valSpanSexoEst = document.getElementById('spanSexoEst');

    var valFechIngEst = document.getElementById('fechIngAl');
    var valSpanAdmEst = document.getElementById('spanAdmEst');

    var valCodOperadoraEst = document.getElementById('codOperadoraEst');
    var selectedCodOperEst = valCodOperadoraEst.options[valCodOperadoraEst.selectedIndex].text;
    var valSpanTelefEst = document.getElementById('spanTelefEst')
    var valTlfPpalEst = document.getElementById('textoTlfPpalAl');


    var valEmailEst = document.getElementById('emailAl');
    var valSpanCorreoEst = document.getElementById('spanCorreoEst');

    var valDirPpalEst = document.getElementById('textoDirPpalAl');
    var valSpanDirEst = document.getElementById('spanDirEst');

    var valPrimNombRepr = document.getElementById('primNombRepr');
    var valSpanPrimNomRepr = document.getElementById('spanPrimNomRpr');

    var valSegNombRepr = document.getElementById('segNombRepr');
    var valSpanSegNomRpr = document.getElementById('spanSegNomRpr');

    var valPrimApellRepr = document.getElementById('primApellRepr');
    var valSpanPrimApeRpr = document.getElementById('spanPrimApeRpr');

    var valSegApellRepr = document.getElementById('segApellRepr');
    var valSpanSegApeRpr = document.getElementById('spanSegApeRpr');

    var valTipoDocRpr = document.getElementById('tipoDocRepr');
    var selectedDocTypeRpr = valTipoDocRpr.options[valTipoDocRpr.selectedIndex].text;
    var valNumDocRpr = document.getElementById('numDocRepr');
    var valSpanCedRpr = document.getElementById('spanCedRpr');

    var valFechNacRpr = document.getElementById('fechNacRepr');
    var valSpanFechNacRpr = document.getElementById('spanFechNacRpr');

    var valLugarNacRpr = document.getElementById('lugarNacRepr');
    var selectedLugNacRpr = valLugarNacRpr.options[valLugarNacRpr.selectedIndex].text;
    var valSpanLugarNacRpr = document.getElementById('spanLugNacRpr');


    var valNacionalidadRpr = document.getElementById('nacionalidadRepr');
    var valSpanNacRpr = document.getElementById('spanNacRpr');

    var valEdadRpr = document.getElementById('edadRepr');
    var valSpanEdadRpr = document.getElementById('spanEdadRpr');

    var valsexoRpr = document.getElementById('sexoRepr');
    var selectedSexRpr = valsexoRpr.options[valsexoRpr.selectedIndex].text;
    var valSpanSexoRpr = document.getElementById('spanSexoRpr');

    var valCodOperadoraRpr = document.getElementById('codOperadoraRpr');
    var selectedCodOperRpr = valCodOperadoraRpr.options[valCodOperadoraRpr.selectedIndex].text;
    var valSpanTelefRpr = document.getElementById('spanTelefRpr')
    var valTlfPpalRpr = document.getElementById('textoTlfPpalRpr');

    var valEmailRpr = document.getElementById('emailRepr');
    var valSpanCorreoRpr = document.getElementById('spanCorreoRpr');

    var valDirPpalRpr = document.getElementById('textoDirPpalRpr');
    var valSpanDirRpr = document.getElementById('spanDirRpr');

    var valprofesion = document.getElementById('profesion');
    var valSpanProfesion = document.getElementById('spanProfesion');

    var valOcupacion = document.getElementById('ocupacion');
    var valSpanOcup = document.getElementById('spanOcup');

    var valEmpresa = document.getElementById('empresa');
    var valSpanNomEmpr = document.getElementById('spanNomEmpr');

    var valCodOperEmpr = document.getElementById('codOperEmprRpr');
    var selecCodOperEmpr = valCodOperEmpr.options[valCodOperEmpr.selectedIndex].text;
    var valSpanTelefEmpr = document.getElementById('spanTelefEmprRpr')
    var valTlfEmpr = document.getElementById('textoTlfEmprRpr');

    var valdireccEmpresa = document.getElementById('direccEmpresa');
    var valSpanDirEmpresa = document.getElementById('spanDirEmprRpr');

    var valParentesco = document.getElementById('parentesco');
    var selectParentesco = valParentesco.options[valParentesco.selectedIndex].text;
    var valSpanParentRpr = document.getElementById('spanParentRpr');

    var valCivil = document.getElementById('civil');
    var selecEdoCivil = valCivil.options[valCivil.selectedIndex].text;
    var valSpanCivilRpr = document.getElementById('spanCivilRpr');

    var valIngresos = document.getElementById('ingresos');
    var valSpanIngre = document.getElementById('spanIngre');


    var primerNombre = "Primer nombre";
    var primerApellido = "Primer apellido";
    var segundoNombre = "Segundo nombre";
    var segundoApellido = "Segundo apellido";
    var direccion = "Dirección domicilio";
    var direccionEmp = "Dirección empresa";
    var profesion = "Profesión";
    var ocupacion = "Ocupación";
    var NombreEmpr = "Nombre empresa"
    var patronUno = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    var patronDos = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ' °,.:#0-9_-]+$/;
    var messageMin7 = "Debe contener al menos 7 caracteres";
    var messageMax7 = "Máximo 7 caracteres permitidos";
    var messageMin8 = "Debe contener al menos 8 caracteres";
    var messageMax8 = "Máximo 8 caracteres permitidos"

       

    if (valInputPrimNEst !== null && valInputPrimNEst.value === "") {

      valSpanPrimNEst.style.display = "block";
      valSpanPrimNEst.style.color = "red";
      valInputPrimNEst.style.border = "2px solid red";


    } else {      

        validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)
    
    }

    

    valInputPrimNEst.addEventListener("keypress", () =>{


        setTimeout(function () {   
         
          validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)
       
          
        }, 100);       
     
         
      })

      
    

    valInputPrimNEst.addEventListener("keydown", (event) => {

     
      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)

        }

      }, 100);
  
    });
    

    valInputPrimNEst.addEventListener("change", () => { 


      setTimeout(function () {
      
        
        validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)

      }, 100);

    });

    $("#primNombAl").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valInputPrimNEst.value.trim(), valInputPrimNEst, valSpanPrimNEst, primerNombre, patronUno)


        }, 100)

      }


    });



    /////////////////////////////////////////////////////////////////////

    if (valInputSegNEst !== null && valInputSegNEst.value !== "") {

      setTimeout(function () {

        validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)

      }, 100);

    }


    valInputSegNEst.addEventListener("keypress", () => {

      setTimeout(function () {

       
        validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)

      }, 100);

    });

    valInputSegNEst.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)

        }

      }, 100)

    });

    valInputSegNEst.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)

      }, 100);

    });

    $("#segNombAl").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)


        }, 100)

      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valInputSegNEst.value.trim(), valInputSegNEst, valSpanSegNEst, segundoNombre, patronUno)


        }, 100)

      }


    });


    ////////////////////////////////////////////////////////////////////

    if (valPrimApellEst !== null && valPrimApellEst.value === "") {

      valSpanPrimApeEst.style.display = "block";
      valSpanPrimApeEst.style.color = "red";
      valPrimApellEst.style.border = "2px solid red";


    } else {

      
        validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)

     
    }

    valPrimApellEst.addEventListener("keypress", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)

      }, 100);

    });

    valPrimApellEst.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)

        }

      }, 100);


    });

    valPrimApellEst.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)

      }, 100);

    });

    $("#primApellAl").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valPrimApellEst.value.trim(), valPrimApellEst, valSpanPrimApeEst, primerApellido, patronUno)


        }, 100)

      }


    });
    /////////////////////////////////////////////////////////////////////

    if (valInputSegApellEst !== null && valInputSegApellEst.value !== "") {

      setTimeout(function () {

        validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)

      }, 100);
    }


    valInputSegApellEst.addEventListener("keypress", () => {

      setTimeout(function () {

            validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)

      }, 100);

    });

    valInputSegApellEst.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)

        }

      }, 100);


    });

    valInputSegApellEst.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)

      }, 100);

    });

    $("#segApellAl").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valInputSegApellEst.value.trim(), valInputSegApellEst, valSpanSegApellEst, segundoApellido, patronUno)


        }, 100)

      }


    });

    ////////////////////////////////////////////////////////////////////



    if ((valNumDocEst !== null && valNumDocEst.value === "") && (valTipoDocEst !== null && selectedDocType === '---')) {

      valSpanCedEst.style.display = "block";
      valSpanCedEst.style.color = "red";
      valTipoDocEst.style.border = "2px solid red";
      valNumDocEst.style.border = "2px solid red"


    } else if ((valNumDocEst !== null && valNumDocEst.value === "") && (valTipoDocEst !== null && selectedDocType !== '---')) {

      valSpanCedEst.style.display = "block";
      valSpanCedEst.style.color = "red";
      valTipoDocEst.style.border = "1px solid #b5b5b5";
      valNumDocEst.style.border = "2px solid red"


    } else if ((valNumDocEst !== null && valNumDocEst.value !== "") && (valTipoDocEst !== null && selectedDocType === '---')) {

    
      valTipoDocEst.style.border = "2px solid red";
      valSpanCedEst.style.color= "red";
      valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
      valSpanCedEst.style.display="block"
     
    
      if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {        

        valSpanCedEst.style.display = "block";
        valSpanCedEst.style.color = "red";
        valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
        valNumDocEst.style.border = "2px solid red";
        

      } else if (valNumDocEst.value.length > 8) {      

        valSpanCedEst.style.display = "block";
        valSpanCedEst.style.color = "red";
        valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocEst.style.border = "2px solid red";
        

      } else if (valNumDocEst.value.length == 8) {

        valNumDocEst.style.border = "1px solid #b5b5b5";
        

      }


    } else if ((valNumDocEst !== null && valNumDocEst.value !== "") && (valTipoDocEst !== null && selectedDocType !== '---')) {

      valSpanCedEst.style.display = "none";
     

      if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {
        

        valSpanCedEst.style.display = "block";
        valSpanCedEst.style.color = "red";
        valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
        valNumDocEst.style.border = "2px solid red";
        valTipoDocEst.style.border = "1px solid #b5b5b5"

      } else if (valNumDocEst.value.length > 8) {
        

        valSpanCedEst.style.display = "block";
        valSpanCedEst.style.color = "red";
        valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocEst.style.border = "2px solid red";
        valTipoDocEst.style.border = "1px solid #b5b5b5"

      } else if (valNumDocEst.value.length == 8) {

        valNumDocEst.style.border = "1px solid #b5b5b5";
        valSpanCedEst.style.display="none"

      }


    }

    valTipoDocEst.addEventListener("change", () => {

      if (valTipoDocEst.value == 'V' && valNumDocEst.value == '') {
  
        valTipoDocEst.style.border = "1px solid #b5b5b5"
        valSpanLugarNacEst.style.display = "none";
        valSpanNacEst.style.display = "none";

        valNumDocEst.style.border = "2px solid red";
        valSpanCedEst.style.display = "block"



      } else if (valTipoDocEst.value == 'V' && valNumDocEst.value != '') {       

        valSpanCedEst.style.display = "none";
        valTipoDocEst.style.border = "1px solid #b5b5b5"
        valSpanLugarNacEst.style.display = "none";
        valSpanNacEst.style.display = "none";
        valNumDocEst.style.border = "1px solid #b5b5b5";


        if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {         

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocEst.style.border = "2px solid red"

        } else if (valNumDocEst.value.length > 8) {         

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocEst.style.border = "2px solid red"

        }

      ///Cuando tipo de documento es 'E' ó 'P'

      } else if (valTipoDocEst.value != 'default') {

       
        valNumDocEst.style.border = "2px solid red";
        valTipoDocEst.style.border = "1px solid #b5b5b5";      
        valSpanCedEst.style.display = "block"  


        if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {

         
          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocEst.style.border = "2px solid red";
          valTipoDocEst.style.border = "1px solid #b5b5b5"

        } else if (valNumDocEst.value.length > 8) {
          

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocEst.style.border = "2px solid red";
          valTipoDocEst.style.border = "1px solid #b5b5b5"

        } else if (valNumDocEst.value.length == 8) {

          valNumDocEst.style.border = "1px solid #b5b5b5";
          valSpanCedEst.style.display="none"

        }

        if (valLugarNacEst.value != 'default') {       

          valSpanLugarNacEst.style.display = "none";
          valSpanNacEst.style.display = "none";
          valLugarNacEst.style.border = "1px solid #b5b5b5";
          valNacionalidad.style.border = "1px solid #b5b5b5";
        

        } else {
         
          valSpanLugarNacEst.style.display = "block";
          valSpanLugarNacEst.style.color = "red";
          valLugarNacEst.style.border = "2px solid red";

          valSpanNacEst.style.display = "block";
          valSpanNacEst.style.color = "red";
          valNacionalidad.style.border = "2px solid red";
          
        }

        // Cuando tipo de documento es igual a default

      } else {     

        valSpanLugarNacEst.style.display = "block";
        valSpanLugarNacEst.style.color = "red";
        valLugarNacEst.style.border = "2px solid red";

        valSpanNacEst.style.display = "block";
        valSpanNacEst.style.color = "red";
        valNacionalidad.style.border = "2px solid red";

        valTipoDocEst.style.border = "2px solid red"


        if (valNumDocEst.value != "") {
          
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";

          if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {


            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red";
        

          } else if (valNumDocEst.value.length > 8) {


            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red";
           

          } else if (valNumDocEst.value.length == 8) {

            valNumDocEst.style.border = "1px solid #b5b5b5";

          }

        } else {

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valNumDocEst.style.border = "2px solid red"

        }


      }


    })

    valNumDocEst.addEventListener("keypress", () => {

      valNumDocEst.style.border = "2px solid red"

      setTimeout(function () {


      if(valNumDocEst.value!="" && valTipoDocEst.value!='default'){


        if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8 && valNumDocEst.value !="") {


          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocEst.style.border = "2px solid red"

        } else if (valNumDocEst.value.length > 8) {

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocEst.style.border = "2px solid red"

        } else {

          valSpanCedEst.style.display = "none";
          valNumDocEst.style.border="1px solid #b5b5b5"
          

        }        

      }else{

        if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8 && valNumDocEst.value !="") {


          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocEst.style.border = "2px solid red"

        } else if (valNumDocEst.value.length > 8) {

          valSpanCedEst.style.display = "block";
          valSpanCedEst.style.color = "red";
          valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocEst.style.border = "2px solid red"

        } else {


          valSpanCedEst.innerHTML="El campo Cédula es obligatorio"
          valSpanCedEst.style.display = "block";
          valNumDocEst.style.border="1px solid #b5b5b5"
          

        }


      }


      }, 100);

    })


    valNumDocEst.addEventListener("keydown", (event) => {


      if (event.key == "Backspace" || event.key == "Delete") {


        setTimeout(function () {

          if(valTipoDocEst.value!='default'){
          

          if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8 && valNumDocEst.value !=="") {


            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"
  
          } else if (valNumDocEst.value.length > 8) {
  
            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"
  
          } else {
  
            valSpanCedEst.style.display = "none";
            valNumDocEst.style.border = "1px solid #b5b5b5"
  
          }

         
        }else{

          if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8 && valNumDocEst.value !=="") {


            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"
  
          } else if (valNumDocEst.value.length > 8) {
  
            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"
  
          } else {
  
            valSpanCedEst.style.color = 'red';
            valNumDocEst.style.border = "2px solid red";
            valTipoDocEst.style.border = "2px solid red";
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio"

          }

        }

        if (valTipoDocEst.value == 'default' && valNumDocEst.value == "") {


          valSpanCedEst.style.color = 'red';
          valNumDocEst.style.border = "2px solid red";
          valTipoDocEst.style.border = "2px solid red";
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedEst.style.display = 'block';

        } else if (valTipoDocEst.value != 'default' && valNumDocEst.value == "") {

          valSpanCedEst.style.color = 'red';
          valNumDocEst.style.border = "2px solid red";
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valTipoDocEst.style.border = "1px solid #b5b5b5";
          valSpanCedEst.style.display = 'block';

        }

        }, 100)

      }




    })


    valNumDocEst.addEventListener("change", () => {


      valNumDocEst.style.border = "1px solid #b5b5b5";

      setTimeout(function () {

        if (valTipoDocEst.value !== 'default' && valNumDocEst.value != "") {

          valTipoDocEst.style.border = "1px solid #b5b5b5";

          valSpanCedEst.style.display = 'none';

          if (valNumDocEst.value.length > 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"

          } else if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"

          }


        } else if (valTipoDocEst.value != 'default' && valNumDocEst.value == "") {

          valSpanCedEst.style.color = 'red';
          valNumDocEst.style.border = "2px solid red";
          valTipoDocEst.style.border = "1px solid #b5b5b5";
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedEst.style.display = 'block';


        } else if (valTipoDocEst.value == 'default' && valNumDocEst.value == "") {

          valSpanCedEst.style.color = 'red';
          valNumDocEst.style.border = "2px solid red";
          valTipoDocEst.style.border = "2px solid red";
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedEst.style.display = 'block';

        } else if (valTipoDocEst.value == 'default' && valNumDocEst.value != "") {

          valSpanCedEst.style.color = 'red';
          valNumDocEst.style.border = "1px solid #b5b5b5";
          valTipoDocEst.style.border = "2px solid red";
          valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedEst.style.display = 'block';

          if (valNumDocEst.value.length > 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"

          } else if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"

          }
        }

      }, 100)


    })

    $("#numDocAl").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
  
       
      },*/
      paste: function () {

        setTimeout(function () {
          

          if (valNumDocEst.value.length > 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"

          } else if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8 && valNumDocEst.value!="") {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"

          }else {

            if(valTipoDocEst.value !='default'){

              valSpanCedEst.style.display="none";
              valNumDocEst.style.border= "1px solid #b5b5b5"

            } else {

              valSpanCedEst.style.display = "block";
              valSpanCedEst.style.color = "red";
              valSpanCedEst.innerHTML = "El campo numero de Cédula es obligatorio";
              valNumDocEst.style.border = "2px solid red"


            }         


          }

        }, 100)

      },


      cut: function () {


        setTimeout(function () {

          if (valNumDocEst.value == "") {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio"
            valNumDocEst.style.border = "2px solid red"

          }

        }, 100)


      }


    });


    if (valLugarNacEst !== null && selectedLugNacEst === "--Select--") {

      valSpanLugarNacEst.style.display = "block";
      valSpanNacEst.style.display = "block";
      valSpanLugarNacEst.style.color = "red";
      valSpanNacEst.style.color="red";
      valLugarNacEst.style.border = "2px solid red";
      valNacionalidad.style.border = "2px solid red"


    } else {

      valLugarNacEst.style.border = "1px solid #b5b5b5";
      valNacionalidad.style.border = "1px solid #b5b5b5"

    }

    valLugarNacEst.addEventListener("change", () => {

      setTimeout(function () {

        if (valLugarNacEst.value !== 'default' && valNumDocEst.value != "") {

          valSpanLugarNacEst.style.display = "none";
          valSpanNacEst.style.display = "none";
          valLugarNacEst.style.border = "1px solid #b5b5b5";
          valNacionalidad.style.border = "1px solid #b5b5b5";        


          if (valTipoDocEst.value == 'default' && valNumDocEst.value == "") {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color="red";  
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
            valTipoDocEst.style.border = "2px solid red";
            valNumDocEst.style.border = "2px solid red"

          } else if (valTipoDocEst.value != 'default' && valNumDocEst.value == "") {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color="red";  
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
            valNumDocEst.style.border = "2px solid red";
            valTipoDocEst.style.border = "1px solid #b5b5b5"

          } else if (valTipoDocEst.value == 'default' && valNumDocEst.value != "") {

                       
            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color="red";            
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio";
            valTipoDocEst.style.border = "2px solid red";
            valNumDocEst.style.border = "1px solid #b5b5b5";

            if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {


              valSpanCedEst.style.display = "block";
              valSpanCedEst.style.color = "red";
              valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
              valNumDocEst.style.border = "2px solid red"

            } else if (valNumDocEst.value.length > 8) {

              valSpanCedEst.style.display = "block";
              valSpanCedEst.style.color = "red";
              valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocEst.style.border = "2px solid red"

            }


          } else if (valTipoDocEst.value != 'default' && valNumDocEst.value != "") {


            valSpanCedEst.style.display = "none";
            valTipoDocEst.style.border = "1 solid #b5b5b5";
            valNumDocEst.style.border = "1px solid #b5b5b5";

            if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {


              valSpanCedEst.style.display = "block";
              valSpanCedEst.style.color = "red";
              valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
              valNumDocEst.style.border = "2px solid red"

            } else if (valNumDocEst.value.length > 8) {

              valSpanCedEst.style.display = "block";
              valSpanCedEst.style.color = "red";
              valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocEst.style.border = "2px solid red"

            }

          }

        } else {


          if (valLugarNacEst.value == 'default') {

            valSpanLugarNacEst.style.display = "block";
            valSpanLugarNacEst.style.color = "red";
            valLugarNacEst.style.border = "2px solid red";


            valSpanNacEst.style.display = "block";
            valSpanNacEst.style.color = "red";
            valNacionalidad.style.border = "2px solid red"

            valTipoDocEst.style.border = "2px solid red";

          }

          if (valLugarNacEst.value != 'default' && valTipoDocEst.value != 'default') {


            valTipoDocEst.style.border = "1px solid #b5b5b5";

          } else {

            valTipoDocEst.style.border = "2px solid red";
            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red"
            valSpanCedEst.innerHTML = "El campo Cédula es obligatorio"
          }



          if (valNumDocEst.value.length >= 1 && valNumDocEst.value.length < 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocEst.style.border = "2px solid red"

          } else if (valNumDocEst.value.length > 8) {

            valSpanCedEst.style.display = "block";
            valSpanCedEst.style.color = "red";
            valSpanCedEst.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocEst.style.border = "2px solid red"

          }

          if (valNumDocEst.value == "") {

            valNumDocEst.style.border = "2px solid red";

          }


        }

      }, 100)

    })  


    if (valFechNacEst !== null && valFechNacEst.value === "") {


      valSpanFechNacEst.style.display = "block";
      valSpanFechNacEst.style.color = "red";
      valFechNacEst.style.border = "2px solid red"

    }

    else if (valEdadEst.value != "N/A") {

      valSpanFechNacEst.style.display = "none";
      valFechNacEst.style.border = "1px solid #b5b5b5"


    } else {


      valSpanFechNacEst.style.display = "block";
      valSpanFechNacEst.style.color = "red";
      valSpanFechNacEst.innerHTML = "El campo Fecha de nacimiento es inválido"


    }


    if (valEdadEst !== null && valEdadEst.value === "") {

      valSpanEdadEst.style.display = "block";
      valSpanEdadEst.style.color = "red";
      valEdadEst.style.border = "2px solid red"


    } else if (valEdadEst.value == "") {
      valSpanEdadEst.style.display = "block";
      valEdadEst.style.border = "2px solid red";
      valSpanEdadEst.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
      valSpanEdadEst.style.color = "red";
      valSpanFechNacEst.style.display = "block";
      valSpanFechNacEst.innerHTML = "El año de nacimiento, debe ser anterior al año actual";
      valSpanFechNacEst.style.color = "red";
      valFechNacEst.style.border = "2px solid red"



    } else if (valEdadEst.value == "N/A") {

      valSpanEdadEst.style.display = "block";
      valEdadEst.style.border = "2px solid red";
      valSpanEdadEst.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
      valSpanEdadEst.style.color = "red";
    }
    else {

      valSpanEdadEst.style.display = "none";
      valEdadEst.style.border = "1px solid #b5b5b5"

    }



    if (valsexoEst !== null && selectedSexEst === "--Select--") {

      valSpanSexoEst.style.display = "block";
      valSpanSexoEst.style.color = "red";
      valsexoEst.style.border = "2px solid red"


    } else {

      valSpanSexoEst.style.display = "none";
      valsexoEst.style.border = "1px solid #b5b5b5";


    }

    valsexoEst.addEventListener("change", () => {


      if (valsexoEst.value !== 'default') {

        valSpanSexoEst.style.display = "none";
        valsexoEst.style.border = "1px solid #b5b5b5"

      } else {

        valSpanSexoEst.style.display = "block";
        valSpanSexoEst.style.color = "red";
        valsexoEst.style.border = "2px solid red"
      }

    })

    ///////////////////////////////////////////////////////////////////////

   /* var hoy = new Date();
    var valIngDate = new Date(`${valFechIngEst.value}T00:00:00`);*/


    if (valFechIngEst !== null && valFechIngEst.value === "") {

      valSpanAdmEst.style.display = "block";
      valSpanAdmEst.style.color = "red";
      valFechIngEst.style.border = "2px solid red"

    }
    

    if ((valTlfPpalEst !== null && valTlfPpalEst.value === "") && (valTlfPpalEst !== null && selectedCodOperEst === '-Select-')) {

      valSpanTelefEst.style.display = 'block';
      valSpanTelefEst.style.color = "red";
      valCodOperadoraEst.style.border = "2px solid red";
      valTlfPpalEst.style.border = "2px solid red"



    } else if ((valTlfPpalEst !== null && valTlfPpalEst.value === "") && (valTlfPpalEst !== null && selectedCodOperEst !== '-Select-')) {

      valSpanTelefEst.style.display = 'block';
      valSpanTelefEst.style.color = "red";
      valCodOperadoraEst.style.border = "1px solid #b5b5b5";
      valTlfPpalEst.style.border = "2px solid red";



    } else if ((valTlfPpalEst !== null && valTlfPpalEst.value !== "") && (valTlfPpalEst !== null && selectedCodOperEst === '-Select-')) {

     
      setTimeout(function () {

        validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)

      }, 100)

    } else if ((valTlfPpalEst !== null && valTlfPpalEst.value !== "") && (valTlfPpalEst !== null && selectedCodOperEst !== '-Select-')) {


     
      setTimeout(function () {

        validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)

      }, 100)
    }




    valCodOperadoraEst.addEventListener("change", () => {


      setTimeout(function () {

        if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value != "") {


          valCodOperadoraEst.style.border = "2px solid red";
          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)


        } else if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value == "") {


          valSpanTelefEst.style.display = "block";
          valSpanTelefEst.style.color = "red";
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio";
          valTlfPpalEst.style.border = '2px solid red';
          valCodOperadoraEst.style.border = "1px solid #b5b5b5";



        } else if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value == "") {


          valSpanTelefEst.style.display = "block";
          valSpanTelefEst.style.color = "red";
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio";
          valTlfPpalEst.style.border = '2px solid red';
          valCodOperadoraEst.style.border = "2px solid red";



        } else if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value != "") {


          valCodOperadoraEst.style.border = "1px solid #b5b5b5";
          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)


        }

      }, 100)

    })


    valTlfPpalEst.addEventListener("change", () => {

      setTimeout(function () {

        if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value != "") {

          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7);

        } else if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value == "") {

          valSpanTelefEst.style.color = 'red';
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalEst.style.border = "2px solid red";
          valCodOperadoraEst.style.border = "1px solid #b5b5b5";
          valSpanTelefEst.style.display = 'block';


        } else if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value == "") {


          valSpanTelefEst.style.color = 'red';
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalEst.style.border = "2px solid red";
          valCodOperadoraEst.style.border = "2px solid red";
          valSpanTelefEst.style.display = 'block';

        } else if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value != "") {

          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7);

        }


      }, 100)


    })



    $("#textoTlfPpalAl").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
  
       
      },*/
      paste: function () {

        setTimeout(function () {

          valSpanTelefEst.style.color = 'red';
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalEst.style.border = "2px solid red";


          if (valTlfPpalEst.value != "") {

            validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7);


          } else if (valTlfPpalEst.value == "" && valCodOperadoraEst.value == "default") {

            valCodOperadoraEst.style.border = "2px solid red"

          }


        }, 100)

      },


      cut: function () {


        setTimeout(function () {

          if (valTlfPpalEst.value == "") {

            valSpanTelefEst.style.display = "block";
            valSpanTelefEst.style.color = "red";
            valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio"
            valTlfPpalEst.style.border = "2px solid red"

          }

        }, 100)


      }


    });


    valTlfPpalEst.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          valSpanTelefEst.style.color = 'red';
          valTlfPpalEst.style.border = "2px solid red";
          valSpanTelefEst.style.display = 'block';
          valSpanTelefEst.innerHTML = "El campo Teléfono es obligatorio";

          if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value == "") {


            valCodOperadoraEst.style.border = "2px solid red";


          } else if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value == "") {

            valCodOperadoraEst.style.border = "1px solid #b5b5b5";


          } else if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value != "") {


            validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7);


          } else if (valCodOperadoraEst.value != 'default' && valTlfPpalEst.value != "") {


            validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7);

          }


        }

      }, 100)



    })

    valTlfPpalEst.addEventListener("keypress", () => {

      setTimeout(function () {

        if (valCodOperadoraEst.value !== 'default' && valTlfPpalEst.value != "") {


          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)


        } else if (valCodOperadoraEst.value == 'default' && valTlfPpalEst.value != "") {


          validateNumberFields(valSpanTelefEst, valCodOperadoraEst, valTlfPpalEst, 7, messageMin7, messageMax7)

        }

      }, 100)

    })

    if (valEmailEst.value !== null && valEmailEst.value === "") {

      valEmailEst.style.border = "2px solid red";
      valSpanCorreoEst.innerHTML = "El campo Correo electrónico es obligatorio"
      valSpanCorreoEst.style.color = "red";
    }


    valEmailEst.addEventListener("keypress", () => {

      setTimeout(function () {

        validateEmail();

      }, 100);

    })

    valEmailEst.addEventListener("keydown", (event) => {


      if (event.key == "Backspace" || event.key == "Delete") {

        setTimeout(function () {

          validateEmail();

        }, 100);

      }

    })

    valEmailEst.addEventListener("change", () => {

      setTimeout(function () {

        validateEmail();

      }, 100);

    })

    $("#emailAl").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateEmail();


        }, 100)

      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateEmail();

        }, 100)



      }


    });
    

    if (valDirPpalEst !== null && valDirPpalEst.value === "") {

      valSpanDirEst.style.display = "block";
      valSpanDirEst.style.color = "red";
      valDirPpalEst.style.border = "2px solid red"


    } else {
    

        validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)

    
    }

    valDirPpalEst.addEventListener("keypress", () => {

      setTimeout(function () {

        valDirPpalEst.style.border = "1px solid #b5b5b5";
        valSpanDirEst.style.display = "none";
        validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)

      }, 100)

    })

    valDirPpalEst.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)

        }

     }, 100)

    })

    valDirPpalEst.addEventListener("change", () => {

      setTimeout(function () {

        valDirPpalEst.style.border = "1px solid #b5b5b5";
        valSpanDirEst.style.display = "none";
        validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)

      }, 100)


    })

    $("#textoDirPpalAl").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valDirPpalEst.value.trim(), valDirPpalEst, valSpanDirEst, direccion, patronDos)

        }, 100)



      }


    });



    if (valPrimNombRepr !== null && valPrimNombRepr.value === "") {

      valSpanPrimNomRepr.style.display = "block";
      valSpanPrimNomRepr.style.color = "red";
      valPrimNombRepr.style.border = "2px solid red"

    } else {

        validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)

    }

    valPrimNombRepr.addEventListener("keypress", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)

      }, 100)

    })

    valPrimNombRepr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)

        }

      }, 100)

    })

    valPrimNombRepr.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)

      }, 100)

    })

    $("#primNombRepr").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)


        }, 100)

      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valPrimNombRepr.value.trim(), valPrimNombRepr, valSpanPrimNomRepr, primerNombre, patronUno)


        }, 100)

      }


    });

    //////////////////////////////

    if (valSegNombRepr !== null && valSegNombRepr.value !== "") {

      setTimeout(function () {

        validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)

      }, 100);

    }


    valSegNombRepr.addEventListener("keypress", () => {

      setTimeout(function () {

      
        validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)

      }, 100);

    });

    valSegNombRepr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)

        }

      }, 100)

    });

    valSegNombRepr.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)

      }, 100);

    });

    $("#segNombRepr").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {


        setTimeout(function () {

          validateCharacters(valSegNombRepr.value.trim(), valSegNombRepr, valSpanSegNomRpr, segundoNombre, patronUno)


        }, 100)

      }


    });




    ////////////////////////////////////////////////////////////////////



    if (valPrimApellRepr !== null && valPrimApellRepr.value === "") {

      valSpanPrimApeRpr.style.display = "block";
      valSpanPrimApeRpr.style.color = "red";
      valPrimApellRepr.style.border = "2px solid red"


    } else {

      
        validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)

    

    }

    valPrimApellRepr.addEventListener("keypress", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)

      }, 100);


    })

    valPrimApellRepr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)

        }

      }, 100);


    })



    valPrimApellRepr.addEventListener("change", () => {

      setTimeout(function () {

       
        validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)

      }, 100)


    })

    $("#primApellRepr").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valPrimApellRepr.value.trim(), valPrimApellRepr, valSpanPrimApeRpr, primerApellido, patronUno)


        }, 100)

      }


    });



    //////////////////////////////

    if (valSegApellRepr !== null && valSegApellRepr.value !== "") {

      setTimeout(function () {

        validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)

      }, 100);

    }


    valSegApellRepr.addEventListener("keypress", () => {

      setTimeout(function () {

        valSpanSegApeRpr.style.display = "none";
        valSegNombRepr.style.border = "1px solid #b5b5b5";
        validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)

      }, 100);

    });

    valSegApellRepr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)

        }

      }, 100)

    });

    valSegApellRepr.addEventListener("change", () => {

      setTimeout(function () {

        valSpanSegApeRpr.style.display = "none";
        valSegApellRepr.style.border = "1px solid #b5b5b5";
        validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)

      }, 100);

    });

    $("#segApellRepr").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)


        }, 100)

      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valSegApellRepr.value.trim(), valSegApellRepr, valSpanSegApeRpr, segundoApellido, patronUno)


        }, 100)

      }


    });


    ////////////////////////////////////////////////////////////////////

    if ((valNumDocRpr !== null && valNumDocRpr.value === "") && (valTipoDocRpr !== null && selectedDocTypeRpr === '---')) {

      valSpanCedRpr.style.display = "block";
      valSpanCedRpr.style.color = "red";
      valTipoDocRpr.style.border = "2px solid red";
      valNumDocRpr.style.border = "2px solid red"


    } else if ((valNumDocRpr !== null && valNumDocRpr.value === "") && (valTipoDocRpr !== null && selectedDocTypeRpr !== '---')) {

      valSpanCedRpr.style.display = "block";
      valSpanCedRpr.style.color = "red";
      valTipoDocRpr.style.border = "1px solid #b5b5b5";
      valNumDocRpr.style.border = "2px solid red"


    } else if ((valNumDocRpr !== null && valNumDocRpr.value !== "") && (valTipoDocRpr !== null && selectedDocTypeRpr === '---')) {

      valTipoDocRpr.style.border = "2px solid red";
      valSpanCedRpr.style.color= "red";
      valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
      valSpanCedRpr.style.display="block";
      valTipoDocRpr.style.border = "2px solid red";
    
      if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {        

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
        valNumDocRpr.style.border = "2px solid red";
        

      } else if (valNumDocRpr.value.length > 8) {      

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocRpr.style.border = "2px solid red";
        

      } else if (valNumDocRpr.value.length == 8) {

        valNumDocRpr.style.border = "1px solid #b5b5b5";
     
      }


    } else if ((valNumDocRpr !== null && valNumDocRpr.value !== "") && (valTipoDocRpr !== null && selectedDocTypeRpr !== '---')) {

      valSpanCedRpr.style.display = "none";
     

      if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {
        

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"

      } else if (valNumDocRpr.value.length > 8) {
        

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"

      } else if (valNumDocRpr.value.length == 8) {

        valNumDocRpr.style.border = "1px solid #b5b5b5";
        valSpanCedRpr.style.display="none"

      }


    }

    valTipoDocRpr.addEventListener("change", () => {

      if (valTipoDocRpr.value == 'V' && valNumDocRpr.value == '') {

        valTipoDocRpr.style.border = "1px solid #b5b5b5"
        valSpanLugarNacRpr.style.display = "none";
        valSpanNacRpr.style.display = "none";

        valNumDocRpr.style.border = "2px solid red";
        valSpanCedRpr.style.display = "block"



      } else if (valTipoDocRpr.value == 'V' && valNumDocRpr.value != '') {
       

        valSpanCedRpr.style.display = "none";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"
        valSpanLugarNacRpr.style.display = "none";
        valSpanNacRpr.style.display = "none";
        valNumDocRpr.style.border = "1px solid #b5b5b5";


        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {          

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocRpr.style.border = "2px solid red"

        } else if (valNumDocRpr.value.length > 8) {        

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red"

        }

      ///Cuando tipo de documento es 'E' ó 'P'

      } else if (valTipoDocRpr.value != 'default') {
      

        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5";
        valSpanCedRpr.style.display = "block"


        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {        

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "1px solid #b5b5b5"

        } else if (valNumDocRpr.value.length > 8) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "1px solid #b5b5b5"

        } else if (valNumDocRpr.value.length == 8) {

          valNumDocRpr.style.border = "1px solid #b5b5b5";
          valSpanCedRpr.style.display="none"

        }

        if (valLugarNacRpr.value != 'default') {

          valSpanLugarNacRpr.style.display = "none";
          valSpanNacRpr.style.display = "none";
          valLugarNacRpr.style.border = "1px solid #b5b5b5";
          valNacionalidadRpr.style.border = "1px solid #b5b5b5";
        

        } else {

          valSpanLugarNacRpr.style.display = "block";
          valSpanLugarNacRpr.style.color = "red";
          valLugarNacRpr.style.border = "2px solid red";

          valSpanNacRpr.style.display = "block";
          valSpanNacRpr.style.color = "red";
          valNacionalidadRpr.style.border = "2px solid red";
          
        }

        // Cuando tipo de documento es igual a default

      } else {

        valSpanLugarNacRpr.style.display = "block";
        valSpanLugarNacRpr.style.color = "red";
        valLugarNacRpr.style.border = "2px solid red";

        valSpanNacRpr.style.display = "block";
        valSpanNacRpr.style.color = "red";
        valNacionalidadRpr.style.border = "2px solid red";

        valTipoDocRpr.style.border = "2px solid red"


        if (valNumDocRpr.value != "") {
          
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";

          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red";
        

          } else if (valNumDocRpr.value.length > 8) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red";
           

          } else if (valNumDocRpr.value.length == 8) {

            valNumDocRpr.style.border = "1px solid #b5b5b5";

          }

        } else {        

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valNumDocRpr.style.border = "2px solid red"

        }


      }


    })

    valNumDocRpr.addEventListener("keypress", () => {

      valNumDocRpr.style.border = "2px solid red"

      setTimeout(function () {


      if(valNumDocRpr.value!="" && valTipoDocRpr.value!='default'){


        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8 && valNumDocRpr.value !="") {


          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocRpr.style.border = "2px solid red"

        } else if (valNumDocRpr.value.length > 8) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red"

        } else {

          valSpanCedRpr.style.display = "none";
          valNumDocRpr.style.border="1px solid #b5b5b5"
          

        }        

      }else{

        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8 && valNumDocRpr.value !="") {


          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
          valNumDocRpr.style.border = "2px solid red"

        } else if (valNumDocRpr.value.length > 8) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red"

        } else {


          valSpanCedRpr.innerHTML="El campo Cédula es obligatorio"
          valSpanCedRpr.style.display = "block";
          valNumDocRpr.style.border="1px solid #b5b5b5"
          

        }


      }


      }, 100);

    })


    valNumDocRpr.addEventListener("keydown", (event) => {


      if (event.key == "Backspace" || event.key == "Delete") {


        setTimeout(function () {

          if(valTipoDocRpr.value!='default'){
          

          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8 && valNumDocRpr.value !=="") {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"
  
          } else if (valNumDocRpr.value.length > 8) {
  
            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"
  
          } else {
  
            valSpanCedRpr.style.display = "none";
            valNumDocRpr.style.border = "1px solid #b5b5b5"
  
          }

         
        }else{

          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8 && valNumDocRpr.value !=="") {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"
  
          } else if (valNumDocRpr.value.length > 8) {
  
            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"
  
          } else {
  
            valSpanCedRpr.style.color = 'red';
            valNumDocRpr.style.border = "2px solid red";
            valTipoDocRpr.style.border = "2px solid red";
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio"

          }

        }

        if (valTipoDocRpr.value == 'default' && valNumDocRpr.value == "") {


          valSpanCedRpr.style.color = 'red';
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "2px solid red";
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedRpr.style.display = 'block';

        } else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value == "") {

          valSpanCedRpr.style.color = 'red';
          valNumDocRpr.style.border = "2px solid red";
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valTipoDocRpr.style.border = "1px solid #b5b5b5";
          valSpanCedRpr.style.display = 'block';

        }

        }, 100)

      }




    })


    valNumDocRpr.addEventListener("change", () => {


      valNumDocRpr.style.border = "1px solid #b5b5b5";

      setTimeout(function () {

        if (valTipoDocRpr.value !== 'default' && valNumDocRpr.value != "") {

          valTipoDocRpr.style.border = "1px solid #b5b5b5";

          valSpanCedRpr.style.display = 'none';

          if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          }


        } else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value == "") {

          valSpanCedRpr.style.color = 'red';
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "1px solid #b5b5b5";
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedRpr.style.display = 'block';


        } else if (valTipoDocRpr.value == 'default' && valNumDocRpr.value == "") {

          valSpanCedRpr.style.color = 'red';
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "2px solid red";
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedRpr.style.display = 'block';

        } else if (valTipoDocRpr.value == 'default' && valNumDocRpr.value != "") {

          valSpanCedRpr.style.color = 'red';
          valNumDocRpr.style.border = "1px solid #b5b5b5";
          valTipoDocRpr.style.border = "2px solid red";
          valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
          valSpanCedRpr.style.display = 'block';

          if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          }
        }

      }, 100)


    })

    $("#numDocRepr").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
  
       
      },*/
      paste: function () {

        setTimeout(function () {
          

          if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8 && valNumDocRpr.value!="") {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          }else {

            if(valTipoDocRpr.value !='default'){

              valSpanCedRpr.style.display="none";
              valNumDocRpr.style.border= "1px solid #b5b5b5"

            } else {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "El campo numero de Cédula es obligatorio";
              valNumDocRpr.style.border = "2px solid red"


            }         


          }

        }, 100)

      },


      cut: function () {


        setTimeout(function () {

          if (valNumDocRpr.value == "") {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio"
            valNumDocRpr.style.border = "2px solid red"

          }

        }, 100)


      }


    });
   

    if (valLugarNacRpr !== null && selectedLugNacRpr === "--Select--") {

      valSpanLugarNacRpr.style.display = "block";
      valSpanNacRpr.style.display = "block";
      valSpanLugarNacRpr.style.color = "red";
      valSpanNacRpr.style.color = "red";
      valLugarNacRpr.style.border = "2px solid red";
      valNacionalidadRpr.style.border = "2px solid red"


    } else {

      valLugarNacRpr.style.border = "1px solid #b5b5b5";
      valNacionalidadRpr.style.border = "1px solid #b5b5b5"

    }

    valLugarNacRpr.addEventListener("change", () => {

      setTimeout(function () {

        if (valLugarNacRpr.value !== 'default' && valNumDocRpr.value != "") {

          valSpanLugarNacRpr.style.display = "none";
          valSpanNacRpr.style.display = "none";
          valLugarNacRpr.style.border = "1px solid #b5b5b5";
          valNacionalidadRpr.style.border = "1px solid #b5b5b5";


          if (valTipoDocRpr.value == 'default' && valNumDocRpr.value == "") {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
            valTipoDocRpr.style.border = "2px solid red";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value == "") {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
            valNumDocRpr.style.border = "2px solid red";
            valTipoDocRpr.style.border = "1px solid #b5b5b5"

          } else if (valTipoDocRpr.value == 'default' && valNumDocRpr.value != "") {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
            valTipoDocRpr.style.border = "2px solid red";
            valNumDocRpr.style.border = "1px solid #b5b5b5";

            if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
              valNumDocRpr.style.border = "2px solid red"

            } else if (valNumDocRpr.value.length > 8) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocRpr.style.border = "2px solid red"

            }


          } else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value != "") {


            valSpanCedRpr.style.display = "none";
            valTipoDocRpr.style.border = "1 solid #b5b5b5";
            valNumDocRpr.style.border = "1px solid #b5b5b5";

            if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
              valNumDocRpr.style.border = "2px solid red"

            } else if (valNumDocRpr.value.length > 8) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocRpr.style.border = "2px solid red"

            }

          }

        } else {


          if (valLugarNacRpr.value == 'default') {

            valSpanLugarNacRpr.style.display = "block";
            valSpanLugarNacRpr.style.color = "red";
            valLugarNacRpr.style.border = "2px solid red";


            valSpanNacRpr.style.display = "block";
            valSpanNacRpr.style.color = "red";
            valNacionalidadRpr.style.border = "2px solid red"

            valTipoDocRpr.style.border = "2px solid red";

          }

          if (valLugarNacRpr.value != 'default' && valTipoDocRpr.value != 'default') {


            valTipoDocRpr.style.border = "1px solid #b5b5b5";

          } else {

            valTipoDocRpr.style.border = "2px solid red";
            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red"
            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio"
          }



          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 8 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          }

          if (valNumDocRpr.value == "") {

            valNumDocRpr.style.border = "2px solid red";

          }


        }

      }, 100)

    })  

    


    ///////////////////////////////////////////////////////

    if (valFechNacRpr !== null && valFechNacRpr.value === "") {


      valSpanFechNacRpr.style.display = "block";
      valSpanFechNacRpr.style.color = "red";
      valFechNacRpr.style.border = "2px solid red"


    }

    else if (valEdadRpr.value != "N/A") {

      valSpanFechNacRpr.style.display = "none";
      valFechNacRpr.style.border = "1px solid #b5b5b5"

    } else {

      valSpanFechNacRpr.style.display = "block";
      valSpanFechNacRpr.style.color = "red";
      valSpanFechNacRpr.innerHTML = "El campo Fecha de nacimiento es inválido"

    }

    /////////////////////////////////////////////////////////

    if (valEdadRpr !== null && valEdadRpr.value === "") {

      valSpanEdadRpr.style.display = "block";
      valSpanEdadRpr.style.color = "red";
      valEdadRpr.style.border = "2px solid red"


    } else if (valEdadRpr.value == "") {
      valSpanEdadRpr.style.display = "block";
      valEdadRpr.style.border = "2px solid red";
      valSpanEdadRpr.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
      valSpanEdadRpr.style.color = "red";
      valSpanFechNacRpr.style.display = "block";
      valSpanFechNacRpr.innerHTML = "El año de nacimiento, debe ser anterior al año actual";
      valSpanFechNacRpr.style.color = "red";
      valFechNacRpr.style.border = "2px solid red"



    } else if (valEdadRpr.value == "N/A") {

      valSpanEdadRpr.style.display = "block";
      valEdadRpr.style.border = "2px solid red";
      valSpanEdadRpr.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
      valSpanEdadRpr.style.color = "red";
    }
    else {

      valSpanEdadRpr.style.display = "none";
      valEdadRpr.style.border = "1px solid #b5b5b5";


    }

    ///////////////////////////////////////////////////////


    if (valsexoRpr !== null && selectedSexRpr === "--Select--") {

      valSpanSexoRpr.style.display = "block";
      valSpanSexoRpr.style.color = "red";
      valsexoRpr.style.border = "2px solid red"


    } else {

      valSpanSexoRpr.style.display = "none";
      valsexoRpr.style.border = "1px solid #b5b5b5"

    }

    valsexoRpr.addEventListener("change", () => {

      if (valsexoRpr.value !== 'default') {

        valSpanSexoRpr.style.display = "none";
        valsexoRpr.style.border = "1px solid #b5b5b5"

      } else {

        valSpanSexoRpr.style.display = "block";
        valSpanSexoRpr.style.color = "red";
        valsexoRpr.style.border = "2px solid red"
      }

    })

    //////////////////////////////////////////// 

    

    if (valIngresos !== null && valIngresos.value === "" ) {

      valSpanIngre.innerHTML="El campo Ingresos es obligatorio"
      valSpanIngre.style.display = "block";
      valSpanIngre.style.color = "red";
      valIngresos.style.border = "2px solid red"

    } else { 
      
      var num= Number.parseFloat(valIngresos.value)

      if(!isNaN(num)){

      valSpanIngre.style.display = "none";
      valIngresos.style.border = "1px solid #b5b5b5"

      }else{

        valSpanIngre.innerHTML="El campo ingresos mensuales es inválido. Sólo puede admitir números"
        valSpanIngre.style.display = "block";
        valSpanIngre.style.color = "red";
        valIngresos.style.border = "2px solid red"

      }


    }

    valIngresos.addEventListener("change", () => {

      setTimeout(function () {

        var num1= Number.parseFloat(valIngresos.value)
       

        if(!isNaN(num1)){        

          valSpanIngre.style.display = "none";
          valIngresos.style.border = "1px solid #b5b5b5"
    
          }else if(valIngresos.value!=""){        

            valSpanIngre.innerHTML="El campo ingresos mensuales es inválido. Sólo puede admitir números"
            valSpanIngre.style.display = "block";
            valSpanIngre.style.color = "red";
            valIngresos.style.border = "2px solid red"

          }

      },100)


    })


    valIngresos.addEventListener("keypress", () => {


      setTimeout(function () {

        if (valIngresos.value != "") {

          valSpanIngre.style.display = "none";
          valIngresos.style.border = "1px solid #b5b5b5"

        }

      }, 100)

    });

    valIngresos.addEventListener("keydown", (event) => {


      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {


          if (valIngresos.value == "") {

            valSpanIngre.style.color = "red";
            valSpanIngre.innerHTML = "El campo Ingresos es obligatorio";
            valSpanIngre.style.display = "block";
            valIngresos.style.border = "2px solid red"
          }
          
        }

      }, 100)

    });


   

    $("#ingresos").bind({      

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     

       
      },*/

      /*Esta es la función para detectar cuando se pega ya sea a través del mouse o del teclado*/

      paste: function () {

      setTimeout(function () {

        if(isNaN(num)){       

          valSpanIngre.style.color = "red";
          valSpanIngre.innerHTML = "El campo ingresos mensuales es inválido. Sólo puede admitir números";
          valSpanIngre.style.display = "block";
          valIngresos.style.border = "2px solid red"

        }

      }, 100)

        
      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          if(valIngresos.value == ""){

          valSpanIngre.style.color = "red";
          valSpanIngre.style.display = "block";
          valIngresos.style.border = "2px solid red";
          valSpanIngre.innerHTML = "El campo Ingresos es obligatorio"
          
          }


        }, 100)

      }
     

    });


    ///////////////////////////////////////////////////


    if (valParentesco !== null && selectParentesco === "--Select--") {

      valSpanParentRpr.style.display = "block";
      valSpanParentRpr.style.color = "red";
      valParentesco.style.border = "2px solid red"


    } else {

      valSpanParentRpr.style.display = "none";
      valParentesco.style.border = "1px solid #b5b5b5"

    }


    valParentesco.addEventListener("change", () => {

     
      if (valParentesco.value !== 'default') {

        valSpanParentRpr.style.display = "none";
        valParentesco.style.border = "1px solid #b5b5b5"

      } else {

        valSpanParentRpr.style.display = "block";
        valSpanParentRpr.style.color = "red";
        valParentesco.style.border = "2px solid red"
      }



    })


    if (valCivil !== null && selecEdoCivil === "--Select--") {

      valSpanCivilRpr.style.display = "block";
      valSpanCivilRpr.style.color = "red";
      valCivil.style.border = "2px solid red"


    } else {

      valSpanCivilRpr.style.display = "none";
      valCivil.style.border = "1px solid #b5b5b5"

    }

    valCivil.addEventListener("change", () => {

      
      if (valCivil.value !== 'default') {

        valSpanCivilRpr.style.display = "none";
        valCivil.style.border = "1px solid #b5b5b5"

      } else {

        valSpanCivilRpr.style.display = "block";
        valSpanCivilRpr.style.color = "red";
        valCivil.style.border = "2px solid red"
      }


    })


    if ((valTlfPpalRpr !== null && valTlfPpalRpr.value === "") && (valTlfPpalRpr !== null && selectedCodOperRpr === '-Select-')) {


      valSpanTelefRpr.style.display = 'block';
      valSpanTelefRpr.style.color = "red";
      valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio";
      valCodOperadoraRpr.style.border = "2px solid red";
      valTlfPpalRpr.style.border = "2px solid red"



    } else if ((valTlfPpalRpr !== null && valTlfPpalRpr.value === "") && (valTlfPpalRpr !== null && selectedCodOperRpr !== '-Select-')) {


      valSpanTelefRpr.style.display = 'block';
      valSpanTelefRpr.style.color = "red";
      valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio";
      valCodOperadoraRpr.style.border = "1px solid #b5b5b5";
      valTlfPpalRpr.style.border = "2px solid red";



    } else if ((valTlfPpalRpr !== null && valTlfPpalRpr.value !== "") && (valTlfPpalRpr !== null && selectedCodOperRpr === '-Select-')) {


      setTimeout(function () {

        validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)

      }, 100)


    } else if ((valTlfPpalRpr !== null && valTlfPpalRpr.value !== "") && (valTlfPpalRpr !== null && selectedCodOperRpr !== '-Select-')) {

      setTimeout(function () {

        validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)

      }, 100)


    }



    valCodOperadoraRpr.addEventListener("change", () => {


      setTimeout(function () {

        if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value != "") {


          valCodOperadoraRpr.style.border = "2px solid red";
          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)


        } else if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value == "") {


          valSpanTelefRpr.style.display = "block";
          valSpanTelefRpr.style.color = "red";
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio";
          valTlfPpalRpr.style.border = '2px solid red';
          valCodOperadoraRpr.style.border = "1px solid #b5b5b5";



        } else if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value == "") {


          valSpanTelefRpr.style.display = "block";
          valSpanTelefRpr.style.color = "red";
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio";
          valTlfPpalRpr.style.border = '2px solid red';
          valCodOperadoraRpr.style.border = "2px solid red";



        } else if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value != "") {


          valCodOperadoraRpr.style.border = "1px solid #b5b5b5";
          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)


        }

      }, 100)

    })


    valTlfPpalRpr.addEventListener("change", () => {

      setTimeout(function () {

        if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value != "") {

          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7);

        } else if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value == "") {

          valSpanTelefRpr.style.color = 'red';
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalRpr.style.border = "2px solid red";
          valCodOperadoraRpr.style.border = "1px solid #b5b5b5";
          valSpanTelefRpr.style.display = 'block';


        } else if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value == "") {


          valSpanTelefRpr.style.color = 'red';
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalRpr.style.border = "2px solid red";
          valCodOperadoraRpr.style.border = "2px solid red";
          valSpanTelefRpr.style.display = 'block';

        } else if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value != "") {

          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7);

        }


      }, 100)


    })



    $("#textoTlfPpalRpr").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          valSpanTelefRpr.style.color = 'red';
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfPpalRpr.style.border = "2px solid red";


          if (valTlfPpalRpr.value != "") {

            validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7);


          } else if (valTlfPpalRpr.value == "" && valCodOperadoraRpr.value == "default") {

            valCodOperadoraRpr.style.border = "2px solid red"

          }


        }, 100)

      },


      cut: function () {


        setTimeout(function () {

          if (valTlfPpalRpr.value == "") {

            valSpanTelefRpr.style.display = "block";
            valSpanTelefRpr.style.color = "red";
            valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio"
            valTlfPpalRpr.style.border = "2px solid red"

          }

        }, 100)


      }


    });


    valTlfPpalRpr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          valSpanTelefRpr.style.color = 'red';
          valTlfPpalRpr.style.border = "2px solid red";
          valSpanTelefRpr.style.display = 'block';
          valSpanTelefRpr.innerHTML = "El campo Teléfono es obligatorio";

          if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value == "") {


            valCodOperadoraRpr.style.border = "2px solid red";


          } else if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value == "") {

            valCodOperadoraRpr.style.border = "1px solid #b5b5b5";


          } else if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value != "") {


            validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7);


          } else if (valCodOperadoraRpr.value != 'default' && valTlfPpalRpr.value != "") {


            validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7);

          }


        }

      }, 100)



    })

    valTlfPpalRpr.addEventListener("keypress", () => {

      setTimeout(function () {

        if (valCodOperadoraRpr.value !== 'default' && valTlfPpalRpr.value != "") {


          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)


        } else if (valCodOperadoraRpr.value == 'default' && valTlfPpalRpr.value != "") {


          validateNumberFields(valSpanTelefRpr, valCodOperadoraRpr, valTlfPpalRpr, 7, messageMin7, messageMax7)

        }

      }, 100)

    })


   

    if (valEmailRpr.value !== null && valEmailRpr.value === "") {      

      valEmailRpr.style.border = "2px solid red";
      valSpanCorreoRpr.innerHTML = "El campo Correo electrónico es obligatorio"
      valSpanCorreoRpr.style.color = "red";
    }


    valEmailRpr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateEmail()

        }

      }, 100);

    })


    valEmailRpr.addEventListener("keypress", () => {

      setTimeout(function () {

        validateEmail()

      }, 100);

    })

    valEmailRpr.addEventListener("change", () => {

      setTimeout(function () {

        validateEmail()

      }, 100);

    })


    $("#emailRepr").bind({

      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateEmail();


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateEmail();

        }, 100)



      }


    });




    if (valDirPpalRpr !== null && valDirPpalRpr.value === "") {

      valSpanDirRpr.style.display = "block";
      valSpanDirRpr.style.color = "red";
      valDirPpalRpr.style.border = "2px solid red"



    } else {
      
        validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)
    
    }


    valDirPpalRpr.addEventListener("keypress", () => {

      setTimeout(function () {

        valDirPpalRpr.style.border = "1px solid #b5b5b5";
        valSpanDirRpr.style.display = "none";

        validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)


      }, 100);

    })

    valDirPpalRpr.addEventListener("keydown", (event) => {

      setTimeout(function () {


        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)

        }

      }, 100);

    })



    valDirPpalRpr.addEventListener("change", () => {

      setTimeout(function () {

        valDirPpalRpr.style.border = "1px solid #b5b5b5";
        valSpanDirRpr.style.display = "none";
        validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)

      }, 100)

    })

    $("#textoDirPpalRpr").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valDirPpalRpr.value.trim(), valDirPpalRpr, valSpanDirRpr, direccion, patronDos)


        }, 100)



      }


    });


    if (valprofesion !== null && valprofesion.value === "") {

      valSpanProfesion.style.display = "block";
      valSpanProfesion.style.color = "red";
      valprofesion.style.border = "2px solid red"

    } else {

        validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)
      
    }

    valprofesion.addEventListener("keypress", () => {

      setTimeout(function () {

        valprofesion.style.border = "1px solid #b5b5b5";
        valSpanProfesion.style.display = "none";

        validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)

      }, 100);

    })

    valprofesion.addEventListener("keydown", (event) => {

      setTimeout(function () {      

        if (event.key == "Backspace" || event.key == "Delete") {

          valprofesion.style.border = "1px solid #b5b5b5";
          valSpanProfesion.style.display = "none";
          validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)

        }

      }, 100);

    })


    valprofesion.addEventListener("change", () => {

      setTimeout(function () {

        valprofesion.style.border = "1px solid #b5b5b5";
        valSpanProfesion.style.display = "none";

        validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)

      }, 100);

    })

    $("#profesion").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     

       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)

        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valprofesion.value.trim(), valprofesion, valSpanProfesion, profesion, patronDos)

        }, 100)



      }


    });


    if (valOcupacion !== null && valOcupacion.value === "") {

      valSpanOcup.style.display = "block";
      valSpanOcup.style.color = "red";
      valOcupacion.style.border = "2px solid red"

    } else {

    
        validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

    
    };



    valOcupacion.addEventListener("keydown", (event) => {


      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          valOcupacion.style.border = "1px solid #b5b5b5";
          valSpanOcup.style.display = "none";

          validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

        }

      }, 100);

    });


    valOcupacion.addEventListener("keypress", () => {

      setTimeout(function () {

        valOcupacion.style.border = "1px solid #b5b5b5";
        valSpanOcup.style.display = "none";
        validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

      }, 100);

    });

    valOcupacion.addEventListener("change", () => {

      setTimeout(function () {


        valOcupacion.style.border = "1px solid #b5b5b5";
        valSpanOcup.style.display = "none";

        validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

      }, 100);

    });


    $("#ocupacion").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     

       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valOcupacion.value.trim(), valOcupacion, valSpanOcup, ocupacion, patronDos)

        }, 100)


      }



    });



    if (valEmpresa !== null && valEmpresa.value === "") {

      valSpanNomEmpr.style.display = "block";
      valSpanNomEmpr.style.color = "red";
      valEmpresa.style.border = "2px solid red"

    } else {

     
        validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

    }

    valEmpresa.addEventListener("keypress", () => {

      setTimeout(function () {

        valEmpresa.style.border = "1px solid #b5b5b5";
        valSpanNomEmpr.style.display = "none";
        validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

      }, 100);

    })

    valEmpresa.addEventListener("keydown", (event) => {

      setTimeout(function () {       

        if (event.key == "Backspace" || event.key == "Delete") {

          valEmpresa.style.border = "1px solid #b5b5b5";
          valSpanNomEmpr.style.display = "none";
          validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

        }

      }, 100);

    })

    valEmpresa.addEventListener("change", () => {

      setTimeout(function () {

        valEmpresa.style.border = "1px solid #b5b5b5";
        valSpanNomEmpr.style.display = "none";
        validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

      }, 100);

    })


    $("#empresa").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     

       
      },*/


      paste: function () {

        setTimeout(function () {

          validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

        }, 100)

      },

     /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valEmpresa.value.trim(), valEmpresa, valSpanNomEmpr, NombreEmpr, patronDos)

        }, 100)

      }



    });



    if ((valTlfEmpr !== null && valTlfEmpr.value === "") && (valTlfEmpr !== null && selecCodOperEmpr === '-Select-')) {

      valSpanTelefEmpr.style.display = "block";
      valSpanTelefEmpr.style.color = "red";
      valCodOperEmpr.style.border = "2px solid red";
      valTlfEmpr.style.border = "2px solid red"



    } else if ((valTlfEmpr !== null && valTlfEmpr.value === "") && (valTlfEmpr !== null && selecCodOperEmpr !== '-Select-')) {

      valSpanTelefEmpr.style.display = "block";
      valSpanTelefEmpr.style.color = "red";
      valCodOperEmpr.style.border = "1px solid #b5b5b5";
      valTlfEmpr.style.border = "2px solid red";



    } else if ((valTlfEmpr !== null && valTlfEmpr.value !== "") && (valTlfEmpr !== null && selecCodOperEmpr === '-Select-')) {

      valSpanTelefEmpr.style.display = "block";
      valSpanTelefEmpr.style.color = "red";
      valCodOperEmpr.style.border = "2px solid red";
      valTlfEmpr.style.border = "1px solid #b5b5b5"

    } else if ((valTlfEmpr !== null && valTlfEmpr.value !== "") && (valTlfEmpr !== null && selecCodOperEmpr !== '-Select-')) {

      valSpanTelefEmpr.style.display = "none";
      valTlfEmpr.style.border = "1px solid #b5b5b5";
      valCodOperEmpr.style.border = "1px solid #b5b5b5"

    }

    valCodOperEmpr.addEventListener("change", () => {


      setTimeout(function () {

        if (valCodOperEmpr.value == 'default' && valTlfEmpr.value != "") {

          valCodOperEmpr.style.border = "2px solid red";
          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7)


        } else if (valCodOperEmpr.value != 'default' && valTlfEmpr.value == "") {


          valSpanTelefEmpr.style.display = "block";
          valSpanTelefEmpr.style.color = "red";
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio";
          valTlfEmpr.style.border = '2px solid red';
          valCodOperEmpr.style.border = "1px solid #b5b5b5";



        } else if (valCodOperEmpr.value == 'default' && valTlfEmpr.value == "") {


          valSpanTelefEmpr.style.display = "block";
          valSpanTelefEmpr.style.color = "red";
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio";
          valTlfEmpr.style.border = '2px solid red';
          valCodOperEmpr.style.border = "2px solid red";



        } else if (valCodOperEmpr.value != 'default' && valTlfEmpr.value != "") {


          valCodOperEmpr.style.border = "1px solid #b5b5b5";
          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7)


        }

      }, 100)

    })


    valTlfEmpr.addEventListener("change", () => {

      setTimeout(function () {

        if (valCodOperEmpr.value != 'default' && valTlfEmpr.value != "") {

          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7);

        } else if (valCodOperEmpr.value != 'default' && valTlfEmpr.value == "") {

          valSpanTelefEmpr.style.color = 'red';
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfEmpr.style.border = "2px solid red";
          valCodOperEmpr.style.border = "1px solid #b5b5b5";
          valSpanTelefEmpr.style.display = 'block';


        } else if (valCodOperEmpr.value == 'default' && valTlfEmpr.value == "") {


          valSpanTelefEmpr.style.color = 'red';
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfEmpr.style.border = "2px solid red";
          valCodOperEmpr.style.border = "2px solid red";
          valSpanTelefEmpr.style.display = 'block';

        } else if (valCodOperEmpr.value == 'default' && valTlfEmpr.value != "") {

          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7);

        }


      }, 100)


    })



    $("#textoTlfEmprRpr").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          valSpanTelefEmpr.style.color = 'red';
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio"
          valTlfEmpr.style.border = "2px solid red";


          if (valTlfEmpr.value != "") {

            validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7);


          } else if (valTlfEmpr.value == "" && valCodOperEmpr.value == "default") {

            valCodOperEmpr.style.border = "2px solid red"

          }


        }, 100)

      },


      cut: function () {


        setTimeout(function () {

          if (valTlfEmpr.value == "") {

            valSpanTelefEmpr.style.display = "block";
            valSpanTelefEmpr.style.color = "red";
            valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio"
            valTlfEmpr.style.border = "2px solid red"

          }

        }, 100)


      }


    });


    valTlfEmpr.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          valSpanTelefEmpr.style.color = 'red';
          valTlfEmpr.style.border = "2px solid red";
          valSpanTelefEmpr.style.display = 'block';
          valSpanTelefEmpr.innerHTML = "El campo Teléfono es obligatorio";

          if (valCodOperEmpr.value == 'default' && valTlfEmpr.value == "") {


            valCodOperEmpr.style.border = "2px solid red";


          } else if (valCodOperEmpr.value != 'default' && valTlfEmpr.value == "") {

            valCodOperEmpr.style.border = "1px solid #b5b5b5";


          } else if (valCodOperEmpr.value == 'default' && valTlfEmpr.value != "") {


            validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7);


          } else if (valCodOperEmpr.value != 'default' && valTlfEmpr.value != "") {


            validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7);

          }


        }

      }, 100)



    })

    valTlfEmpr.addEventListener("keypress", () => {

      setTimeout(function () {

        if (valCodOperEmpr.value !== 'default' && valTlfEmpr.value != "") {


          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7)


        } else if (valCodOperEmpr.value == 'default' && valTlfEmpr.value != "") {


          validateNumberFields(valSpanTelefEmpr, valCodOperEmpr, valTlfEmpr, 7, messageMin7, messageMax7)

        }

      }, 100)

    })


    if (valdireccEmpresa !== null && valdireccEmpresa.value === "") {

      valSpanDirEmpresa.style.display = "block";
      valSpanDirEmpresa.style.color = "red";
      valdireccEmpresa.style.border = "2px solid red"


    } else {

     
        validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)

     
    }

    valdireccEmpresa.addEventListener("keypress", () => {

      setTimeout(function () {

        valdireccEmpresa.style.border = "1px solid #b5b5b5";
        valSpanDirEmpresa.style.display = "none";
        validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)


      }, 100);

    })

    valdireccEmpresa.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)

        }

      }, 100);

    })

    valdireccEmpresa.addEventListener("change", () => {

      setTimeout(function () {

        valdireccEmpresa.style.border = "1px solid #b5b5b5";
        valSpanDirEmpresa.style.display = "none";

        validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)

      }, 100);

    })

   

    $("#direccEmpresa").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {

          validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valdireccEmpresa.value.trim(), valdireccEmpresa, valSpanDirEmpresa, direccionEmp, patronDos)


        }, 100)


      }


    });


    validateEmail();

    function validateEmail() {


      var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


      if (!validEmail.test(valEmailEst.value) && valEmailEst.value !== "") {

        document.getElementById('spanCorreoEst').style.display = "block";
        document.getElementById('spanCorreoEst').style.color = "red";
        document.getElementById('spanCorreoEst').innerHTML = 'Correo inválido: usuario + @ + servidor + dominio';      
        document.getElementById('emailAl').style.border = "2px solid red"


      } else if (valEmailEst.value === "") {

        valEmailEst.style.border = "2px solid red";
        document.getElementById('spanCorreoEst').style.display = "block"
        document.getElementById('spanCorreoEst').style.color = "red";
        document.getElementById('spanCorreoEst').innerHTML = "El campo correo electrónico es obligatorio";

      } else {

        document.getElementById('spanCorreoEst').innerHTML = "Formato-Correo-OK";
        document.getElementById('spanCorreoEst').style.display = "none";
        document.getElementById('emailAl').style.border = "1px solid #b5b5b5"
      }


      if (!validEmail.test(valEmailRpr.value) && valEmailRpr.value !== "") {

        document.getElementById('spanCorreoRpr').style.display = "block"
        document.getElementById('spanCorreoRpr').style.color = "red";
        document.getElementById('spanCorreoRpr').innerHTML = 'Correo inválido: usuario + @ + servidor + dominio';
        document.getElementById('emailRepr').style.border = "2px solid red"


      } else if (valEmailRpr.value === "") {

        valEmailRpr.style.border = "2px solid red";
        document.getElementById('spanCorreoRpr').style.color = "red";
        document.getElementById('spanCorreoRpr').style.display = "block"
        document.getElementById('spanCorreoRpr').innerHTML = "El campo correo electrónico es obligatorio";
       

      } else {

        document.getElementById('spanCorreoRpr').innerHTML = "Formato-Correo-OK";
        document.getElementById('spanCorreoRpr').style.display = "none";
        document.getElementById('emailRepr').style.border = "1px solid #b5b5b5"

      }


    }


    function validateCharacters(inputTxtTrim, input, spantxt, dato, expresion) {   
      
      
      if (inputTxtTrim.match(expresion)) {

        spantxt.innerHTML = "El campo " + dato + " es obligatorio";
        spantxt.style.display = "none";
        input.style.border = "1px solid #b5b5b5"
        return true;


      } else if (inputTxtTrim == "") {


        if (dato == 'Primer nombre' || dato == 'Primer apellido' || dato == 'Dirección domicilio' || dato == 'Dirección empresa' || dato == 'Profesión' || dato == 'Ocupación' || dato == 'Nombre empresa') {

          
          spantxt.style.display = "block";
          spantxt.innerHTML = "El campo " + dato + " es obligatorio";
          input.value = "";
          //input.focus();
          spantxt.style.color = "red";
          input.style.border = "2px solid red"

        } else {
                  
          spantxt.innerHTML = "El campo " + dato + " es obligatorio";
          spantxt.style.display = "none";
          input.style.border = "1px solid #b5b5b5"
          input.value = "";
          //input.focus();

        }

      } else {        

        
        spantxt.style.display = "block";
        spantxt.innerHTML = "Este campo posee caracteres inválidos";
        //input.focus();
        spantxt.style.color = "red";
        input.style.border = "2px solid red"

      }

      return false;


    }

    function validateNumberFields(spanTelef, codOperadora, telefono, varLength, messageMin, messageMax) {

      spanTelef.style.display = 'block';
      spanTelef.style.color = "red";
      telefono.style.border = "2px solid red";

      if (telefono.value.length > varLength) {

        spanTelef.innerHTML = messageMax;

      } else if (telefono.value.length < varLength) {

        spanTelef.innerHTML = messageMin;


      } else {

        if (codOperadora.value != "default") {

          telefono.style.border = "1px solid #b5b5b5";
          spanTelef.style.display = 'none'

        } else if (codOperadora.value == "default") {

          codOperadora.style.border = "2px solid red";
          telefono.style.border = "1px solid #b5b5b5";
          spanTelef.innerHTML = "El campo Teléfono es obligatorio"

        }

      }


    }  
    
    /*Se remueve el escucha, para que al momento de hacer click en el botón de guardar,
      el evento click, sea invocado una única vez. De esta forma tambien se logra que no se
      acumulen eventos de ejecuciones anteriores.*/
   
       document.getElementById('guardar').removeEventListener("click", validateData)

     
  })   
 

})



