import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoCaracteristicaComponent } from "./componentes/compo-caracteristica/compo-caracteristica.component";
import { CompoDocumentoComponent } from "./componentes/compo-documento/compo-documento.component";
import { CompoUsuariosComponent } from './componentes/compo-usuarios/compo-usuarios.component';
import { CompoUsuarioLoginComponent } from './componentes/compo-usuario-login/compo-usuario-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoUsuarioLoginComponent, CompoUsuariosComponent, CompoCaracteristicaComponent, CompoDocumentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digesto-frontend';
}
