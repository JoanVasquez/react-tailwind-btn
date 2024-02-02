import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ menuList }) => (
  <div className="hidden md:flex flex-col w-64 bg-gray-800">
    <div className="flex items-center justify-center h-16 bg-gray-900">
      <span className="text-white font-bold uppercase">Sidebar</span>
    </div>

    <SidebarMenu menuList={menuList} />
  </div>
);

export default Sidebar;
