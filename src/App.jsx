import { useEffect, useState } from "react";
import Select from "./components/Select";
import { selectOptions } from "./selectOptions";

const App = () => {
  const [selected, setSelected] = useState({
    label: "",
  });

  return (
    <div className="px-5">
      <Select
        label="Select a Color"
        selected={selected}
        setSelected={setSelected}
        options={selectOptions}
      />
    </div>
  );
};

export default App;
