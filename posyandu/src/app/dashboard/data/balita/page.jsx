import React from "react";
import DummyTable from "./component/DummyTable";

export const metadata = {
  title: "Data Balita",
  description: "Data Balita",
};

const DataBalita = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between mt-[110px] rounded-md bg-[#FFF4F4] font-semibold text-lg text-center w-[80%] h-9 xl:h-12 text-[#545454]">
        <p></p>
        <h3 className="ml-10">Data Balita</h3>
        <Bulan />
      </div>
      <div className="mt-10 bg-[#FFF4F4] rounded-md w-[80%] overflow-auto h-fit max-h-fit py-4 px-3">
        <DummyTable />
      </div>
      <div className="mt-7 mb-10 w-[80%] flex items-center justify-end">
        <button className="btn bg-[#FEE] flex items-center justify-between px-7 rounded-3xl shadow-md normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 13 13"
            fill="none"
          >
            <rect
              x="2.7085"
              y="8.125"
              width="7.58333"
              height="2.16667"
              rx="1.08333"
              fill="#FF5757"
            />
            <path
              d="M6.49984 7.58334L6.07557 8.0076L6.49984 8.43186L6.9241 8.0076L6.49984 7.58334ZM7.09984 2.70834C7.09984 2.37697 6.83121 2.10834 6.49984 2.10834C6.16847 2.10834 5.89984 2.37697 5.89984 2.70834L7.09984 2.70834ZM3.36724 5.29927L6.07557 8.0076L6.9241 7.15907L4.21577 4.45074L3.36724 5.29927ZM6.9241 8.0076L9.63243 5.29927L8.78391 4.45074L6.07557 7.15907L6.9241 8.0076ZM7.09984 7.58334L7.09984 2.70834L5.89984 2.70834L5.89984 7.58334L7.09984 7.58334Z"
              fill="#222222"
            />
            <path
              d="M2.7085 8.66666L2.7085 9.20833C2.7085 9.80664 3.19352 10.2917 3.79183 10.2917L9.2085 10.2917C9.8068 10.2917 10.2918 9.80664 10.2918 9.20833V8.66666"
              stroke="#222222"
              stroke-width="1.2"
            />
          </svg>
          <p className="font-semibold">Cetak</p>
        </button>
      </div>
    </main>
  );
};

export default DataBalita;
