import { useState } from "react";

const Gatitos = ({ nombre, color }) => {
  const [gatito, setGatito] = useState(true);
  const handleClick = () => {
    setGatito(false);
  };

  return (
    <div>
      <h3>El gatito se llama {nombre}</h3>
      <p>{gatito && `Y es de color ${color}`}</p>
      <button onClick={handleClick}>Ocultar color gatito</button>
    </div>
  );
};

export default Gatitos;
