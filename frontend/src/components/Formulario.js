import React, { useState } from "react";
import axios from "axios";

const Formulario = ({ setNombres }) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    try {
      const res = await axios.post("hhttp://152.42.154.220/api/names", { name: nombre });
      setNombres(prev => [...prev, res.data]); // Agregar al estado
      setNombre(""); // Limpiar input
    } catch (error) {
      console.error("Error al guardar el nombre", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Formulario;
