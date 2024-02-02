import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import SelectPage from "./pages/SelectPage";

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
