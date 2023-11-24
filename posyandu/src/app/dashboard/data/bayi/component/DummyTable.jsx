import React from "react";
import Aksi from "../../../component/Aksi";

const DummyTable = () => {
  return (
    <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
      <tr>
        <th rowSpan={2}>No.</th>
        <th rowSpan={2}>Nama</th>
        <th rowSpan={2}>NIK</th>
        <th rowSpan={2}>Tanggal Lahir</th>
        <th rowSpan={2}>L/P</th>
        <th colSpan={5}>Data Orang Tua</th>
        <th rowSpan={2}>Alamat</th>
        <th rowSpan={2}>
          <p>K</p>
          <p>I</p>
          <p>A</p>
        </th>
        <th rowSpan={2}>BB</th>
        <th rowSpan={2}>TB</th>
        <th rowSpan={2}>LK</th>
        <th rowSpan={2}>LL</th>
        <th rowSpan={2}>
          <p>V</p>
          <p>I</p>
          <p>T</p>
        </th>
        <th colSpan={4}>Masa Neonatal</th>
        <th rowSpan={2}>Vit. A 6 Bulan</th>
        <th rowSpan={2}>Imunisasi</th>
        <th rowSpan={2}>Kematian Post Natal</th>
        <th rowSpan={2}>Keterangan</th>
        <th rowSpan={2}>Aksi</th>
      </tr>
      <tr>
        <th>Nama Ibu</th>
        <th>NIK</th>
        <th>Nama Ayah</th>
        <th>NIK</th>
        <th>No.HP</th>
        <th>Saat Lahir s.d 5 jam</th>
        <th>Pertama 6 s.d 48 jam</th>
        <th>Kedua hari ke-3 s.d ke-28</th>
        <th>Ketiga hari ke-8 s.d ke-28</th>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
        <td>f</td>
        <td>g</td>
        <td>h</td>
        <td>i</td>
        <td>j</td>
        <td>k</td>
        <td>l</td>
        <td>m</td>
        <td>n</td>
        <td>o</td>
        <td>p</td>
        <td>q</td>
        <td>r</td>
        <td>s</td>
        <td>t</td>
        <td>u</td>
        <td>v</td>
        <td>w</td>
        <td>x</td>
        <td>y</td>
        <Aksi name="bayi" />
      </tr>
    </table>
  );
};

export default DummyTable;
