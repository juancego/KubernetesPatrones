import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import ListaNombres from "./components/ListaNombres";

const App = () => {
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/names").then((res) => setNombres(res.data));
  }, []);

  return (
    <div>
      <h1>Formulario</h1>
      <Formulario setNombres={setNombres} />
      <ListaNombres nombres={nombres} />
    </div>
  );
};

export default App;
