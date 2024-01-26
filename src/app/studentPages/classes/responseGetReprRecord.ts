import { Injectable } from "@angular/core";
import { Representative } from "../models/representative";
import { ValidateRecordFormService } from "../services/validateRecordFormService";
import { StudentDetail } from "../models/studentDetail";


@Injectable({
  providedIn: 'root'
})

export class ResponseGetReprRecords {


  constructor(private validateRecordFormService_: ValidateRecordFormService

  ) { }

  responseGetRepr(response: Representative, studentDetail: StudentDetail, tipo:any) {


    var tipoDocBusq = document.getElementById('tipoDocReprBusq') as HTMLSelectElement;
    var numDocBusq = document.getElementById('numDocReprBusq') as HTMLInputElement;
    var lugarNacRepr = document.getElementById('lugarNacRepr') as HTMLSelectElement;
    var nacionalidadRepr = document.getElementById('nacionalidadRepr') as HTMLInputElement
    var tipoDocRepr = document.getElementById('tipoDocRepr') as HTMLSelectElement;
    var sexoRepr = document.getElementById('sexoRepr') as HTMLSelectElement;
    var civil = document.getElementById('civil') as HTMLSelectElement;
    var codOperadoraRpr = document.getElementById('codOperadoraRpr') as HTMLSelectElement;
    var codOperEmprRpr = document.getElementById('codOperEmprRpr') as HTMLSelectElement;
    var primNombRepr = document.getElementById('primNombRepr') as HTMLInputElement;
    var labelPrimerNomb = document.getElementById('col-label-PrimerNombRpr') as HTMLLabelElement;
    var segNombRepr = document.getElementById('segNombRepr') as HTMLInputElement;
    var labelSegundoNombRpr = document.getElementById('col-label-SegundoNombRpr') as HTMLLabelElement;
    var primApellRepr = document.getElementById('primApellRepr') as HTMLInputElement;
    var labelPrimerApellRpr = document.getElementById('col-label-PrimerApellRpr') as HTMLLabelElement;
    var segApellRepr = document.getElementById('segApellRepr') as HTMLInputElement;
    var labelSegundoApell = document.getElementById('col-label-SegundoApellRpr') as HTMLLabelElement;
    var numDocRepr = document.getElementById('numDocRepr') as HTMLInputElement;
    var labelCedRpr = document.getElementById('label-ced-rpr') as HTMLLabelElement;
    var fechNacRepr = document.getElementById('fechNacRepr') as HTMLInputElement;
    var labelFechaNacRpr = document.getElementById('label-fechaNac-rpr') as HTMLLabelElement;
    var labelLugarNacRpr = document.getElementById('label-lugarNac-rpr') as HTMLLabelElement;
    var labelNacioRpr = document.getElementById('label-nacio-rpr') as HTMLLabelElement;
    var labelEdadRpr = document.getElementById('label-edad-rpr') as HTMLLabelElement;
    var labelSexoRpr = document.getElementById('label-sexo-rpr') as HTMLLabelElement;
    var edadRepr = document.getElementById('edadRepr') as HTMLInputElement;
    var labelCivil = document.getElementById('col-form-label-civil') as HTMLLabelElement;
    var labelParentesco = document.getElementById('col-form-label-parentesco') as HTMLLabelElement;
    var parentesco = document.getElementById('parentesco') as HTMLInputElement;
    var labelTelefRpr = document.getElementById('label-telef-rpr') as HTMLLabelElement;
    var labelCorreoRpr = document.getElementById('label-correo-rpr') as HTMLLabelElement;
    var textoTlfPpalRpr = document.getElementById('textoTlfPpalRpr') as HTMLInputElement;
    var emailRepr = document.getElementById('emailRepr') as HTMLInputElement;
    var labelDirRpr = document.getElementById('label-dir-rpr') as HTMLLabelElement;
    var textoDirPpalRpr = document.getElementById('textoDirPpalRpr') as HTMLInputElement;
    var labelProfesion = document.getElementById('col-label-Profesion') as HTMLLabelElement;
    var profesion = document.getElementById('profesion') as HTMLInputElement;
    var labelOcupacion = document.getElementById('col-label-ocupacion') as HTMLLabelElement;
    var ocupacion = document.getElementById('ocupacion') as HTMLInputElement;
    var labelIngresos = document.getElementById('col-label-Ingresos') as HTMLLabelElement;
    var ingresos = document.getElementById('ingresos') as HTMLInputElement;
    var labelNombEmpr = document.getElementById('col-label-NombEmpr') as HTMLLabelElement;
    var empresa = document.getElementById('empresa') as HTMLInputElement;
    var labelTelefEmpr = document.getElementById('col-label-telefEmpr') as HTMLLabelElement;
    var textoTlfEmprRpr = document.getElementById('textoTlfEmprRpr') as HTMLInputElement;
    var labelDirEmpre = document.getElementById('label-dir-empre') as HTMLLabelElement;
    var direccEmpresa = document.getElementById('direccEmpresa') as HTMLInputElement;
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



    studentDetail.representante.tipoDocumento = response.tipoDocumento;


    studentDetail.representante.numeroDocumento = response.numeroDocumento;


    studentDetail.representante.primerNombre = response.primerNombre;


    studentDetail.representante.primerApellido = response.primerApellido;


    studentDetail.representante.segundoNombre = response.segundoNombre;


    studentDetail.representante.segundoApellido = response.segundoApellido;


    studentDetail.representante.direccion = response.direccion;


    studentDetail.representante.empresaDondeTrabaja = response.empresaDondeTrabaja;


    studentDetail.representante.direccionLaboral = response.direccionLaboral;


    studentDetail.representante.email = response.email;


    studentDetail.representante.profesion = response.profesion;


    studentDetail.representante.ocupacion = response.ocupacion;


    studentDetail.representante.sexo = response.sexo;


    studentDetail.representante.fechaNacimieno = response.fechaNacimieno;


    studentDetail.representante.edad = response.edad;


    studentDetail.representante.estadoCivil = response.estadoCivil;


    studentDetail.representante.codigoOperadoraTelefono = response.codigoOperadoraTelefono;


    studentDetail.representante.telefono = response.telefono;


    studentDetail.representante.codigoOperadoraTelefonoEmpresa = response.codigoOperadoraTelefonoEmpresa;


    studentDetail.representante.telefonoEmpresa = response.telefonoEmpresa;


    studentDetail.representante.lugarDeNacimiento = response.lugarDeNacimiento;


    studentDetail.representante.nacionalidad = response.nacionalidad;


    studentDetail.representante.ingresoMensualAproximado = response.ingresoMensualAproximado;


    studentDetail.representante.activo = response.activo;


    if (tipo == "CREATE") {

      lugarNacRepr.disabled = true;
      tipoDocRepr.disabled = true;
      sexoRepr.disabled = true;
      civil.disabled = true;
      codOperadoraRpr.disabled = true;
      codOperEmprRpr.disabled = true;
      primNombRepr.disabled = true;
      segNombRepr.disabled = true;
      primApellRepr.disabled = true;
      segApellRepr.disabled = true;
      numDocRepr.disabled = true;
      fechNacRepr.disabled = true;
      textoTlfPpalRpr.disabled = true;
      emailRepr.disabled = true;
      textoDirPpalRpr.disabled = true;
      profesion.disabled = true;
      ocupacion.disabled = true;
      ingresos.disabled = true;
      empresa.disabled = true;
      textoTlfEmprRpr.disabled = true;
      direccEmpresa.disabled = true;

    }
    parentesco.removeAttribute('disabled');    
    labelPrimerNomb.style.color = "black";
    labelSegundoNombRpr.style.color = "black";
    labelPrimerApellRpr.style.color = "black";
    labelSegundoApell.style.color = "black";
    labelCedRpr.style.color = "black";
    labelFechaNacRpr.style.color = "black";
    fechNacRepr.style.color = "black";
    labelLugarNacRpr.style.color = "black";
    labelNacioRpr.style.color = "black";
    labelEdadRpr.style.color = "black";
    labelSexoRpr.style.color = "black";
    labelCivil.style.color = "black";
    labelParentesco.style.color = "black";
    labelTelefRpr.style.color = "black";
    labelCorreoRpr.style.color = "black";
    labelDirRpr.style.color = "black";
    labelProfesion.style.color = "black";
    labelOcupacion.style.color = "black";
    labelIngresos.style.color = "black";
    labelNombEmpr.style.color = "black";
    labelTelefEmpr.style.color = "black";
    labelDirEmpre.style.color = "black";

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

