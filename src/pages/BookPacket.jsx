
// // import React, { useState } from 'react';
// // import { FaUserCircle, FaSearch } from 'react-icons/fa';
// // import ItemsDetails from '../components/Detailpage'; // Corrected path to ItemsDetails

// // const BookPacket = () => {
// //   const [formData, setFormData] = useState({
// //     orderId: '',
// //     division: 'EXPRESS',
// //     shipmentType: 'OVERNIGHT',
// //     consigneeName: '',
// //     consigneePhone: '',
// //     destinationCity: '',
// //     platform: '',
// //     consigneeAddress: '',
// //     weigh: '',
// //     pieces: '',
// //     productDescription: '',
// //     codAmount: '',
// //     advancePayment: '',
// //     specialInstructions: '',
// //   });

// //   const [showChart, setShowChart] = useState(false); // State to control the popup

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form data submitted:', formData);
// //   };

// //   const handleShowChart = () => {
// //     setShowChart(true);
// //   };

// //   const handleCloseChart = () => {
// //     setShowChart(false);
// //   };

// //   const handleCancel = () => {
// //     setFormData({
// //       orderId: '',
// //       division: 'EXPRESS',
// //       shipmentType: 'OVERNIGHT',
// //       consigneeName: '',
// //       consigneePhone: '',
// //       destinationCity: '',
// //       platform: '',
// //       consigneeAddress: '',
// //       weigh: '',
// //       pieces: '',
// //       productDescription: '',
// //       codAmount: '',
// //       advancePayment: '',
// //       specialInstructions: '',
// //     });
// //     console.log('Form has been cleared');
// //   };

// //   // Helper function for the animated input
// //   const renderAnimatedInput = (name, placeholder, type = 'text', isRequired = false, isFullWidth = false) => (
// //     <div className={`input-group relative ${isFullWidth ? 'md:col-span-2' : ''}`}>
// //       <input
// //         type={type}
// //         name={name}
// //         id={name}
// //         value={formData[name]}
// //         onChange={handleChange}
// //         placeholder=" " // Important: use a non-empty placeholder with a space
// //         className="input-field peer p-3 border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
// //         required={isRequired}
// //       />
// //       <label htmlFor={name} className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500">
// //         {placeholder}
// //       </label>
// //     </div>
// //   );

// //   // Helper function for the animated select
// //   const renderAnimatedSelect = (name, placeholder, options, isRequired = false) => (
// //     <div className="input-group relative">
// //       <select
// //         name={name}
// //         id={name}
// //         value={formData[name]}
// //         onChange={handleChange}
// //         className="input-field peer p-3 border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full appearance-none"
// //         required={isRequired}
// //       >
// //         <option value="" disabled>{placeholder}</option>
// //         {options.map(option => (
// //           <option key={option.value} value={option.value}>{option.label}</option>
// //         ))}
// //       </select>
// //       <label htmlFor={name} className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500">
// //         {placeholder}
// //       </label>
// //     </div>
// //   );

// //   return (
// //     <>
// //       <div className="min-h-screen bg-gray-100 p-8 font-sans">
// //         <header className="flex items-center justify-between mb-8">
// //           <div className="relative">
// //             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //             <input
// //               type="text"
// //               placeholder="Search (Ctrl+/)"
// //               className="pl-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             />
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaUserCircle className="text-4xl text-purple-500 cursor-pointer" />
// //           </div>
// //         </header>

// //         <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Create New Order</h2>

// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* Order Detail Section */}
// //             <div className="space-y-4">
// //               <h3 className="text-xl font-semibold text-gray-700">Order Detail</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {renderAnimatedInput('orderId', 'Order ID')}
// //                 {renderAnimatedSelect(
// //                   'division',
// //                   'Select Division *',
// //                   [{ value: 'EXPRESS', label: 'EXPRESS' }, { value: 'STANDARD', label: 'STANDARD' }],
// //                   true
// //                 )}
// //                 {renderAnimatedSelect(
// //                   'shipmentType',
// //                   'Select Shipment Type *',
// //                   [{ value: 'OVERNIGHT', label: 'OVERNIGHT' }, { value: 'REGULAR', label: 'REGULAR' }],
// //                   true
// //                 )}
// //               </div>
// //             </div>

// //             {/* Customer Detail Section */}
// //             <div className="space-y-4">
// //               <h3 className="text-xl font-semibold text-gray-700">Customer Detail</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {renderAnimatedInput('consigneeName', 'Consignee Name *', 'text', true)}
// //                 {renderAnimatedInput('consigneePhone', 'Consignee Phone *', 'tel', true)}
// //                 {/* Destination City - now a regular input */}
// //                 {renderAnimatedInput('destinationCity', 'Destination City *', 'text', true)}
// //                 {renderAnimatedSelect(
// //                   'platform',
// //                   'Select Platform *',
// //                   [{ value: 'amazon', label: 'Amazon' }, { value: 'shopify', label: 'Shopify' }],
// //                   true
// //                 )}
// //                 {renderAnimatedInput('consigneeAddress', 'Consignee Address *', 'text', true, true)}
// //               </div>
// //             </div>

// //             {/* Shipment Detail Section */}
// //             <div className="space-y-4">
// //               <h3 className="text-xl font-semibold text-gray-700">Shipment Detail</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {renderAnimatedInput('weigh', 'Weigh (grams) *', 'number', true)}
// //                 {renderAnimatedInput('pieces', 'No. of Pieces *', 'number', true)}
// //                 {renderAnimatedInput('productDescription', 'Product Description *', 'text', true)}
// //                 {renderAnimatedInput('codAmount', 'COD Amount *', 'number', true)}
// //                 {renderAnimatedInput('advancePayment', 'Advance Payment *', 'number', true)}
// //                 {/* For textarea, a slightly different approach is needed */}
// //                 <div className="input-group relative col-span-1 md:col-span-3">
// //                   <textarea
// //                     name="specialInstructions"
// //                     id="specialInstructions"
// //                     value={formData.specialInstructions}
// //                     onChange={handleChange}
// //                     rows="4"
// //                     placeholder=" "
// //                     className="input-field peer p-3 outline-indigo-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
// //                     required
// //                   />
// //                   <label htmlFor="specialInstructions" className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500">
// //                     Special Instructions *
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Form Actions */}
// //             <div className="flex flex-wrap gap-4 pt-4">
// //               <button
// //                 type="submit"
// //                 className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //               >
// //                 Book Order
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={handleShowChart}
// //                 className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //               >
// //                 Show Chart
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={handleCancel}
// //                 className="px-6 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </form>

// //           {/* Popup/Modal for ItemsDetails */}
// //           {showChart && (
// //             <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
// //               <div className="relative p-8 bg-white w-11/12 max-w-4xl mx-auto rounded-lg shadow-lg">
// //                 <button
// //                   className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
// //                   onClick={handleCloseChart}
// //                 >
// //                   &times;
// //                 </button>
// //                 <ItemsDetails />
// //               </div>
// //             </div>
// //           )}

// //           <footer className="mt-8 pt-4 border-t text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
// //             <p className='flex mb-2 md:mb-0'>©, made with ❤️ by <p className='text-blue-500'>ThemeSelection</p></p>
// //             <div className="flex space-x-4">
// //               <a href="#" className="hover:underline">License</a>
// //               <a href="#" className="hover:underline">More Themes</a>
// //               <a href="#" className="hover:underline">Documentation</a>
// //               <a href="#" className="hover:underline">Support</a>
// //             </div>
// //           </footer>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default BookPacket;





// import React, { useState } from 'react';
// import { FaUserCircle, FaSearch } from 'react-icons/fa';
// import ItemsDetails from '../components/Detailpage'; // ItemsDetails component import

// const BookPacket = () => {
//   // 🔹 Form ka initial state
//   const [formData, setFormData] = useState({
//     orderId: '',
//     division: 'EXPRESS',
//     shipmentType: 'OVERNIGHT',
//     consigneeName: '',
//     consigneePhone: '',
//     destinationCity: '',
//     platform: '',
//     consigneeAddress: '',
//     weigh: '',
//     pieces: '',
//     productDescription: '',
//     codAmount: '',
//     advancePayment: '',
//     specialInstructions: '',
//   });

//   // 🔹 ItemsDetails ko show/hide karne ka state
//   const [showItems, setShowItems] = useState(false);

//   // 🔹 Input field change handle karna
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // 🔹 Form submit handle
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);

//     // ⚡ Yahan backend API call hoga (order create karne ke liye)
//     // Example: axios.post("/api/orders", formData)
//   };

//   // 🔹 Cancel button pe form reset ho jaye
//   const handleCancel = () => {
//     setFormData({
//       orderId: '',
//       division: 'EXPRESS',
//       shipmentType: 'OVERNIGHT',
//       consigneeName: '',
//       consigneePhone: '',
//       destinationCity: '',
//       platform: '',
//       consigneeAddress: '',
//       weigh: '',
//       pieces: '',
//       productDescription: '',
//       codAmount: '',
//       advancePayment: '',
//       specialInstructions: '',
//     });
//     console.log('Form has been cleared');
//   };

//   // 🔹 Helper function input banane ke liye (reusable)
//   const renderAnimatedInput = (name, placeholder, type = 'text', isRequired = false, isFullWidth = false) => (
//     <div className={`input-group relative ${isFullWidth ? 'md:col-span-2' : ''}`}>
//       <input
//         type={type}
//         name={name}
//         id={name}
//         value={formData[name]}
//         onChange={handleChange}
//         placeholder=" "
//         className="peer p-3 border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
//         required={isRequired}
//       />
//       <label
//         htmlFor={name}
//         className="absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 
//                   peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs 
//                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
//       >
//         {placeholder}
//       </label>
//     </div>
//   );

//   // 🔹 Helper function select banane ke liye
//   const renderAnimatedSelect = (name, placeholder, options, isRequired = false) => (
//     <div className="relative">
//       <select
//         name={name}
//         id={name}
//         value={formData[name]}
//         onChange={handleChange}
//         className="peer p-3 border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full appearance-none"
//         required={isRequired}
//       >
//         <option value="" disabled>{placeholder}</option>
//         {options.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>
//       <label
//         htmlFor={name}
//         className="absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 
//                   peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs 
//                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
//       >
//         {placeholder}
//       </label>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 font-sans">
//       {/* 🔹 Header */}
//       <header className="flex items-center justify-between mb-8">
//         <div className="relative">
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search (Ctrl+/)"
//             className="pl-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <FaUserCircle className="text-4xl text-purple-500 cursor-pointer" />
//       </header>

//       {/* 🔹 Form Container */}
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Create New Order</h2>

//         {/* 🔹 Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Order Detail Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-gray-700">Order Detail</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {renderAnimatedInput('orderId', 'Order ID')}
//               {renderAnimatedSelect('division', 'Select Division *', [
//                 { value: 'EXPRESS', label: 'EXPRESS' },
//                 { value: 'STANDARD', label: 'STANDARD' }
//               ], true)}
//               {renderAnimatedSelect('shipmentType', 'Select Shipment Type *', [
//                 { value: 'OVERNIGHT', label: 'OVERNIGHT' },
//                 { value: 'REGULAR', label: 'REGULAR' }
//               ], true)}
//             </div>
//           </div>

//           {/* Customer Detail Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-gray-700">Customer Detail</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {renderAnimatedInput('consigneeName', 'Consignee Name *', 'text', true)}
//               {renderAnimatedInput('consigneePhone', 'Consignee Phone *', 'tel', true)}
//               {renderAnimatedInput('destinationCity', 'Destination City *', 'text', true)}
//               {renderAnimatedSelect('platform', 'Select Platform *', [
//                 { value: 'amazon', label: 'Amazon' },
//                 { value: 'shopify', label: 'Shopify' }
//               ], true)}
//               {renderAnimatedInput('consigneeAddress', 'Consignee Address *', 'text', true, true)}
//             </div>
//           </div>

//           {/* Shipment Detail Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-gray-700">Shipment Detail</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {renderAnimatedInput('weigh', 'Weigh (grams) *', 'number', true)}
//               {renderAnimatedInput('pieces', 'No. of Pieces *', 'number', true)}
//               {renderAnimatedInput('productDescription', 'Product Description *', 'text', true)}
//               {renderAnimatedInput('codAmount', 'COD Amount *', 'number', true)}
//               {renderAnimatedInput('advancePayment', 'Advance Payment *', 'number', true)}

//               {/* Special Instructions Textarea */}
//               <div className="relative col-span-1 md:col-span-3">
//                 <textarea
//                   name="specialInstructions"
//                   id="specialInstructions"
//                   value={formData.specialInstructions}
//                   onChange={handleChange}
//                   rows="4"
//                   placeholder=" "
//                   className="peer p-3 outline-indigo-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
//                   required
//                 />
//                 <label
//                   htmlFor="specialInstructions"
//                   className="absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400 
//                             peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs 
//                             peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
//                 >
//                   Special Instructions *
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* ✅ ItemsDetails shipment detail ke neeche show hoga */}
//           {showItems && <ItemsDetails />}

//           {/* 🔹 Form Actions */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <button type="submit" className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
//               Book Order
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowItems(!showItems)} // Show/Hide ItemsDetails
//               className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
//             >
//               {showItems ? 'Hide Items' : 'Show Items'}
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="px-6 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>

//         {/* 🔹 Footer */}
//         <footer className="mt-8 pt-4 border-t text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
//           <p className='flex mb-2 md:mb-0'>©, made with ❤️ by <span className='text-blue-500'>ThemeSelection</span></p>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:underline">License</a>
//             <a href="#" className="hover:underline">More Themes</a>
//             <a href="#" className="hover:underline">Documentation</a>
//             <a href="#" className="hover:underline">Support</a>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default BookPacket;






import React, { useState } from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import ItemsDetails from '../components/Detailpage'; // ItemsDetails component
// import axios from 'axios'; // 🔹 Uncomment when backend ready

const BookPacket = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    division: 'EXPRESS',
    shipmentType: 'OVERNIGHT',
    consigneeName: '',
    consigneePhone: '',
    destinationCity: '',
    platform: '',
    consigneeAddress: '',
    weigh: '',
    pieces: '',
    productDescription: '',
    codAmount: '',
    advancePayment: '',
    specialInstructions: '',
  });

  const [showItems, setShowItems] = useState(false); // ItemsDetails toggle

  // 🔹 Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 🔹 Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // ✅ Backend Integration (example):
    /*
    try {
      const response = await axios.post("/api/orders", formData);
      console.log("Order created:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
    */
  };

  // 🔹 Reset form
  const handleCancel = () => {
    setFormData({
      orderId: '',
      division: 'EXPRESS',
      shipmentType: 'OVERNIGHT',
      consigneeName: '',
      consigneePhone: '',
      destinationCity: '',
      platform: '',
      consigneeAddress: '',
      weigh: '',
      pieces: '',
      productDescription: '',
      codAmount: '',
      advancePayment: '',
      specialInstructions: '',
    });
    console.log('Form has been cleared');
  };

  // 🔹 Animated input
  const renderAnimatedInput = (name, placeholder, type = 'text', isRequired = false, isFullWidth = false) => (
    <div className={`input-group relative ${isFullWidth ? 'md:col-span-2' : ''}`}>
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder=" "
        className="input-field peer p-3 text-sm  md:p-3 md:text-2xl border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
        required={isRequired}
      />
      <label
        htmlFor={name}
        className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400
                 peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs
                 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
      >
        {placeholder}
      </label>
    </div>
  );

  // 🔹 Animated select
  const renderAnimatedSelect = (name, placeholder, options, isRequired = false) => (
    <div className="input-group relative">
      <select
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        className="input-field peer p-3 border border-gray-300 outline-indigo-500 rounded-md focus:ring-2 focus:ring-indigo-500 w-full appearance-none"
        required={isRequired}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400
                 peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs
                 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
      >
        {placeholder}
      </label>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 font-sans">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
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

        {/* Form Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Create New Order</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Detail */}
            <div className="space-y-4 border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-700">Order Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderAnimatedInput('orderId', 'Order ID')}
                {renderAnimatedSelect('division', 'Select Division *', [
                  { value: 'EXPRESS', label: 'EXPRESS' },
                  { value: 'STANDARD', label: 'STANDARD' }
                ], true)}
                {renderAnimatedSelect('shipmentType', 'Select Shipment Type *', [
                  { value: 'OVERNIGHT', label: 'OVERNIGHT' },
                  { value: 'REGULAR', label: 'REGULAR' }
                ], true)}
              </div>
            </div>

            {/* Customer Detail */}
            <div className="space-y-4 border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-700">Customer Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderAnimatedInput('consigneeName', 'Consignee Name *', 'text', true)}
                {renderAnimatedInput('consigneePhone', 'Consignee Phone *', 'tel', true)}
                {renderAnimatedInput('destinationCity', 'Destination City *', 'text', true)}
                {renderAnimatedSelect('platform', 'Select Platform *', [
                  { value: 'amazon', label: 'Amazon' },
                  { value: 'shopify', label: 'Shopify' }
                ], true)}
                {renderAnimatedInput('consigneeAddress', 'Consignee Address *', 'text', true, true)}
              </div>
            </div>

            {/* Shipment Detail */}
            <div className="space-y-4 border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-700">Shipment Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderAnimatedInput('weigh', 'Weigh (grams) *', 'number', true)}
                {renderAnimatedInput('pieces', 'No. of Pieces *', 'number', true)}
                {renderAnimatedInput('productDescription', 'Product Description *', 'text', true)}
                {renderAnimatedInput('codAmount', 'COD Amount *', 'number', true)}
                {renderAnimatedInput('advancePayment', 'Advance Payment *', 'number', true)}

                {/* Textarea */}
                <div className="input-group relative col-span-1 md:col-span-3">
                  <textarea
                    name="specialInstructions"
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows="4"
                    placeholder=" "
                    className="input-field peer p-3 outline-indigo-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
                    required
                  />
                  <label
                    htmlFor="specialInstructions"
                    className="input-label absolute left-3 top-3 transition-all duration-200 pointer-events-none text-gray-400
                               peer-focus:text-indigo-500 peer-focus:top-1 peer-focus:text-xs
                               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-500"
                  >
                    Special Instructions *
                  </label>
                </div>
              </div>
            </div>

            {/* ✅ ItemsDetails shipment detail ke neeche */}
            {showItems && <ItemsDetails />}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Book Order
              </button>
              <button
                type="button"
                onClick={() => setShowItems(!showItems)}
                className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {showItems ? 'Hide Items' : 'Show Items'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookPacket;
