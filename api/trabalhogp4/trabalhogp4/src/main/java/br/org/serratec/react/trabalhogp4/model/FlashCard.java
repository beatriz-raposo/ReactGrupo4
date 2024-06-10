package br.org.serratec.react.trabalhogp4.model;
import java.util.Objects;

public class FlashCard {
	
	private Long id;
	private String pergunta;
	private String resposta;
	

	public FlashCard() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getPergunta() {
		return pergunta;
	}


	public void setPergunta(String pergunta) {
		this.pergunta = pergunta;
	}


	public String getResposta() {
		return resposta;
	}


	public void setResposta(String resposta) {
		this.resposta = resposta;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FlashCard other = (FlashCard) obj;
		return Objects.equals(id, other.id);
	}

}
