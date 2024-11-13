import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiDocumentoService {
  private url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  /**
   * Obtiene un arreglo con todos los documentos dentro de la BD
   * @returns
   */
  getDocumentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/traer/documentos`);
  }

  /**
   * Guarda un nuevo documento en la BD
   * @param documento  → objeto que contiene todos los atributos de un documento.
   * @returns
   */
  guardarDocumento(documento: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.url}/guardar/documento`, documento);
  }

  /**
   * Modifica un documento ya existente en la BD accediendo desde su ID
   * @param id → identificador unico de un documento.
   * @param documento  → objeto que contiene todos los atributos de un documento.
   * @return
   */
  modificarDocumento(id: number, documento: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}/modificar/documento/${id}`, documento);
  }

  /**
   * Elimina un documento de la BD accediendo desde el objeto.
   * @param documento → objeto que contiene todos los atributos de un documento.
   * @returns
   */
  eliminarDocumento(documento: any): Observable<any[]> {
    return this.http.delete<any[]>(`${this.url}/eliminar/documento/${documento.id}`);
  }


  /**
   * Obtiene un arreglo con todas las etiquetas perteneciente a un documento especifico.
   * @param id → identificador unico de la etiqueta.
   * @returns
   */
  getEtiquetas(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/traer/etiquetas/documento/${id}`);
  }


  /**
   * Guarda un conjunto de etiquetas en un documento especifico.
   * @param id → identificador unico de la etiqueta
   * @param etiquetas → arreglo de etiquetas.
   * @returns
   */
  guardarEtiquetas(id: number, etiquetas: any[]): Observable<any[]> {
    return this.http.put<any>(`${this.url}/guardar/etiquetas/documento/${id}`, etiquetas);
  }

  /**
   * Elimina una etiqueta de un documento especifico.
   * @param idD → identificador unico del documento
   * @param idC → identificador unico de la etiqueta (caracrteristica)
   * @returns
   */
  eliminarEtiqueta(idD: number, idC: number): Observable<any[]> {
    return this.http.delete<any>(`${this.url}/eliminar/etiqueta/documento/${idD}/${idC}`);
  }
}

