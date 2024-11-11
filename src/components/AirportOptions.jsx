import React from "react";

const airports = [
  { value: "BCA", label: "BAHÍA BLANCA/COMANDANTE ESPORA" },
  { value: "AER", label: "BUENOS AIRES/AEROPARQUE J. NEWBERY" },
  { value: "CAT", label: "CATAMARCA" },
  { value: "IGU", label: "CATARATAS DEL IGUAZÚ/MY. D. CARLOS EDUARDO KR..." },
  { value: "CRV", label: "COMODORO RIVADAVIA/GRAL. E. MOSCONI" },
  { value: "CRR", label: "CORRIENTES" },
  { value: "CBA", label: "CÓRDOBA/ING. AER. A. L. V. TARAVELLA" },
  { value: "ECA", label: "EL CALAFATE" },
  { value: "ESQ", label: "ESQUEL/BRIGADIER GENERAL ANTONIO PARODI" },
  { value: "EZE", label: "EZEIZA/MINISTRO PISTARINI" },
  { value: "FSA", label: "FORMOSA" },
  { value: "JUJ", label: "JUJUY/GOBERNADOR GUZMÁN" },
  { value: "MDP", label: "MAR DEL PLATA/ASTOR PIAZZOLLA" },
  { value: "DOZ", label: "MENDOZA/EL PLUMERILLO" },
  { value: "NEU", label: "NEUQUÉN/PRESIDENTE PERÓN" },
  { value: "PAR", label: "PARANÁ/GRAL. URQUIZA" },
  { value: "POS", label: "POSADAS/LIBERTADOR GRAL. D. JOSÉ DE SAN MARTÍN" },
  { value: "DRY", label: "PUERTO MADRYN/EL TEHUELCHE" },
  { value: "SIS", label: "RESISTENCIA" },
  { value: "ROS", label: "ROSARIO/ISLAS MALVINAS" },
  { value: "TRC", label: "RÍO CUARTO/ÁREA DE MATERIAL" },
  { value: "GAL", label: "RÍO GALLEGOS/PILOTO CIVIL NORBERTO FERNANDEZ" },
  { value: "GRA", label: "RÍO GRANDE" },
  { value: "SAL", label: "SALTA/GENERAL D. MARTÍN MIGUEL DE GÜEMES" },
  { value: "BAR", label: "SAN CARLOS DE BARILOCHE" },
  { value: "JUA", label: "SAN JUAN/DOMINGO FAUSTINO SARMIENTO" },
  { value: "UIS", label: "SAN LUIS/BRIG. MAYOR D. CÉSAR RAUL OJEDA" },
  { value: "CHP", label: "SAN MARTÍN DE LOS ANDES/AVIADOR C. CAMPOS" },
  { value: "SRA", label: "SAN RAFAEL/S.A. SANTIAGO GERMANO" },
  { value: "SVO", label: "SANTA FÉ/SAUCE VIEJO" },
  { value: "OSA", label: "SANTA ROSA" },
  { value: "SDE", label: "SANTIAGO DEL ESTERO/VCOM. ANGEL DE LA PAZ ARAG..." },
  { value: "TRE", label: "TRELEW/ALMIRANTE ZAR" },
  { value: "TUC", label: "TUCUMÁN/TENIENTE BENJAMIN MATIENZO" },
  { value: "USU", label: "USHUAIA/MALVINAS ARGENTINAS" },
  { value: "VIE", label: "VIEDMA/GOBERNADOR CASTELLO" },
];

const AirportOptions = () => {
  return (
    <>
      {airports.map((airport) => (
        <option key={airport.value} value={airport.value}>
          {airport.label}
        </option>
      ))}
    </>
  );
};

export default AirportOptions;
