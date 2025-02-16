import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import ListaNombres from "./components/ListaNombres";
import "./index.css";


const App = () => {
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    axios.get("http://152.42.154.220/api").then((res) => setNombres(res.data));
  }, []);

  return (
    <div>
      <h1>Formulario</h1>
      <h2>Nombre:</h2>
      <Formulario setNombres={setNombres} />
      <ListaNombres nombres={nombres} />
    </div>
  );
};

export default App;
