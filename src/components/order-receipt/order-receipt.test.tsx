import { render, screen } from "@testing-library/react";
import OrderReceipt from "./order-receipt";
import { mockOrderData } from "@/__mocks__/orderData";

describe("OrderReceipt", () => {
  it("renders the receipt with order details", () => {
    render(<OrderReceipt order={mockOrderData} />);

    // Check that title is displayed
    expect(screen.getByText("Receipt")).toBeInTheDocument();

    // Check order ID
    expect(screen.getByText(/Order #1/)).toBeInTheDocument();

    // Check payment status
    expect(screen.getByText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("displays all order items correctly", () => {
    render(<OrderReceipt order={mockOrderData} />);

    // Check that all items are displayed
    expect(screen.getByText("Corona")).toBeInTheDocument();
    expect(screen.getByText("Quilmes")).toBeInTheDocument();
    expect(screen.getByText("Club Colombia")).toBeInTheDocument();

    // Check quantities and prices
    expect(screen.getByText(/2 x \$115.00/)).toBeInTheDocument();
    expect(screen.getByText(/5 x \$120.00/)).toBeInTheDocument();
    expect(screen.getByText(/2 x \$110.00/)).toBeInTheDocument();
  });

  it("displays the financial summary correctly", () => {
    render(<OrderReceipt order={mockOrderData} />);

    // Check subtotal
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("$1050.00")).toBeInTheDocument();

    // Check taxes
    const taxesElement = screen.getByText("Taxes");
    expect(taxesElement).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();

    // Check discounts
    const discountsElement = screen.getByText("Discounts");
    expect(discountsElement).toBeInTheDocument();
    expect(screen.getByText("-$5.00")).toBeInTheDocument();

    // Check total (subtotal + taxes - discounts = 1050 + 10 - 5 = 1055)
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("$1055.00")).toBeInTheDocument();
  });

  it("renders paid status correctly", () => {
    const paidOrder = { ...mockOrderData, paid: true };
    render(<OrderReceipt order={paidOrder} />);

    expect(screen.getByText("Paid")).toBeInTheDocument();
    expect(screen.getByText("Paid")).toHaveClass("text-green-600");
  });
});
