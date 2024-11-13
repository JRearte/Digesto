import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiCaracterizacionService {
  private url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getCaracteristicas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/traer/caracteristicas`);
  }

  guardarCaracteristica(caracteristica: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.url}/guardar/caracteristica`, caracteristica);
  }

  modificarCaracteristica(id: number, caracteristica: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}/modificar/caracteristica/${id}`, caracteristica);

  }
  eliminarCaracteristica(caracteristica: any): Observable<any[]> {
    return this.http.delete<any[]>(`${this.url}/eliminar/caracteristica/${caracteristica.id}`);
  }
}