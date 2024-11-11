import React from 'react';

const opcionesHorario = [
    'mañana', 'tarde', 'noche' 
  ];

function DropdownHorario({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Seleccionar horario</option>
      {opcionesHorario.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}

export default DropdownHorario;