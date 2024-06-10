package br.org.serratec.react.trabalhogp4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.org.serratec.react.trabalhogp4.model.FlashCard;

@Repository
public interface FlashCardRepository extends JpaRepository<FlashCard, Long> {

}
