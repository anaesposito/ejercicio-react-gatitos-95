const Gato = ({ nombre, color, edad, comeLasagna, amigos, img }) => {
  return (
    <div>
      <div>
        <img alt="imagen del gato" src={img} width={200} />
        <h3>Nombre: {nombre}</h3>
        <p>Color: {color}</p>
        <p>Edad: {edad}</p>
        <p>
          Le gusta comer Lasagna :
          {comeLasagna
            ? "Si, le encanta"
            : "No, es un gato normal, no come lasagna"}
        </p>
        <p>Sus mejores amigos son:{amigos}</p>
      </div>
    </div>
  );
};

export default Gato;
