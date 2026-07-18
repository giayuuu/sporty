"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-stretch gap-5">
      {/* Qty */}
      <div className="inline-flex border border-gray-500">
        {/* Angka */}
        <div className="w-14 h-14 flex items-center justify-center border-r border-gray-500 text-xl font-medium">
          {qty}
        </div>

        {/* Tombol +/- */}
        <div className="flex flex-col">
          <button
            onClick={() => setQty(qty + 1)}
            className="w-7 h-7 border-b border-gray-500 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
          >
            <FiChevronUp size={16} />
          </button>

          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
            className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
          >
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <Button className="flex-1">
        <FiShoppingBag size={22} />
        Add to Cart
      </Button>

      {/* Checkout */}
      <Button
        variant="dark"
        className="flex-1"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={22} />
      </Button>
    </div>
  );
};

export default ProductActions;