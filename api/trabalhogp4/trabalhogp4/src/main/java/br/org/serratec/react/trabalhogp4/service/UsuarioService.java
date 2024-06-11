package br.org.serratec.react.trabalhogp4.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import br.org.serratec.react.trabalhogp4.exception.NotFoundException;
import br.org.serratec.react.trabalhogp4.model.Usuario;
import br.org.serratec.react.trabalhogp4.model.UsuarioDTO;
import br.org.serratec.react.trabalhogp4.model.UsuarioInserirDTO;
import br.org.serratec.react.trabalhogp4.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	


	public Usuario findById(Long id) throws NotFoundException {
		Optional<Usuario> usuarioOpt = usuarioRepository.findById(id);
		if (usuarioOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return usuarioOpt.get();
	}
	
	public List<UsuarioDTO> findAll() {
		 List<Usuario> usuarios = usuarioRepository.findAll();
		 
		 List<UsuarioDTO> usuarioDTO = new ArrayList<>();
		 
		 for (Usuario usuario: usuarios) {
			 UsuarioDTO usuDTO = new UsuarioDTO(usuario);
			 usuarioDTO.add(usuDTO);
		 }
		 
		 // List<UsuarioDTO> usuarioDTO = usuarios.stream().map(UsuarioDTO::new).toList();
		 
		 return usuarioDTO;
	}
	
	@Transactional
	public UsuarioDTO inserir(UsuarioInserirDTO usuarioInserirDTO) throws Exception {
		if (!usuarioInserirDTO.getSenha().equalsIgnoreCase(usuarioInserirDTO.getConfirmaSenha())) {
			throw new Exception("Senha e Confirma Senha não são iguais");
		}
		Usuario usuarioBd = usuarioRepository.findByNome(usuarioInserirDTO.getNome());
		if (usuarioBd != null) {
			throw new Exception("Email ja existente");
		}
		
		Usuario usuario = new Usuario();
		usuario.setNome(usuarioInserirDTO.getNome());
		usuario.setSenha(usuarioInserirDTO.getSenha());
		
		usuario = usuarioRepository.save(usuario);
		
		UsuarioDTO usuarioDTO = new UsuarioDTO(usuario);
		return usuarioDTO;
	}
}
