import React from "react";

const BayiScreen = () => {
  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px] xl:text-xl">
          <li><a href="">Input Data</a></li> 
          <li>Bayi</li> 
        </ul>
      </div>

      <form action="" className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6">
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="urut" id="urut" value={3} required/>
        </div>
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">NIK</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nik" id="nik" value={"32423232"} />
        </div>
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Lengkap <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nama" id="nama" value={"Endang"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="ttl" id="ttl" value={"2023-02-01"} required/>
        </div>

        <div className="flex gap-6 items-center xl:my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Jenis Kelamin<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <div className="flex flex-row gap-10 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="jenkel" id="pria" checked required/>
              <label htmlFor="">Laki-laki</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="jenkel" id="wanita" />
              <label htmlFor="">Perempuan</label>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaIbu" id="namaIbu" value={"Christin"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nikIbu" id="nikIbu" value={"213443333"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaAyah" id="namaAyah" value={"Arya"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nikAyah" id="nikAyah" value={"123232323"} required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamat" id="alamat" rows="3" value={"Perumdam Indah Sejaterah"} required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px] xl:mt-[-9px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamat" id="alamat" rows="3" value={"Bali"} required></textarea>
        </div>

        <div className="flex gap-6 items-center xl:my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Punya Buku KIA?<span className="text-red-500 absolute mt-[-18px] xl:mt-[-7px]">*</span></label>
          <div className="flex flex-row gap-16 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="bukuKIA" id="iya" checked required/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="bukuKIA" id="tidak" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[22%] xl:w-[18%] text-[10px] xl:text-base text-end font-semibold xl:font-medium leading-[1.2]" htmlFor="">Berat Lahir s.d 5 jam (kg)<span className="text-red-500 text-[12px] absolute mt-[-17px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="BB" id="BB" value={1} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="BB" id="BB" value={3} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="TB" id="TB" value={60} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Kepala (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="Lika" id="Lika" value={7} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Lengan (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="Lila" id="Lila" value={4} required/>
        </div>

        <div className="flex gap-6 items-center xl:my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Vitamin (2 Bulan)</label>
          <div className="flex flex-row gap-16 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitamin2" id="iya1" checked/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitamin2" id="tidak1" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-5 xl:gap-8">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Masa Neonatal</label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] text-[11px] xl:text-base xl:font-medium font-semibold">
                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[35%] xl:w-[20%]" htmlFor="">1. 6-48 jam</label>
                    <input className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="Neo1" id="Neo1" value={"-"} />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[35%] xl:w-[20%]" htmlFor="">2. Hari ke 3-28</label>
                    <input className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="Neo2" id="Neo2" value={"-"}/>
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[35%] xl:w-[20%]" htmlFor="">3. Hari ke 8-28</label>
                    <input className="w-[65%] xl:w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="Neo3" id="Neo3" value={"-"}/>
                </div>
            </div>
        </div>

        <div className="flex gap-6 items-center mt-1 xl:my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Vitamin A</label>
          <div className="flex flex-row gap-16 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitaminA" id="iya1" checked/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitaminA" id="tidak1" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 xl:gap-6 mt-1 xl:my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Imunisasi<span className="text-red-500 absolute mt-[-6px] xl:mt-[-9px]">*</span></label>
          <div className="grid w-[77%] xl:w-[65%] grid-flow-row grid-cols-dua xl:grid-cols-3 gap-2 text-[9px] xl:text-base xl:font-medium font-semibold">
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun1" checked required/>
              <label htmlFor="">HB 0-7 Hari</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun2"/>
              <label htmlFor="">DXG/Polio 1</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun3" />
              <label htmlFor="">DPT-HB-Hib 1/Polio 2</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun4" />
              <label htmlFor="">DPT-HB-Hib 2/Polio 3</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun5"/>
              <label htmlFor="">DPT-HB-Hib 3/Polio 4</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun6" />
              <label htmlFor="">IPV</label>
            </div>
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun7" />
              <label htmlFor="">Campak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Meninggal</label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] font-semibold xl:font-medium text-[11px] xl:text-base">
                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[30%] xl:w-[20%]" htmlFor="">Tanggal</label>
                    <input className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm px-2 font-medium" type="date" name="tanggal" id="tanggal" value={""} />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[30%] xl:w-[20%]" htmlFor="">Penyebab</label>
                    <input className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="penyebab" id="penyebab" value={""}/>
                </div>
            </div>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="keterangan" id="keterangan" value={"Baby Boss"} />
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-4">
          <img className="w-[22px] xl:w-[35px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
      </div>
    </main>
  );
};

export default BayiScreen;
