import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiUsuariosService {
  private url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/traer/usuarios`);
  }

  guardarUsuario(usuario: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.url}/guardar/usuario`, usuario);
  }

  modificarUsuario(id: number, usuario: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}/modificar/usuario/${id}`, usuario);

  }
  eliminarUsuario(usuario: any): Observable<any[]> {
    return this.http.delete<any[]>(`${this.url}/eliminar/usuario/${usuario.id}`);
  }

  login(mail: string, pass: string): Observable<any> {
    const body = { mail, pass };
    return this.http.post(`${this.url}/login`, body);
  }
}
