import React, { useEffect, useState } from "react";

import CardComponent from "../CardComponent/index";

// Catalogo

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);

  console.log("users", users);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <>
      <div>index</div>
      {users.map((user) => {
        return <h1>User</h1>;
      })}
    </>
  );
};

export default ItemListContainer;
