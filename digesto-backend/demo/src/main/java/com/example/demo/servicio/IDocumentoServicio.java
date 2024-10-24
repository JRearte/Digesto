package com.example.demo.servicio;

import com.example.demo.entidad.Caracteristica;
//import com.example.demo.entidad.Caracteristica;
import com.example.demo.entidad.Documento;
import java.util.List;

/**
 * @author REARTE Jonatan Ramón
 */
public interface IDocumentoServicio {
    public List <Documento> get();
    public void save(Documento docuemento);
    public void delete(Long id);
    public Documento find(Long id);

    public List<Caracteristica> getEtiquetas(Long id);
    public void agregarEtiquetas(Long id, List<Caracteristica> etiquetas);
    public void eliminarEtiqueta(Long idD, Long idC);
}
