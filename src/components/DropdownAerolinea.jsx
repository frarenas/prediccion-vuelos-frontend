import React from 'react';

const opcionesAerolinea = ['AEROLINEAS ARGENTINAS SA', 'FB LÍNEAS AÉREAS - FLYBONDI',
  'JETSMART AIRLINES S.A.', 'LADE', 'AMERICAN JET S.A.',
  'ANDES LÍNEAS AÉREAS S.A.'];

function DropdownAerolinea({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Seleccionar aerolinea</option>
      {opcionesAerolinea.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}

export default DropdownAerolinea;