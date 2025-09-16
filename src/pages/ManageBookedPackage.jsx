import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaEye, FaSyncAlt } from "react-icons/fa";
import Modal from "../components/Modal";

const ManageBookedPackage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    dateRange: "",
    status: "All Status",
    originCity: "All Origins",
    destinationCity: "All Destinations",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPacket, setSelectedPacket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Demo Data Load
  const fetchPackets = async () => {
    setLoading(true);
    try {
      const demoData = [
        {
          sNo: 1,
          orderId: "169229103",
          tracking: "KI7505849297",
          status: "Delivered",
          customerName: "IRUM ATIF",
          customerPhone: "03216610175",
          address: "P 165, Saeed Colony No 1, Canal Road, Near Abu Ba...",
          city: "FAISALABAD",
          cod: 5130,
          recievedAmount: 4924.8,
          bookingDate: "28-August-2025",
          deliveryDate: "02-September-2025",
          details: {
            trackingNo: "KI7505849297",
            orderId: "169229103",
            consignee: "IRUM ATIF",
            phone: "03216610175",
            origin: "KARACHI",
            destination: "FAISALABAD",
            weight: "150 g",
            pieces: 1,
            codAmount: 5130,
            status: "Delivered",
            bookingDate: "28-August-2025",
            advancePayment: 0,
            consigneeAddress: "P 165, Saeed Colony No 1, Canal Road, Near Abu Bakr Road...",
          },
        },
        {
          sNo: 2,
          orderId: "169229104",
          tracking: "KI7505849298",
          status: "In Transit",
          customerName: "ALI KHAN",
          customerPhone: "03331234567",
          address: "123, Main Street, Near Park...",
          city: "LAHORE",
          cod: 2500,
          recievedAmount: 0,
          bookingDate: "01-September-2025",
          deliveryDate: "",
          details: {
            trackingNo: "KI7505849298",
            orderId: "169229104",
            consignee: "ALI KHAN",
            phone: "03331234567",
            origin: "ISLAMABAD",
            destination: "LAHORE",
            weight: "200 g",
            pieces: 1,
            codAmount: 2500,
            status: "In Transit",
            bookingDate: "01-September-2025",
            advancePayment: 0,
            consigneeAddress: "123, Main Street, Near Park, Phase 1...",
          },
        },
        {
          sNo: 3,
          orderId: "168418881",
          tracking: "KI7507427412",
          status: "Delivered",
          customerName: "ZARMINA NAVEED",
          customerPhone: "03342264070",
          address: "N-2159 metroville block 2...",
          city: "KARACHI",
          cod: 14380,
          recievedAmount: 13703.6,
          bookingDate: "18-August-2025",
          deliveryDate: "21-August-2025",
          details: {
            trackingNo: "KI7507427412",
            orderId: "168418881",
            consignee: "ZARMINA NAVEED",
            phone: "03342264070",
            origin: "RAWALPINDI",
            destination: "KARACHI",
            weight: "300 g",
            pieces: 1,
            codAmount: 14380,
            status: "Delivered",
            bookingDate: "18-August-2025",
            advancePayment: 0,
            consigneeAddress: "N-2159 metroville block 2 gulzar hijri near javaid p...",
          },
        },
        {
          sNo: 4,
          orderId: "168419749",
          tracking: "KI7507427633",
          status: "Delivered",
          customerName: "HIRA SHK",
          customerPhone: "033369641506",
          address: "Kidney Hospital Colony...",
          city: "QUETTA",
          cod: 5030,
          recievedAmount: 4664.35,
          bookingDate: "18-August-2025",
          deliveryDate: "22-August-2025",
          details: {
            trackingNo: "KI7507427633",
            orderId: "168419749",
            consignee: "HIRA SHK",
            phone: "033369641506",
            origin: "KARACHI",
            destination: "QUETTA",
            weight: "250 g",
            pieces: 1,
            codAmount: 5030,
            status: "Delivered",
            bookingDate: "30-August-2025",
            advancePayment: 1,
            consigneeAddress: "Kidney Hospital Colony Samungli Road Quetta",
          },
        },
        {
          sNo: 5,
          orderId: "168421549",
          tracking: "KI7507428159",
          status: "Delivered",
          customerName: "MRS IRTAZA",
          customerPhone: "03074465672",
          address: "Ahmed street no 1...",
          city: "LAHORE",
          cod: 2530,
          recievedAmount: 2264.35,
          bookingDate: "18-August-2025",
          deliveryDate: "21-August-2025",
          details: {
            trackingNo: "KI7507428159",
            orderId: "168421549",
            consignee: "MRS IRTAZA",
            phone: "03074465672",
            origin: "MULTAN",
            destination: "LAHORE",
            weight: "100 g",
            pieces: 1,
            codAmount: 2530,
            status: "Delivered",
            bookingDate: "18-August-2025",
            advancePayment: 0,
            consigneeAddress: "Ahmed street no 1 house no 4 chaman park naya pull...",
          },
        },
        {
          sNo: 6,
          orderId: "168421550",
          tracking: "KI7507428160",
          status: "Pending",
          customerName: "JOHN DOE",
          customerPhone: "03001112233",
          address: "10, ABC Road, Town...",
          city: "PESHAWAR",
          cod: 500,
          recievedAmount: 0,
          bookingDate: "20-August-2025",
          deliveryDate: "",
          details: {
            trackingNo: "KI7507428160",
            orderId: "168421550",
            consignee: "JOHN DOE",
            phone: "03001112233",
            origin: "LAHORE",
            destination: "PESHAWAR",
            weight: "50 g",
            pieces: 1,
            codAmount: 500,
            status: "Pending",
            bookingDate: "20-August-2025",
            advancePayment: 0,
            consigneeAddress: "10, ABC Road, Town...",
          },
        },
        {
          sNo: 7,
          orderId: "168421551",
          tracking: "KI7507428161",
          status: "Cancelled",
          customerName: "JANE SMITH",
          customerPhone: "03459998877",
          address: "20, XYZ Avenue...",
          city: "RAWALPINDI",
          cod: 1500,
          recievedAmount: 0,
          bookingDate: "22-August-2025",
          deliveryDate: "",
          details: {
            trackingNo: "KI7507428161",
            orderId: "168421551",
            consignee: "JANE SMITH",
            phone: "03459998877",
            origin: "KARACHI",
            destination: "RAWALPINDI",
            weight: "100 g",
            pieces: 1,
            codAmount: 1500,
            status: "Cancelled",
            bookingDate: "22-August-2025",
            advancePayment: 0,
            consigneeAddress: "20, XYZ Avenue...",
          },
        },
        {
          sNo: 8,
          orderId: "168421552",
          tracking: "KI7507428162",
          status: "Delivered",
          customerName: "DAVID WILSON",
          customerPhone: "03215554433",
          address: "55, Model Town...",
          city: "MULTAN",
          cod: 7500,
          recievedAmount: 7200,
          bookingDate: "25-August-2025",
          deliveryDate: "28-August-2025",
          details: {
            trackingNo: "KI7507428162",
            orderId: "168421552",
            consignee: "DAVID WILSON",
            phone: "03215554433",
            origin: "ISLAMABAD",
            destination: "MULTAN",
            weight: "250 g",
            pieces: 1,
            codAmount: 7500,
            status: "Delivered",
            bookingDate: "25-August-2025",
            advancePayment: 0,
            consigneeAddress: "55, Model Town...",
          },
        },
        {
          sNo: 9,
          orderId: "168421553",
          tracking: "KI7507428163",
          status: "Shipped",
          customerName: "AMIR ZIA",
          customerPhone: "03009998877",
          address: "23-B, Canal View...",
          city: "QUETTA",
          cod: 3000,
          recievedAmount: 0,
          bookingDate: "28-August-2025",
          deliveryDate: "",
          details: {
            trackingNo: "KI7507428163",
            orderId: "168421553",
            consignee: "AMIR ZIA",
            phone: "03009998877",
            origin: "LAHORE",
            destination: "QUETTA",
            weight: "150 g",
            pieces: 1,
            codAmount: 3000,
            status: "Shipped",
            bookingDate: "28-August-2025",
            advancePayment: 0,
            consigneeAddress: "23-B, Canal View...",
          },
        },
        {
          sNo: 10,
          orderId: "168421554",
          tracking: "KI7507428164",
          status: "Delivered",
          customerName: "SANA KHAN",
          customerPhone: "03451122334",
          address: "45-C, Gulberg...",
          city: "FAISALABAD",
          cod: 4000,
          recievedAmount: 3800,
          bookingDate: "30-August-2025",
          deliveryDate: "02-September-2025",
          details: {
            trackingNo: "KI7507428164",
            orderId: "168421554",
            consignee: "SANA KHAN",
            phone: "03451122334",
            origin: "KARACHI",
            destination: "FAISALABAD",
            weight: "200 g",
            pieces: 1,
            codAmount: 4000,
            status: "Delivered",
            bookingDate: "30-August-2025",
            advancePayment: 0,
            consigneeAddress: "45-C, Gulberg...",
          },
        },
        {
          sNo: 11,
          orderId: "168421555",
          tracking: "KI7507428165",
          status: "Pending",
          customerName: "OMAR FAISAL",
          customerPhone: "03218889900",
          address: "77, Defense Housing...",
          city: "PESHAWAR",
          cod: 900,
          recievedAmount: 0,
          bookingDate: "01-September-2025",
          deliveryDate: "",
          details: {
            trackingNo: "KI7507428165",
            orderId: "168421555",
            consignee: "OMAR FAISAL",
            phone: "03218889900",
            origin: "LAHORE",
            destination: "PESHAWAR",
            weight: "50 g",
            pieces: 1,
            codAmount: 900,
            status: "Pending",
            bookingDate: "01-September-2025",
            advancePayment: 0,
            consigneeAddress: "77, Defense Housing...",
          }
        },
      ];
      setData(demoData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackets();
  }, []);

  // Filter + Search
  const filteredData = data.filter((packet) => {
    const matchesSearch =
      packet.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      packet.tracking.toLowerCase().includes(searchTerm.toLowerCase()) ||
      packet.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      packet.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilters =
      (filters.status === "All Status" || packet.status === filters.status) &&
      (filters.originCity === "All Origins" ||
        packet.details.origin === filters.originCity) &&
      (filters.destinationCity === "All Destinations" ||
        packet.details.destination === filters.destinationCity);

    return matchesSearch && matchesFilters;
  });

  // Pagination
  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;
  const currentEntries = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    const end = Math.min(start + 5, totalPages);
    return new Array(end - start)
      .fill()
      .map((_, idx) => start + idx + 1);
  };

  // Status Badge Colors
  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "In Transit":
        return "bg-yellow-100 text-yellow-600";
      case "Pending":
        return "bg-blue-100 text-blue-600";
      case "Shipped":
        return "bg-purple-100 text-purple-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search (Ctrl+/)"
            className="w-full pl-10 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FaUserCircle className="text-4xl text-purple-500 cursor-pointer" />
      </header>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            name="dateRange"
            placeholder="Date Range"
            className="p-2 border rounded focus:ring-2 focus:ring-purple-500"
            value={filters.dateRange}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: e.target.value })
            }
          />
          <select
            name="status"
            className="p-2 border rounded focus:ring-2 focus:ring-purple-500"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option>All Status</option>
            <option>Delivered</option>
            <option>In Transit</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Cancelled</option>
          </select>
          <select
            name="originCity"
            className="p-2 border rounded focus:ring-2 focus:ring-purple-500"
            value={filters.originCity}
            onChange={(e) =>
              setFilters({ ...filters, originCity: e.target.value })
            }
          >
            <option>All Origins</option>
            <option>KARACHI</option>
            <option>LAHORE</option>
            <option>ISLAMABAD</option>
            <option>RAWALPINDI</option>
            <option>MULTAN</option>
          </select>
          <select
            name="destinationCity"
            className="p-2 border rounded focus:ring-2 focus:ring-purple-500"
            value={filters.destinationCity}
            onChange={(e) =>
              setFilters({ ...filters, destinationCity: e.target.value })
            }
          >
            <option>All Destinations</option>
            <option>FAISALABAD</option>
            <option>QUETTA</option>
            <option>PESHAWAR</option>
            <option>LAHORE</option>
            <option>KARACHI</option>
            <option>MULTAN</option>
            <option>RAWALPINDI</option>
          </select>
        </div>
        <button
          onClick={() =>
            setFilters({
              dateRange: "",
              status: "All Status",
              originCity: "All Origins",
              destinationCity: "All Destinations",
            })
          }
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <FaSyncAlt /> Reset All
        </button>
      </div>

      {/* Table & Mobile Cards */}
      <div className="bg-white p-4 rounded shadow">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : (
          <>
            {/* Mobile View (Cards) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {currentEntries.map((p) => (
                <div key={p.orderId} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Order ID: {p.orderId}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(p.status)}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p><b>Tracking:</b> {p.tracking}</p>
                    <p><b>Customer:</b> {p.customerName} ({p.customerPhone})</p>
                    <p><b>Address:</b> {p.address}</p>
                    <p><b>COD:</b> {p.cod} PKR</p>
                    <p><b>Received:</b> {p.recievedAmount} PKR</p>
                    <p><b>Booking Date:</b> {p.bookingDate}</p>
                    {p.deliveryDate && <p><b>Delivery Date:</b> {p.deliveryDate}</p>}
                  </div>
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedPacket(p.details);
                        setIsModalOpen(true);
                      }}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <FaEye /> View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View (Table) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">
                      <input type="checkbox" />
                    </th>
                    <th className="p-2 border">S.No</th>
                    <th className="p-2 border">Order ID</th>
                    <th className="p-2 border">Tracking</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Customer</th>
                    <th className="p-2 border">Address</th>
                    <th className="p-2 border">COD</th>
                    <th className="p-2 border">Received</th>
                    <th className="p-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEntries.map((p) => (
                    <tr key={p.orderId} className="border-t">
                      <td className="p-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="p-2">{p.sNo}</td>
                      <td className="p-2">{p.orderId}</td>
                      <td className="p-2">
                        {p.tracking}
                        <div className="text-xs text-gray-500">{p.bookingDate}</div>
                      </td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getStatusClass(p.status)}`}
                        >
                          {p.status}
                        </span>
                        {p.deliveryDate && (
                          <div className="text-xs text-gray-500">
                            {p.deliveryDate}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        {p.customerName}
                        <div className="text-xs text-purple-600">
                          {p.customerPhone}
                        </div>
                      </td>
                      <td className="p-2">{p.address}</td>
                      <td className="p-2">{p.cod}</td>
                      <td className="p-2">{p.recievedAmount}</td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => {
                            setSelectedPacket(p.details);
                            setIsModalOpen(true);
                          }}
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
          <div className="text-sm text-gray-600">
            Showing {firstIndex + 1} to{" "}
            {Math.min(lastIndex, filteredData.length)} of{" "}
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
            {getPaginationGroup().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {page}
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
      </div>

      {/* Modal */}
      {isModalOpen && selectedPacket && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-3">
              Shipment ({selectedPacket.trackingNo})
            </h3>
            <p>
              <b>Order ID:</b> {selectedPacket.orderId}
            </p>
            <p>
              <b>Origin → Destination:</b> {selectedPacket.origin} →{" "}
              {selectedPacket.destination}
            </p>
            <p>
              <b>Consignee:</b> {selectedPacket.consignee}
            </p>
            <p>
              <b>Phone:</b> {selectedPacket.phone}
            </p>
            <p>
              <b>COD:</b> {selectedPacket.codAmount} PKR
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManageBookedPackage;