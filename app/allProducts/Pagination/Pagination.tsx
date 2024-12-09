'use client'
import React, { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({ 
  totalItems, 
  itemsPerPage = 10 
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Use Next.js hooks for routing and search params
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get current page from URL, default to 1
  const currentPage = searchParams.get('pagen') 
    ? parseInt(searchParams.get('pagen') || '1', 10) 
    : 1;

  const handlePageChange = useCallback((newPage: number) => {

    // Create new URL with updated page number
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('pagen', newPage.toString());

    // Replace URL and scroll to top
    router.push(`?${current.toString()}`, { scroll: false });
  }, [router, searchParams, totalPages]);

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded 
          disabled:opacity-50 disabled:cursor-not-allowed 
          hover:bg-gray-100 transition-colors"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 border rounded 
              ${currentPage === pageNumber 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-100'}`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded 
          disabled:opacity-50 disabled:cursor-not-allowed 
          hover:bg-gray-100 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;