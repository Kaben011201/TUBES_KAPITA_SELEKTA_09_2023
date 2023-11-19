import React from "react";

const BalitaScreen = () => {
  return (
    <main className="flex">
      <div className="bg-[#F2F1EF] m-[7px] mt-[56px] rounded-[5px] xl:rounded-[20px] p-[7px] xl:w-[80%] xl:mx-auto xl:my-10 xl:px-[57px] xl:mt-[125px] xl:py-[25px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px] xl:text-xl">
          <li><a href="">Input Data</a></li> 
          <li>Balita</li> 
        </ul>
      </div>
      
      <form action="" className="flex flex-col gap-[7px] text-[12px] xl:text-base my-2 xl:mt-6">
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">Tanggal Kunjungan<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="kunjung" id="kunjung" value={""} required/>
        </div>
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium" htmlFor="">NIK</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nik" id="nik" value={"333333333333"} />
        </div>
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Lengkap <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nama" id="nama" value={"Juan Bocil"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="date" name="ttl" id="ttl" value={"2023-10-2"} required/>
        </div>

        <div className="flex gap-6 items-center my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Jenis Kelamin<span className="text-red-500 absolute mt-[-18px] xl:mt-[-6px]">*</span></label>
          <div className="flex flex-row gap-10 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="jenkel" id="laki2" checked required/>
              <label htmlFor="">Laki-laki</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="jenkel" id="perempuan" />
              <label htmlFor="">Perempuan</label>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaIbu" id="namaIbu" value={"Maria"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="nikIbu" id="nikIbu" value={"11111111"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaAyah" id="namaAyah" value={"Anton"} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="namaAyah" id="namaAyah" value={"22222222"} required/>
        </div>
        
        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamat" id="alamat" rows="3" value={"Villa Citra"} required></textarea>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px] xl:mt-[-9px]">*</span></label>
          <textarea className="w-[77%] xl:w-[82%] border-[1.5px] border-[#D5D8DE] rounded-sm p-2 resize-none" name="alamatKK" id="alamatKK" rows="3" value={"Cina"} required></textarea>
        </div>

        <div className="flex gap-6 items-center my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Punya Buku KIA?<span className="text-red-500 absolute mt-[-18px] xl:mt-[-8px]">*</span></label>
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
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="BB" id="BB" value={20} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">TB (cm)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="TB" id="TB" value={100} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Kepala (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-8px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="Lika" id="Lika" value={20} required/>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Lengan (cm)<span className="text-red-500 absolute mt-[-19px] xl:mt-[-8px]">*</span></label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="number" name="Lila" id="Lila" value={8} required/>
        </div>

        <div className="flex gap-6 items-center my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Vitamin<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <div className="flex flex-row gap-16 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitamin" id="iya1" checked required/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="vitamin" id="tidak1" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center my-4">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Imunisasi<span className="text-red-500 absolute mt-[-6px] xl:mt-[-8px]">*</span></label>
          <div className="flex flex-row gap-12 xl:gap-32">
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="DPT" checked required/>
              <label htmlFor="">DPT-HB-Hib</label>
            </div>
            <div className="flex gap-3">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="campak" />
              <label htmlFor="">Campak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Pelayanan Anak Pra Sekolah</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="praSek" id="praSek" value={"-"} />
        </div>

        <div className="flex gap-5 xl:gap-20">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Meninggal</label>
            <div className="w-[77%] xl:w-[82%] flex flex-col gap-[7px] font-semibold xl:font-medium text-[11px] xl:text-base">
                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[30%] xl:w-[10%]" htmlFor="">Tanggal</label>
                    <input className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2 font-medium" type="date" name="tanggal" id="tanggal" value={""} />
                </div>

                <div className="flex gap-3 xl:gap-4 items-center">
                    <label className="w-[30%] xl:w-[10%]" htmlFor="">Penyebab</label>
                    <input className="w-[70%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="penyebab" id="penyebab" value={""} />
                </div>
            </div>
        </div>

        <div className="flex gap-3 xl:gap-4 items-center">
          <label className="w-[23%] xl:w-[18%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan</label>
          <input className="w-[77%] xl:w-[82%] h-9 xl:h-11 border-[1.5px] border-[#D5D8DE] rounded-sm p-2" type="text" name="keterangan" id="keterangan" value={"Anak bandel"} />
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[20px] xl:rounded-[15px] text-white font-semibold text-sans text-[16px] xl:text-xl pr-1 xl:pr-6 flex items-center justify-center gap-1 xl:gap-4">
          <img className="w-[22px] xl:w-[35px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
      </div>
    </main>
  );
};

export default BalitaScreen;
