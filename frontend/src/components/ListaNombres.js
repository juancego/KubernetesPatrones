import React from "react";

const ListaNombres = ({ nombres }) => {
  console.log("📢 Nombres recibidos en ListaNombres:", nombres); // Verifica los datos

  return (
    <div>
      <h2>Lista de Nombres</h2>
      <ul>
        {nombres.length > 0 ? (
          nombres.map((item) => <li key={item.id}>{item.nombre}</li>)
        ) : (
          <p>⏳ Cargando o no hay nombres disponibles...</p>
        )}
      </ul>
    </div>
  );
};

export default ListaNombres;
