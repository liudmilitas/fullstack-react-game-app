import React, { useState } from "react";
import GoogleIcon from "/src/svg/google-icon.svg";
import GitHubDark from "/src/svg/github-dark.svg";

export default function Register() {
  // States for signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  function onSignupClick() {
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    console.log("Sign up " + userData.username + " " + userData.password);
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-full">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
          SIGN UP
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              onChange={(e) => handleInputChange(e)}
              value={username}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              onChange={(e) => handleInputChange(e)}
              value={email}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              onChange={(e) => handleInputChange(e)}
              required
              value={password}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={onSignupClick}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Create account
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600 hover:bg-indigo-200 hover:border-gray-900"
          >
            <img className="w-5 h-5 fill-current" src={GoogleIcon} />
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600 hover:bg-indigo-200 hover:border-gray-900">
            <img className="w-5 h-5 fill-current" src={GitHubDark} />
          </button>
        </div>

        <p className="mt-8 text-lg font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
