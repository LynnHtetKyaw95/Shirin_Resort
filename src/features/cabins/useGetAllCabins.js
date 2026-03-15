import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabin";

export function useGetAllCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  return { isPending, cabins, error };
}
