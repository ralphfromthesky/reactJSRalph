import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchDataFromFakeApi,
  fetchDataFromFakeApi2,
} from "../axios/fakeApi.tsx";

export const useFakeApi = () => {
  return useQuery({
    queryKey: ["fakeApi"],
    enabled: false,
    queryFn: () => fetchDataFromFakeApi("https://fakestoreapi.com/products"),
  });
};
export const useFakeApi2 = () => {
  return useQuery({
    queryKey: ["fakeApi2"],
    enabled: false,
    queryFn: () => fetchDataFromFakeApi2("https://dummyjson.com/products"),
    
  });
};
