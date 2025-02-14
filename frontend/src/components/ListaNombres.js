import React from "react";

const ListaNombres = ({ nombres }) => {
  return (
    <ul>
      {nombres.map((item, index) => (
        <li key={index}>{item.nombre}</li>
      ))}
    </ul>
  );
};

export default ListaNombres;

