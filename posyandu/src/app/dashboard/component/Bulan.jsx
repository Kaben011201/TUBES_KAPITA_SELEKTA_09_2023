const Bulan = (props) => {
  return (
    <select onChange={(e) => props.setBulan(e.target.value)} className="select select-bordered select-xs xl:select-sm mb-4 max-w-xs mt-[15px] mr-[10px]">
      <option selected value={0}>-Pilih Bulan-</option>
      <option value={1} >Januari</option>
      <option value={2}>Febuari</option>
      <option value={3}>Maret</option>
      <option value={4}>April</option>
      <option value={5}>Mei</option>
      <option value={6}>Juni</option>
      <option value={7}>Juli</option>
      <option value={8}>Agustus</option>
      <option value={9}>September</option>
      <option value={10}>Oktober</option>
      <option value={11}>November</option>
      <option value={12}>Desember</option>
    </select>
  );
};

export default Bulan;
