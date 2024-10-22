package com.example.demo.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
