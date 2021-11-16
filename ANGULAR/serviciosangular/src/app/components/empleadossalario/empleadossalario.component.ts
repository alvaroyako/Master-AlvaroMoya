import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/Models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';



@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados!: Array<Empleado>
  @ViewChild("cajasalario") cajasalario!: ElementRef;

  constructor(private _service: EmpleadoService) { }

  ngOnInit(): void {
  }

  mostrarEmpleados(): void {
    var salario = this.cajasalario.nativeElement.value
    this._service.getEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response
    })
  }

}
