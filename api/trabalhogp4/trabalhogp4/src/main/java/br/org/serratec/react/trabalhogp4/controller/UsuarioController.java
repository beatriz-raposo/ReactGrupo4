package br.org.serratec.react.trabalhogp4.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.org.serratec.react.trabalhogp4.model.Usuario;
import br.org.serratec.react.trabalhogp4.model.UsuarioInserirDTO;
import br.org.serratec.react.trabalhogp4.repository.UsuarioRepository;
import jakarta.validation.Valid;


public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> buscar(@PathVariable Long id){
		Optional<Usuario> usuairoOpt = usuarioRepository.findById(id);
		if (usuairoOpt.isPresent()) {
			return ResponseEntity.ok(usuairoOpt.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario inserir(@Validated @RequestBody UsuarioInserirDTO usuarioInserirDTO) throws NotFoundException{
		if (!usuarioInserirDTO.getSenha().equalsIgnoreCase(usuarioInserirDTO.getConfirmaSenha())) {
			throw new NotFoundException();
		}
		Usuario usuarioBd = usuarioRepository.findByUsuario(usuarioInserirDTO.getUsuario());
		if (usuarioBd != null) {
			throw new NotFoundException();
		}
		
		Usuario usuario = new Usuario();
		usuario.setUsuario(usuarioInserirDTO.getUsuario());
		usuario.setSenha(usuarioInserirDTO.getSenha());
		
		usuario = usuarioRepository.save(usuario);
		return usuario;
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @Valid @RequestBody Usuario usuario) {
		if (!usuarioRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		usuario.setId(id);
		usuario = usuarioRepository.save(usuario);
		return ResponseEntity.ok(usuario);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		if (!usuarioRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		usuarioRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
}
