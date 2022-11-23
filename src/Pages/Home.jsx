import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import backgrounds from "../bg";
import Design from "../components/Design";
import Navbar from "../components/Navbar";
import brace from "./../assets/dsc.png";
export default function Home() {
  const [state, setState] = useState({
    nom: "",
    img: "",
    bg: backgrounds[0],
  });
  console.log(state);
  return (
    <div>
      <Navbar />
      <Container>
        <p
          style={{
            paddingTop: 15,
            fontWeight: "400",
            fontSize: 18,
            lineHeight: "1.4em",
            color: "#333",
          }}
        >
          Nous serons ravis de vous retrouver au plus grand fesival des
          dévéloppeurs ce 17 décembre 2022.
        </p>
        <Box>
          <Stack
            direction="row"
            mt={3}
            sx={{
              display: { md: "flex", sm: "block", xs: "block" },
              paddingBottom: 10,
            }}
          >
            <Design state={state} set={setState} />
            <Box
              flex={1}
              height="70vh"
              sx={{
                border: "1px solid #333",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  width: { md: "96%", sm: "98%", lg: "100%" },
                  height: "100%",
                  margin: "auto",
                  backgroundImage: `url("${state.bg}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 4,
                    left: 20,
                    color: "#fff",
                  }}
                >
                  #DevFestKivu22
                </Typography>
                <Box
                  sx={{
                    width: { md: "60%", sm: "40%" },
                    background: "#fff",
                    padding: 2,
                    position: "relative",
                  }}
                >
                  <img
                    src={brace}
                    alt="brace"
                    style={{
                      top: -25,
                      left: -25,
                      width: 90,
                      position: "absolute",
                    }}
                  />
                  <img
                    src={state.img}
                    alt="profile"
                    width="100%"
                    style={{
                      margin: "auto",
                      maxHeight: { md: 250, sm: 80, xs: 80 },
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      pt={2}
                      sx={{
                        textAlign: "center",
                        fontSize: 24,
                        fontWeight: "700",

                        fontFamily: "Google Sans",
                      }}
                    >
                      {state.nom}
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "center",
                        paddingTop: 5,
                        color: " #E57373",
                      }}
                    >
                      Je serais au devfest kivu 2022
                    </Typography>

                    <Typography
                      style={{
                        textAlign: "center",
                        fontFamily: "Google Sans",
                        paddingTop: 5,
                        color: "#2228",
                      }}
                    >
                      Google Developer Groups
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
