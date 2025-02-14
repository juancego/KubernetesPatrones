import React from "react";

const ListaNombres = ({ nombres }) => {
  return (
    <ul>
      {nombres.map((n, index) => (
        <li key={index}>{n.name}</li>
      ))}
    </ul>
  );
};

export default ListaNombres;
