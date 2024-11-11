import React from 'react';

const opcionesOrigen = [
    'EZE', 'BAR', 'NEU', 'TUC', 'MDP', 'ROS', 'CBA', 'ESQ', 'CRV', 'OSA',
    'POS', 'GAL', 'TRE', 'DOZ', 'ECA', 'SDE', 'JUJ', 'SAL', 'SVO', 'USU',
    'IGU', 'SIS', 'VIE', 'JUA', 'BCA', 'CRR', 'UIS', 'SRA', 'CHP', 'CAT',
    'GRA', 'PAR', 'TRC', 'AER', 'DRY', 'FSA', 'LAR', 'MLG', 'TRH'
];

function DropdownOrigen({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Seleccionar origen</option>
      {opcionesOrigen.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}

export default DropdownOrigen;