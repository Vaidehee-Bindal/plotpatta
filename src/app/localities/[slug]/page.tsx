'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocalityBySlug } from '@/data/localities';
import { projects } from '@/data/projects';
import { properties } from '@/data/properties';
import { getAgentByUserId } from '@/data/agents';

export default function LocalityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const locality = getLocalityBySlug(slug);

  if (!locality) {
    notFound();
  }

  // All state declarations first!
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(true);
  const [cityOpen, setCityOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(locality.city);
  const [selectedType, setSelectedType] = useState('Residential');
  const [sortBy, setSortBy] = useState('Newest First');
  const [sortOpen, setSortOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(0);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [postedBy, setPostedBy] = useState('');
  const [postedByOpen, setPostedByOpen] = useState(false);
  const [authority, setAuthority] = useState('');
  const [authorityOpen, setAuthorityOpen] = useState(false);
  const [gatedSociety, setGatedSociety] = useState('');
  const [gatedSocietyOpen, setGatedSocietyOpen] = useState(false);
  const [openSides, setOpenSides] = useState('');
  const [openSidesOpen, setOpenSidesOpen] = useState(false);

  // Reset to first page whenever price filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [priceValue]);

  // Calculate price bounds using state
  const priceLowerBound = priceValue - 1000000; // 10 lakh below selected price
  const priceUpperBound = priceValue + 1000000; // 10 lakh above selected price

  const matchingProjects = projects.filter(
    (project) => {
      const localityMatch = project.locality.toLowerCase() === locality.name.toLowerCase();
      if (priceValue === 0) return localityMatch;
      return localityMatch && 
        project.priceMin >= priceLowerBound && 
        project.priceMin <= priceUpperBound;
    }
  );

  const paidAgentProperties = properties
    .filter((property) => property.locality.toLowerCase() === locality.name.toLowerCase())
    .filter((property) => {
      const agent = getAgentByUserId(property.user_id);
      return agent?.plan_type === 'Paid';
    })
    .filter((property) => {
      if (priceValue === 0) return true;
      return property.priceMin >= priceLowerBound && 
        property.priceMin <= priceUpperBound;
    });

  const totalListings = paidAgentProperties.length + matchingProjects.length;
  const allListings = [...matchingProjects.map(p => ({ type: 'project', data: p })), ...paidAgentProperties.map(p => ({ type: 'property', data: p }))];

  // Pagination calculations
  const itemsPerPage = 2; // Show 2 properties per page
  const totalPages = Math.ceil(allListings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = allListings.slice(indexOfFirstItem, indexOfLastItem);

  const cities = ['Kota', 'Jaipur', 'Jodhpur', 'Ajmer', 'Udaipur'];
  const types = ['Residential', 'Commercial', 'Industrial'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-white border-b border-gray-200 overflow-hidden">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-green-700 text-sm font-medium mb-3 bg-white/80 px-4 py-2 rounded-lg inline-flex">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  You are in
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-3">
                  {locality.name}, {locality.city}
                </h1>
                <div className="flex items-center gap-2 text-xl text-gray-800 mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10H15a1 1 0 000-2H7.586l1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{totalListings} Premium Residential Plots Available</span>
                </div>
                <p className="text-gray-700 text-lg">Verified properties from trusted agents</p>
              </div>
            </div>
          </div>
          {/* Background Image */}
          <div className="absolute inset-0 lg:left-1/2 w-full lg:w-1/2 h-full">
            <Image
              src="/assets/hero-dpm-royal-enclave.png"
              alt={`${locality.name} locality`}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Filters */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                {/* Filters Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  </div>
                  <button className="text-sm text-green-700 font-medium hover:text-green-800">
                    Clear All
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  {/* City Filter - Custom Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setCityOpen(!cityOpen)}
                      className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm"
                    >
                      <span className="text-sm font-semibold text-gray-800">{selectedCity}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-500 transition-transform ${cityOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {cityOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                        {cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => {
                              setSelectedCity(city);
                              setCityOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                              selectedCity === city ? 'bg-yellow-50' : 'hover:bg-gray-50'
                            }`}
                          >
                            {selectedCity === city && (
                              <svg className="w-4 h-4 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            <span className={`text-base ${
                              selectedCity === city ? 'text-yellow-700 font-medium' : 'text-gray-700'
                            }`}>
                              {city}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Locality Filter */}
                  <div className="border border-gray-200 rounded-lg">
                    <div className="px-3 py-3 bg-gray-50">
                      <div className="text-sm text-gray-900 font-semibold">{locality.name}</div>
                    </div>
                  </div>

                  {/* Type Filter - Custom Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setTypeOpen(!typeOpen)}
                      className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm"
                    >
                      <span className="text-sm font-semibold text-gray-800">{selectedType}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-500 transition-transform ${typeOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {typeOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                        {types.map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setSelectedType(type);
                              setTypeOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                              selectedType === type ? 'bg-yellow-50' : 'hover:bg-gray-50'
                            }`}
                          >
                            {selectedType === type && (
                              <svg className="w-4 h-4 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            <span className={`text-base ${
                              selectedType === type ? 'text-yellow-700 font-medium' : 'text-gray-700'
                            }`}>
                              {type}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Range Filter */}
                  <div className="border border-gray-200 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 px-3 pt-3">Price Range</div>
                    <div className="px-3 pb-3">
                      <div className="text-gray-500 mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold">₹0</span>
                        <span className="text-lg font-semibold text-green-700">
                          {priceValue === 0 ? 'All' : 
                           priceValue >= 10000000 ? `₹${(priceValue / 10000000).toFixed(0)} Cr` : 
                           priceValue >= 100000 ? `₹${(priceValue / 100000).toFixed(0)} Lac` : 
                           `₹${(priceValue / 1000).toFixed(0)}K`}
                        </span>
                        <span className="text-xs font-semibold">₹10 Cr</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100000000" 
                        value={priceValue} 
                        onChange={(e) => setPriceValue(Number(e.target.value))}
                        className="w-full accent-green-600"
                      />
                    </div>
                  </div>

                  {/* Area (sq ft) Filter */}
                  <div className="border border-gray-200 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 px-3 pt-3">Area (sq ft)</div>
                    <div className="px-3 pb-3">
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <input 
                            type="text" 
                            placeholder="Min" 
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <input 
                            type="text" 
                            placeholder="Max" 
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="p-4 border-t border-gray-100">
                  <button onClick={() => setShowMoreFilters(!showMoreFilters)} className="w-full bg-white border border-green-700 text-green-700 rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    <svg className={`w-4 h-4 transition-transform ${showMoreFilters ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    More Filters
                  </button>
                  
                  {/* More Filters Section - Toggles */}
                  {showMoreFilters && (
                    <div className="pt-4 space-y-3 border-t border-gray-100">
                      {/* Posted By Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setPostedByOpen(!postedByOpen)}
                          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-left"
                        >
                          <span className="text-xs text-gray-800 font-medium">
                            {postedBy || 'Posted By'}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 text-gray-500 transition-transform ${postedByOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {postedByOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                            {['All', 'Owner', 'Agent', 'Builder'].map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  setPostedBy(option);
                                  setPostedByOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                                  postedBy === option ? 'bg-yellow-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                {postedBy === option && (
                                  <svg
                                    className="w-3.5 h-3.5 text-yellow-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                                <span className="text-xs text-gray-700">{option}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Authority Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setAuthorityOpen(!authorityOpen)}
                          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-left"
                        >
                          <span className="text-xs text-gray-800 font-medium">
                            {authority || 'Authority'}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 text-gray-500 transition-transform ${authorityOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {authorityOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                            {['All', 'JDA', 'RIICO', 'Other'].map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  setAuthority(option);
                                  setAuthorityOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                                  authority === option ? 'bg-yellow-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                {authority === option && (
                                  <svg
                                    className="w-3.5 h-3.5 text-yellow-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                                <span className="text-xs text-gray-700">{option}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Gated Society Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setGatedSocietyOpen(!gatedSocietyOpen)}
                          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-left"
                        >
                          <span className="text-xs text-gray-800 font-medium">
                            {gatedSociety || 'Gated Society'}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 text-gray-500 transition-transform ${gatedSocietyOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {gatedSocietyOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                            {['All', 'Yes', 'No'].map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  setGatedSociety(option);
                                  setGatedSocietyOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                                  gatedSociety === option ? 'bg-yellow-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                {gatedSociety === option && (
                                  <svg
                                    className="w-3.5 h-3.5 text-yellow-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                                <span className="text-xs text-gray-700">{option}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Open Sides Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setOpenSidesOpen(!openSidesOpen)}
                          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-left"
                        >
                          <span className="text-xs text-gray-800 font-medium">
                            {openSides || 'Open Sides'}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 text-gray-500 transition-transform ${openSidesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSidesOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                            {['All', '1 Side', '2 Sides', '3 Sides', '4 Sides'].map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  setOpenSides(option);
                                  setOpenSidesOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                                  openSides === option ? 'bg-yellow-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                {openSides === option && (
                                  <svg
                                    className="w-3.5 h-3.5 text-yellow-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                                <span className="text-xs text-gray-700">{option}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Middle Column - Main Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Check if no properties found */}
              {totalListings === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <h2 className="text-2xl font-bold text-green-700 mb-2">{totalListings} Residential Plots for Sale in {locality.name}, {locality.city}</h2>
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-700 mb-1">No Properties Found 🥺</h3>
                    <p className="text-sm text-gray-500">Try adjusting your filters or check back later.</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Featured Projects */}
              {matchingProjects.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                      <span className="bg-yellow-500 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-bold">★</span>
                      Featured Projects
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-500">Top premium projects in {locality.name}</p>
                      <button className="text-sm text-green-700 font-medium hover:text-green-800 flex items-center gap-1">
                        View all projects
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="p-1.5 border border-gray-200 rounded-full bg-white hover:bg-gray-50">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchingProjects.map((project, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all group">
                        <div className="relative">
                          <Image 
                            src={project.image.src} 
                            alt={project.image.alt} 
                            width={300} 
                            height={180} 
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                            Premium
                          </div>
                          <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                        </div>
                        <div className="p-3">
                          <h4 className="font-semibold text-sm text-gray-900 truncate">{project.name}</h4>
                          <p className="text-xs text-gray-500 mb-1">{project.locality}, {project.city}</p>
                          <p className="text-green-700 font-bold text-base mb-2">{project.priceLabel}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                            </svg>
                            <span>{project.areaSqYd} Sq. Yd</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Properties List */}
              <div className="space-y-4">
                {/* Sort by - Custom Dropdown */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-sm">{totalListings} Properties Found</p>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <button 
                        onClick={() => setSortOpen(!sortOpen)}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm"
                      >
                        <span className="text-xs text-gray-800 font-medium">{sortBy}</span>
                        <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${sortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {sortOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-1 z-50">
                          {['Newest First', 'Oldest First'].map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setSortBy(option);
                                setSortOpen(false);
                              }}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                                sortBy === option ? 'bg-yellow-50' : 'hover:bg-gray-50'
                              }`}
                            >
                              {sortBy === option && (
                                <svg className="w-4 h-4 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                              <span className={`text-sm ${
                                sortBy === option ? 'text-yellow-700 font-medium' : 'text-gray-700'
                              }`}>
                                {option}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Property Cards */}
                {currentListings.map((item, index) => {
                  if (item.type === 'project') {
                    const project = item.data as typeof projects[number];
                    return (
                      <div key={`project-${index}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative">
                            <Image 
                              src={project.image.src} 
                              alt={project.image.alt}
                              className="w-full h-full object-cover"
                              width={400}
                              height={300}
                            />
                            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                              PLOTPATTA VERIFIED
                            </div>
                            <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md">
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="md:col-span-2 p-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{project.locality}, {project.city}</p>
                            <p className="text-xl font-bold text-green-700 mb-4">{project.priceLabel}</p>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                                </svg>
                                <span>{project.areaSqYd} Sq. Yd</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span>{project.roadWidth} Road</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{project.approvedBy}</span>
                              </div>
                            </div>
                            {project.nearby.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs text-gray-500">Nearby:</span>
                                {project.nearby.map((nearbyItem, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{nearbyItem}</span>
                                ))}
                                {project.nearby.length > 2 && (
                                  <span className="text-xs text-gray-500">+{project.nearby.length - 2} more</span>
                                )}
                              </div>
                            )}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-gray-700">{project.builder.name.charAt(0)}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{project.builder.name}</p>
                                  <p className="text-xs text-gray-500">{project.builder.type}</p>
                                </div>
                              </div>
                              <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    const property = item.data as typeof properties[number];
                    const agent = getAgentByUserId(property.user_id);
                    return (
                      <div key={`property-${index}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative">
                            <Image 
                              src={property.image.src || "/assets/hero-dpm-royal-enclave.png"} 
                              alt={property.image.alt}
                              className="w-full h-full object-cover"
                              width={400}
                              height={300}
                            />
                            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                              PLOTPATTA VERIFIED
                            </div>
                            <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md">
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="md:col-span-2 p-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{property.locality}, {property.city}</p>
                            <p className="text-xl font-bold text-green-700 mb-4">{property.price}</p>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                                </svg>
                                <span>{property.plotArea}</span>
                              </div>
                              {property.roadWidth && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                  </svg>
                                  <span>{property.roadWidth} Road</span>
                                </div>
                              )}
                              {property.approvedBy && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>{property.approvedBy}</span>
                                </div>
                              )}
                            </div>
                            {property.nearby && property.nearby.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs text-gray-500">Nearby:</span>
                                {property.nearby.map((nearbyItem, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{nearbyItem}</span>
                                ))}
                                {property.nearby.length > 2 && (
                                  <span className="text-xs text-gray-500">+{property.nearby.length - 2} more</span>
                                )}
                              </div>
                            )}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                {agent && (
                                  <>
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-black text-xs font-bold uppercase">
                                      {agent.name.charAt(0)}
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900">{agent.name}</p>
                                      <p className="text-xs text-gray-500">Agent</p>
                                    </div>
                                  </>
                                )}
                              </div>
                              <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                {/* Updated Pagination - Smaller arrow buttons and circular page number */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page number in circle */}
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{currentPage}</span>
                  </div>

                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center bg-green-600 border border-green-600 rounded-lg text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
                </>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-3 space-y-4">
              {/* List Your Property Green Card */}
              <div className="bg-green-700 rounded-xl border border-green-800 shadow-sm p-4">
                <h4 className="text-white font-bold text-base mb-2">List Your Property</h4>
                <p className="text-green-100 text-xs mb-3">Reach thousands of buyers on PlotPatta.</p>
                <button className="w-full bg-white text-green-800 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-green-50 transition-colors">
                  Post Property Free
                </button>
              </div>

              {/* Properties Count */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">{totalListings} Properties Found</p>
                </div>
              </div>

              {/* Featured Projects in Sidebar */}
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <Image 
                      src={project.image.src} 
                      alt={project.image.alt}
                      className="w-full h-48 object-cover"
                      width={300}
                      height={200}
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-gray-900">{project.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{project.locality}, {project.city}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-green-700 font-bold text-lg">{project.priceLabel}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-sm text-gray-600">{project.areaSqYd} sq. yd.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
