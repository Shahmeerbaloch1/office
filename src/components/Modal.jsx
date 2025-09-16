import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-11/12 md:w-1/2 lg:w-1/3 mx-auto p-4"
        onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;