import axios from "axios";
import CloseButton from "/src/svg/close-button.svg";
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
      {character && currentCharacter ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            (
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex w-full justify-between align-top items-start">
                  <div className="flex flex-col py-4 px-4">
                    <div className="flex">
                      <h3 className="text-2xl">{character?.name}</h3>
                      <span className="px-2">{rarity}</span>
                    </div>
                    <h4 className="text-xl text-orange-600">
                      {character?.title}
                    </h4>
                  </div>
                  <button className="" onClick={toggleModal}>
                    <img src={CloseButton} className="h-6 w-6" />
                  </button>
                </div>
                <table className="table-auto mx-0">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap bg-indigo-100 border text-left px-4 lg:px-8 py-4">
                        Character Info
                      </th>
                      <th className="whitespace-nowrap bg-indigo-100 border text-left px-4 lg:px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 lg:px-8 py-4 font-bold">
                        Vision:
                      </td>
                      <td className="border px-4 lg:px-8 py-4">
                        {character?.vision}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 lg:px-8 py-4 font-bold">
                        Weapon:
                      </td>
                      <td className="border px-4 lg:px-8 py-4">
                        {character?.weapon}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 lg:px-8 py-4 font-bold">
                        Description:
                      </td>
                      <td className="border px-4 lg:px-8 py-4">
                        {character?.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            )
          </div>
          <div
            onClick={toggleModal}
            className="opacity-25 fixed inset-0 z-40 bg-black w-full"
          ></div>
        </>
      ) : null}
    </>
  );
}
