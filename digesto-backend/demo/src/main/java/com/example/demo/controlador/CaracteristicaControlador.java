package com.example.demo.controlador;

import java.util.List;
import java.util.Map;

import com.example.demo.entidad.Caracteristica;
import com.example.demo.servicio.ICaracteristicaServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Este controlador maneja las operaciones CRUD de las características que
 * representan las etiquetas asociadas a un documento dentro del digesto.
 * 
 * @author REARTE Jonatan Ramon
 */

@RestController
public class CaracteristicaControlador {
    
    @Autowired
    private ICaracteristicaServicio servicio;

    /**
     * Obtiene un listado de todas las características disponibles en el sistema.
     * @return Lista de objetos de tipo Característica
     */
    @GetMapping("/traer/caracteristicas")
    public List<Caracteristica> traerCaracteristicas(){
        return servicio.get();
    }

    /**
     * Guarda una nueva característica en el sistema.
     * @param c → Objeto de tipo Característica
     */
    @PostMapping("/guardar/caracteristica")
    public void guardarCaracteristica(@RequestBody Caracteristica c){
        servicio.save(c);
    }

    /**
     * Modifica el nombre de una característica existente.
     * @param id → identificador único de la característica
     * @param requestBody 
     */
    @PutMapping("/modificar/caracteristica/{id}")
    public void modificarCaracteristica(@PathVariable Long id, @RequestBody Map<String, String> requestBody){
        String nuevo_nombre = requestBody.get("nombre");

        Caracteristica c = servicio.find(id);
        c.setNombre(nuevo_nombre);
        servicio.save(c);
    }

    /**
     * Elimina una característica existente buscado por su ID.
     * @param c → Objeto de tipo característica
     */
    @DeleteMapping("/eliminar/caracteristica")
    public void eliminarCaracteristica(@RequestBody Caracteristica c){
        servicio.delete(c.getId());
    }
}