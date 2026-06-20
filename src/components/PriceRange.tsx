'use client';

import React, { useState } from 'react';

const formatPrice = (value: number): string => {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(1)} Cr`;
  } else if (value >= 100000) {
    return `${(value / 100000).toFixed(1)} Lac`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} K`;
  }
  return `${value} Rs`;
};

export default function PriceRange() {
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        <span className="text-gray-900">
          {formatPrice(maxPrice)}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Maximum Price
            </label>
            <div className="relative w-full">
              <input
                type="range"
                min="0"
                max="100000000"
                step="500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">0</span>
            <span className="text-sm font-semibold text-green-700">{formatPrice(maxPrice)}</span>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
