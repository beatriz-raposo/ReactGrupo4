import React, { useState } from 'react';
import './style.css'; 


function Update() {
  const [editMode, setEditMode] = useState(false);
  const [question, setQuestion] = useState('Qual é a capital do Brasil?');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    console.log('Pergunta deletada');
  };

  const handleSave = () => {
    setEditMode(false);
    console.log('Pergunta salva');
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="flashcard">
      {editMode ? (
        <textarea
          className="question-input"
          value={question}
          onChange={handleChange}
        />
      ) : (
        <div className="question">{question}</div>
      )}
      <div className="button-group">
        {!editMode && <button onClick={handleEdit}>Editar</button>}
        <button onClick={handleDelete}>Deletar</button>
        {editMode && <button onClick={handleSave}>Salvar</button>}
      </div>
    </div>
  );
}

export default Update;
