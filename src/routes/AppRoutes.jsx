import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";
import ManagaBooking from "../pages/ManagaBooking";
import ManagePlatform from "../pages/ManagePlatform";
import ManagePackagingMaterials from "../pages/ManagePackagingMaterials";
import ManageVendor from "../pages/ManageVendor";
import BookPacket from "../pages/BookPacket";
import ManageBookedPackage from "../pages/ManageBookedPackage";
import ShipperAdvise from "../pages/ShipperAdvise";
import ExpandedBooking from "../pages/ExpandedBooking";

const AppRoutes = () => {
  return (
 
      <Routes>
       
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Layout */}
        <Route  path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
       
          <Route path="/platform" element={<ManagePlatform/>} />
          <Route path="/material" element={<ManagePackagingMaterials/>} />
          <Route path="/vendor" element={<ManageVendor/>} />
          {/* side nested option route */}
          <Route path="/booking" element={<ManagaBooking/>} />
          <Route index element={<BookPacket/>} />
          <Route path="/manage" element={<ManageBookedPackage/>} />
          <Route path="/shipper" element={<ShipperAdvise/>} />
          <Route path="/expanded" element={<ExpandedBooking/>} />
        </Route>
      </Routes>

  );
};

export default AppRoutes;
