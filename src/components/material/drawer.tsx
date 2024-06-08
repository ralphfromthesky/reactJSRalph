import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import { menuitems } from "../sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { changeTheme } from "../../store/store.tsx";

export default function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { dark } = changeTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  //   const DrawerList = (
  //     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Box>
  //   );

  const newStyle = {
    background: dark ? "#1976d2" : "black",
    color: dark ? "white" : "white",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={props.openNa} onClose={props.closeNa}>
        {/* {DrawerList} */}
        <Box
          sx={{
            padding: "10px",
            backgroundColor: dark ? "" : "#1c1e23",
            color: dark ? "" : "white",
          }}
        >
          {menuitems?.map((item, index) => (
            <Box key={item.text}>
              <Box
                //   disablePadding
                onClick={() => navigate(item.path)}
                style={location.pathname === item.path ? newStyle : {}}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "5px 0",
                }}
              >
                <Box sx={{ color: dark ? "" : "white" }}>{item.icon}</Box>
                <ListItemText primary={item.text} />
              </Box>
            </Box>
          ))}
        </Box>
      </Drawer>
    </div>
  );
}
