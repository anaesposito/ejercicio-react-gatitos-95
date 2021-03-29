import { useState } from "react";
import "./App.scss";
import Tarjeta from "./components/Tarjeta";
import Gato from "./components/Gato";
import Gatitos from "./components/Gatitos";
const App = () => {
  const titulo = "Titulo cualquiera";
  const [mostrarTituloApp, setMostrarTituloApp] = useState(true);
  const [mostrarGatitos, setMostrarGatitos] = useState(true);

  const handleClick = () => {
    setMostrarTituloApp(false);
  };

  const handleClickMostrarGatitos = () => {
    setMostrarGatitos(false);
  };

  const gato = {
    nombre: "Garfield",
    color: "naranja",
    edad: 12,
    comeLasagna: true,
    amigos: ["Odie", "Jon"],
    img:
      "https://media.historiahoy.com.ar/adjuntos/231/imagenes/000/033/0000033260.jpg",
  };

  const gatitos = [
    {
      nombre: "Michifuz",
      color: "negro",
      id: 1,
    },
    {
      nombre: "Cocó",
      color: "blanco",
      id: 2,
    },
    {
      nombre: "Garfield",
      color: "naranja",
      id: 3,
    },
  ];

  return (
    <div>
      <div className="titulo">
        <h1>{mostrarTituloApp && titulo}</h1>
        <Tarjeta titulo={titulo} />
        <button onClick={handleClick}>Ocultar Titulo</button>
      </div>
      <div className="gato">
        <Gato
          nombre={gato.nombre}
          color={gato.color}
          edad={gato.edad}
          comeLasagna={gato.comeLasagna}
          amigos={gato.amigos}
          img={gato.img}
        />
      </div>

      <div className="gatitos">
        {mostrarGatitos &&
          gatitos.map((gatito) => (
            <Gatitos
              key={gatito.id}
              nombre={gatito.nombre}
              color={gatito.color}
            />
          ))}
        <button onClick={handleClickMostrarGatitos}>Ocultar Gatitos</button>
      </div>
    </div>
  );
};

export default App;
