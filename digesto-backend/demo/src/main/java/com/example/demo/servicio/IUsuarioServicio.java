/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.demo.servicio;

import com.example.demo.entidad.Usuario;
import java.util.List;

/**
 *
 * @author Paez Angel
 */
public interface IUsuarioServicio {
    public List<Usuario> get();
    public void save (Usuario u);
    public void delete (Usuario u);
    public Usuario find(Long Id);
    public Usuario findByMail(String mail);
    public boolean validarUsuario(String mail, String pass);
}
