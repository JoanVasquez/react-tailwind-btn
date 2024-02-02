import { useCallback, useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { data as categories, headers } from "../dataTable";

const DataTablePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(categories);
  }, []);

  const onSort = useCallback(({ sortBy, sortOrder }) => {
    if (sortBy) {
      const sorted = categories.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "ASC" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "ASC" ? 1 : -1;
        return 0;
      });

      setData([...sorted]);
    }
  }, []);

  return (
    <div>
      {data.length && (
        <DataTable data={data} onSort={onSort} headers={headers} />
      )}
    </div>
  );
};

export default DataTablePage;
