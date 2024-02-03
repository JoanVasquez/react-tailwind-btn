import DataTable from "../components/DataTable";
import { data as categories, headers } from "../dataTable";
import useSort from "../hooks/useSort";

const DataTablePage = () => {
  const { dataTable, onSort } = useSort(categories);

  return (
    <div>
      {dataTable.length && (
        <DataTable data={dataTable} onSort={onSort} headers={headers} />
      )}
    </div>
  );
};

export default DataTablePage;
