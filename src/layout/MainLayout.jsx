// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 min-h-screen ">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";

const MainLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow flex items-center justify-between p-4 z-50">
        <h1 className="font-bold text-lg text-indigo-500">Materio</h1>
        <button onClick={() => setIsMobileOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 md:ml-1 mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;


