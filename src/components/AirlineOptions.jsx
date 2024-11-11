import React from "react";

const airlines = ['AEROLINEAS ARGENTINAS SA', 'FB LÍNEAS AÉREAS - FLYBONDI',
  'JETSMART AIRLINES S.A.', 'LADE', 'AMERICAN JET S.A.',
  'ANDES LÍNEAS AÉREAS S.A.'];

const AirlineOptions = () => {
  return (
    <>
      {airlines.map((airline) => (
        <option key={airline} value={airline}>
          {airline}
        </option>
      ))}
    </>
  );
};

export default AirlineOptions;
