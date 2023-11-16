import React from "react";

const LansiaScreen = () => {
  return (
    <div className="bg-[#F2F1EF] m-[7px] rounded-[5px] px-[7px] py-[7px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px]">
          <li><a href="">Input Data</a></li> 
          <li>Lansia</li> 
        </ul>
      </div>

      <form action="" className="flex flex-col gap-[7px] text-[12px] my-2">
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="urut" id="urut" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium" htmlFor="">NIK</label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="nik" id="nik" />
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Nama Lengkap <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm" type="text" name="nama" id="nama" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm px-2" type="date" name="ttl" id="ttl" required/>
        </div>

        <div className="flex gap-6 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Jenis Kelamin<span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <div className="flex flex-row gap-20">
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="jenkel" id="pria" required/>
              <label htmlFor="">L</label>
            </div>
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="jenkel" id="wanita" />
              <label htmlFor="">P</label>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px]">*</span></label>
          <textarea className="w-[77%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BB" id="BB" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="TB" id="TB" required/>
        </div>
 
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Tensi Darah<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="tensi" id="tensi" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">No. BPJS<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BPJS" id="BPJS" required/>
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] h-[35px] self-end mt-3 rounded-[20px] text-white font-semibold text-sans text-[16px] pr-1 flex items-center justify-center">
          <img className="w-[22px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
    </div>
  );
};

export default LansiaScreen;
