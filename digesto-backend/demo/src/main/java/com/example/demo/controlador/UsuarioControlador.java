/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.controlador;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidad.Usuario;
import com.example.demo.servicio.IUsuarioServicio;

/**
 *
 * @author Paez Angel
 */

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
public class UsuarioControlador {
    @Autowired
    private IUsuarioServicio servicioUsuario;

    @GetMapping("/traer/usuarios")
    public List <Usuario> traerUsuarios(){
    return servicioUsuario.get();
    }
    
    @PostMapping("/guardar/usuario")
    public void guardarUsuario(@RequestBody Usuario u){
    servicioUsuario.save(u);
    }

    @PutMapping("/modificar/usuario/{id}")
    public void modificarUsuario(@PathVariable Long id,@RequestBody Map<String,String> requestBody ){
        
     String nuevoLegajo = requestBody.get("legajo");
     Long nuevoDni = Long.valueOf(requestBody.get("dni"));
     String nuevoNombre = requestBody.get("nombre");
     String nuevoApellido = requestBody.get("apellido");
     DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy-MM-dd");
     LocalDate nuevoFechaNac = LocalDate.parse(requestBody.get("fechaNac"), formato);
     String nuevoMail = requestBody.get("mail");
     String nuevoNomUsuario = requestBody.get("nomUsuario");
     String nuevoPass = requestBody.get("pass");
     String nuevoTipoRol = requestBody.get("tipoRol");
     
     Usuario usuario = servicioUsuario.find(id);
     usuario.setLegajo(nuevoLegajo);
     usuario.setDni(nuevoDni);
     usuario.setNombre(nuevoNombre);
     usuario.setApellido(nuevoApellido);
     usuario.setFechaNac(nuevoFechaNac);
     usuario.setMail(nuevoMail);
     usuario.setNomUsuario(nuevoNomUsuario);
     usuario.setPass(nuevoPass);
     usuario.setTipoRol(nuevoTipoRol);
     
     servicioUsuario.save(usuario);
    }

    @DeleteMapping("/eliminar/usuario")
    public void eliminarAlumno(@RequestBody Usuario usuario){
    servicioUsuario.delete(usuario);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> requestBody) {
        String mail = requestBody.get("mail");
        String pass = requestBody.get("pass");

        boolean autenticado = servicioUsuario.validarUsuario(mail, pass);

        if (autenticado) {
            return ResponseEntity.ok("Ingreso exitoso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario invalido");
        }
    }
        
}
