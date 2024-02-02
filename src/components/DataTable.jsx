import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const DataTable = ({ data, onSort, headers }) => {
  return (
    <table className="table-auto border-spacing-2 w-full">
      <TableHeader onSort={onSort} headers={headers} />
      <TableBody data={data} headers={headers} />
    </table>
  );
};

export default DataTable;
