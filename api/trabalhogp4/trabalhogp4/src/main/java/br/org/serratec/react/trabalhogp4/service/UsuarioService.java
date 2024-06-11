package br.org.serratec.react.trabalhogp4.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.serratec.react.trabalhogp4.exception.NotFoundException;
import br.org.serratec.react.trabalhogp4.model.Usuario;
import br.org.serratec.react.trabalhogp4.repository.UsuarioRepository;

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
}
