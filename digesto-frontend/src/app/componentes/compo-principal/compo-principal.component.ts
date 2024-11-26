import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-compo-principal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo-principal.component.html',
  styleUrls: ['./compo-principal.component.css']

})

export class CompoPrincipalComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
  }
}
