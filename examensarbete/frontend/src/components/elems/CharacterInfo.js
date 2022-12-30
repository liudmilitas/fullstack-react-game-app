import React, { useEffect, useState } from "react";

export default function CharacterInfo() {
  const [character, setCharacter] = useState({});

  const fetchCharacter = () => {
    return fetch("https://api.genshin.dev/characters/amber")
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  };

  useEffect(() => {
    fetchCharacter();
  }, {});

  let rarity = "";

  if (character) {
    for (let i = 0; i < character.rarity; i++) {
      rarity += "⭐";
    }
  }

  return (
    <div className="container">
      {character && (
        <div>
          <h3 className="text-2xl">{character?.name}</h3>
          <h4 className="text-xl text-orange-600">{character?.title}</h4>
          <p>{rarity}</p>
          <table className="table-auto mx-0">
            <thead>
              <tr>
                <th>Character Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vision</td>
                <td>{character?.vision}</td>
              </tr>
              <tr>
                <td>Weapon</td>
                <td>{character?.weapon}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{character?.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
