package com.example.demo.entidad;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Esta clase representa un documento en el sistema.
 * Cada documento puede contener multiples etiquetas (caracteristicas)
 * @author REARTE Jonatan Ramón
 */

@Entity
@Getter
@Setter

public class Documento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String autor;
    private LocalDate fecha;
    private String url;

}
