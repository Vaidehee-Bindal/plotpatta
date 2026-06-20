'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocalityBySlug } from '@/data/localities';
import { projects } from '@/data/projects';
import { properties } from '@/data/properties';
import { getAgentByUserId } from '@/data/agents';
import CustomSelect from '@/components/CustomSelect';
import PriceRange from '@/components/PriceRange';

const cityOptions = [
  { value: 'Kota', label: 'Kota' },
  { value: 'Jaipur', label: 'Jaipur' },
  { value: 'Jodhpur', label: 'Jodhpur' },
  { value: 'Ajmer', label: 'Ajmer' },
  { value: 'Udaipur', label: 'Udaipur' }
];

const typeOptions = [
  { value: 'Residential', label: 'Residential' },
  { value: 'Commercial', label: 'Commercial' },
  { value: 'Industrial', label: 'Industrial' }
];

export default function LocalityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const locality = getLocalityBySlug(slug);

  if (!locality) {
    notFound();
  }

  const matchingProjects = projects.filter(
    (project) => project.locality.toLowerCase() === locality.name.toLowerCase()
  );

  // Filter properties for this locality that are from paid brokers
  const paidAgentProperties = properties
    .filter((property) => property.locality.toLowerCase() === locality.name.toLowerCase())
    .filter((property) => {
      const agent = getAgentByUserId(property.user_id);
      return agent?.plan_type === 'Paid';
    });

  const totalListings = paidAgentProperties.length + matchingProjects.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add padding to account for fixed navbar height (h-16 = 64px) */}
      <div className="pt-16">
        {/* Filter Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
          <div className="w-full px-3 py-2">
            <div className="flex flex-wrap gap-3 items-end">
  {/* City */}
  <div className="flex-1 min-w-[140px]">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      City
    </label>
    <CustomSelect
      options={cityOptions}
      defaultValue="Jaipur"
    />
  </div>

  {/* Locality */}
  <div className="flex-1 min-w-[180px]">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Locality
    </label>
    <input
      type="text"
      defaultValue={locality.name}
      readOnly
      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-base bg-gray-50 focus:outline-none"
    />
  </div>

  {/* Type */}
  <div className="flex-1 min-w-[140px]">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Type
    </label>
    <CustomSelect
      options={typeOptions}
      defaultValue="Residential"
    />
  </div>

  {/* Price */}
  <div className="flex-1 min-w-[140px]">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Price
    </label>
    <PriceRange />
  </div>

  {/* Area */}
  <div className="flex-[1.3] min-w-[220px]">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Area (sq ft)
    </label>

    <div className="grid grid-cols-2 gap-2">
      <input
        type="text"
        placeholder="Min"
        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none"
      />

      <input
        type="text"
        placeholder="Max"
        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none"
      />
    </div>
  </div>

  {/* Buttons */}
  <div className="flex gap-2 shrink-0">
    <button
      className="
        whitespace-nowrap
        bg-transparent
        text-green-700
        border-2
        border-green-700
        rounded-xl
        px-4
        py-2
        text-sm
        font-semibold
        hover:bg-green-50
        transition-all
      "
    >
      More Filters
    </button>

    <button
      className="
        whitespace-nowrap
        bg-red-500
        text-white
        rounded-xl
        px-4
        py-2
        text-sm
        font-semibold
        flex
        items-center
        gap-1.5
        hover:bg-red-600
        transition-all
      "
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      Clear
    </button>
  </div>
</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-green-700 font-poppins">
              {totalListings} Residential Plots for Sale in {locality.name.toLowerCase()}, {locality.city}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - Property Cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Combine projects and paid properties for display */}
              {[...matchingProjects.map(p => ({ type: 'project', data: p })), ...paidAgentProperties.map(p => ({ type: 'property', data: p }))].map((item, index) => {
                if (item.type === 'project') {
                  const project = item.data as typeof projects[number];
                  return (
                    <div key={`project-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span>Size starts at {project.areaSqYd} sq.yd.</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                              <span>Road Width {project.roadWidth}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Approved by {project.approvedBy}</span>
                            </div>
                          </div>
                          {project.nearby.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-gray-500">Nearby:</span>
                              {project.nearby.map((nearbyItem, i) => (
                                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{nearbyItem}</span>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              {project.builder.logo && (
                                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-sm font-bold text-red-600">{project.builder.name.charAt(0)}</span>
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-semibold text-gray-900">{project.builder.name}</p>
                                <p className="text-xs text-gray-500">{project.builder.type}</p>
                              </div>
                            </div>
                            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Contact
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
                    <div key={`property-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative">
                          <Image 
                            src={property.image.src} 
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
                          <p className="text-sm text-gray-600 mb-3">{property.location}</p>
                          <p className="text-xl font-bold text-green-700 mb-4">{property.price}</p>
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span>{property.plotArea}</span>
                            </div>
                            {property.roadWidth && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span>Road Width {property.roadWidth}</span>
                              </div>
                            )}
                            {property.approvedBy && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Approved by {property.approvedBy}</span>
                              </div>
                            )}
                          </div>
                          {property.nearby && property.nearby.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-gray-500">Nearby:</span>
                              {property.nearby.map((nearbyItem, i) => (
                                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{nearbyItem}</span>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              {agent && (
                                <>
                                  <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-black text-xs font-bold uppercase">
                                    {agent.name.charAt(0)}
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-gray-900">{agent.name}</p>
                                    <p className="text-xs text-gray-500">Agent</p>
                                  </div>
                                </>
                              )}
                            </div>
                            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Fixed Premium Project */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <Image 
                  src={projects[0].image.src}
                  alt={projects[0].image.alt}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-4">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Premium Project</span>
                  <h3 className="font-semibold text-gray-900 mt-3">{projects[0].name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-xs text-gray-600">{projects[0].locality}, {projects[0].city}</p>
                      <p className="text-sm text-gray-900 mt-1">{projects[0].areaSqYd} Sq. Yd.</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{projects[0].priceLabel}</p>
                  </div>
                  <Link href={`/projects/${projects[0].slug}`} className="w-full bg-emerald-800 text-white text-center py-2 rounded-md text-sm font-medium mt-3 block hover:bg-emerald-900">
                    View Project
                  </Link>
                </div>
              </div>

              {/* List Your Property CTA */}
              <div className="bg-green-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-lg font-semibold mb-2">List Your Property</h3>
                <p className="text-sm text-green-100 mb-4">Reach thousands of buyers on PlotPatta.</p>
                <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold w-full hover:bg-green-50 transition-colors">
                  Post Property Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
