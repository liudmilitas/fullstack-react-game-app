import React, { useEffect, useState } from "react";

// TODO: Render delay!!

export default function CharacterInfo({ currentCharacter, toggleModal }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function fetchCharacter() {
      const { data } = await axios.get(
        "https://api.genshin.dev/characters/" + currentCharacter.toLowerCase()
      );
      setCharacter(data);
    }

    if (currentCharacter) {
      fetchCharacter().catch(console.error);
    }
  }, []);

  let rarity = "";

  if (character) {
    for (let i = 0; i < character.rarity; i++) {
      rarity += "⭐";
    }
  }

  return (
    <>
      {currentCharacter ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            (
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex w-full justify-between align-top items-start">
                  <div className="flex flex-col">
                    <div className="flex">
                      <h3 className="text-2xl">{character?.name}</h3>
                      <span>{rarity}</span>
                    </div>
                    <h4 className="text-xl text-orange-600">
                      {character?.title}
                    </h4>
                  </div>
                  <button className="" onClick={toggleModal}>
                    <span className="text-xl">×</span>
                  </button>
                </div>
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
            </div>
            )
          </div>
          <div
            onClick={() => close()}
            className="opacity-25 fixed inset-0 z-40 bg-black w-full"
          ></div>
          {console.log(currentCharacter)}
        </>
      ) : null}
    </>
  );
}
