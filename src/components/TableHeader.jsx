import { useEffect, useState } from "react";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";

const TableHeader = ({ headers, onSort }) => {
  const [sortConfig, setSortConfig] = useState({
    sortBy: "",
    sortOrder: "",
  });

  useEffect(() => onSort(sortConfig), [sortConfig, onSort]);

  const handlerSort = (sortBy) => {
    setSortConfig((oldSortConfig) => {
      if (oldSortConfig.sortOrder === "ASC") {
        return {
          sortBy,
          sortOrder: "DESC",
        };
      }

      return {
        sortBy,
        sortOrder: "ASC",
      };
    });
  };

  return (
    <thead>
      <tr className="border-b-2">
        {headers.map(({ label, isSort, name }, index) => (
          <th width="300" key={`${index}-asdff`}>
            <div className="flex items-center justify-center">
              <span>{label} </span>
              {isSort && (
                <span
                  className="cursor-pointer ml-2"
                  onClick={() => handlerSort(name)}
                >
                  {!sortConfig.sortBy && !sortConfig.sortOrder && (
                    <TiArrowUnsorted />
                  )}
                  {isSort && sortConfig.sortOrder === "ASC" && (
                    <TiArrowSortedUp />
                  )}
                  {isSort && sortConfig.sortOrder === "DESC" && (
                    <TiArrowSortedDown />
                  )}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
