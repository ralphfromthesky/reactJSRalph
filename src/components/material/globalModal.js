import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
};
const GlobalModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const object = props.objectFromParent;

  return (
    <div>
      <Modal
        open={props.bukasOpen}
        onClose={props.saradoClose}
        aria-labelledby={props.headerFromParent}
        aria-describedby="modal-modal-description"
        notesFromParent={props.notesFromParent}
        messageFromParent={props.messageFromParent}
        sampledatafromparent={props.sampledatafromparent}
        objectFromParent={props.objectFromParent}
        Delete={props.del}
        // newState={props.newState}
        // sx={{'&.css-ix1f03-MuiTypography-root': {
        //   marginTop: '0 !important'
        // }}}
      >
        <Box sx={style}>
          {props.newState ? props.addbtn : props.delbtn}

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.headerFromParent}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.notesFromParent}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.what}
          </Typography>
          <Typography id="modal-modal-title" variant="h1" component="h2">
            {props.msg}
          </Typography>

          {object?.map((value) => (
            <Typography variant="h6" color="initial" key={value.title}>
              {value.name} -{value.lastName} - {value.location}
            </Typography>
          ))}
          
            <Box>
              {props.me}
            </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.messageFromParent}
            <br />
            {props.sampledatafromparent}
          </Typography>
          {/* <Box sx={{ display: "flex" }}>
            <Button variant="contained" onClick={props.saradoClose}>
              close
            </Button>
            <HighlightOffIcon sx={{position: 'absolute'}}/>
          </Box> */}
          {props.newState && props.addThis}
          {!props.newState && props.delThis}
        </Box>
      </Modal>
    </div>
  );
};

export default GlobalModal;
