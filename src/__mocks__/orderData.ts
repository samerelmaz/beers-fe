import { Order } from "@/types/order";

export const mockOrderData: Order = {
  id: 1,
  created: "2024-09-10 12:00:00",
  paid: false,
  taxes: 10,
  discounts: 5,
  rounds: [
    {
      id: 1,
      created: "2024-09-10 12:00:30",
      items: [
        {
          product_id: 1,
          name: "Corona",
          quantity: 2,
        },
        {
          product_id: 3,
          name: "Club Colombia",
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      created: "2024-09-10 12:20:31",
      items: [
        {
          product_id: 3,
          name: "Club Colombia",
          quantity: 1,
        },
        {
          product_id: 2,
          name: "Quilmes",
          quantity: 2,
        },
      ],
    },
    {
      id: 3,
      created: "2024-09-10 12:43:21",
      items: [
        {
          product_id: 2,
          name: "Quilmes",
          quantity: 3,
        },
      ],
    },
  ],
  items: [
    {
      product_id: 1,
      name: "Corona",
      price_per_unit: 115,
      total: 230,
      quantity: 2,
    },
    {
      product_id: 2,
      name: "Quilmes",
      price_per_unit: 120,
      total: 600,
      quantity: 5,
    },
    {
      product_id: 3,
      name: "Club Colombia",
      price_per_unit: 110,
      total: 220,
      quantity: 2,
    },
  ],
  subtotal: 1050,
};
