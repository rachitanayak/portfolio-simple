import { NavLink } from "react-router";

interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {
  return (
    <header className="flex flex-col flex-wrap">
      <nav className="space-x-4 text-xl md:text-4xl">
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
      <div className="w-full pt-15 md:pt-30 text-justify flex flex-col space-y-8 md:justify-between md:text-xl md:pl-10 lg:flex-row ">
        {children}
      </div>
    </header>
  );
}

export default Tabs;
