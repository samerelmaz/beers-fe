import { Order } from "@/types/order";
import { fetcher } from "../fetcher";
import { endpoints } from "../endpoints";

export async function getOrderById(id: string): Promise<Order> {
  const order = await fetcher<Order>({ url: endpoints.orders.getById(id) });

  return order;
}
