import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-compo-usuario-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './compo-usuario-login.component.html',
  styleUrl: './compo-usuario-login.component.css'
})
export class CompoUsuarioLoginComponent {
  public formularioLog: FormGroup

  constructor() {
    this.formularioLog = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }
  public login() {

  }
}
