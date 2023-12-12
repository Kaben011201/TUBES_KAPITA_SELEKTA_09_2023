"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosConfig from "../../../utils/axios";
import Cookies from "js-cookie";

const LoginForm = () => {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  // LOGIN
  const signIn = (e) => {
    e.preventDefault();

    const data = {
      email: inputs.email,
      password: inputs.password,
    };

    axiosConfig
      .post("api/login", data)
      .then(function (response) {
        
        
        if (response.data.status != 400) {
          Cookies.set('token', response.data.token, { expires: 1 })
          router.push("/dashboard");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error.data.message);
      });
  };

  return (
    // FORM LOGIN
    <form
      onSubmit={signIn}
      className="flex flex-col w-[80%] xl:w-[60%] gap-5 -mt-12"
    >
      <div className="hidden text-[25px] font-bold text-white xl:flex xl:flex-col -mb-3">
        <h1 className="text-[50px] font-semibold">Halo!</h1>
        <p className="text-[18px] font-normal -mt-2 mb-6">
          Silahkan masuk ke dalam akun anda.
        </p>
      </div>
      <div className="text-[25px] font-bold text-black xl:hidden -mb-3">
        Log In
      </div>
      {/* INPUT FIELD */}
      <div className="input input-bordered flex items-center rounded-[15px] border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M18.0835 18.743C17.6657 17.5735 16.7451 16.5401 15.4643 15.8031C14.1836 15.066 12.6144 14.6665 11.0001 14.6665C9.38577 14.6665 7.81656 15.066 6.53583 15.8031C5.25511 16.5401 4.33444 17.5735 3.91663 18.743"
            stroke="#222222"
            stroke-linecap="round"
          />
          <ellipse
            cx="10.9999"
            cy="7.33317"
            rx="3.66667"
            ry="3.66667"
            stroke="#222222"
            stroke-linecap="round"
          />
        </svg>
        <input
          name="email"
          value={inputs.email}
          onChange={handleInput}
          placeholder="Username"
          type="text"
          className="ml-2 max-w-full w-full"
        />
      </div>

      <div className="input input-bordered flex items-center rounded-[15px] border-black">
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M4.125 12.7418C4.125 10.834 4.125 9.88007 4.71079 9.29428C5.29657 8.7085 6.23938 8.7085 8.125 8.7085H13.875C15.7606 8.7085 16.7034 8.7085 17.2892 9.29428C17.875 9.88007 17.875 10.834 17.875 12.7418V12.7418C17.875 15.6036 17.875 17.0345 16.9963 17.9131C16.1176 18.7918 14.7034 18.7918 11.875 18.7918H10.125C7.29657 18.7918 5.88236 18.7918 5.00368 17.9131C4.125 17.0345 4.125 15.6036 4.125 12.7418V12.7418Z"
                stroke="#222222"
              />
              <path
                d="M15.125 8.7085V7.3335C15.125 5.05532 13.2782 3.2085 11 3.2085V3.2085C8.72183 3.2085 6.875 5.05532 6.875 7.3335V8.7085"
                stroke="#222222"
                stroke-linecap="round"
              />
            </svg>
            <input
              name="password"
              value={inputs.password}
              onChange={handleInput}
              placeholder="Password"
              type={passwordType}
              className="ml-2 max-w-full w-full"
            />
          </div>
          <button onClick={togglePassword} className="-ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="7.99992"
                cy="8.00016"
                r="2.16667"
                stroke="#222222"
                className="flex-shrink-0"
              />
              <path
                d="M14 8C14 8 13.3333 2.66667 8 2.66667C2.66667 2.66667 2 8 2 8"
                stroke="#222222"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="font-light self-center justify-center cursor-pointer hover:underline xl:text-white">
        Lupa Password?
      </p>
      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="btn xl:border-black text-white xl:text-[#FF5757] font-medium xl:font-semibold text-[20px] xl:text-[22px] bg-[#FF5757] xl:bg-white rounded-[26px] w-[175px] self-center normal-case"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
