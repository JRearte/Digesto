import { Component, OnInit } from '@angular/core';
import { ServiCaracterizacionService } from '../../servicios/servi-caracterizacion.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-caracteristica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo-caracteristica.component.html',
  styleUrl: './compo-caracteristica.component.css'
})
export class CompoCaracteristicaComponent implements OnInit{
  caracteristicas: any[] = [];
  caracteristica: any = {
    nombre: ''
  };
  
  seleccionaCaracteristica: any = null;
  constructor(private serviCaracteristica: ServiCaracterizacionService) { }
  ngOnInit(): void {
    this.obtenerCaracteristica();
  }

  obtenerCaracteristica(): void {
    this.serviCaracteristica.getCaracteristicas().subscribe((caracteristicas: any[]) => {
      this.caracteristicas = caracteristicas;
    });
  }


  guardarCaracteristica(): void {
    this.serviCaracteristica.guardarCaracteristica(this.caracteristica).subscribe((caracteristica: any) => {
      this.obtenerCaracteristica();
      this.caracteristica = {};
    });
  }
  eliminarUsuario(): void {
    this.serviCaracteristica.eliminarCaracteristica(this.caracteristica).subscribe((caracteristica: any) => {
      this.obtenerCaracteristica();
    });
  }

  SeleccionarCaracteristicaParaModificar(caracteristica: any): void {
    this.seleccionaCaracteristica = { ...caracteristica };
  }

  modificarUsuario(): void {
    this.serviCaracteristica.modificarCaracteristica(this.caracteristica.id, this.seleccionaCaracteristica).subscribe(() => {
      this.obtenerCaracteristica();
      this.seleccionaCaracteristica = null;
    });
  }

}
