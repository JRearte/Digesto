package com.example.demo.servicio;

import com.example.demo.entidad.Caracteristica;
import java.util.List;

/**
 * @author REARTE Jonatan Ramon
 */
public interface ICaracteristicaServicio {
    public List <Caracteristica> get();
    public void save(Caracteristica caracteristica);
    public void delete(Long id);
    public Caracteristica find(Long id);
}