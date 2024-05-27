import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const PassingDataFromChildToparentChild = (props) => {
  const [bool, isBool] = useState("this message is from child");
  const [data, passData] = useState('');

  const dataFromChildren = () => {
    isBool(bool);
    props.dataFromChildren(bool);

  };

  const dataFromParent = [
    {
      car: "honda",
      motorcycle: "kawazaki",
      plane: "airPlane",
    },
  ];

  const dataFromChild = () => {
    passData(dataFromParent);
    props.dataFromChild(data)
    console.log(dataFromParent)
  };


  return (
    <div>
      <Button variant="contained" color="success" onClick={dataFromChildren}>
        click me data from child
      </Button>
      <Button variant="contained" color="error" onClick={dataFromChild}>
        another data from child
      </Button>
      
      <Box>
        {/* <Button variant="contained" onClick={dataFromChild}>
          dataFromChild
        </Button> */}
      </Box>
    </div>
  );
};

export default PassingDataFromChildToparentChild;
