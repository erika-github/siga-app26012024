

jQuery(function () {


  return document.getElementById('guardar').addEventListener("click", function validateData() {


    var valPrimNombRepr = document.getElementById('primNombDoc');
    var valSpanPrimNomRepr = document.getElementById('spanPrimNomDoc');

    var valSegNombRepr = document.getElementById('segNombDoc');
    var valSpanSegNomRpr = document.getElementById('spanSegNomDoc');

    var valPrimApellRepr = document.getElementById('primApellDoc');
    var valSpanPrimApeRpr = document.getElementById('spanPrimApeDoc');

    var valSegApellRepr = document.getElementById('segApellDoc');
    var valSpanSegApeRpr = document.getElementById('spanSegApeDoc');

    var valTipoDocRpr = document.getElementById('tipoDocDocente');
    var selectedDocTypeRpr = valTipoDocRpr.options[valTipoDocRpr.selectedIndex].text;
    var valNumDocRpr = document.getElementById('numDocDocente');
    var valSpanCedRpr = document.getElementById('spanCedDoc');

    var valFechNacRpr = document.getElementById('fechNacDoc');
    var valSpanFechNacRpr = document.getElementById('spanFechNacDoc');

    var valLugarNacRpr = document.getElementById('lugarNacDoc');
    var selectedLugNacRpr = valLugarNacRpr.options[valLugarNacRpr.selectedIndex].text;
    var valSpanLugarNacRpr = document.getElementById('spanLugNacDoc');


    var valNacionalidadRpr = document.getElementById('nacionalidad');
    var valSpanNacRpr = document.getElementById('spanNacDoc');

    var valEdadRpr = document.getElementById('edadDoc');
    var valSpanEdadRpr = document.getElementById('spanEdadDoc');

    var valsexoRpr = document.getElementById('sexoDoc');
    var selectedSexRpr = valsexoRpr.options[valsexoRpr.selectedIndex].text;
    var valSpanSexoRpr = document.getElementById('spanSexoDoc');

    var valCodOperadoraRpr = document.getElementById('codOperadoraDoc');
    var selectedCodOperRpr = valCodOperadoraRpr.options[valCodOperadoraRpr.selectedIndex].text;
    var valSpanTelefRpr = document.getElementById('spanTelefDoc')
    var valTlfPpalRpr = document.getElementById('telefDoc');

    var valEmailRpr = document.getElementById('emailDoc');
    var valSpanCorreoRpr = document.getElementById('spanCorreoDoc');

    var valDirPpalRpr = document.getElementById('textoDirPpalDoc');
    var valSpanDirRpr = document.getElementById('spanDirDoc');

    var valProfesionUno = document.getElementById('profesionUno');
    var selectedProfesionUno = valProfesionUno.options[valProfesionUno.selectedIndex].text;
    var valSpanProfesionDoc = document.getElementById('spanProfesionDoc');

    var valPostgradoUno = document.getElementById('postGradoUno');
    var valSpanPostgUno = document.getElementById('spanPostGradoUno');

    var valPostgradoDos = document.getElementById('postGradoDos');
    var valSpanPostgDos = document.getElementById('spanPostGradoDos');

    var valCursoUno = document.getElementById('cursoUno');
    var valSpanCursoUno = document.getElementById('spanCursoUno');

    var valCursoDos = document.getElementById('cursoDos');
    var valSpanCursoDos = document.getElementById('spanCursoDos');

    var valCursoTres = document.getElementById('cursoTres');
    var valSpanCursoTres = document.getElementById('spanCursoTres');

    var valCursoCuatro = document.getElementById('cursoCuatro');
    var valSpanCursoCuatro = document.getElementById('spanCursoCuatro');

    var valCategoriaDocente = document.getElementById('categoriaDocente');
    var valspanCaDocente = document.getElementById('spanCategoriaDocente');

    var valAsignaturasDoc = document.getElementById('asignaturasDoc');
    var valSpanAsigEspe = document.getElementById('spanAsigEspe');

    var valAnnioServicio = document.getElementById('annioServicio');
    var valSpanTiempoServicio = document.getElementById('spanTiempoServicio');

    var matches = document.querySelectorAll('.chngRadio');
    var valSpanGraduadoDoc = document.getElementById('spanGraduadoDoc');
    var Si_Option = document.getElementById('si-option');
    var No_Option = document.getElementById('no-option');
    var checked_opt = false;
    var checkboxes = document.querySelectorAll('input[type=checkbox]');


    var valCivil = document.getElementById('civil');
    var selecEdoCivil = valCivil.options[valCivil.selectedIndex].text;
    var valSpanCivilRpr = document.getElementById('spanCivilDoc');

    var valfechIngDoc = document.getElementById('fechIngDoc');
    var valSpanFechaIngDoc = document.getElementById('spanFechaIngDoc')
    

    var primerNombre = "Primer nombre";
    var primerApellido = "Primer apellido";
    var segundoNombre = "Segundo nombre";
    var segundoApellido = "Segundo apellido";
    var direccion = "Dirección domicilio";
    var postGradoUno = "Post grado 1";
    var postGradoDos = "Post grado 2";
    var categoriaDocente = "Categoría docente";
    var asignaturaDocente = "Asignaturas especializadas";
    var cursoUno = "Curso 1";
    var cursoDos = "Curso 2";
    var cursoTres = "Curso 3";
    var cursoCuatro = "Curso 4";
    var patronUno = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    var patronDos = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ' °,.:#0-9_-]+$/;
    var messageMin7 = "Debe contener al menos 7 caracteres";
    var messageMax7 = "Máximo 7 caracteres permitidos";
    var messageMin8 = "Debe contener al menos 8 caracteres";
    var messageMax8 = "Máximo 8 caracteres permitidos"




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

    $("#primNombDoc").bind({



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

    $("#segNombDoc").bind({



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

    $("#primApellDoc").bind({



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

    $("#segApellDoc").bind({



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
      valSpanCedRpr.style.color = "red";
      valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
      valSpanCedRpr.style.display = "block";
      valTipoDocRpr.style.border = "2px solid red";

      if (valNumDocRpr.value < 0) {

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
        valNumDocRpr.style.border = "2px solid red";

      }

      else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
        valNumDocRpr.style.border = "2px solid red";


      } else if (valNumDocRpr.value.length > 8) {

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocRpr.style.border = "2px solid red";



      }



    }



    else if ((valNumDocRpr !== null && valNumDocRpr.value !== "") && (valTipoDocRpr !== null && selectedDocTypeRpr !== '---')) {


      if (valNumDocRpr.value < 0) {

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"

      }

      else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"

      } else if (valNumDocRpr.value.length > 8) {


        valSpanCedRpr.style.display = "block";
        valSpanCedRpr.style.color = "red";
        valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5"


      } else if ((valNumDocRpr.value.length == 8 || valNumDocRpr.value.length == 7)) {

        valNumDocRpr.style.border = "1px solid #b5b5b5";
        valSpanCedRpr.style.display = "none"

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


        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
          valNumDocRpr.style.border = "2px solid red"


        } else if (valNumDocRpr.value.length > 8) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red"

        }


        if (valNumDocRpr.value < 0) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
          valNumDocRpr.style.border = "2px solid red";

        }


        ///Cuando tipo de documento es 'E' ó 'P'

      } else if (valTipoDocRpr.value != 'default') {


        valNumDocRpr.style.border = "2px solid red";
        valTipoDocRpr.style.border = "1px solid #b5b5b5";
        valSpanCedRpr.style.display = "block"


        if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "1px solid #b5b5b5"

        } else if (valNumDocRpr.value.length > 8) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
          valNumDocRpr.style.border = "2px solid red";
          valTipoDocRpr.style.border = "1px solid #b5b5b5"

        } else if (valNumDocRpr.value.length == 8 || valNumDocRpr.value.length == 7) {

          valNumDocRpr.style.border = "1px solid #b5b5b5";
          valSpanCedRpr.style.display = "none"

        }


        if (valNumDocRpr.value < 0) {

          valSpanCedRpr.style.display = "block";
          valSpanCedRpr.style.color = "red";
          valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
          valNumDocRpr.style.border = "2px solid red";

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

          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red";


          } else if (valNumDocRpr.value.length > 8) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red";


          } else if (valNumDocRpr.value.length == 8 || valNumDocRpr.value.length == 7) {

            valNumDocRpr.style.border = "1px solid #b5b5b5";

          }


          if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";

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


        if (valNumDocRpr.value != "" && valTipoDocRpr.value != 'default') {


          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
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

          if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";

          }

        } else {

          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"



          } else {

            valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio"
            valSpanCedRpr.style.display = "block";
            valNumDocRpr.style.border = "1px solid #b5b5b5"

          }

          if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";


          }

        }


      }, 100);

    })


    valNumDocRpr.addEventListener("keydown", (event) => {


      if (event.key == "Backspace" || event.key == "Delete") {


        setTimeout(function () {

          if (valTipoDocRpr.value != 'default') {


            if (valNumDocRpr.value < 0) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
              valNumDocRpr.style.border = "2px solid red";

            }


            else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
              valNumDocRpr.style.border = "2px solid red"

            } else if (valNumDocRpr.value.length > 8) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocRpr.style.border = "2px solid red"



            } else if (valNumDocRpr.value != '') {

              valSpanCedRpr.style.display = "none";
              valNumDocRpr.style.border = "1px solid #b5b5b5"

            } else {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
              valNumDocRpr.style.border = "2px solid red"

            }


          } else {

            if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
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

            if (valNumDocRpr.value < 0) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
              valNumDocRpr.style.border = "2px solid red";


            }

            else if (valTipoDocRpr.value == 'default' && valNumDocRpr.value == "") {


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

          }

        }, 200)

      }




    })


    valNumDocRpr.addEventListener("change", () => {


      setTimeout(function () {



        if (valTipoDocRpr.value !== 'default' && valNumDocRpr.value != "") {

          valSpanCedRpr.style.display = 'none';
          valTipoDocRpr.style.border = "1px solid #b5b5b5";
          valNumDocRpr.style.border = "1px solid #b5b5b5"


          if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          }

          else if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";

          }

        }

        else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value == "") {

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

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          }

          else if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";

          }



        }


      }, 100)



    })

    $("#numDocDocente").bind({

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

          } else if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red"
          }

          else if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
            valNumDocRpr.style.border = "2px solid red";

          }

          else {

            if (valTipoDocRpr.value != 'default' && valNumDocRpr.value != "") {

              valSpanCedRpr.style.display = "none";
              valNumDocRpr.style.border = "1px solid #b5b5b5"


            } else {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "El campo Cédula es obligatorio";
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

            if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
              valNumDocRpr.style.border = "2px solid red"

            } else if (valNumDocRpr.value.length > 8) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocRpr.style.border = "2px solid red"

            }


            if (valNumDocRpr.value < 0) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
              valNumDocRpr.style.border = "2px solid red"

            }


          } else if (valTipoDocRpr.value != 'default' && valNumDocRpr.value != "") {


            valSpanCedRpr.style.display = "none";
            valTipoDocRpr.style.border = "1 solid #b5b5b5";
            valNumDocRpr.style.border = "1px solid #b5b5b5";

            if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {


              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
              valNumDocRpr.style.border = "2px solid red"

            } else if (valNumDocRpr.value.length > 8) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
              valNumDocRpr.style.border = "2px solid red"

            }

            if (valNumDocRpr.value < 0) {

              valSpanCedRpr.style.display = "block";
              valSpanCedRpr.style.color = "red";
              valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
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



          if (valNumDocRpr.value.length >= 1 && valNumDocRpr.value.length < 7 && valNumDocRpr.value >= 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Debe contener al menos 7 caracteres";
            valNumDocRpr.style.border = "2px solid red"

          } else if (valNumDocRpr.value.length > 8) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Máximo 8 caracteres permitidos";
            valNumDocRpr.style.border = "2px solid red"

          }

          if (valNumDocRpr.value < 0) {

            valSpanCedRpr.style.display = "block";
            valSpanCedRpr.style.color = "red";
            valSpanCedRpr.innerHTML = "Campo inválido, no puede ser menor a cero";
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

    /////////////////////////////////////


      if (valfechIngDoc !== null && valfechIngDoc.value === "") {

      valSpanFechaIngDoc.style.display = "block";
      valSpanFechaIngDoc.style.color = "red";
      valfechIngDoc.style.border = "2px solid red"

    }

    ///////////////////////////////////////


    for (var i = 0; i < matches.length; i++) {

      if (matches[i].checked) {

        valSpanGraduadoDoc.style.display = "none";
        Si_Option.style.border = "1px solid #b5b5b5";
        No_Option.style.border = "1px solid #b5b5b5";
        checked_opt = true;

        if (matches[i].value == "SI") {

          Si_Option.style.background = "#007bff";
          Si_Option.style.backgroundClip = "content-box";
          Si_Option.style.padding = "1.5px";
          Si_Option.style.border = "1px solid #007bff";

        } else {

          No_Option.style.background = "#007bff";
          No_Option.style.backgroundClip = "content-box";
          No_Option.style.padding = "1.5px";
          No_Option.style.border = "1px solid #007bff";

        }


      } else if (!matches[i].checked && checked_opt == false) {

        valSpanGraduadoDoc.style.display = "block";
        valSpanGraduadoDoc.style.color = "red";


        Si_Option.style.appearance = "none";
        Si_Option.style.width = "13px";
        Si_Option.style.height = "13px";
        Si_Option.style.borderRadius = "50%";
        Si_Option.style.border = "2px solid red";
        Si_Option.style.background = "#FFFFFF";
        Si_Option.style.backgroundClip = "content-box";

        No_Option.style.appearance = "none";
        No_Option.style.width = "13px";
        No_Option.style.height = "13px";
        No_Option.style.borderRadius = "50%";
        No_Option.style.border = "2px solid red";
        No_Option.style.background = "#FFFFFF";
        No_Option.style.backgroundClip = "content-box";


      }

    }


    for (var match in matches) {

      matches[match].onchange = function () {

        //console.log(this.value)

        if (this.value == "SI") {

          Si_Option.style.appearance = "none";
          Si_Option.style.width = "13px";
          Si_Option.style.height = "13px";
          Si_Option.style.borderRadius = "50%";
          Si_Option.style.border = "1px solid #007bff";
          Si_Option.style.background = "#007bff";
          Si_Option.style.backgroundClip = "content-box";
          Si_Option.style.padding = "1.5px";
          valSpanGraduadoDoc.style.display = "none";

          No_Option.style.appearance = "none";
          No_Option.style.width = "13px";
          No_Option.style.height = "13px";
          No_Option.style.borderRadius = "50%";
          No_Option.style.border = "1px solid #b5b5b5";
          No_Option.style.background = "white";
          No_Option.style.backgroundClip = "content-box";
          No_Option.style.padding = "1.5px";


        } else {

          No_Option.style.appearance = "none";
          No_Option.style.width = "13px";
          No_Option.style.height = "13px";
          No_Option.style.borderRadius = "50%";
          No_Option.style.border = "1px solid #007bff";
          No_Option.style.background = "#007bff";
          No_Option.style.backgroundClip = "content-box";
          No_Option.style.padding = "1.5px";
          valSpanGraduadoDoc.style.display = "none";

          Si_Option.style.appearance = "none";
          Si_Option.style.width = "13px";
          Si_Option.style.height = "13px";
          Si_Option.style.borderRadius = "50%";
          Si_Option.style.border = "1px solid #b5b5b5";
          Si_Option.style.background = "white";
          Si_Option.style.backgroundClip = "content-box";
          Si_Option.style.padding = "1.5px";

        }

      }

    }
    //////////////////////

    if (valProfesionUno !== null && selectedProfesionUno === "--Select--") {

      valSpanProfesionDoc.style.display = "block";
      valSpanProfesionDoc.style.color = "red";
      valProfesionUno.style.border = "2px solid red"


    } else {


      valSpanProfesionDoc.style.display = "none";
      valProfesionUno.style.border = "1px solid #b5b5b5"

    }

    valProfesionUno.addEventListener("change", () => {

      if (valProfesionUno.value !== 'default') {

        valSpanProfesionDoc.style.display = "none";
        valProfesionUno.style.border = "1px solid #b5b5b5"

      } else {

        valSpanProfesionDoc.style.display = "block";
        valSpanProfesionDoc.style.color = "red";
        valProfesionUno.style.border = "2px solid red"
      }

    })




    if (valPostgradoUno !== null && valPostgradoUno.value !== "") {


      validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)

    }

    valPostgradoUno.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)

      }, 100)

    })

    valPostgradoUno.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)
        }

      }, 100)

    })

    valPostgradoUno.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)

      }, 100)

    })

    $("#postGradoUno").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valPostgradoUno.value.trim(), valPostgradoUno, valSpanPostgUno, postGradoUno, patronDos)

        }, 100)

      }


    });


    if (valPostgradoDos !== null && valPostgradoDos.value !== "") {


      validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)

    }

    valPostgradoDos.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)

      }, 100)

    })

    valPostgradoDos.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)

        }

      }, 100)

    })

    valPostgradoDos.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)

      }, 100)

    })

    $("#postGradoDos").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valPostgradoDos.value.trim(), valPostgradoDos, valSpanPostgDos, postGradoDos, patronDos)

        }, 100)

      }


    });




    if (valCursoUno !== null && valCursoUno.value !== "") {


      validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)

    }

    valCursoUno.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)

      }, 100)

    })

    valCursoUno.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)
        }

      }, 100)

    })

    valCursoUno.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)

      }, 100)

    })

    $("#cursoUno").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valCursoUno.value.trim(), valCursoUno, valSpanCursoUno, cursoUno, patronDos)

        }, 100)

      }


    });




    if (valCursoDos !== null && valCursoDos.value !== "") {


      validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)

    }

    valCursoDos.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)

      }, 100)

    })

    valCursoDos.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)
        }

      }, 100)

    })

    valCursoDos.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)

      }, 100)

    })

    $("#cursoDos").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
  
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valCursoDos.value.trim(), valCursoDos, valSpanCursoDos, cursoDos, patronDos)

        }, 100)

      }


    });



    if (valCursoTres !== null && valCursoTres.value !== "") {


      validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)

    }

    valCursoTres.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)

      }, 100)

    })

    valCursoTres.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)
        }

      }, 100)

    })

    valCursoTres.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)

      }, 100)

    })

    $("#cursoTres").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
    
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valCursoTres.value.trim(), valCursoTres, valSpanCursoTres, cursoTres, patronDos)

        }, 100)

      }


    });


    if (valCursoCuatro !== null && valCursoCuatro.value !== "") {


      validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)

    }

    valCursoCuatro.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)

      }, 100)

    })

    valCursoCuatro.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)
        }

      }, 100)

    })

    valCursoCuatro.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)

      }, 100)

    })

    $("#cursoCuatro").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
      
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valCursoCuatro.value.trim(), valCursoCuatro, valSpanCursoCuatro, cursoCuatro, patronDos)

        }, 100)

      }


    });


    for (var i = 0; i < checkboxes.length; i++) {

      checkboxes[i].addEventListener("click", function (i) {

          valSpanAsigEspe.style.display = "none";
          valAsignaturasDoc.style.border = "1px solid #b5b5b5"

          prueba();

      })

    }


    function prueba() {

      setTimeout(function () {

        if (valAsignaturasDoc.value == "") {

          valSpanAsigEspe.style.display = "block";
          valSpanAsigEspe.style.color = "red";
          valAsignaturasDoc.style.border = "2px solid red"

        }

      }, 100)


    }


    if (valAsignaturasDoc !== null && valAsignaturasDoc.value == "") {

      valSpanAsigEspe.style.display = "block";
      valSpanAsigEspe.style.color = "red";
      valAsignaturasDoc.style.border = "2px solid red"     

    } 



    if (valCategoriaDocente !== null && valCategoriaDocente.value !== "") {


      validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)

    }

    valCategoriaDocente.addEventListener("keypress", () => {

      setTimeout(function () {


        validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)

      }, 100)

    })

    valCategoriaDocente.addEventListener("keydown", (event) => {

      setTimeout(function () {

        if (event.key == "Backspace" || event.key == "Delete") {

          validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)
        }

      }, 100)

    })

    valCategoriaDocente.addEventListener("change", () => {

      setTimeout(function () {


        validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)

      }, 100)

    })

    $("#categoriaDocente").bind({



      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado
      
      copy: function() {     
      
       
      },*/
      paste: function () {


        setTimeout(function () {

          validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)


        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          validateCharacters(valCategoriaDocente.value.trim(), valCategoriaDocente, valspanCaDocente, categoriaDocente, patronDos)

        }, 100)

      }


    });



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



    $("#telefDoc").bind({

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


    $("#emailDoc").bind({

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

    $("#textoDirPpalDoc").bind({

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




    if (valAnnioServicio !== null && valAnnioServicio.value !== "") {

      if (valAnnioServicio.value.length > 2) {

        valSpanTiempoServicio.style.display = "block";
        valSpanTiempoServicio.style.color = "red";
        valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
        valAnnioServicio.style.border = "2px solid red"

      } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

        valSpanTiempoServicio.style.display = "none";
        valAnnioServicio.style.border = "1px solid #b5b5b5"


      } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {


        valSpanTiempoServicio.style.display = "none";
        valAnnioServicio.style.border = "1px solid #b5b5b5"

      } else if (valAnnioServicio.value == '') {

        valSpanTiempoServicio.style.display = "block";
        valSpanTiempoServicio.style.color = "red";
        valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
        valAnnioServicio.style.border = "2px solid red"

      }

      if (valAnnioServicio.value < 0) {

        valSpanTiempoServicio.style.display = "block";
        valSpanTiempoServicio.style.color = "red";
        valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
        valAnnioServicio.style.border = "2px solid red"
      }


    } else {

      valSpanTiempoServicio.style.display = "block";
      valSpanTiempoServicio.style.color = "red";
      valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
      valAnnioServicio.style.border = "2px solid red"


    }

    valAnnioServicio.addEventListener("keypress", () => {


      setTimeout(function () {

        if (valAnnioServicio.value.length > 2) {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
          valAnnioServicio.style.border = "2px solid red"

        } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

          valSpanTiempoServicio.style.display = "none";
          valAnnioServicio.style.border = "1px solid #b5b5b5"


        } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {


          valSpanTiempoServicio.style.display = "none";
          valAnnioServicio.style.border = "1px solid #b5b5b5"

        } else if (valAnnioServicio.value == '') {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
          valAnnioServicio.style.border = "2px solid red"

        }


        if (valAnnioServicio.value < 0) {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
          valAnnioServicio.style.border = "2px solid red"


        }

      }, 100);

    })


    valAnnioServicio.addEventListener("keydown", (event) => {


      setTimeout(function () {


        if (event.key == "Backspace" || event.key == "Delete") {


          if (valAnnioServicio.value.length > 2) {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
            valAnnioServicio.style.border = "2px solid red"

          } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"


          } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"

          } else if (valAnnioServicio.value == '') {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
            valAnnioServicio.style.border = "2px solid red"

          }

          if (valAnnioServicio.value < 0) {


            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
            valAnnioServicio.style.border = "2px solid red"

          }


        }



      }, 100);



    })


    valAnnioServicio.addEventListener("change", () => {

      setTimeout(function () {

        if (valAnnioServicio.value.length > 2) {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
          valAnnioServicio.style.border = "2px solid red"

        } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

          valSpanTiempoServicio.style.display = "none";
          valAnnioServicio.style.border = "1px solid #b5b5b5"


        } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {


          valSpanTiempoServicio.style.display = "none";
          valAnnioServicio.style.border = "1px solid #b5b5b5"

        } else if (valAnnioServicio.value == '') {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
          valAnnioServicio.style.border = "2px solid red"

        }

        if (valAnnioServicio.value < 0) {

          valSpanTiempoServicio.style.display = "block";
          valSpanTiempoServicio.style.color = "red";
          valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
          valAnnioServicio.style.border = "2px solid red"
        }

      }, 100)

    })

    $("#annioServicio").bind({

      /*Esta es la función para detectar cuando se copia ya sea con el mouse o con el teclado
      
      copy: function() {     
 
       
      },*/
      paste: function () {

        setTimeout(function () {


          if (valAnnioServicio.value.length > 2) {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
            valAnnioServicio.style.border = "2px solid red"

          } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"


          } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"

          } else if (valAnnioServicio.value == '') {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
            valAnnioServicio.style.border = "2px solid red"

          }


          if (valAnnioServicio.value < 0) {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
            valAnnioServicio.style.border = "2px solid red"

          }

        }, 100)

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/

      cut: function () {

        setTimeout(function () {

          if (valAnnioServicio.value.length > 2) {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Máximo 2 caracteres permitidos"
            valAnnioServicio.style.border = "2px solid red"

          } else if (valAnnioServicio.value.length <= 1 && valAnnioServicio.value.length >= 2) {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"

          } else if (valAnnioServicio.value >= 0 && valAnnioServicio.value != '') {

            valSpanTiempoServicio.style.display = "none";
            valAnnioServicio.style.border = "1px solid #b5b5b5"

          } else if (valAnnioServicio.value == '') {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, sólo puede contener números"
            valAnnioServicio.style.border = "2px solid red"

          }


          if (valAnnioServicio.value < 0) {

            valSpanTiempoServicio.style.display = "block";
            valSpanTiempoServicio.style.color = "red";
            valSpanTiempoServicio.innerHTML = "Campo inválido, no puede ser menor a cero"
            valAnnioServicio.style.border = "2px solid red"
          }



        }, 100)



      }


    });




    validateEmail();

    function validateEmail() {


      var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


      if (!validEmail.test(valEmailRpr.value) && valEmailRpr.value !== "") {

        document.getElementById('spanCorreoDoc').style.display = "block"
        document.getElementById('spanCorreoDoc').style.color = "red";
        document.getElementById('spanCorreoDoc').innerHTML = 'Correo inválido: usuario + @ + servidor + dominio';
        document.getElementById('emailDoc').style.border = "2px solid red"


      } else if (valEmailRpr.value === "") {

        valEmailRpr.style.border = "2px solid red";
        document.getElementById('spanCorreoDoc').style.color = "red";
        document.getElementById('spanCorreoDoc').style.display = "block"
        document.getElementById('spanCorreoDoc').innerHTML = "El campo correo electrónico es obligatorio";


      } else {

        document.getElementById('spanCorreoDoc').innerHTML = "Formato-Correo-OK";
        document.getElementById('spanCorreoDoc').style.display = "none";
        document.getElementById('emailDoc').style.border = "1px solid #b5b5b5"

      }


    }


    function validateCharacters(inputTxtTrim, input, spantxt, dato, expresion) {


      if (inputTxtTrim.match(expresion)) {

        spantxt.innerHTML = "El campo " + dato + " es obligatorio";
        spantxt.style.display = "none";
        input.style.border = "1px solid #b5b5b5"
        return true;


      } else if (inputTxtTrim == "") {


        if (dato == 'Primer nombre' || dato == 'Primer apellido' || dato == 'Dirección domicilio' || dato == 'Asignaturas especializadas') {


          spantxt.style.display = "block";
          spantxt.innerHTML = "El campo " + dato + " es obligatorio";
          input.value = "";
          spantxt.style.color = "red";
          input.style.border = "2px solid red"

        } else {

          spantxt.innerHTML = "El campo " + dato + " es obligatorio"; // Le vuelve a insertar el valor original
          spantxt.style.display = "none";
          input.style.border = "1px solid #b5b5b5"
          input.value = "";

        }

      } else {


        spantxt.style.display = "block";
        spantxt.innerHTML = "Este campo posee caracteres inválidos";
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



