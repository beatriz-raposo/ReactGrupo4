package br.org.serratec.react.trabalhogp4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.org.serratec.react.trabalhogp4.model.FlashCard;
import br.org.serratec.react.trabalhogp4.repository.FlashCardRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/flash-cards")
@CrossOrigin
public class FlashCardController {

	@Autowired
	private FlashCardRepository flashCardRepository;

//listar todos os flashcards
	
@GetMapping
public List<FlashCard> listar(){
	return flashCardRepository.findAll();
}

//criar um flashcard

@PostMapping
@ResponseStatus(HttpStatus.CREATED)
public FlashCard criar (@Valid @RequestBody FlashCard flashCard) {
	FlashCard novoFlashCard = flashCardRepository.save(flashCard);
	return novoFlashCard;
	
}

//editar flashcard

@PutMapping("/{id}")
public ResponseEntity<FlashCard> editar(@PathVariable Long id, @Valid @RequestBody FlashCard flashCard){ 
 if (!flashCardRepository.existsById(id)) {
	 return ResponseEntity.notFound().build();
 }
 flashCard.setId(id);
 flashCard = flashCardRepository.save(flashCard);
 return ResponseEntity.ok(flashCard);
}

//deletar flashcard

@DeleteMapping("/{id}")
public ResponseEntity<Void> deletar(@PathVariable Long id){
	if (!flashCardRepository.existsById(id)) {
		return ResponseEntity.notFound().build();

	}
	flashCardRepository.deleteById(id);
	return ResponseEntity.noContent().build();

}
}

