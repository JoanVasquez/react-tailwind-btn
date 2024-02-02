import React from "react";
import { GoBell } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const genDataTable = () => {
  const dataTable = [];

  for (let i = 0; i <= 10; i++) {
    const category = {
      id: `${i}`,
      name: "test",
      isActive: true,
      createdBy: "Joan Vasquez",
      createdDate: new Date().toLocaleDateString(),
      modifiedBy: "Joan Vasquez",
      modifiedDate: new Date().toLocaleDateString(),
    };

    dataTable.push(category);
  }

  return dataTable;
};

export const headers = [
  {
    label: "Id",
    name: "id",
    isSort: true,
  },
  {
    label: "Name",
    name: "name",
    isSort: false,
  },
  {
    label: "Is Active",
    name: "isActive",
    isSort: false,
  },
  {
    label: "Created By",
    name: "createdBy",
    isSort: false,
  },
  {
    label: "Created Date",
    name: "createdDate",
    isSort: true,
  },
  {
    label: "Modified By",
    name: "modifiedBy",
    isSort: false,
  },
  {
    label: "Modified Date",
    name: "modifiedDate",
    isSort: false,
  },
];

export const data = genDataTable();
