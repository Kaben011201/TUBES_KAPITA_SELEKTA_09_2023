import React from "react";

const BayiScreen = () => {
  return (
    <div className="bg-[#F2F1EF] m-[7px] rounded-[5px] px-[7px] py-[7px]">
      <div className="text-sm breadcrumbs font-bold p-0">
        <ul className="text-[12px]">
          <li><a href="">Input Data</a></li> 
          <li><a href="">Anak</a></li> 
          <li>Bayi</li>
        </ul>
      </div>

      <form action="" className="flex flex-col gap-[7px] text-[12px] my-2">
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium" htmlFor="">No. Urut <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="urut" id="urut" required/>
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium" htmlFor="">NIK</label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nik" id="nik" />
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Nama Lengkap <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nama" id="nama" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Tanggal Lahir <span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="date" name="ttl" id="ttl" required/>
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
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="namaIbu" id="namaIbu" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ibu <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="nikIbu" id="nikIbu" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Nama Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="namaAyah" id="namaAyah" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">NIK Ayah <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="namaAyah" id="namaAyah" required/>
        </div>
        
        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Alamat <span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <textarea className="w-[77%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Alamat Domisili KK<span className="text-red-500 absolute mt-[-20px]">*</span></label>
          <textarea className="w-[77%] border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 resize-none" name="alamat" id="alamat" rows="3" required></textarea>
        </div>

        <div className="flex gap-6 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Punya Buku KIA?<span className="text-red-500 absolute mt-[-18px]">*</span></label>
          <div className="flex flex-row gap-20">
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="bukuKIA" id="iya" required/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="bukuKIA" id="tidak" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[22%] text-[11px] text-end font-medium leading-[1.2]" htmlFor="">Berat Lahir s.d 5 jam (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BB" id="BB" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">BB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="BB" id="BB" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">TB (kg)<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="TB" id="TB" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Kepala (cm)<span className="text-red-500 absolute mt-[-19px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Lika" id="Lika" required/>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Lingkar Lengan (cm)<span className="text-red-500 absolute mt-[-19px]">*</span></label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Lila" id="Lila" required/>
        </div>

        <div className="flex gap-6 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Vitamin (2 Bulan)</label>
          <div className="flex flex-row gap-20">
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="vitamin2" id="iya1"/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="vitamin2" id="tidak1" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Masa Neonatal</label>
            <div className="w-[77%] flex flex-col gap-[5px] font-semibold">
                <div className="flex gap-2 items-center">
                    <label className="w-[35%] text-[11px]" htmlFor="">1. 6-48 jam</label>
                    <input className="w-[65%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Neo1" id="Neo1" />
                </div>

                <div className="flex gap-2 items-center">
                    <label className="w-[35%] text-[11px]" htmlFor="">2. Hari ke 3-28</label>
                    <input className="w-[65%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Neo2" id="Neo2" />
                </div>

                <div className="flex gap-2 items-center">
                    <label className="w-[35%] text-[11px]" htmlFor="">3. Hari ke 8-28</label>
                    <input className="w-[65%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="Neo3" id="Neo3" />
                </div>
            </div>
        </div>

        <div className="flex gap-6 items-center mt-1">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Vitamin A</label>
          <div className="flex flex-row gap-20">
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="vitaminA" id="iya1"/>
              <label htmlFor="">Iya</label>
            </div>
            <div className="flex gap-2">
              <input className="accent-pink-500" type="radio" name="vitaminA" id="tidak1" />
              <label htmlFor="">Tidak</label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-1">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Imunisasi<span className="text-red-500 absolute mt-[-6px]">*</span></label>
          <div className="grid grid-flow-row grid-cols-2 gap-2 text-[9px] font-semibold">
            <div className="flex gap-1">
              <input className="accent-pink-500" type="radio" name="imunisasi" id="imun1" required/>
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
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Meninggal :</label>
            <div className="w-[77%] flex flex-col gap-[5px] font-semibold">
                <div className="flex gap-2 items-center">
                    <label className="w-[30%] text-[11px]" htmlFor="">Tanggal</label>
                    <input className="w-[70%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2 font-medium" type="date" name="tanggal" id="tanggal" />
                </div>

                <div className="flex gap-2 items-center">
                    <label className="w-[30%] text-[11px]" htmlFor="">Penyebab</label>
                    <input className="w-[70%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="penyebab" id="penyebab" />
                </div>
            </div>
        </div>

        <div className="flex gap-2 items-center">
          <label className="w-[23%] text-end font-medium leading-[1.2]" htmlFor="">Keterangan</label>
          <input className="w-[77%] h-9 border-[1.5px] border-[#D5D8DE] rounded-sm pl-2" type="text" name="keterangan" id="keterangan" />
        </div>

        <button type="submit" className="bg-[#FF5757;] w-[100px] h-[35px] self-end mt-3 rounded-[20px] text-white font-semibold text-sans text-[16px] pr-1 flex items-center justify-center">
          <img className="w-[22px] mb-1" src="/dashboard/input/Pos_Layanan_Terpadu__3_-removebg-preview 1.svg" alt="saveform" />Simpan
        </button>
      </form>
    </div>
  );
};

export default BayiScreen;
