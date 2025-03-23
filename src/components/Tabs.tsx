import { NavLink } from "react-router";

interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {
  return (
    <div className="flex flex-col">
      <nav className="space-x-4 text-4xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline  border-2 border-blue-800 p-2 hover:text-blue-700"
              : "underline hover:text-blue-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "underline  border-2 border-blue-800 p-2 hover:text-blue-700"
              : "underline hover:text-blue-700"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "underline  border-2 border-blue-800 p-2 hover:text-blue-700"
              : "underline hover:text-blue-700"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "underline  border-2 border-blue-800 p-2 hover:text-blue-700"
              : "underline hover:text-blue-700"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className="w-full pt-30 flex justify-between text-xl pl-10">
        {children}
      </div>
    </div>
  );
}

export default Tabs;
