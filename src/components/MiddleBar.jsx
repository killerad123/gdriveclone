import React from 'react';
import { RiFileList2Line } from 'react-icons/ri'; // Importing React icon for file list

const MiddleBar = () => {
  return (
    <div className="flex flex-col h-full mt-2 bg-gray-100">
      {/* Content of your middle bar goes here */}
      <div className="px-2 py-1 border-b border-gray-200 flex items-center">
        <RiFileList2Line className="text-lg text-gray-600 mr-2" /> {/* Icon for file list */}
        <h1 className="text-base font-semibold text-gray-800">Files</h1>
      </div>
      <div className="flex-grow">
        {/* Your file list or any other content */}
        <ul className="divide-y divide-gray-200 overflow-y-auto">
          {/* Example list item (Replace with your data) */}
          {Array.from(Array(20).keys()).map(index => (
            <li key={index} className="py-1 px-2 flex items-center justify-between">
              <span className="text-xs text-gray-800">File Name {index + 1}</span>
              <span className="text-xs text-gray-500">File Size</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiddleBar;
