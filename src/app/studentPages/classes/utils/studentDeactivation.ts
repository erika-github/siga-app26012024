import { Injectable } from "@angular/core";
import swal from "sweetalert2";
import { DeactivateStudent } from "../../models/deactivateStudent";
import { DeactivateStudentService } from "../../services/deactivateStudent.services";

@Injectable({
    providedIn: 'root'
})
export class StudentDeactivation {


    constructor(
        private deactivateStudentService: DeactivateStudentService
    ) {

    }


    async Option(id: any, deactivateStudent: DeactivateStudent) {


        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    'GRADUADO': 'Graduado',
                    'RETIRADO': 'Retirado',
                    'SUSPENDIDO': 'Suspendido'

                })
            }, 1000)
        })

        const { value: motivo } = await (swal as any).fire({
            title: 'Desactivar Alumno(a)',
            html: 'Seleccione un motivo:',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value: any): any => {
                if (!value) {
                    return '¡Debe elegir alguna de las opciones!'
                }
            }
        })

        if (motivo) {
            (swal as any).fire({
                type: 'info',
                html: `¿Usted desea dar de baja al alumno(a), bajo la condición de ${motivo}?`,
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'


            }).then((result: any) => {

                if (result.value == true) {


                    (swal as any).fire({
                        type: 'success',
                        html: `¡El alumno(a) ha sido desactivado satisfactoriamente. Motivo de la baja: ${motivo}!`,
                        showConfirmButton: true

                    }).then((response: any) => {


                        deactivateStudent.motivo = motivo;
                        deactivateStudent.id = id;

                        this.deactivateStudentService.deactivateStudent(deactivateStudent)
                            .subscribe((resultado: any) => {

                                window.location.reload();

                            })

                    })


                }


            })

        }

    }




}