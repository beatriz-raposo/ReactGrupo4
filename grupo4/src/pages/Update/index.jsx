import React, { useState } from 'react';
import './style.css';
import Header from '../../components/Header';

function Update() {
  const [editMode, setEditMode] = useState(false);
  const [question, setQuestion] = useState('Qual é a capital do Brasil?');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

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
    <div className={`app-container ${selectedSubject}`}>
      <Header />
      <div className="content">
        <select onChange={handleSubjectChange} value={selectedSubject}>
          <option value="">Escolha uma disciplina</option>
          <option value="geografia">Geografia</option>
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="quimica">Química</option>
          <option value="biologia">Biologia</option>
        </select>
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
      </div>
    </div>
  );
}

export default Update;
