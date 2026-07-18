"use client";

import { useState } from "react";
import OrderConfirmed from "../../compenents/order-status/order-confirmed";
import OrderSubmitted from "../../compenents/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 pt-16">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">Order Status</h1>
      </div>
      {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
    </main>
  );
};

export default OrderStatus;
