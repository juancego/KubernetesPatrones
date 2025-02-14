import React from "react";

const ListaNombres = ({ nombres }) => {
  console.log("ListaNombres recibió:", nombres);

  if (!Array.isArray(nombres)) {
    console.error("⚠️ ERROR: nombres no es un array", nombres);
    return <p>Error al cargar nombres</p>;
  }

  return (
    <ul>
      {nombres.map((n, index) => (
        <li key={index}>{n.name}</li>
      ))}
    </ul>
  );
};

export default ListaNombres;
