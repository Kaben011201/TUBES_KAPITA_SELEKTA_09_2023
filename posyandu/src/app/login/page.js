import React from "react";
import LoginForm from "@/app/login/component/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <main className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen w-screen bg-white flex flex-col">
        <div className="w-screen h-[80%] login bg-cover bg-[#FF5757] rounded-b-[40px] flex flex-col justify-center items-center shadow-[0_4px_4px_0px_#B9B9B9]">
          <img
            width={135}
            height={135}
            src="login/LOGOPUTIH.png"
            alt=""
          />
          <p className="text-[20px] text-white font-semibold tracking-wide">
            Selamat Datang!
          </p>
        </div>
        <div className="w-screen h-screen bg-white flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
