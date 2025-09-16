// import React, { useState } from "react";
// import { DateRange } from "react-date-range";
// import { addDays } from "date-fns";
// import CreatableSelect from "react-select/creatable";
// import { Eye } from "lucide-react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// // Demo Data (10+ records for pagination demo)
// const demoData = [
//   {
//     id: 1,
//     tracking: "TRK-1001",
//     status: "Pending",
//     customer: "Ali Khan",
//     address: "House #12, Karachi",
//     cod: 2500,
//     origin: "Karachi",
//     destination: "Lahore",
//     adviceDate: "2025-09-01",
//     adviceText: "Handle with care",
//   },
//   {
//     id: 2,
//     tracking: "TRK-1002",
//     status: "Delivered",
//     customer: "Sara Ahmed",
//     address: "Street 45, Lahore",
//     cod: 4500,
//     origin: "Islamabad",
//     destination: "Karachi",
//     adviceDate: "2025-09-02",
//     adviceText: "Leave with neighbor",
//   },
//   {
//     id: 3,
//     tracking: "TRK-1003",
//     status: "Cancelled",
//     customer: "Bilal",
//     address: "Multan Cantt",
//     cod: 1500,
//     origin: "Karachi",
//     destination: "Multan",
//     adviceDate: "2025-09-03",
//     adviceText: "Wrong address",
//   },
//   {
//     id: 4,
//     tracking: "TRK-1004",
//     status: "Pending",
//     customer: "Ayesha",
//     address: "Phase 6, DHA Lahore",
//     cod: 3200,
//     origin: "Lahore",
//     destination: "Islamabad",
//     adviceDate: "2025-09-05",
//     adviceText: "Call before delivery",
//   },
//   {
//     id: 5,
//     tracking: "TRK-1005",
//     status: "Delivered",
//     customer: "Hassan",
//     address: "Sector G-10, Islamabad",
//     cod: 1800,
//     origin: "Islamabad",
//     destination: "Karachi",
//     adviceDate: "2025-09-06",
//     adviceText: "Deliver after 5 PM",
//   },
//   {
//     id: 6,
//     tracking: "TRK-1006",
//     status: "Pending",
//     customer: "Nimra",
//     address: "Quetta City Center",
//     cod: 2200,
//     origin: "Quetta",
//     destination: "Karachi",
//     adviceDate: "2025-09-07",
//     adviceText: "Fragile item",
//   },
//   {
//     id: 7,
//     tracking: "TRK-1007",
//     status: "Delivered",
//     customer: "Fahad",
//     address: "Street 9, Hyderabad",
//     cod: 2700,
//     origin: "Hyderabad",
//     destination: "Lahore",
//     adviceDate: "2025-09-08",
//     adviceText: "Fast delivery",
//   },
//   {
//     id: 8,
//     tracking: "TRK-1008",
//     status: "Cancelled",
//     customer: "Sana",
//     address: "Saddar, Peshawar",
//     cod: 1900,
//     origin: "Peshawar",
//     destination: "Karachi",
//     adviceDate: "2025-09-09",
//     adviceText: "Customer refused",
//   },
//   {
//     id: 9,
//     tracking: "TRK-1009",
//     status: "Pending",
//     customer: "Imran",
//     address: "Faisalabad City",
//     cod: 2100,
//     origin: "Faisalabad",
//     destination: "Islamabad",
//     adviceDate: "2025-09-10",
//     adviceText: "Deliver on weekend",
//   },
//   {
//     id: 10,
//     tracking: "TRK-1010",
//     status: "Delivered",
//     customer: "Saad",
//     address: "Model Town, Lahore",
//     cod: 5000,
//     origin: "Lahore",
//     destination: "Karachi",
//     adviceDate: "2025-09-11",
//     adviceText: "Cash only",
//   },
// ];

// const cityOptions = [
//   { value: "Karachi", label: "Karachi" },
//   { value: "Lahore", label: "Lahore" },
//   { value: "Islamabad", label: "Islamabad" },
//   { value: "Multan", label: "Multan" },
//   { value: "Peshawar", label: "Peshawar" },
//   { value: "Quetta", label: "Quetta" },
//   { value: "Faisalabad", label: "Faisalabad" },
//   { value: "Hyderabad", label: "Hyderabad" },
// ];

// const ShipperAdvise = () => {
//   const [search, setSearch] = useState("");
//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);

//   // Date range filter
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date("2025-09-01"),
//       endDate: addDays(new Date("2025-09-01"), 15),
//       key: "selection",
//     },
//   ]);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   // Modal state
//   const [selectedRow, setSelectedRow] = useState(null);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filtering
//   const filteredData = demoData.filter((item) => {
//     const inSearch =
//       search === "" ||
//       item.tracking.toLowerCase().includes(search.toLowerCase()) ||
//       item.customer.toLowerCase().includes(search.toLowerCase()) ||
//       item.address.toLowerCase().includes(search.toLowerCase());

//     const inOrigin = !origin || item.origin === origin.value;
//     const inDestination = !destination || item.destination === destination.value;

//     const inDateRange =
//       new Date(item.adviceDate) >= dateRange[0].startDate &&
//       new Date(item.adviceDate) <= dateRange[0].endDate;

//     return inSearch && inOrigin && inDestination && inDateRange;
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="p-6 space-y-6">
//       {/* Filters */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow">
//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search (Tracking#, Customer, Address)"
//           className="border p-2 outline-indigo-500 rounded-lg w-full"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* Origin */}
//         <CreatableSelect
//           options={cityOptions}
//           value={origin}
//           onChange={setOrigin}
//           placeholder="Origin City"
//           isClearable
//         />

//         {/* Destination */}
//         <CreatableSelect
//           options={cityOptions}
//           value={destination}
//           onChange={setDestination}
//           placeholder="Destination City"
//           isClearable
//         />

//         {/* Date Range */}
//         <div className="relative">
//           <button
//             onClick={() => setShowDatePicker(!showDatePicker)}
//             className="border p-2 border-gray-400 rounded-lg w-full text-left"
//           >
//             {`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
//           </button>
//           {showDatePicker && (
//             <div className="absolute z-50 bg-white shadow-xl mt-2">
//               <DateRange
//                 editableDateInputs={true}
//                 onChange={(item) => setDateRange([item.selection])}
//                 moveRangeOnFirstSelection={false}
//                 ranges={dateRange}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">Serial No</th>
//               <th className="p-3 text-left">Tracking#</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Customer Name</th>
//               <th className="p-3 text-left">Address</th>
//               <th className="p-3 text-left">COD Amount</th>
//               <th className="p-3 text-left">Origin - Destination</th>
//               <th className="p-3 text-left">Advice Date</th>
//               <th className="p-3 text-left">Advice Text</th>
//               <th className="p-3 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((item, idx) => (
//               <tr key={item.id} className="border-t">
//                 <td className="p-3">
//                   {(currentPage - 1) * itemsPerPage + idx + 1}
//                 </td>
//                 <td className="p-3">{item.tracking}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       item.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : item.status === "Delivered"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="p-3">{item.customer}</td>
//                 <td className="p-3">{item.address}</td>
//                 <td className="p-3">Rs {item.cod}</td>
//                 <td className="p-3">
//                   {item.origin} → {item.destination}
//                 </td>
//                 <td className="p-3">{item.adviceDate}</td>
//                 <td className="p-3">{item.adviceText}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => setSelectedRow(item)}
//                     className="text-indigo-600 hover:text-indigo-800"
//                   >
//                     <Eye size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {paginatedData.length === 0 && (
//               <tr>
//                 <td colSpan="10" className="p-3 text-center text-gray-500">
//                   No records found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((p) => p - 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <div className="space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 border rounded ${
//                 currentPage === i + 1 ? "bg-indigo-500 text-white" : ""
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((p) => p + 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal */}
//       {selectedRow && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-xl shadow-xl p-6 w-[500px] relative">
//             <button
//               onClick={() => setSelectedRow(null)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//             >
//               ✖
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Order Details</h2>
//             <div className="space-y-2">
//               <p>
//                 <strong>Tracking#:</strong> {selectedRow.tracking}
//               </p>
//               <p>
//                 <strong>Status:</strong> {selectedRow.status}
//               </p>
//               <p>
//                 <strong>Customer:</strong> {selectedRow.customer}
//               </p>
//               <p>
//                 <strong>Address:</strong> {selectedRow.address}
//               </p>
//               <p>
//                 <strong>COD:</strong> Rs {selectedRow.cod}
//               </p>
//               <p>
//                 <strong>Route:</strong> {selectedRow.origin} →{" "}
//                 {selectedRow.destination}
//               </p>
//               <p>
//                 <strong>Advice Date:</strong> {selectedRow.adviceDate}
//               </p>
//               <p>
//                 <strong>Advice Text:</strong> {selectedRow.adviceText}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipperAdvise;







import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import CreatableSelect from "react-select/creatable";
import { Eye } from "lucide-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// --- Demo Data (same as before) ---
const demoData = [  {
      id: 1,
      tracking: "TRK-1001",
      status: "Pending",
      customer: "Ali Khan",
      address: "House #12, Karachi",
      cod: 2500,
      origin: "Karachi",
      destination: "Lahore",
      adviceDate: "2025-09-01",
      adviceText: "Handle with care",
    },
    {
      id: 2,
      tracking: "TRK-1002",
      status: "Delivered",
      customer: "Sara Ahmed",
      address: "Street 45, Lahore",
      cod: 4500,
      origin: "Islamabad",
      destination: "Karachi",
      adviceDate: "2025-09-02",
      adviceText: "Leave with neighbor",
    },
    {
      id: 3,
      tracking: "TRK-1003",
      status: "Cancelled",
      customer: "Bilal",
      address: "Multan Cantt",
      cod: 1500,
      origin: "Karachi",
      destination: "Multan",
      adviceDate: "2025-09-03",
      adviceText: "Wrong address",
    },
    {
      id: 4,
      tracking: "TRK-1004",
      status: "Pending",
      customer: "Ayesha",
      address: "Phase 6, DHA Lahore",
      cod: 3200,
      origin: "Lahore",
      destination: "Islamabad",
      adviceDate: "2025-09-05",
      adviceText: "Call before delivery",
    },
    {
      id: 5,
      tracking: "TRK-1005",
      status: "Delivered",
      customer: "Hassan",
      address: "Sector G-10, Islamabad",
      cod: 1800,
      origin: "Islamabad",
      destination: "Karachi",
      adviceDate: "2025-09-06",
      adviceText: "Deliver after 5 PM",
    },
    {
      id: 6,
      tracking: "TRK-1006",
      status: "Pending",
      customer: "Nimra",
      address: "Quetta City Center",
      cod: 2200,
      origin: "Quetta",
      destination: "Karachi",
      adviceDate: "2025-09-07",
      adviceText: "Fragile item",
    },
    {
      id: 7,
      tracking: "TRK-1007",
      status: "Delivered",
      customer: "Fahad",
      address: "Street 9, Hyderabad",
      cod: 2700,
      origin: "Hyderabad",
      destination: "Lahore",
      adviceDate: "2025-09-08",
      adviceText: "Fast delivery",
    },
    {
      id: 8,
      tracking: "TRK-1008",
      status: "Cancelled",
      customer: "Sana",
      address: "Saddar, Peshawar",
      cod: 1900,
      origin: "Peshawar",
      destination: "Karachi",
      adviceDate: "2025-09-09",
      adviceText: "Customer refused",
    },
    {
      id: 9,
      tracking: "TRK-1009",
      status: "Pending",
      customer: "Imran",
      address: "Faisalabad City",
      cod: 2100,
      origin: "Faisalabad",
      destination: "Islamabad",
      adviceDate: "2025-09-10",
      adviceText: "Deliver on weekend",
    },
    {
      id: 10,
      tracking: "TRK-1010",
      status: "Delivered",
      customer: "Saad",
      address: "Model Town, Lahore",
      cod: 5000,
      origin: "Lahore",
      destination: "Karachi",
      adviceDate: "2025-09-11",
      adviceText: "Cash only",
    },];

const cityOptions = [
  { value: "Karachi", label: "Karachi" },
  { value: "Lahore", label: "Lahore" },
  { value: "Islamabad", label: "Islamabad" },
  { value: "Multan", label: "Multan" },
  { value: "Peshawar", label: "Peshawar" },
  { value: "Quetta", label: "Quetta" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Hyderabad", label: "Hyderabad" },
];

const ShipperAdvise = () => {
  const [search, setSearch] = useState("");
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-09-01"),
      endDate: addDays(new Date("2025-09-01"), 15),
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- Filtering Logic (same as before) ---
  const filteredData = demoData.filter((item) => {
    const inSearch =
      search === "" ||
      item.tracking.toLowerCase().includes(search.toLowerCase()) ||
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase());

    const inOrigin = !origin || item.origin === origin.value;
    const inDestination = !destination || item.destination === destination.value;

    const inDateRange =
      new Date(item.adviceDate) >= dateRange[0].startDate &&
      new Date(item.adviceDate) <= dateRange[0].endDate;

    return inSearch && inOrigin && inDestination && inDateRange;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- Status Colors ---
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Search (Tracking#, Customer, Address)"
          className="border p-2 outline-indigo-500 rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CreatableSelect
          options={cityOptions}
          value={origin}
          onChange={setOrigin}
          placeholder="Origin City"
          isClearable
        />
        <CreatableSelect
          options={cityOptions}
          value={destination}
          onChange={setDestination}
          placeholder="Destination City"
          isClearable
        />
        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="border p-2 border-gray-400 rounded-lg w-full text-left"
          >
            {`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
          </button>
          {showDatePicker && (
            <div className="absolute z-50 bg-white shadow-xl mt-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile View (Cards) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow border space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.tracking}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
            <p><b>Customer:</b> {item.customer}</p>
            <p><b>Address:</b> {item.address}</p>
            <p><b>COD:</b> Rs {item.cod}</p>
            <p><b>Route:</b> {item.origin} → {item.destination}</p>
            <p><b>Advice Date:</b> {item.adviceDate}</p>
            <p><b>Advice Text:</b> {item.adviceText}</p>
            <button
              onClick={() => setSelectedRow(item)}
              className="mt-2 text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <Eye size={18} /> View
            </button>
          </div>
        ))}
      </div>

      {/* Desktop View (Table) */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Serial No</th>
              <th className="p-3 text-left">Tracking#</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Customer Name</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">COD Amount</th>
              <th className="p-3 text-left">Origin - Destination</th>
              <th className="p-3 text-left">Advice Date</th>
              <th className="p-3 text-left">Advice Text</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="p-3">{item.tracking}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3">{item.customer}</td>
                <td className="p-3">{item.address}</td>
                <td className="p-3">Rs {item.cod}</td>
                <td className="p-3">
                  {item.origin} → {item.destination}
                </td>
                <td className="p-3">{item.adviceDate}</td>
                <td className="p-3">{item.adviceText}</td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedRow(item)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan="10" className="p-3 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
        <div className="flex gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-indigo-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedRow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[500px] relative">
            <button
              onClick={() => setSelectedRow(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <div className="space-y-2">
              <p><strong>Tracking#:</strong> {selectedRow.tracking}</p>
              <p><strong>Status:</strong> {selectedRow.status}</p>
              <p><strong>Customer:</strong> {selectedRow.customer}</p>
              <p><strong>Address:</strong> {selectedRow.address}</p>
              <p><strong>COD:</strong> Rs {selectedRow.cod}</p>
              <p><strong>Route:</strong> {selectedRow.origin} → {selectedRow.destination}</p>
              <p><strong>Advice Date:</strong> {selectedRow.adviceDate}</p>
              <p><strong>Advice Text:</strong> {selectedRow.adviceText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShipperAdvise;
