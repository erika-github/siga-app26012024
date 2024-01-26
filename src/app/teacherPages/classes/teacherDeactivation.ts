import { Injectable } from "@angular/core";
import swal from "sweetalert2";
import { DeactivateTeacher } from "../models/deactivateTeacher";
import { DeactivateTeacherService } from "../services/deactivateTeacher.services";


@Injectable({
    providedIn: 'root'
})
export class TeacherDeactivation {


    constructor(
        private deactivateTeacherService: DeactivateTeacherService
    ) {

    }


    async Option(id: any, deactivateTeacher: DeactivateTeacher) {


        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    'RETIRADO': 'Retirado',
                    'JUBILADO': 'Jubilado',
                    'INCAPACITADO': 'Incapacitado'

                })
            }, 1000)
        })

        const { value: motivo } = await (swal as any).fire({
            title: 'Desactivar Docente',
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
                html: `¿Usted desea dar de baja al docente, bajo la condición de ${motivo}?`,
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'


            }).then((result: any) => {

                if (result.value == true) {


                    (swal as any).fire({
                        type: 'success',
                        html: `¡El docente ha sido desactivado satisfactoriamente. Motivo de la baja: ${motivo}!`,
                        showConfirmButton: true

                    }).then((response: any) => {


                        deactivateTeacher.motivo = motivo;
                        deactivateTeacher.id = id;                        

                        this.deactivateTeacherService.deactivateTeacher(deactivateTeacher)
                            .subscribe((resultado: any) => {

                                window.location.reload();

                            })

                    })


                }


            })

        }

    }




}