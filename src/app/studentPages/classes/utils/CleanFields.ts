import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { StudentDetail } from "../../models/studentDetail";




@Injectable({
  providedIn: 'root'
})
export class CleanFields implements OnInit, OnDestroy {


  ngOnInit() {
    console.log("child init");
  }
  ngOnDestroy() {
    console.log("destroying child2222...");
  }


  public clean(studentDetail: StudentDetail, tipo: any) {

    var numDocReprBusq = document.getElementById('numDocReprBusq') as HTMLInputElement;
    var sexoRepr = document.getElementById('sexoRepr') as HTMLSelectElement;
    var civil = document.getElementById('civil') as HTMLSelectElement;
    var edadRepr = document.getElementById('edadRepr') as HTMLInputElement;
    var codOperadoraRpr = document.getElementById('codOperadoraRpr') as HTMLSelectElement;
    var codOperEmprRpr = document.getElementById('codOperEmprRpr') as HTMLSelectElement;
    var primNombRepr = document.getElementById('primNombRepr') as HTMLInputElement;
    var segNombRepr = document.getElementById('segNombRepr') as HTMLInputElement;
    var primApellRepr = document.getElementById('primApellRepr') as HTMLInputElement;
    var segApellRepr = document.getElementById('segApellRepr') as HTMLInputElement;
    var tipoDocRepr = document.getElementById('tipoDocRepr') as HTMLSelectElement;
    var numDocRepr = document.getElementById('numDocRepr') as HTMLInputElement;
    var fechNacRepr = document.getElementById('fechNacRepr') as HTMLInputElement;
    var textoTlfPpalRpr = document.getElementById('textoTlfPpalRpr') as HTMLInputElement;
    var emailRepr = document.getElementById('emailRepr') as HTMLInputElement;
    var textoDirPpalRpr = document.getElementById('textoDirPpalRpr') as HTMLInputElement;
    var profesion = document.getElementById('profesion') as HTMLInputElement;
    var ocupacion = document.getElementById('ocupacion') as HTMLInputElement;
    var ingresos = document.getElementById('ingresos') as HTMLInputElement;
    var empresa = document.getElementById('empresa') as HTMLInputElement;
    var textoTlfEmprRpr = document.getElementById('textoTlfEmprRpr') as HTMLInputElement;
    var direccEmpresa = document.getElementById('direccEmpresa') as HTMLInputElement;
    var lugarNacRepr = document.getElementById('lugarNacRepr') as HTMLSelectElement;
    var nacionalidadRepr = document.getElementById('nacionalidadRepr') as HTMLInputElement;
    var parentesco = document.getElementById('parentesco') as HTMLInputElement;

    var spanPrimNomRpr = document.getElementById('spanPrimNomRpr') as HTMLInputElement;
    var spanPrimApeRpr = document.getElementById('spanPrimApeRpr') as HTMLInputElement;
    var spanCedRpr = document.getElementById('spanCedRpr') as HTMLInputElement;
    var spanFechNacRpr = document.getElementById('spanFechNacRpr') as HTMLInputElement;
    var spanLugNacRpr = document.getElementById('spanLugNacRpr') as HTMLInputElement;
    var spanNacRpr = document.getElementById('spanNacRpr') as HTMLInputElement;
    var spanEdadRpr = document.getElementById('spanEdadRpr') as HTMLInputElement;
    var spanSexoRpr = document.getElementById('spanSexoRpr') as HTMLInputElement;
    var spanParentRpr = document.getElementById('spanParentRpr') as HTMLInputElement;
    var spanCivilRpr = document.getElementById('spanCivilRpr') as HTMLInputElement;
    var spanTelefRpr = document.getElementById('spanTelefRpr') as HTMLInputElement;
    var spanCorreoRpr = document.getElementById('spanCorreoRpr') as HTMLInputElement;
    var spanDirRpr = document.getElementById('spanDirRpr') as HTMLInputElement;
    var spanProfesion = document.getElementById('spanProfesion') as HTMLInputElement;
    var spanOcup = document.getElementById('spanOcup') as HTMLInputElement;
    var spanIngre = document.getElementById('spanIngre') as HTMLInputElement;
    var spanNomEmpr = document.getElementById('spanNomEmpr') as HTMLInputElement;
    var spanTelefEmprRpr = document.getElementById('spanTelefEmprRpr') as HTMLInputElement;
    var spanDirEmprRpr = document.getElementById('spanDirEmprRpr') as HTMLInputElement;





    numDocReprBusq?.addEventListener("keypress", () => {

      console.log('keypress');


      if (tipo == "CREATE") {

        parentesco.setAttribute('disabled', 'true');

      }

      setFields();


    });


    numDocReprBusq?.addEventListener("keydown", (event) => {


      console.log('keydown');


      if (event.key == "Backspace" || event.key == "Delete") {


        if (tipo == "CREATE") {

          parentesco.setAttribute('disabled', 'true');

        }

        setFields();


      }

    });


    $("#numDocReprBusq").bind({
      /*Esta es la función para detectar cuando se copia ya sea a través del mouse o del teclado*/
      /*copy: function() {
 
       
      },*/
      paste: function () {

        if (tipo == "CREATE") {

          parentesco.setAttribute('disabled', 'true');

        }
        setFields();

      },

      /*Esta es la función para detectar cuando se corta ya sea a través del mouse o del teclado*/
      cut: function () {


        if (tipo == "CREATE") {

          parentesco.setAttribute('disabled', 'true');

        }

        setFields();


      }
    });


    numDocReprBusq?.addEventListener("change", () => {

      console.log('change');


      setFields();


      if (tipo == "CREATE") {

        parentesco.setAttribute('disabled', 'true');

      }

    });


    function setFields() {

      studentDetail.representante.primerNombre = "";

      studentDetail.representante.segundoNombre = "";

      studentDetail.representante.primerApellido = "";

      studentDetail.representante.segundoApellido = "";

      studentDetail.representante.numeroDocumento = "";

      studentDetail.representante.tipoDocumento = "default";

      studentDetail.representante.direccion = "";

      studentDetail.representante.lugarDeNacimiento = "default";

      studentDetail.representante.fechaNacimieno = "";

      studentDetail.representante.nacionalidad = "";

      studentDetail.representante.sexo = "default";

      studentDetail.representante.estadoCivil = "default";

      studentDetail.representante.edad = "";

      studentDetail.parentesco = "default";

      studentDetail.representante.codigoOperadoraTelefono = "default";

      studentDetail.representante.codigoOperadoraTelefonoEmpresa = "default";

      studentDetail.representante.telefono = "";

      studentDetail.representante.email = "";

      studentDetail.representante.profesion = "";

      studentDetail.representante.ocupacion = "";

      studentDetail.representante.ingresoMensualAproximado = "";

      studentDetail.representante.empresaDondeTrabaja = "";

      studentDetail.representante.telefonoEmpresa = "";

      studentDetail.representante.direccionLaboral = "";

      spanPrimNomRpr.style.display = "none";
      spanPrimApeRpr.style.display = "none";
      spanCedRpr.style.display = "none";
      spanFechNacRpr.style.display = "none";
      spanLugNacRpr.style.display = "none";
      spanNacRpr.style.display = "none";
      spanEdadRpr.style.display = "none";
      spanSexoRpr.style.display = "none";
      spanParentRpr.style.display = "none";
      spanCivilRpr.style.display = "none";
      spanTelefRpr.style.color = "transparent";
      spanCorreoRpr.style.color = "transparent";
      spanDirRpr.style.display = "none";
      spanProfesion.style.display = "none";
      spanOcup.style.display = "none";
      spanIngre.style.display = "none";
      spanNomEmpr.style.display = "none";
      spanTelefEmprRpr.style.display = "none";
      spanDirEmprRpr.style.display = "none";

      sexoRepr.style.border = "1px solid lightGray";
      civil.style.border = "1px solid lightGray";
      edadRepr.style.border = "1px solid lightGray";
      codOperadoraRpr.style.border = "1px solid lightGray";
      codOperEmprRpr.style.border = "1px solid lightGray";
      primNombRepr.style.border = "1px solid lightGray";
      segNombRepr.style.border = "1px solid lightGray";
      primApellRepr.style.border = "1px solid lightGray";
      segApellRepr.style.border = "1px solid lightGray";
      tipoDocRepr.style.border = "1px solid lightGray";
      numDocRepr.style.border = "1px solid lightGray";
      fechNacRepr.style.border = "1px solid lightGray";
      textoTlfPpalRpr.style.border = "1px solid lightGray";
      emailRepr.style.border = "1px solid lightGray";
      textoDirPpalRpr.style.border = "1px solid lightGray";
      profesion.style.border = "1px solid lightGray";
      ocupacion.style.border = "1px solid lightGray";
      ingresos.style.border = "1px solid lightGray";
      empresa.style.border = "1px solid lightGray";
      textoTlfEmprRpr.style.border = "1px solid lightGray";
      direccEmpresa.style.border = "1px solid lightGray";
      lugarNacRepr.style.border = "1px solid lightGray";
      nacionalidadRepr.style.border = "1px solid lightGray";
      parentesco.style.border = "1px solid lightGray";

    }

  }
}
