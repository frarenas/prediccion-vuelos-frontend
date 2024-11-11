import React from 'react';

const opcionesDestino = ['ECA', 'JUJ', 'USU', 'BAR', 'CRV', 'TUC', 'DOZ', 'SAL', 'CBA', 'EZE', 'TRE', 'MDP',
  'VIE', 'SIS', 'POS', 'NEU', 'BCA', 'CRR', 'ESQ', 'IGU', 'ROS', 'SRA', 'JUA', 'OSA',
  'GAL', 'GRA', 'TRC', 'SVO', 'UIS', 'PAR', 'CHP', 'SDE', 'LAR', 'CAT', 'AER', 'DRY',
  'FSA', 'TRH', 'MLG', 'RTA'];

function DropdownDestino({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Seleccionar destino</option>
      {opcionesDestino.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}

export default DropdownDestino;