import React from "react";

const InputScreen = () => {
  return (
    <div className="bg-[#F2F1EF] mx-[5px] my-[10px] rounded-[5px] px-[7px] py-[7px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px]">
          <li>Input Data</li> 
          <li>Anak</li> 
          <li>Balita</li>
          <li>Detail Balita</li>
        </ul>
      </div>
      <form action="" className="flex flex-col gap-[7px] text-[12px] my-2">
        <div className="flex gap-2 items-center">
          <label className="w-[20%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[80%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="urut" id="urut" />
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[20%] text-end font-medium" htmlFor="">NIK</label>
          <input className="w-[80%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="urut" id="urut" />
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[20%] text-end font-medium leading-[1.2]" htmlFor="">Nama Lengkap <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[80%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="urut" id="urut" />
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[20%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[80%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="date" name="urut" id="urut" />
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[20%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[80%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="date" name="urut" id="urut" />
        </div>

        
      </form>
    </div>
  );
};

export default InputScreen;
