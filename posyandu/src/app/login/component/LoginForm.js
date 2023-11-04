"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // LOGIN
  const signIn = (e) => {
    e.preventDefault();

    const data = {
      email: inputs.email,
      password: inputs.password,
    };

    axios
      .post("http://localhost:3000/api/login", data)
      .then(function (response) {
        alert(response.data.message);

        if (response.data.message != "Data Tidak Lengkap!") {
          router.push("/dashboard");
        }
      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
      });
  };

  return (
    // FORM LOGIN
    <form onSubmit={signIn} className="flex flex-col w-[80%] gap-5">
      <div className="text-3xl font-bold">Login Akun</div>

      {/* INPUT FIELD */}
      <input
        name="email"
        value={inputs.email}
        onChange={handleInput}
        placeholder="Email / Username"
        type="text"
        className="input input-bordered"
      />
      <div className="input input-bordered flex items-center justify-between">
        <input
          name="password"
          value={inputs.password}
          onChange={handleInput}
          placeholder="Password"
          type="text"
        />

        <input type="checkbox" className="checkbox" />
      </div>

      {/* SUBMIT BUTTON */}
      <button type="submit" className="btn bg-slate-700 text-white">
        Login
      </button>

      <p className="self-center justify-center cursor-pointer text-blue-700 hover:underline ">
        Lupa Password?
      </p>
    </form>
  );
};

export default LoginForm;
