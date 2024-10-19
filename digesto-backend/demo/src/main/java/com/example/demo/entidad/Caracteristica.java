package com.example.demo.entidad;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Esta clase representa una característica en el sistema.
 * Cada característica tiene un identificador único y un nombre,
 * esta clase se usa para etiquetar documentos y facilitar su busqueda.
 * @author REARTE Jonatan Ramón
 */

 @Entity 
 @Getter 
 @Setter

 public class Caracteristica{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
 }
