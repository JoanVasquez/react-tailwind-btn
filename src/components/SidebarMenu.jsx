import { NavLink } from "react-router-dom";

const SidebarMenu = ({ menuList }) => {
  const classes = "flex items-center px-4 py-2 text-gray-100 hover:gray-700 ";
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <nav className="flex-1 py-4 bg-gray-800">
        {menuList.map(({ label, path }, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? classes + "bg-gray-700" : classes
            }
            to={path}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
