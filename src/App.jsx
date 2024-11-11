import { useState } from "react";
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AirportOptions from "./components/AirportOptions";
import TimeOptions from "./components/TimeOptions";
import AirlineOptions from "./components/AirlineOptions";

function App() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [aerolinea, setAerolinea] = useState("");
  const [date, setDate] = useState(new Date());
  const [horario, setHorario] = useState("");

  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Origen: origen,
      Destino: destino,
      Aerolinea: aerolinea,
      Fecha: date,
      periodo_dia: horario,
    };

    try {
      console.log(data);
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.duration);
      setResultado(result.duration);
      // Maneja la respuesta del servidor
    } catch (error) {
      console.error("Error:", error);
      setResultado("No pudimos determinar la duración del vuelo");
    }
  };

  return (
    <Container className="mt-5">
      <div className="h2 m-4 p-3">
        Predicción de duración de vuelos en Argentina
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="origen">
          <Form.Label>Selecciona un Origen</Form.Label>
          <Form.Select
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          >
            <option>Selecciona un Origen</option>
            <AirportOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="destino">
          <Form.Label>Selecciona un Destino</Form.Label>
          <Form.Select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          >
            <option>Selecciona un destino</option>
            <AirportOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="aerolinea">
          <Form.Label>Selecciona una aerolinea</Form.Label>
          <Form.Select
            value={aerolinea}
            onChange={(e) => setAerolinea(e.target.value)}
          >
            <option>Selecciona una aerolinea</option>
            <AirlineOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha del vuelo</Form.Label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Selecciona un horario</Form.Label>
          <Form.Select
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          >
            <option>Selecciona un horario</option>
            <TimeOptions />
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {resultado && (
        <div className="h5 border border-success rounded m-4 p-3">
          El vuelo seleccionado tiene una duración de {resultado}
        </div>
      )}
    </Container>
  );
}

export default App;
