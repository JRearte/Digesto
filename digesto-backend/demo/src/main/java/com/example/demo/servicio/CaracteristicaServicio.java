package com.example.demo.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entidad.Caracteristica;
import com.example.demo.repositorio.ICaracteristicaRepositorio;

/**
 * Este servicio implementa la lógica de negocio para manejar las características
 * asociadas a los documentos en el sistema.
 * Utiliza un repositorio para realizar operaciones CRUD. 
 * @author REARTE Jonatan Ramon
 */

@Service
public class CaracteristicaServicio implements ICaracteristicaServicio{

    @Autowired
    private ICaracteristicaRepositorio repositorio;

    /**
     * Obtiene un listado de todas las características disponibles en el sistema.
     * @return Lista de objetos de tipo Caracteristica
     */
    @Override
    public List<Caracteristica> get(){
        return repositorio.findAll();
    }

    /**
     * Guarda una nueva característica en el sistema.
     * @param c → Objeto de tipo Caracteristica
     */
    @Override
    public void save(Caracteristica c){
        repositorio.save(c);
    }

    /**
     * Elimina una característica existente buscado por su ID.
     * @param id → identificador único de la característica
     */
    @Override
    public void delete(Long id){
        repositorio.deleteById(id);
    }

    /**
     * Busca una característica por su ID y la devuelve
     * @param id → identificador único de la característica
     * @return Objeto de tipo característica o vacio en caso de no existir.
     */
    @Override
    public Caracteristica find(Long id){
        return repositorio.findById(id).orElse(null);
    }
}
