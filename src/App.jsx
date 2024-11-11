import { useState } from 'react'
import './App.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownOrigen from "./components/DropdownOrigen";
import DropdownDestino from './components/DropdownDestino';
import DropdownAerolinea from './components/DropdownAerolinea';
import DropdownHorario from './components/DropdownHorario';

function App() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [aerolinea, setAerolinea] = useState('');
  const [date, setDate] = useState(new Date());
  const [horario, setHorario] = useState('');

  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Origen: origen,
      Destino: destino,
      Aerolinea: aerolinea,
      Fecha: date,
      periodo_dia: horario
    };

    try {
      console.log(data);
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(result.duration);   
      setResultado(result.duration);
 // Maneja la respuesta del servidor
    } catch (error) {
      console.error('Error:', error);
      setResultado("No pudimos determinar la duración del vuelo");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      <DropdownOrigen value={origen} onChange={(e) => setOrigen(e.target.value)} />
      <DropdownDestino value={destino} onChange={(e) => setDestino(e.target.value)} />
      <DropdownAerolinea value={aerolinea} onChange={(e) => setAerolinea(e.target.value)} />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <DropdownHorario value={horario} onChange={(e) => setHorario(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
{resultado && resultado}
    </>
  );
}

export default App
