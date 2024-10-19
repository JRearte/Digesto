package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entidad.Caracteristica;

/**
 * @author REARTE Jonatan Ramon
 */

@Repository
public interface ICaracteristicaRepositorio extends JpaRepository <Caracteristica,Long>{

}