'use client';

import React, { useState } from 'react';

const Page = () => {
  const [showLargeText, setShowLargeText] = useState(false);

  return (
    <div className="p-4">
      {/* Visible on large screens or if button is clicked */}
      <p
        className={`${
          showLargeText ? 'block' : 'hidden sm:block'
        } text-blue-600 text-lg`}
      >
        This is a large screen.
      </p>

      {/* Visible on small screens */}
      <p className="block sm:hidden text-green-600 text-lg">
        This is a small screen.
      </p>

      {/* Button to toggle visibility */}
      <button
        onClick={() => setShowLargeText(true)}
        className="block sm:hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click to Show Large Screen Text
      </button>
    </div>
  );
};

export default Page;
