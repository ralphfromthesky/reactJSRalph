import React, { useEffect } from "react";
import Main from "../components/main/main";
import { Box, Button } from "@mui/material";
import { useFakeApi, useFakeApi2 } from "../react-query/fakeApiHooks.tsx";
import Loader from "../components/material/loader.tsx";
import { useGetdata } from "../react-query/gethooks.tsx";
import { changeTheme } from "../store/store.tsx";

const Api = () => {
  const { isSuccess, isLoading } = useFakeApi();
  const { isSuccess: suck, isLoading: lods } = useFakeApi2();
  const {isLoading: lodi} = useGetdata()
  const useData = useGetdata();
  const prod: any = useFakeApi();
  const prod2: any = useFakeApi2();
  const {dark} = changeTheme()

  const styler = {
    border: "5px solid #1b5e20",
    borderRadius: "5px",
    margin: "1rem 0",
  };
  return (
    <Main>
      <Box style={{height: dark ? '' : '100%'}}>
        <Loader openBukas={isLoading || lodi || lods} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "1rem 0",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => prod.refetch()}
          >
            FETCH
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => prod2.refetch()}
          >
            FETCH
          </Button>
          <Button variant="contained" color="error">
            FETCH
          </Button>
        </Box>
        {isSuccess && (
          <Box sx={styler}>
            {prod?.data?.map((val: any, ind: any) => (
              <ul>
                <li> {val.title}</li>
              </ul>
            ))}
          </Box>
        )}

        {suck && (
          <Box sx={{ ...styler, border: "5px solid #7b1fa2" }}>
            {prod2?.data?.products?.map((val: any, ind: any) => (
              <ul>
                <li> {val.title}</li>
              </ul>
            ))}
          </Box>
        )}
        <Box sx={{...styler, border: '5px solid #c62828'}}>
          {useData?.data?.map((value: any) => (
              <ul>
                <li>{value.title}</li>
              </ul>
          ))}
        </Box>
      </Box>
    </Main>
  );
};

export default Api;
