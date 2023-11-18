import React from "react";

const IbuScreen = () => {
  return (
    <main className="flex justify-center">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] w-full rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px] xl:text-xl">
          <li><a href="">Input Data</a></li> 
          <li>Ibu</li> 
        </ul>
      </div>

      <form action="" className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6">
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="urut" id="urut" value={1} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">No KK</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nokk" id="nokk" value={'11111111'} />
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaIbu" id="namaIbu" value={'Asunta'} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">NIK Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nik" id="nik" value={'12345'} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2] text-[11px] xl:text-base" htmlFor="">Tanggal Lahir Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2" type="date" name="ttlIbu" id="ttlIbu" value={"2003-12-01"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Umur Ibu Hamil<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="umurIbu" id="umurIbu" value={20} required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Suami <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaSuami" id="namaSuami" value={"Agus santoso"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Suami <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nikSuami" id="nikSuami" value={54321} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir Suami<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2" type="date" name="ttlSuami" id="ttlSuami" value={"2023-12-12"} required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamat" id="alamat" rows="3" value={"Karimun Jawa"} required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px] xl:mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamat" id="alamat" rows="3" value={"Karimun cina"} required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="BB" id="BB" value={60} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="TB" id="TB" value={160} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-semibold leading-[1.2] text-[10px] xl:text-base xl:font-medium" htmlFor="">Usia Kehamilan (bulan)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="usiaHamil" id="usiaHamil" value={5.5} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Lengan (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="Lila" id="Lila" value={20} required/>
        </div>

        <div className="flex gap-8 xl:gap-8">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">GPA <span className="text-red-500 absolute mt-[-6px]">*</span></label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] text-medium xl:text-base xl:font-medium">
                <div className="flex xl:gap-4 items-center">
                    <label className="w-[15%] xl:w-[20%]" htmlFor="">G</label>
                    <input className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="G" id="G" value={2} required/>
                </div>

                <div className="flex xl:gap-4 items-center">
                    <label className="w-[15%] xl:w-[20%]" htmlFor="">P</label>
                    <input className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="P" id="P" value={1} required/>
                </div>

                <div className="flex xl:gap-4 items-center">
                    <label className="w-[15%] xl:w-[20%]" htmlFor="">A</label>
                    <input className="w-[85%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="A" id="A" value={0} required/>
                </div>
            </div>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">HPHT<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="HPHT" id="HPHT" value={"2022-02-05"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TP<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="TP" id="TP" value={"2022-11-05"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">HB (g/dL)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="HB" id="HB" value={434} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">No. Hp/WA<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="tel" name="noHp" id="noHp" value={"0821-3035-3114"} pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">No. BPJS<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="BPJS" id="BPJS" value={"12345"} required/>
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-1 xl:gap-4">
          <img className="w-[22px] xl:w-[35px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
      </div>
    </main>
  );
};

export default IbuScreen;
