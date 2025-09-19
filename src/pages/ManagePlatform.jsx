
// import React, { useState, useEffect } from "react";
// import { FaSearch, FaUserCircle } from "react-icons/fa";

// const ManagePlatform = () => {
//   const [materials, setMaterials] = useState(() => {
//     const savedMaterials = localStorage.getItem("platform");
//     return savedMaterials ? JSON.parse(savedMaterials) : [];
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [newMaterial, setNewMaterial] = useState({ name: ""});
//   const [editingMaterial, setEditingMaterial] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     localStorage.setItem("platform", JSON.stringify(materials));
//   }, [materials]);

//   const handleAddMaterial = (e) => {
//     e.preventDefault();
//     if (newMaterial.name) {
//       setMaterials([...materials, { ...newMaterial, id: Date.now() }]);
//       setNewMaterial({ name: "" });
//       setIsModalOpen(false);
//     }
//   };

//   const handleEditMaterial = (e) => {
//     e.preventDefault();
//     if (editingMaterial) {
//       setMaterials(
//         materials.map((material) =>
//           material.id === editingMaterial.id ? editingMaterial : material
//         )
//       );
//       setEditingMaterial(null);
//       setIsEditModalOpen(false);
//     }
//   };

//   const handleDeleteMaterial = (id) => {
//     setDeleteId(id);
//     setIsDeleteModalOpen(true);
//   };

//   const confirmDelete = () => {
//     setMaterials(materials.filter((material) => material.id !== deleteId));
//     setIsDeleteModalOpen(false);
//     setDeleteId(null);
//   };

//   const filteredMaterials = materials.filter((material) =>
//     material.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
     
//         {/* Header */}
//         <header className="flex items-center justify-between mb-2">
//           <div className="relative">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search (Ctrl+/)"
//               className="pl-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaUserCircle className="text-4xl text-purple-500 cursor-pointer" />
//           </div>
//         </header>

//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">
//             Manage Platforms
//           </h1>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors w-full sm:w-auto"
//           >
//             Add Platform
//           </button>
//         </div>

//         {/* Search and entries */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
//           <div className="flex items-center space-x-2">
//             <label htmlFor="entries" className="text-gray-600">
//               Show
//             </label>
//             <select
//               id="entries"
//               className="border rounded-md px-2 py-1 text-sm sm:text-base"
//             >
//               <option value="10">10</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//             </select>
//             <span className="text-gray-600">entries</span>
//           </div>
//           <div className="flex items-center space-x-2 w-full sm:w-auto">
//             <label htmlFor="search" className="text-gray-600 whitespace-nowrap">
//               Search:
//             </label>
//             <input
//               type="text"
//               id="search"
//               className="flex-1 border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-md text-sm">
//             <thead>
//               <tr className="bg-gray-50 text-left text-gray-600 uppercase text-xs sm:text-sm leading-normal">
//                 <th className="py-3 px-4 sm:px-6">No#</th>
//                 <th className="py-3 px-4 sm:px-6">Platform Name</th>
//                 <th className="py-3 px-4 sm:px-6 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700 font-light">
//               {filteredMaterials.map((material, index) => (
//                 <tr
//                   key={material.id}
//                   className="border-b border-gray-200 hover:bg-gray-100"
//                 >
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap">
//                     {index + 1}
//                   </td>
//                   <td className="py-3 px-4 sm:px-6">{material.name}</td>
//                   <td className="py-3 px-4 sm:px-6 text-center">
//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
//                       <button
//                         onClick={() => {
//                           setEditingMaterial(material);
//                           setIsEditModalOpen(true);
//                         }}
//                         className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors w-full sm:w-auto"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDeleteMaterial(material.id)}
//                         className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors w-full sm:w-auto"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-600 gap-3">
//           <span>
//             Showing 1 to {filteredMaterials.length} of {materials.length} entries
//           </span>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border rounded-md hover:bg-gray-200">
//               Previous
//             </button>
//             <button className="px-3 py-1 border rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
//               1
//             </button>
//             <button className="px-3 py-1 border rounded-md hover:bg-gray-200">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
//             <h2 className="text-lg font-bold mb-4 text-gray-800">
//               Confirm Delete
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete this material?
//             </p>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Add Material Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
//             <h2 className="text-xl font-bold mb-4">Add Platform</h2>
//             <form onSubmit={handleAddMaterial}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={newMaterial.name}
//                   onChange={(e) =>
//                     setNewMaterial({ ...newMaterial, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ✅ Edit Material Modal */}
//       {isEditModalOpen && editingMaterial && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
//             <h2 className="text-xl font-bold mb-4">Edit Packaging Material</h2>
//             <form onSubmit={handleEditMaterial}>
//               <div className="mb-4">
//                 <label htmlFor="editName" className="block text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="editName"
//                   className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={editingMaterial.name}
//                   onChange={(e) =>
//                     setEditingMaterial({
//                       ...editingMaterial,
//                       name: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
              
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsEditModalOpen(false);
//                     setEditingMaterial(null);
//                   }}
//                   className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManagePlatform;

import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const ManagePlatform = () => {
  const [platforms, setPlatforms] = useState(() => {
    const savedPlatforms = localStorage.getItem("platform");
    return savedPlatforms ? JSON.parse(savedPlatforms) : [];
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState(null);
  const [newPlatform, setNewPlatform] = useState({ name: "" });
  const [editingPlatform, setEditingPlatform] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Save to localStorage when platforms change
  useEffect(() => {
    localStorage.setItem("platform", JSON.stringify(platforms));
  }, [platforms]);

  // ✅ Add Platform
  const handleAddPlatform = (e) => {
    e.preventDefault();
    if (newPlatform.name.trim()) {
      setPlatforms([...platforms, { ...newPlatform, id: Date.now() }]);
      setNewPlatform({ name: "" });
      setIsAddModalOpen(false);
    }
  };

  // ✅ Edit Platform
  const handleEditPlatform = (e) => {
    e.preventDefault();
    if (editingPlatform) {
      setPlatforms(
        platforms.map((platform) =>
          platform.id === editingPlatform.id ? editingPlatform : platform
        )
      );
      setEditingPlatform(null);
      setIsEditModalOpen(false);
    }
  };

  // ✅ Delete Platform
  const handleDeletePlatform = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setPlatforms(platforms.filter((platform) => platform.id !== deleteId));
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  };

  // ✅ Search Filter
  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between mb-2">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search (Ctrl+/)"
            className="pl-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-4xl text-purple-500 cursor-pointer" />
        </div>
      </header>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6">
        {/* Title + Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">
            Manage Platforms
          </h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors w-full sm:w-auto"
          >
            Add Platform
          </button>
        </div>

        {/* Search + Entries */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <div className="flex items-center space-x-2">
            <label htmlFor="entries" className="text-gray-600">
              Show
            </label>
            <select
              id="entries"
              className="border rounded-md px-2 py-1 text-sm sm:text-base"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-gray-600">entries</span>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <label htmlFor="search" className="text-gray-600 whitespace-nowrap">
              Search:
            </label>
            <input
              type="text"
              id="search"
              className="flex-1 border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 uppercase text-xs sm:text-sm leading-normal">
                <th className="py-3 px-4 sm:px-6">No#</th>
                <th className="py-3 px-4 sm:px-6">Platform Name</th>
                <th className="py-3 px-4 sm:px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-light">
              {filteredPlatforms.map((platform, index) => (
                <tr
                  key={platform.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 sm:px-6">{platform.name}</td>
                  <td className="py-3 px-4 sm:px-6 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setEditingPlatform(platform);
                          setIsEditModalOpen(true);
                        }}
                        className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors w-full sm:w-auto"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePlatform(platform.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors w-full sm:w-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-600 gap-3">
          <span>
            Showing 1 to {filteredPlatforms.length} of {platforms.length} entries
          </span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md hover:bg-gray-200">
              Previous
            </button>
            <button className="px-3 py-1 border rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
              1
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Confirm Delete
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this platform?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Add Platform Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Add Platform</h2>
            <form onSubmit={handleAddPlatform}>
              <div className="mb-4">
                <label htmlFor="platformName" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="platformName"
                  className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newPlatform.name}
                  onChange={(e) =>
                    setNewPlatform({ ...newPlatform, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Edit Platform Modal */}
      {isEditModalOpen && editingPlatform && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Edit Platform</h2>
            <form onSubmit={handleEditPlatform}>
              <div className="mb-4">
                <label htmlFor="editPlatformName" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="editPlatformName"
                  className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editingPlatform.name}
                  onChange={(e) =>
                    setEditingPlatform({
                      ...editingPlatform,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setEditingPlatform(null);
                  }}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePlatform;
