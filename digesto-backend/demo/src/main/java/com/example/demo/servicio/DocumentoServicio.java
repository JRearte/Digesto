package com.example.demo.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entidad.Caracteristica;
import com.example.demo.entidad.Documento;
import com.example.demo.repositorio.IDocumentoRepositorio;

@Service
public class DocumentoServicio implements IDocumentoServicio{
    
    @Autowired
    private IDocumentoRepositorio repositorio;

    @Override
    public List<Documento> get(){
        return repositorio.findAll();
    }

    @Override
    public void save(Documento d){
        repositorio.save(d);
    }

    @Override
    public void delete(Long id){
        repositorio.deleteById(id);
    }

    @Override
    public Documento find(Long id){
        return repositorio.findById(id).orElse(null);
    }

    @Override
    public List<Caracteristica> getEtiquetas(Long id) {
        Documento documento = repositorio.findById(id).orElse(null);
        if (documento == null) 
        {
            return null;
        } 
        else 
        {
            return documento.getCaracteristicas();
        }
    }

    @Override
    public void agregarEtiquetas(Long id, List<Caracteristica> etiquetas) {
        Documento documento = repositorio.findById(id).orElse(null);
        documento.getCaracteristicas().addAll(etiquetas);
        repositorio.save(documento);
    }

    @Override
    public void eliminarEtiqueta(Long idD, Long idC){
    Documento documento = repositorio.findById(idD).orElse(null);
    if (documento != null) 
    {
        for (Caracteristica c : documento.getCaracteristicas()) 
        {
            if (c.getId().equals(idC)) 
            {
                documento.getCaracteristicas().remove(c);
                break; 
            }
        }
        repositorio.save(documento);
    }
    }
}
