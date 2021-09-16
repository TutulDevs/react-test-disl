import { NavLink } from "react-router-dom";

// links
const links = [
  { id: "item01", title: "Counter", path: "/counter" },
  { id: "item02", title: "Form", path: "/form" },
  { id: "item03", title: "List", path: "/list" },
];

const SideBar = () => {
  return (
    <aside className="shadow-lg border border-gray-100 rounded-xl p-4">
      <ul>
        <li className="text-2xl border-b">React</li>
        <ul className="mt-2">
          {links.map((link) => (
            <li key={link.id} className="pl-4 mb-1 flex">
              <span className="text-green-400 mr-2">➤</span>
              <NavLink
                to={link.path}
                className="block text-green-600"
                activeClassName="font-bold"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </ul>
    </aside>
  );
};

export default SideBar;
