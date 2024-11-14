import { Component, OnInit } from '@angular/core';
import { ServiDocumentoService } from '../../servicios/servi-documento.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-compo-documento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo-documento.component.html',
  styleUrls: ['./compo-documento.component.css']
})
export class CompoDocumentoComponent implements OnInit {
  documentos: any[] = [];
  documento: any = {
    nombre: '',
    autor: '',
    fecha: '',
    url: '',
    caracteristicas: []
  };
  seleccionarDocumento: any = null;
  etiquetas: any[] = [];

  constructor(private serviDocumentoService: ServiDocumentoService) {}

  ngOnInit(): void {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(): void {
    this.serviDocumentoService.getDocumentos().subscribe((documentos: any[]) => {
      this.documentos = documentos;
    });
  }

  guardarDocumento(): void {
    this.serviDocumentoService.guardarDocumento(this.documento).subscribe(() => {
      this.obtenerDocumentos();
      this.documento = { nombre: '', autor: '', fecha: '', url: ''};
    });
  }

  eliminarDocumento(): void {
    this.serviDocumentoService.eliminarDocumento(this.documento.id).subscribe(() => {
      this.obtenerDocumentos();
    });
  }

  seleccionarDocumentoParaModificar(documento: any): void {
    this.seleccionarDocumento = { ...documento };
    this.obtenerEtiquetas(documento.id);
  }

  modificarDocumento(): void {
    this.serviDocumentoService.modificarDocumento(this.documento.id, this.seleccionarDocumento).subscribe(() => {
      this.obtenerDocumentos();
      this.seleccionarDocumento = null;
    });
  }

  // Métodos para las etiquetas
  obtenerEtiquetas(id: number): void {
    this.serviDocumentoService.getEtiquetas(id).subscribe((etiquetas: any[]) => {
      this.etiquetas = etiquetas;
    });
  }

  guardarEtiquetas(): void {
    if (this.seleccionarDocumento && this.seleccionarDocumento.id) {
      this.serviDocumentoService.guardarEtiquetas(this.seleccionarDocumento.id, this.etiquetas).subscribe(() => {
        this.obtenerEtiquetas(this.seleccionarDocumento.id);
      });
    }
  }

  eliminarEtiqueta(idC: number): void {
    if (this.seleccionarDocumento && this.seleccionarDocumento.id) {
      this.serviDocumentoService.eliminarEtiqueta(this.seleccionarDocumento.id, idC).subscribe(() => {
        this.obtenerEtiquetas(this.seleccionarDocumento.id);
      });
    }
  }
}
