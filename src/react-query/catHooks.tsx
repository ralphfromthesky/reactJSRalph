import { useQuery } from "@tanstack/react-query";
import { catData } from "../axios/catAxios.tsx";

export const useCatData = () => {
    return useQuery({
        queryKey: ['cat'],
        queryFn: () => catData("https://65b37959770d43aba479d655.mockapi.io/foods",{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
              },
        }),
        staleTime: 5000,
        enabled: false,

        
    })
    
    
}