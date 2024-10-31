/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.entidad;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Paez Angel
 */
@Entity 
@Getter
@Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   

    private String legajo; //
    private Long dni;       //
    private String nombre;  //
    private String apellido; //
    private LocalDate fechaNac; //
    private String mail;      //
    private String nomUsuario; //
    private String pass;    //
    private String tipoRol;  //
}
