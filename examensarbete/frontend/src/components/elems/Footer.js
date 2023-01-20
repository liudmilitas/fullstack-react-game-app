import React from "react";
import GitHubLogo from "/src/svg/github.svg";

export default function Footer() {
  return (
    <footer className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-600 w-full">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full relative flex flex-wrap justify-center lg:w-auto lg:justify-start">
          <p className="lg:text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
            Liudmila Kazakbaeva, 2023
          </p>
          <a
            className="lg:text-lg font-bold leading-relaxed px-3 flex items-center justify-center mr-4 py-2 whitespace-nowrap text-white fill-white hover:opacity-75 underline"
            href="https://github.com/liudmilitas/fullstack-react-game-app"
            target="_blank"
          >
            <img className="h-6 fill-white mr-2 mb-1" src={GitHubLogo} />
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
