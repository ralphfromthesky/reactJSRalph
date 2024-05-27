import React, { useState } from "react";
import Main from "../components/main/main";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { changeTheme } from "../store/store.tsx";
import PetsIcon from "@mui/icons-material/Pets";

const Framer = () => {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { dark } = changeTheme();
  const ha = {
    height: "5rem",
    width: "5rem",
    border: "2px solid red",
    backgroundColor: rotate ? "red" : "pink",
    borderRadius: "15px",
  };
  const ano = {
    width: "30vw",
    height: "15vh",
    border: dark ? "2px solid black" : "2px solid white",
  };
  return (
    <Main>
      <Box
        sx={{ padding: "20px", display: "flex", height: dark ? "" : "100vh" }}
      >
        <Box>
          <motion.div
            style={ha}
            animate={{ rotate: rotate ? 360 : 0 }}
            onClick={() => setRotate(!rotate)}
          >
            rotate me!
          </motion.div>
          <br />
          <motion.div
            style={{
              ...ha,
              backgroundColor: rotate ? "green" : "pink",
              borderRadius: move ? "50%" : "10px",
            }}
            animate={{ x: move ? 500 : 0, scale: move ? 2 : 1 }}
            initial={{ scale: 0 }}
            //    transition={{type: 'tween', bounce: move ? 30 : 0}}
            //  transition={{type: 'inertia', bounce: move ? 40 : 0}}
            onClick={() => setMove(!move)}
          >
            make me move
          </motion.div>
          <motion.div
            style={{ ...ha, backgroundColor: rotate ? "skyblue" : "pink" }}
            drag
            dragConstraints={{ left: 50, right: 500, top: -200 }}
          >
            Drag me!
          </motion.div>
          <motion.div
            style={{ ...ha, backgroundColor: rotate ? "brown" : "pink" }}
            animate={{
              rotate: [0, 300, 300, 0],
              x: [0, 600, -100, 0, 600, -100, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            im high!
          </motion.div>
          <motion.div
            style={{ ...ha, backgroundColor: rotate ? "yellow" : "pink" }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            whileTap={{ scale: 1.5 }}
          >
            oh no!
          </motion.div>
          <motion.div
            style={ha}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          ></motion.div>
          <motion.div
            initial={{ width: "5vw" }}
            animate={{ width: isClicked ? "150vw" : "5vw" }}
            style={{
              height: "20vh",
              border: "2px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              onClick={() => setIsClicked(!isClicked)}
            >
              click
            </Button>
            {isClicked ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>this is pussy cat</h3>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <PetsIcon />
              </div>
            )}
          </motion.div>
        </Box>
        <Box>
          <motion.div
            style={ano}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            atque aliquid quas minima dicta. Architecto ad error delectus iure
            doloribus fuga omnis, laboriosam consequatur repellendus nihil
            adipisci iste possimus impedit quidem unde sint aperiam aliquam quis
            beatae odio dolore temporibus optio perspiciatis? Deserunt, dolores
            sint soluta necessitatibus id repellat repudiandae!
          </motion.div>
          <br />
          <motion.div
            style={{ ...ano, height: "50vh" }}
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {isClicked ? "yo what the f@&?!" : "nice"}
          </motion.div>
        </Box>
      </Box>
    </Main>
  );
};

export default Framer;
