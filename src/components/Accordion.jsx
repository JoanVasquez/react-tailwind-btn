import React from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

export const AccordionHeader = ({
  shouldDisplay,
  setShouldDisplay,
  children,
}) => {
  return (
    <div
      className="flex items-center cursor-pointer justify-between p-3 bg-gray-50 rounded-t"
      onClick={setShouldDisplay}
    >
      <span className="mr-2">{children} </span>
      <span className="text-2xl">
        {shouldDisplay ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    </div>
  );
};

export const AccordionBody = ({ children }) => (
  <div className="p-3 border">{children}</div>
);

export const Accordion = ({ children }) => <div className="">{children}</div>;
