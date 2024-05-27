import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addData, getRequest, handleDelete } from "../axios/globalAxios.tsx";

export const useGetdata = () => {
  return useQuery({
    queryKey: ["newData"],
    staleTime: 5000,
    gcTime: 3000,
    retry: 5,
    // refetchInterval: 5000,
    queryFn: () =>
      getRequest("https://65b37959770d43aba479d655.mockapi.io/foods"),
  });
};

export const usePostData = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (newPost) =>
      addData("https://65b37959770d43aba479d655.mockapi.io/foods", newPost),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["newData"] });
    },
  });
};

export const useHandleDeletion = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (handleDelete),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["newData"] });
    } 
  })
}
