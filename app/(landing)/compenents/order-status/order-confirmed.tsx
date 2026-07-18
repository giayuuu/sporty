"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-140 p-14 flex flex-col justify-center items-center mx-auto mb-30">
      <Image
        src="/images/icon-order-confirmed.svg"
        width={117}
        height={117}
        alt="order confirmed"
        className="mb-7"
      />
      <h2 className="text-sm font-semibold mb-2">Order Confirmed!!</h2>
      <p className="text-center mb-10">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;
