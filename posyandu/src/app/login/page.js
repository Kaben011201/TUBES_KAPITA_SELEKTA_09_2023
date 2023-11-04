import React from "react";
import LoginForm from "@/app/login/component/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-white flex">
      <div className="w-[65%] h-screen bg-gray-400 login bg-cover"></div>
      <div className="w-[35%] h-screen bg-white flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
