import { Component, OnInit } from '@angular/core';
import { ServiUsuariosService } from '../../servicios/servi-usuarios.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo-usuarios.component.html',
  styleUrl: './compo-usuarios.component.css'
})

export class CompoUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuario: any = {
    legajo: '',
    dni: '',
    nombre: '',
    apellido: '',
    fechaNac: '',
    mail: '',
    nomUsuario: '',
    pass: '',
    tipoRol: ''
  };
  seleccionaUsuario: any = null;
  constructor(private serviUsuario: ServiUsuariosService) { }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.serviUsuario.getUsuarios().subscribe((usuarios: any[]) => {
      this.usuarios = usuarios;
    });
  }

  guardarUsuario(): void {
    this.serviUsuario.guardarUsuario(this.usuario).subscribe((usuario: any) => {
      this.obtenerUsuarios();
      this.usuario = {};
    });
  }
  eliminarUsuario(): void {
    this.serviUsuario.eliminarUsuario(this.usuario).subscribe((usuario: any) => {
      this.obtenerUsuarios();
    });
  }

  SeleccionarUsuarioParaModificar(usuario: any): void {
    this.seleccionaUsuario = { ...usuario };
  }

  modificarUsuario(): void {
    this.serviUsuario.modificarUsuario(this.usuario.id, this.seleccionaUsuario).subscribe(() => {
      this.obtenerUsuarios();
      this.seleccionaUsuario = null;
    });
  }

}
