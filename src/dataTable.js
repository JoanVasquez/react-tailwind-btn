import React from "react";
import { GoBell } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const names = ["Joan", "Pedro", "Juan", "Raymon"];

const genDataTable = () => {
  const dataTable = [];

  for (let i = 0; i <= 10; i++) {
    const category = {
      id: `${i}`,
      name: "test",
      isActive: true,
      createdBy: names[Math.floor(Math.random() * names.length)],
      createdDate: new Date().toLocaleString(),
      modifiedBy: names[Math.floor(Math.random() * names.length)],
      modifiedDate: new Date().toLocaleString(),
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
    isSort: true,
  },
  {
    label: "Created Date",
    name: "createdDate",
    isSort: false,
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
