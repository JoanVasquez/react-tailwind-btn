import { useCallback, useEffect, useState } from "react";

const useSort = (data) => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setDataTable(data);
  }, [data]);

  const onSort = useCallback(
    ({ sortBy, sortOrder }) => {
      if (sortBy) {
        const sorted = data.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return sortOrder === "ASC" ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return sortOrder === "ASC" ? 1 : -1;
          return 0;
        });

        setDataTable([...sorted]);
      }
    },
    [data]
  );

  return { dataTable, onSort };
};

export default useSort;
