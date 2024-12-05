import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import LeftLinks from "./LeftLinks";
import { getCart } from "@/app/_actions/getData";

const Nav = async () => {
  const getCartData = await getCart('cart');
  console.log("🚀 ~ Nav ~ getCartData:", getCartData);
  return (
    <>
      <nav className="bg-white shadow font-inter fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <LeftLinks />
            <div className="hidden lg:flex flex-1 justify-center px-2">
              <div className="w-full max-w-lg">
                <label htmlFor="desktop-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <label htmlFor="desktop-search" className="sr-only">
                    Search
                  </label>
                  {/* // Todo : make a form to navigate to search page */}
                  <input
                    id="desktop-search"
                    name="desktop-search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                    placeholder="Search for products..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center lg:gap-1 gap-2">
              {/* <Searching /> */}
              <Link
                href={`/cart`}
                className="p-2 relative hover:text-indigo-600 transition duration-150 ease-in-out"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 -left-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {getCartData.stauts == "error" ? (
                    0
                  ) : (
                    <>{getCartData?.data?.length}</>
                  )}
                </span>
              </Link>
              {/* <ProfileMenu /> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Nav;
