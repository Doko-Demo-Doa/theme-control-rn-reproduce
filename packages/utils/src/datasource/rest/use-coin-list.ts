import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";

export const useCoinList = () => {
  const a = useQuery({
    queryKey: ["repoData"],
    queryFn: () => apiClient.get("/TanStack/query").then((res) => res.json()),
  });
  return a;
};
