import React from "react";

const ListaNombres = ({ nombres }) => {
  return (
    <ul>
      {nombres.map((item, index) => (
          <li key={index}>{item.value ? item.value : "Sin nombre"}</li>
      ))}
    </ul>
  );
};

export default ListaNombres;
