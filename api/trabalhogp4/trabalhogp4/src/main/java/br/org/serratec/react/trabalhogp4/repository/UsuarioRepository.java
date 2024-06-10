package br.org.serratec.react.trabalhogp4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.serratec.react.trabalhogp4.model.Usuario;
import br.org.serratec.react.trabalhogp4.model.UsuarioInserirDTO;
		
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	Usuario findByUsuario(String email);

	UsuarioInserirDTO save(UsuarioInserirDTO usuarioInserirDTO);
}
