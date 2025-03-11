"use client";

import { useParams } from "next/navigation";
import OrderReceipt from "@/components/order-receipt/order-receipt";
import { useGetOrder } from "@/hooks/orders/getOrder";

export default function OrderPage() {
  const { id } = useParams<{ id: string }>();

  const { order, error, isLoading } = useGetOrder(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading receipt...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading receipt</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Order not found</p>
      </div>
    );
  }

  return <OrderReceipt order={order} />;
}
