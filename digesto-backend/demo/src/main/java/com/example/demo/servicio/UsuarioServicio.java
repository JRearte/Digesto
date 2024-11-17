/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.servicio;

import com.example.demo.entidad.Usuario;
import com.example.demo.repositorio.IUsuarioRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *Este servicio implementa la lógica de negocio para manejar los usuarios
 * que tendran acceso al repositorio
 * @author Paez Angel
 */
@Service
public class UsuarioServicio implements IUsuarioServicio{
    @Autowired
    private IUsuarioRepositorio usuarioRepositorio;

     /**
     * Obtiene un listado de todas los Usuarios disponibles en el sistema.
     * @return Lista de objetos de tipo Usuario
     */
    @Override
    public List<Usuario>get() {
        return usuarioRepositorio.findAll();
    }

     /**
     * Guarda un nuevo Usuario en el sistema.
     * @param u → Objeto de tipo Usuario
     */
    @Override
    public void save(Usuario u) {
        usuarioRepositorio.save(u);
    }

   
    @Override
    public void delete(Usuario u) {
        usuarioRepositorio.deleteById(u.getId());
    }
    

    /**
     * Busca un Usuario por su id y la devuelve
     * @param id → identificador único del Usuario
     * @return Objeto de tipo Usuario o vacio en caso de no existir.
     */
    @Override
    public Usuario find(Long id) {
        return usuarioRepositorio.findById(id).orElse(null);
    }
    
    @Override
    public Usuario findByMail(String mail) {
        return usuarioRepositorio.findByMail(mail);
    }

    @Override
    public boolean validarUsuario(String mail, String pass) {
        Usuario usuario = usuarioRepositorio.findByMail(mail); 
        return usuario != null && usuario.getPass().equals(pass);
    }
}
