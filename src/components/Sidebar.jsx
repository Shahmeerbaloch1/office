import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  ChevronDown,
  ChevronRight,
  CircleSmall,
} from "lucide-react";

const Sidebar = ({ isMobileOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); // For dropdown
  const location = useLocation();

  const menuItems = [
    {
      name: "Manage Booking",
      icon: <Box size={20} />,
      children: [
        { name: "Book A Packet", path: "/", icon: <CircleSmall size={20} /> },
        { name: "Manage Booking", path: "/manage", icon: <CircleSmall size={20} /> },
        { name: "Shipper Advise", path: "/shipper", icon: <CircleSmall size={20} /> },
        { name: "Expanded Booking", path: "/expanded", icon: <CircleSmall size={20} /> },
      ],
    },
    { name: "Manage Vendor", path: "/vendor", icon: <Box size={20} /> },
    { name: "Manage Platform", path: "/platform", icon: <Box size={20} /> },
    { name: "Manage Packaging  ...", path: "/material", icon: <Box size={20} /> },
    { name: "Dashboard", path: "/dashboard", icon: <Box size={20} /> },
  ];

  const toggleSubMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div
      className={`h-auto bg-indigo-600 text-white flex flex-col transition-all duration-300
      ${isOpen ? "w-64" : "w-16"}
      fixed md:static top-0 left-0 z-50 transform
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Toggle Button (Collapse/Expand for desktop) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 hover:bg-indigo-500 flex items-center justify-center"
      >
        <span>
           <svg width="30" height="24" viewBox="0 0 250 196" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z" fill="currentColor"></path><path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z" fill="black"></path><path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z" fill="currentColor"></path><path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z" fill="black"></path><path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z" fill="white" fill-opacity="0.15"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z" fill="white" fill-opacity="0.3"></path></svg>
        </span>
      </button>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) =>
          item.children ? (
            <div key={item.name}>
              {/* Parent Item */}
              <button
                onClick={() => toggleSubMenu(item.name)}
                className={`flex items-center justify-between w-full p-3 hover:bg-indigo-500 transition ${
                  location.pathname.includes("/booking") ? "bg-indigo-700" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </div>
                {isOpen && (
                  <span>
                    {openMenu === item.name ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </span>
                )}
              </button>

              {/* Sub Menu */}
              {openMenu === item.name && isOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={onClose} // close on mobile click
                      className={`p-2 rounded hover:bg-indigo-500 transition ${
                        location.pathname === sub.path ? "bg-indigo-700" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {sub.icon}
                        {sub.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose} // close on mobile click
              className={`flex items-center gap-3 p-3 hover:bg-indigo-500 transition
              ${location.pathname === item.path ? "bg-indigo-700" : ""}`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Sidebar;

