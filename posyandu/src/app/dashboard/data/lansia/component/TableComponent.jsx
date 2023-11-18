const TableComponent = ({ jsonData }) => {
  if (!jsonData || !jsonData.lansia || jsonData.lansia.length === 0) {
    return <p>No data to display</p>;
  }
};
