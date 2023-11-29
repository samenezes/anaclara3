import React, { useState } from 'react';

const TaskForms = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button classname="botao"type="submit">Adicionar Nota</button>
    </form>
  );
};

export default TaskForms;