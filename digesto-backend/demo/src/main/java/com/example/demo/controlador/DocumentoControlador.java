package com.example.demo.controlador;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidad.Documento;
import com.example.demo.servicio.IDocumentoServicio;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class DocumentoControlador {

    @Autowired
    private IDocumentoServicio servicio;

    @GetMapping("/traer/documentos")
    public List<Documento> traerDocumentos(){
        return servicio.get();
    }

    @PostMapping("/guardar/documento")
    public void guardarDocumento(@RequestBody Documento d){
        servicio.save(d);
    }

    @PutMapping("/modificar/documento")
    public void modificarDocumento(@PathVariable Long id, @RequestBody Map<String, String> requestBody)
    {
        String nuevo_nombre = requestBody.get("nombre");
        String nuevo_autor = requestBody.get("autor");
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate nuevaFecha = LocalDate.parse(requestBody.get("fecha"),formato);
        String nuevo_url = requestBody.get("url");

        Documento d = servicio.find(id);
        d.setNombre(nuevo_nombre);
        d.setAutor(nuevo_autor);
        d.setFecha(nuevaFecha);
        d.setUrl(nuevo_url);

        servicio.save(d);
    }

    @DeleteMapping("/eliminar/documento")
    public void eliminarDocumento(@RequestBody Documento d){
        servicio.delete(d.getId());
    }
}
