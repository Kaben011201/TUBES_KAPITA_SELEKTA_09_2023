import React from "react";

const IbuScreen = () => {
  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px] xl:text-xl">
          <li><a href="">Input Data</a></li> 
          <li>Ibu</li> 
        </ul>
      </div>

      <form action="" className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6">
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="urut" id="urut" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">No KK</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nokk" id="nokk" />
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="namaIbu" id="namaIbu" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">NIK Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nik" id="nik" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] text-[11px] xl:text-base" htmlFor="">Tanggal Lahir Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2" type="date" name="ttlIbu" id="ttlIbu" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Umur Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="umurIbu" id="umurIbu" required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Suami <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="namaSuami" id="namaSuami" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Suami <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nikSuami" id="nikSuami" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir Suami<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2" type="date" name="ttlSuami" id="ttlSuami" required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BB" id="BB" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="TB" id="TB" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-semibold leading-[1.2] text-[10px] xl:text-base xl:font-medium" htmlFor="">Usia Kehamilan (bulan)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="usiaHamil" id="usiaHamil" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Lengan (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Lila" id="Lila" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">GPA<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="GPA" id="GPA" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">HPHT<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="HPHT" id="HPHT" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TP<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="TP" id="TP" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">HB<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="HB" id="HB" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">No. Hp/WA<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="noHp" id="noHp" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">No. BPJS<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BPJS" id="BPJS" required/>
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-4">
          <img className="w-[22px] xl:w-[35px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
      </div>
    </main>
  );
};

export default IbuScreen;
