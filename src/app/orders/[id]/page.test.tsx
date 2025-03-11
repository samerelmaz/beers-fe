import { render, screen } from "@testing-library/react";
import OrderPage from "./page";
import { useParams } from "next/navigation";
import { mockOrderData } from "@/__mocks__/orderData";
import { useGetOrder } from "@/hooks/orders/getOrder";

// Mock the custom hook
jest.mock("@/hooks/orders/getOrder", () => ({
  useGetOrder: jest.fn(),
}));

// Mock the next/navigation useParams hook
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

describe("OrderPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state correctly", () => {
    // Mock hook return values
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useGetOrder as jest.Mock).mockReturnValue({
      order: null,
      isLoading: true,
      error: null,
    });

    render(<OrderPage />);

    expect(screen.getByText("Loading receipt...")).toBeInTheDocument();
  });

  it("renders error state correctly", () => {
    // Mock hook return values
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useGetOrder as jest.Mock).mockReturnValue({
      order: null,
      isLoading: false,
      error: new Error("Failed to fetch"),
    });

    render(<OrderPage />);

    expect(screen.getByText("Error loading receipt")).toBeInTheDocument();
  });

  it("renders empty state correctly when no order is returned", () => {
    // Mock hook return values
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useGetOrder as jest.Mock).mockReturnValue({
      order: null,
      isLoading: false,
      error: null,
    });

    render(<OrderPage />);

    expect(screen.getByText("Order not found")).toBeInTheDocument();
  });

  it("renders the order receipt when data is available", () => {
    // Mock hook return values
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useGetOrder as jest.Mock).mockReturnValue({
      order: mockOrderData,
      isLoading: false,
      error: null,
    });

    render(<OrderPage />);

    // We can check just a few key elements, since the OrderReceipt component
    // has its own dedicated tests
    expect(screen.getByText("Receipt")).toBeInTheDocument();
    expect(screen.getByText(/Order #1/)).toBeInTheDocument();
  });

  it("calls useGetOrder with the correct ID", () => {
    // Mock hook return values
    (useParams as jest.Mock).mockReturnValue({ id: "42" });
    (useGetOrder as jest.Mock).mockReturnValue({
      order: mockOrderData,
      isLoading: false,
      error: null,
    });

    render(<OrderPage />);

    // Check that the hook was called with the ID from useParams
    expect(useGetOrder).toHaveBeenCalledWith("42");
  });
});
