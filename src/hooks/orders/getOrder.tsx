import { getOrderById } from "@/api/orders/getById";
import { useQuery } from "@tanstack/react-query";

export const useGetOrder = (id: string) => {
  const {
    data: order,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
    enabled: !!id,
  });

  return { order, error, isLoading };
};
