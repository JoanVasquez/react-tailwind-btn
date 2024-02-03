import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import SelectPage from "./pages/SelectPage";
import ModalPage from "./pages/ModalPage";
import DataTablePage from "./pages/DataTablePage";
import CounterPage from "./pages/CounterPage";

const menuList = [
  {
    label: "Accordion",
    path: "/accordion",
    page: <AccordionPage />,
  },
  {
    label: "Button",
    path: "/button",
    page: <ButtonPage />,
  },
  {
    label: "Select",
    path: "/select",
    page: <SelectPage />,
  },
  {
    label: "Modal",
    path: "/modal",
    page: <ModalPage />,
  },
  {
    label: "Data Table",
    path: "/datatable",
    page: <DataTablePage />,
  },
  {
    label: "Counter",
    path: "/counter",
    page: <CounterPage />,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar menuList={menuList} />
        <Routes>
          {menuList.map(({ path, page }, index) => (
            <Route key={index} path={path} element={page} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
