/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Aksi = (props) => {
  const router = useRouter();

  return (
    <td className="whitespace-nowrap">
      <button
        onClick={() =>
          document.getElementById(`modal_info_${props.name}`).showModal()
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22.5"
          height="22.5"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M6.32813 4.92187C6.32813 4.73645 6.38311 4.5552 6.48612 4.40103C6.58914 4.24686 6.73556 4.12669 6.90686 4.05574C7.07817 3.98478 7.26667 3.96621 7.44852 4.00239C7.63038 4.03856 7.79743 4.12785 7.92854 4.25896C8.05965 4.39007 8.14894 4.55712 8.18511 4.73898C8.22129 4.92083 8.20272 5.10933 8.13176 5.28064C8.06081 5.45195 7.94065 5.59836 7.78647 5.70138C7.6323 5.80439 7.45105 5.85937 7.26563 5.85937C7.01699 5.85937 6.77853 5.7606 6.60272 5.58479C6.4269 5.40897 6.32813 5.17052 6.32813 4.92187ZM13.8281 7.5C13.8281 8.75158 13.457 9.97506 12.7616 11.0157C12.0663 12.0564 11.078 12.8675 9.92167 13.3464C8.76536 13.8254 7.49298 13.9507 6.26545 13.7065C5.03791 13.4624 3.91035 12.8597 3.02534 11.9747C2.14034 11.0897 1.53764 9.96209 1.29347 8.73456C1.0493 7.50702 1.17462 6.23464 1.65358 5.07833C2.13254 3.92202 2.94363 2.9337 3.98428 2.23836C5.02494 1.54301 6.24842 1.17188 7.5 1.17188C9.17775 1.17374 10.7863 1.84104 11.9726 3.0274C13.159 4.21375 13.8263 5.82225 13.8281 7.5ZM12.4219 7.5C12.4219 6.52654 12.1332 5.57495 11.5924 4.76555C11.0516 3.95615 10.2829 3.32531 9.38352 2.95278C8.48417 2.58026 7.49454 2.48279 6.53979 2.6727C5.58504 2.86261 4.70805 3.33137 4.01971 4.01971C3.33137 4.70805 2.86261 5.58504 2.6727 6.53979C2.48279 7.49454 2.58026 8.48416 2.95278 9.38352C3.32531 10.2829 3.95616 11.0516 4.76556 11.5924C5.57495 12.1332 6.52655 12.4219 7.5 12.4219C8.80494 12.4205 10.056 11.9015 10.9788 10.9787C11.9015 10.056 12.4205 8.80493 12.4219 7.5ZM8.20313 9.64922V7.73437C8.20313 7.42357 8.07966 7.1255 7.85989 6.90573C7.64012 6.68596 7.34205 6.5625 7.03125 6.5625C6.8652 6.56225 6.70442 6.62078 6.57739 6.72772C6.45036 6.83465 6.36527 6.9831 6.3372 7.14676C6.30913 7.31041 6.33988 7.47873 6.42402 7.62189C6.50815 7.76504 6.64024 7.8738 6.79688 7.92891V9.84375C6.79688 10.1545 6.92034 10.4526 7.14011 10.6724C7.35988 10.8922 7.65795 11.0156 7.96875 11.0156C8.1348 11.0159 8.29558 10.9573 8.42261 10.8504C8.54964 10.7435 8.63473 10.595 8.6628 10.4314C8.69088 10.2677 8.66012 10.0994 8.57599 9.95624C8.49185 9.81308 8.35977 9.70432 8.20313 9.64922Z"
            fill="#545454"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22.5"
          height="22.5"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M2 10.9125V12.8125C2 12.9875 2.14667 13.125 2.33333 13.125H4.36C4.44667 13.125 4.53333 13.0938 4.59333 13.0313L11.8733 6.2125L9.37333 3.86875L2.1 10.6875C2.03333 10.75 2 10.825 2 10.9125ZM13.8067 4.4C13.8685 4.34218 13.9175 4.2735 13.951 4.19789C13.9844 4.12228 14.0016 4.04123 14.0016 3.95938C14.0016 3.87752 13.9844 3.79647 13.951 3.72086C13.9175 3.64525 13.8685 3.57657 13.8067 3.51875L12.2467 2.05625C12.185 1.99831 12.1117 1.95234 12.0311 1.92098C11.9504 1.88962 11.864 1.87347 11.7767 1.87347C11.6894 1.87347 11.6029 1.88962 11.5223 1.92098C11.4416 1.95234 11.3683 1.99831 11.3067 2.05625L10.0867 3.2L12.5867 5.54375L13.8067 4.4Z"
            fill="#545454"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22.5"
          height="22.5"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
            fill="#545454"
          />
        </svg>
      </button>

      {/* modal info balita*/}
      <dialog id="modal_info_balita" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Riwayat Data Pasien:</h3>
          <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
            <tr>
              <th rowSpan={2}>No.</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>TTL</th>
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
              <th colSpan={2}>Imunisasi Lanjut</th>
              <th colSpan={4}>Pelayanan Anak Pra Sekolah</th>
              <th colSpan={2}>Meninggal</th>
            </tr>
            <tr>
              <th>Nama Ibu</th>
              <th>NIK</th>
              <th>Nama Ayah</th>
              <th>NIK</th>
              <th>No.HP</th>
              <th>DPT-HB-HIB</th>
              <th>Campak</th>
              <th>66 Bulan</th>
              <th>78 Bulan</th>
              <th>84 Bulan</th>
              <th>Tanggal</th>
              <th>Tanggal</th>
              <th>Sebab</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </dialog>

      {/* modal info bayi*/}
      <dialog id="modal_info_bayi" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Riwayat Data Pasien:</h3>
          <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
            <tr>
              <th rowSpan={2}>No.</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>TTL</th>
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
              <th colSpan={7}>Imunisasi</th>
              <th rowSpan={2}>Kematian Post Natal</th>
              <th rowSpan={2}>Keterangan</th>
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
              <th>HB 0-7 hari</th>
              <th>DXG/Polio 1</th>
              <th>DPT-HB-HIB 1/Polio 2</th>
              <th>DPT-HB-HIB 1/Polio 3</th>
              <th>DPT-HB-HIB 1/Polio 4</th>
              <th>IPV</th>
              <th>Campak/IDL</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </dialog>

      {/* modal info ibu hamil*/}
      <dialog id="modal_info_ibuhamil" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Riwayat Data Pasien:</h3>
          <table className="text-center table table-zebra border-collapse border border-black text-[#545454]">
            <tr>
              <th rowSpan={2}>No.</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>No. KK</th>
              <th rowSpan={2}>TTL</th>
              <th rowSpan={2}>Umur</th>
              <th colSpan={3}>Data Suami</th>
              <th rowSpan={2}>Alamat</th>
              <th rowSpan={2}>BB</th>
              <th rowSpan={2}>TB</th>
              <th rowSpan={2}>UK</th>
              <th rowSpan={2}>LL</th>
              <th rowSpan={2}>
                <p>G</p>
                <p>P</p>
                <p>A</p>
              </th>
              <th rowSpan={2}>
                <p>H</p>
                <p>P</p>
                <p>H</p>
                <p>T</p>
              </th>
              <th rowSpan={2}>TP</th>
              <th rowSpan={2}>HB</th>
              <th rowSpan={2}>No. BPJS</th>
              <th rowSpan={2}>No. HP</th>
            </tr>
            <tr>
              <th>Nama</th>
              <th>NIK</th>
              <th>TTL</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </dialog>

      {/* modal info lansia*/}
      <dialog id="modal_info_lansia" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Riwayat Data Pasien:</h3>
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
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </dialog>
    </td>
  );
};

export default Aksi;