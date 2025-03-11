import { Order } from "@/types/order";

export default function OrderReceipt({ order }: { order: Order }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        {/* Receipt Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-center">Receipt</h1>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600">Order #{order.id}</p>
            <p className="text-gray-600">
              {new Date(order.created).toLocaleString()}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-gray-600">
              Status:{" "}
              <span
                className={order.paid ? "text-green-600" : "text-orange-600"}
              >
                {order.paid ? "Paid" : "Pending"}
              </span>
            </p>
          </div>
        </div>

        {/* Receipt Items */}
        <div className="p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-3">Items</h2>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.product_id} className="flex justify-between">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 text-sm ml-2">
                    {item.quantity} x ${item.price_per_unit.toFixed(2)}
                  </span>
                </div>
                <span className="font-medium">${item.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Receipt Summary */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span>${order.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-1">
            <span>Taxes</span>
            <span>${order.taxes.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-1">
            <span>Discounts</span>
            <span>-${order.discounts.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-xl mt-3 pt-3 border-t border-gray-300">
            <span>Total</span>
            <span>
              ${(order.subtotal + order.taxes - order.discounts).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
