import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../elems/Loader";
import { login } from "../../actions/userActions";

export default function Login() {
  // States for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  function redirect() {
    if (userInfo) {
      navigate("/");
    }
  }

  useEffect(() => {
    redirect();
  }, [redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-full">
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
            LOGIN
          </h1>
          <form className="mt-6" onSubmit={submitHandler}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                id="email"
                required
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
                placeholder="Enter Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 font-light text-center text-gray-700 text-lg">
            {" "}
            No account yet?{" "}
            <Link
              to={"/register"}
              className="font-medium text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
