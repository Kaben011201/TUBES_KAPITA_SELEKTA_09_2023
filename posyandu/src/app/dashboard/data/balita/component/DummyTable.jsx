import React from "react";
import Aksi from "../../component/aksi";

const DummyTable = () => {
  return (
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
        <th rowSpan={2}>Aksi</th>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <td className="whitespace-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
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
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875M3.75 11.875C3.75 12.2065 3.8817 12.5245 4.11612 12.7589C4.35054 12.9933 4.66848 13.125 5 13.125H10C10.3315 13.125 10.6495 12.9933 10.8839 12.7589C11.1183 12.5245 11.25 12.2065 11.25 11.875V4.375H3.75V11.875Z"
                fill="#545454"
              />
            </svg>
          </button>
        </td>
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
        <Aksi />
      </tr>
    </table>
  );
};

export default DummyTable;
