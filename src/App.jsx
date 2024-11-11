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
  const [error, setError] = useState(null);

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

      if (!response.ok) {
        if (response.status === 400) {
          setError(result);
          setResultado(null);
        } else {
          setError("Ocurrió un error");
        }
      } else {
        setResultado(result);
        setError(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    }
  };

  return (
    <Container className="mt-5">
      <div className="h2 m-4 p-3">
        Predicción de duración de vuelos en Argentina
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="row p-2" controlId="origen">
          <Form.Label className="col text-start">
            Selecciona un Origen
          </Form.Label>
          <Form.Select
            className="col"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          >
            <option>Selecciona un Origen</option>
            <AirportOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group className="row p-2" controlId="destino">
          <Form.Label className="col text-start">
            Selecciona un Destino
          </Form.Label>
          <Form.Select
            className="col"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          >
            <option>Selecciona un destino</option>
            <AirportOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group className="row p-2" controlId="aerolinea">
          <Form.Label className="col text-start">
            Selecciona una aerolinea
          </Form.Label>
          <Form.Select
            className="col"
            value={aerolinea}
            onChange={(e) => setAerolinea(e.target.value)}
          >
            <option>Selecciona una aerolinea</option>
            <AirlineOptions />
          </Form.Select>
        </Form.Group>

        <Form.Group className="row p-2">
          <Form.Label className="col text-start">Fecha del vuelo</Form.Label>
          <div className="col text-end">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="form-control"
            />
          </div>
        </Form.Group>

        <Form.Group className="row p-2" controlId="time">
          <Form.Label className="col text-start">
            Selecciona un horario
          </Form.Label>
          <Form.Select
            className="col"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          >
            <option>Selecciona un horario</option>
            <TimeOptions />
          </Form.Select>
        </Form.Group>

        <Button className="m-4" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {resultado && (
        <div className="h5 border border-success rounded m-4 p-3">
          <p>
            El vuelo seleccionado tiene una duración de {resultado.duration}
          </p>
          <p>
            Historicamente, el promedio de la duración del vuelo es de{" "}
            {resultado.promedio}
          </p>
        </div>
      )}
      {error && (
        <div className="h5 border border-success rounded m-4 p-3">
          <p>{error}</p>
        </div>
      )}
    </Container>
  );
}

export default App;
