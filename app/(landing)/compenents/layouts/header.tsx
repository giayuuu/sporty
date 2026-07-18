"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-primary-light shadow-sm">
      <div className="container mx-auto flex h-15 items-center justify-between px-20">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="SportOn Logo"
            width={127}
            height={30}
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-40 font-medium ">
          <Link
            href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>

          <Link
            href="#"
            
          >
            Category
          </Link>

          <Link
            href="#"
        
          >
        Explore Products
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-10">
          <button className="cursor-pointer">
            <FiSearch size={24} />
          </button>
          <div className="relative">
            <button className="cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FiShoppingBag size={24} />
            < div className="bg-primary rounded-full w-4 h-4. absolute -top-1 -right-1 flex items-center justify-center text-dark" ><span className="text-[9px] font-dark font-bold">3</span>
            </div>
          </button>
          </div>
           {isCartOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;