import React from "react";
import Aksi from "../../../component/Aksi";

const DummyTable = () => {
  const jsonData = {
    lansia: [
      {
        nama: "Wangy",
        nik: 123,
        kk: 12312312312,
        ttl: "1900/12/12",
        umur: 200,
        alamat: "mawar",
        bb: 10,
        tb: 200,
        tensi: "100/120",
        bpjs: 1212321312,
      },
      {
        nama: "Wang",
        nik: 6868696969,
        kk: 12312312312,
        ttl: "1900/12/12",
        umur: 200,
        alamat: "mawar",
        bb: 10,
        tb: 200,
        tensi: "100/120",
        bpjs: 1212321312,
      },
      {
        nama: "Wangi",
        nik: 12132131,
        kk: 12312312312,
        ttl: "1900/12/12",
        umur: 200,
        alamat: "mawar",
        bb: 10,
        tb: 200,
        tensi: "100/120",
        bpjs: 1212321312,
      },
      // Add more data as needed
    ],
  };

  return (
    <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
      <tr>
        <th>No.</th>
        <th>Nama</th>
        <th>NIK</th>
        <th>No. KK</th>
        <th>TTL</th>
        <th>Umur</th>
        <th>Alamat</th>
        <th>BB</th>
        <th>TB</th>
        <th>Tensi Darah</th>
        <th>No. BPJS</th>
        <th>Aksi</th>
      </tr>
      {jsonData.lansia.map((data, index) => (
        <tr key={index + 1}>
          <td>{index + 1}</td>
          <td>{data.nama}</td>
          <td>{data.nik}</td>
          <td>{data.kk}</td>
          <td>{data.ttl}</td>
          <td>{data.umur}</td>
          <td>{data.alamat}</td>
          <td>{data.bb}</td>
          <td>{data.tb}</td>
          <td>{data.tensi}</td>
          <td>{data.bpjs}</td>
          <Aksi name="lansia" nik={data.nik} data={jsonData} />
        </tr>
      ))}
    </table>
  );
};

export default DummyTable;
