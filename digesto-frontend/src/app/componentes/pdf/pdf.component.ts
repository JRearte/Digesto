import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [RouterOutlet, PdfViewerModule],
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  public zoom: number = 1; // Zoom inicial

  constructor() {}

  public onWheel(event: WheelEvent): void {
    if (event.ctrlKey) {
      event.preventDefault(); // Evita el scroll normal mientras haces zoom
      if (event.deltaY < 0) {
        // Ctrl + Scroll hacia arriba - Acerca el zoom
        this.zoom = Math.min(this.zoom + 0.1, 3); // Límite de zoom máximo
      } else {
        // Ctrl + Scroll hacia abajo - Aleja el zoom
        this.zoom = Math.max(this.zoom - 0.1, 0.5); // Límite de zoom mínimo
      }
    }
  }
}
