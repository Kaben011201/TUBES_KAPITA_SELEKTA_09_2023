import React from "react";
import LoginForm from "@/app/login/component/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen w-screen bg-white flex flex-col xl:flex-row">
        <div className="w-screen h-[80%] xl:h-screen login bg-cover bg-[#FF5757] xl:bg-white rounded-b-[40px] xl:rounded-none flex flex-col xl:hidden justify-center items-center shadow-[0_4px_4px_0px_#B9B9B9]">
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
        <div className="hidden xl:flex flex-col w-screen h-screen login bg-cover bg-[#FF5757] xl:bg-white rounded-b-[40px] xl:rounded-none justify-between items-center shadow-[0_4px_4px_0px_#B9B9B9]">
          <div className="flex self-start justify-center items-center ml-3 mt-3">
            <img
              width={76}
              height={76}
              src="login/logo.png"
              alt=""
            />
            <h3 className="text-base font-semibold text-[#FF5757]">Pos Pelayanan Terpadu</h3>
          </div>
          <img
            width={443}
            height={443}
            src="login/home.png"
            alt=""
          />
          <div className="ml-20 self-start flex flex-col mb-24">
            <h1 className="w-[366px] text-[32px] font-semibold">
            Kenapa harus ke Posyandu?
            </h1>
            <p className="w-[600px] font-medium">
            Agar pelayanan kesehatan dasar, pemantauan pertumbuhan anak, edukasi kesehatan, dan kolaborasi dengan petugas kesehatan dapat tersampaikan secara merata bagi setiap masyarakat.
            </p>
          </div>
        </div>
        <div className="w-screen xl:w-[40%] h-screen bg-white xl:bg-[#FF5757] flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;