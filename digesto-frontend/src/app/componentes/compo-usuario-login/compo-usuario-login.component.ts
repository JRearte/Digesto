import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiUsuariosService } from '../../servicios/servi-usuarios.service';  // Importar el servicio
import { Router } from '@angular/router';  // Importar el router para redirigir

@Component({
  selector: 'app-compo-usuario-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './compo-usuario-login.component.html',
  styleUrls: ['./compo-usuario-login.component.css']
})
export class CompoUsuarioLoginComponent {
  public formularioLog: FormGroup;
  public mensajeError: string = '';  // Para manejar el mensaje de error de login

  constructor(
    private usuarioService: ServiUsuariosService,  // Inyectar el servicio
    private router: Router  // Inyectar el router
  ) {
    this.formularioLog = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),  // Validación de correo
      password: new FormControl('', [Validators.required])  // Validación de contraseña
    });
  }

  public login() {
    const { email, password } = this.formularioLog.value;

    this.usuarioService.login(email, password).subscribe({
      next: (response) => {
        // Si el login es exitoso, redirige al dashboard u otra página
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // Si el login falla, muestra el mensaje de error
        this.mensajeError = 'Usuario invalido.';
      }
    });
  }
}

