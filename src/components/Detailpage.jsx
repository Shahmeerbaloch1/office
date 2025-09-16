
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
// import axios from "axios"; // 🔹 Uncomment when backend ready

const ItemsDetails = () => {
  // 🔹 Items list (initially ek row)
  const [items, setItems] = useState([
    { id: 1, vendor: "", productName: "", cost: 0, selling: 0, packagingMaterial: "" },
  ]);

  // 🔹 Dropdown data (API se bhi fetch kar sakte ho future me)
  const vendors = ["Vendor A", "Vendor B", "Vendor C"];
  const packagingMaterials = ["Box", "Bubble Wrap", "Envelope"];

  // 🔹 Naya item add karna
  const handleAddItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, vendor: "", productName: "", cost: 0, selling: 0, packagingMaterial: "" },
    ]);

    // ✅ Backend Integration (example: create item)
    /*
    try {
      const response = await axios.post("/api/items", {
        vendor: "",
        productName: "",
        cost: 0,
        selling: 0,
        packagingMaterial: ""
      });
      console.log("New item added:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
    */
  };

  // 🔹 Item remove karna
  const handleRemoveItem = async (id) => {
    setItems(items.filter((item) => item.id !== id));

    // ✅ Backend Integration (example: delete item)
    /*
    try {
      await axios.delete(`/api/items/${id}`);
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    */
  };

  // 🔹 Input change handle
  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setItems(items.map((item) => (item.id === id ? { ...item, [name]: value } : item)));

    // ✅ Backend Integration (example: update item)
    /*
    try {
      await axios.put(`/api/items/${id}`, { [name]: value });
      console.log("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
    }
    */
  };

  // 🔹 Totals calculate karna
  const calculateTotals = () => {
    let totalCost = 0, totalSelling = 0;
    items.forEach((item) => {
      totalCost += parseFloat(item.cost) || 0;
      totalSelling += parseFloat(item.selling) || 0;
    });
    const profit = totalSelling - totalCost;
    const profitPercentage = totalCost > 0 ? ((profit / totalCost) * 100).toFixed(2) : 0;
    return { totalCost, totalSelling, profit, profitPercentage };
  };

  const { totalCost, totalSelling, profit, profitPercentage } = calculateTotals();

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Items Details</h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="py-2 px-4 border-b text-left">Vendor</th>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-center">Cost</th>
              <th className="py-2 px-4 border-b text-center">Selling</th>
              <th className="py-2 px-4 border-b text-left">Packaging</th>
              <th className="py-2 px-4 border-b text-center">Profit</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const cost = parseFloat(item.cost) || 0;
              const selling = parseFloat(item.selling) || 0;
              const itemProfit = selling - cost;

              return (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  {/* Vendor */}
                  <td className="p-2">
                    <select
                      name="vendor"
                      value={item.vendor}
                      onChange={(e) => handleInputChange(item.id, e)}
                      className="w-full border p-2 rounded text-sm"
                    >
                      <option value="">Select Vendor</option>
                      {vendors.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </td>

                  {/* Product */}
                  <td className="p-2">
                    <input
                      type="text"
                      name="productName"
                      value={item.productName}
                      placeholder="Product"
                      onChange={(e) => handleInputChange(item.id, e)}
                      className="w-full border p-2 rounded text-sm"
                    />
                  </td>

                  {/* Cost */}
                  <td className="p-2">
                    <input
                      type="number"
                      name="cost"
                      value={item.cost}
                      onChange={(e) => handleInputChange(item.id, e)}
                      className="w-full border p-2 rounded text-center text-sm"
                    />
                  </td>

                  {/* Selling */}
                  <td className="p-2">
                    <input
                      type="number"
                      name="selling"
                      value={item.selling}
                      onChange={(e) => handleInputChange(item.id, e)}
                      className="w-full border p-2 rounded text-center text-sm"
                    />
                  </td>

                  {/* Packaging */}
                  <td className="p-2">
                    <select
                      name="packagingMaterial"
                      value={item.packagingMaterial}
                      onChange={(e) => handleInputChange(item.id, e)}
                      className="w-full border p-2 rounded text-sm"
                    >
                      <option value="">Select Material</option>
                      {packagingMaterials.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </td>

                  {/* Profit */}
                  <td className="p-2 text-center font-bold text-sm">{itemProfit.toFixed(2)}</td>

                  {/* Actions */}
                  <td className="p-2 flex gap-2 justify-center items-center">
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="p-2 bg-green-500 text-white rounded-full"
                    >
                      <FaPlus />
                    </button>
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 bg-red-500 text-white rounded-full"
                      >
                        <FaMinus />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}

            {/* Totals Row */}
            <tr className="bg-gray-100 font-semibold text-gray-700">
              <td className="p-2" colSpan="2">Total ({items.length} Items)</td>
              <td className="p-2 text-center">{totalCost.toFixed(2)}</td>
              <td className="p-2 text-center">{totalSelling.toFixed(2)}</td>
              <td></td>
              <td className="p-2 text-center">{profit.toFixed(2)}</td>
              <td className="p-2 text-green-600 text-center">{profitPercentage}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsDetails;
