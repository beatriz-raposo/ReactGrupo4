package br.org.serratec.react.trabalhogp4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.org.serratec.react.trabalhogp4.model.Usuario;
		
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
