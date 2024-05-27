import React, { useEffect, useState } from "react";
import Main from "../components/main/main";
import { Box, Button, Input, TextField } from "@mui/material";
import GlobalModal from "../components/material/globalModal";
import { changeTheme } from "../store/store.tsx";


const CustomElement = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [erroRtext, seterroRtext] = useState(false);
  const [text, setText] = useState<any>("");
  const [open, setOpen] = useState<any>(false)
  const [pass, setPassword] = useState<any>('')
  const {dark} = changeTheme()

const handleChange = (e: any) => {
    setPassword(e.target.value)
}
const handleSumit = () => {
    console.log(pass)
}
  const handleCloseGloabalModal = () => {
    setOpen(false);
  };
  const onFocusTexfField = () => {};
  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

  const inputStyle: React.CSSProperties = {
    width: "70px", 
    height: "50px",
    fontSize: "40px",
    borderRadius: '10px',
    textAlign: 'center'
  }
  const newStyle = {
    height: "10vh",
    width: "5vw",
    border: "2px solid gray",
  };

  const active = {
    border: "2px solid red",
    height: "10vh",
    width: "5vw",
    borderRadius: "10px",
  };
useEffect(() => {
if(text === 'ralph') {
    setOpen(true)
}
}, [text])
  return (
    <Main>
      <Box sx={{ display: "flex", gap: "5px", padding: "10px", height: dark ? '' : '100vh' }}>
        {/* Render each box */}
        {[100, 500, 1500, 3000, 10000].map((value, index) => (
          <Box
            key={index}
            sx={index === activeIndex ? active : newStyle}
            onClick={() => handleClick(index)}
          >
            {value}
          </Box>
        ))}
        <br />
      </Box>
      <Box>
        {activeIndex == 1 && <Box sx={active}>show this box</Box>}
        {activeIndex == 4 && <Box sx={active}>ha? ANO DAW?</Box>}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {text !== "ralph" && (
              <TextField
                id="outlined-basic"
                label="textMessage"
                variant="outlined"
                error={erroRtext}
                onChange={(e) => setText(e.target.value)}
                sx={{
                  color: text === "ralph" ? "yellow" : "green",
                }}
              />
            )}
            {text === "ralph" ? "correct!" : "please input my name ralph"}
            <br />
            <h1
              style={{
                color: "red",
              }}
            >
              {/* {text.includes("ano") ? "my ano" : "input something and mix it with 'ano'"} */}

              {text === "ralph" ? "yes sana all!" : ""}
            </h1>
            {text === "ralph" && (
              <Button variant="contained" onClick={() => setText("")}>
                show textField
              </Button>
              
            )}
            <br/>
            <Box>
                <Box sx={{display: 'flex', gap: '10px'}}>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                <input style={inputStyle} inputMode="numeric" maxLength={1} type="password" onChange={handleChange}/>
                </Box>
         <Button onClick={handleSumit} variant="contained">send</Button>

            </Box>
          </Box>
        </Box>
      </Box>
      <GlobalModal bukasOpen={open} saradoClose={handleCloseGloabalModal} msg = 'congrats you type my name Ralph!'/>

    </Main>
  );
};

export default CustomElement;
