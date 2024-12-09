import React from "react";
import Pagination from "./Pagination/Pagination";
import { getData } from "../_actions/getData";
// import { SearchParams } from 'next/types'

// Option 1: Direct searchParams prop
const page = async ({ searchParams }: { searchParams: { pagen?: string } }) => {
  // Convert page to number, default to 1 if not present
  const pagenum = searchParams.pagen ? parseInt(searchParams.pagen) : 1;
  const getProducts = await getData(`products?count=${pagenum}`);

  return (
    <div>
      Current Page: {pagenum}
      {getProducts.data.map((p: any) => (
        <div key={p._id}>
          <h2> {p.name} </h2>
        </div>
      ))}
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
};

export default page;
