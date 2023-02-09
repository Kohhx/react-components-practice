import React, { useState } from "react";
import Table from "./components/Table";
import SortableTable from "./components/SortableTable";
import { FaAccessibleIcon } from "react-icons/fa";

const App = () => {
  const tableData = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const tableConfig = [
    {
      label: "Name",
      render: (rowData) => rowData.name,
      sortValue: (rowData) => rowData.name,
    },
    {
      label: "Color",
      render: (rowData) => <div className={`p-2 m-3 ${rowData.color}`}></div>,
    },
    {
      label: "Score",
      render: (rowData) => rowData.score,
      // header: () => <th className="bg-red-500">Score</th>,
      sortValue: (rowData) => rowData.score,
    },
  ];

  return (
    // <Table data={tableData} config={tableConfig}></Table>
    <SortableTable data={tableData} config={tableConfig}></SortableTable>
  );
};

export default App;
