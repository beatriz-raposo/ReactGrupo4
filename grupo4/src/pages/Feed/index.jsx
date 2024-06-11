import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import HeaderFeed from "../../components/HeaderFeed";

function Feed() {
  const [filter, setFilter] = useState("Todos");

  const cards = [
    { title: "Português", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-info" },
    { title: "Matemática", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-danger" },
    { title: "História", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-darkorange", customColor: 'darkorange' },
    { title: "Geografia", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-dark" },
    { title: "Física", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-primary" },
    { title: "Química", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-purple", customColor: 'purple' },
    { title: "Biologia", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-success" },
    { title: "Sociologia", text: "Este é um exemplo de pergunta dentro do flashcard.", color: "bg-warning", customColor: '#ffb300' },
  ];

  const filterButtons = ["Todos", ...new Set(cards.map(card => card.title))];

  const filteredCards = filter === "Todos" ? cards : cards.filter(card => card.title === filter);

  return (
    <div className="geral">
      <HeaderFeed/>
    <div className="caixa_cards">
      <div className="btn-group mb-3">
        {filterButtons.map((btn, index) => (
          <button
            key={index}
            className="btn btn-secondary"
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredCards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className={`card text-white mt-3 ${card.color}`} style={{ backgroundColor: card.customColor || '' }}>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="/Update" className="btn btn-light">Ver Resposta</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Feed;
