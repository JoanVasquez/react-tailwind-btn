import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Select = ({ label, options, selected, setSelected }) => {
  const [showOptions, setShowOptions] = useState(false);
  const divEl = useRef();

  const handler = (event) => {
    if (!divEl.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handlerSelected = (option) => {
    setSelected(option);
    setShowOptions(false);

    document.addEventListener("click", handler);
  };

  useEffect(() => {
    document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <span>{label}</span>
      <div
        ref={divEl}
        onClick={(event) => {
          setShowOptions(!showOptions);
        }}
        className="mt-1 text-gray-500 flex justify-between items-center p-1 border rounded border-gray-300 cursor-pointer shadow"
      >
        <span className="ml-2 ">{selected.label || "Select..."}</span>
        <GoChevronDown />
      </div>

      <div className="border rounded">
        {showOptions &&
          options.map((option) => (
            <div
              className="p-2 hover:bg-gray-300 cursor-pointer"
              key={option.id}
              onClick={(event) => {
                event.stopPropagation();
                handlerSelected(option);
              }}
            >
              {option.label}
            </div>
          ))}
      </div>
    </>
  );
};

export default Select;
