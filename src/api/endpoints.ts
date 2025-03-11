const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

export const endpoints = {
  orders: {
    getById: (id: string) => `${API_BASE_URL}/orders/${id}`,
  },
};
