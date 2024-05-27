import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { usePostData } from "../../react-query/gethooks.tsx";
import PositionedSnackbar from "./snackbar.tsx";
import { closeglobalModal } from "../../store/store.tsx";

const GlobalForm = () => {
  const deleteMessage = "Succesfully Saved";
  const { closeModalFunc, closeMod } = closeglobalModal();

  const { mutate, isSuccess, isPending, isError } = usePostData();
  const [data, setData] = useState<any>({
    title: "",
    price: "",
    balance: "",
  });
  const bgColor = {
    backgroundColor: "#2E7D32",
  };
  //or you can make a function like this,
  // const updateData = (key: any, value: any) => {
  //   setData((data) => ({
  //     ...data, [key]: value
  //   }))
  // }
  const useSubmitData = (e: any) => {
    e.preventDefault();
    mutate(data);
    closeModalFunc(false);
    if (data.title && data.price && data.balance) {
      setData({
        title: "",
        price: "",
        balance: "",
      });
    }
  };
  return (
    <Box>
      <Box>
        <form onSubmit={useSubmitData}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "35vh",
              padding: "20px",
              justifyContent: "space-around",
              width: "20vw",
              borderRadius: "10px",
            }}
          >
            <TextField
              label="title"
              variant="outlined"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              required
              error={data.title}
              sx={{width: '100%'}}
              // helperText={!data.title && 'input title'}
            />
            <TextField
              label="price"
              variant="outlined"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
              required
            />
            <TextField
              label="balance"
              variant="outlined"
              value={data.balance}
              onChange={(e) => setData({ ...data, balance: e.target.value })}
              required
            />
            <Button
              variant="contained"
              color="success"
              onClick={useSubmitData}
              sx={{ padding: 2 }}
            >
              submit
            </Button>
          </Box>
        </form>
      </Box>
      <PositionedSnackbar
        deleteSuccess={isSuccess}
        deleteMsg={deleteMessage}
        backGroundColor={bgColor}
      />
    </Box>
  );
};

export default GlobalForm;
