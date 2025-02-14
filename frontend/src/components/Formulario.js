import React, { useState } from "react";
import axios from "axios";

const Formulario = ({ setNombres }) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost/api/names", { name: nombre });
    setNombres((prev) => [...prev, res.data]);
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Formulario;
