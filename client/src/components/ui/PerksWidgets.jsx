import React from 'react';

const PerksWidget = ({ perks }) => {
  return (
    <div className="mt-4">
      <hr className="mb-5 border" />
      <p className="text-2xl font-semibold">What this place offers</p>

      <div className="mt-4 grid flex-col gap-4 lg:grid-cols-2 lg:justify-items-start">
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c4.389-4.389 11.498-4.389 15.887 0M1.924 8.674c6.75-6.75 17.402-6.75 24.152 0"
            />
          </svg>

          <span className={`${perks?.includes('wifi') ? '' : 'line-through text-gray-400'}`}>
            Wifi
          </span>
        </div>
      </div>
    </div>
  );
};

