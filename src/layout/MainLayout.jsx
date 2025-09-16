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


import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-md">
        {/* 
          👉 Mobile (top): full width
          👉 Desktop: fixed width (md:w-64)
        */}
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
