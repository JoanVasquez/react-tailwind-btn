import { useState } from "react";
import Select from "../components/Select";
import { selectOptions } from "../selectOptions";

const SelectPage = () => {
  const [selected, setSelected] = useState({
    label: "",
  });

  return (
    <div className="px-5 w-full">
      <Select
        label="Select a Color"
        selected={selected}
        setSelected={setSelected}
        options={selectOptions}
      />
    </div>
  );
};

export default SelectPage;
