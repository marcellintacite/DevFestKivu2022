import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import backgrounds from "../bg";
import * as htmlToImage from "html-to-image";
import Design from "../components/Design";
import Navbar from "../components/Navbar";
import brace from "./../assets/dsc.png";
export default function Home() {
  const [state, setState] = useState({
    nom: "",
    img: "",
    bg: backgrounds[0],
    circle: false,
  });

  const handleExport = () => {
    if (state.img === "" || state.nom === "") {
      alert("Veuillez saisir un nom ou choisir une image en mode portrait");
    } else {
      let node = document.getElementById("exporting");
      htmlToImage
        .toPng(node)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.download = `${state.nom} DevFest Kivu`;
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  };
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
            <Stack>
              <Design state={state} set={setState} />
              <button
                style={{
                  width: "90%",
                  marginTop: 30,
                  padding: "10px 9px",
                  margin: "auto",
                  border: "none",
                  background: "#4CAF50",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 16,
                }}
                onClick={handleExport}
              >
                Télécharger
              </button>
            </Stack>
            {state.img && (
              <Box
                flex={1}
                sx={{
                  height: { lg: "80vh", sm: "90vh", xs: "90%" },
                  border: "1px solid #333",
                  padding: 2,
                  marginTop: { sm: 4, xs: 4 },
                }}
              >
                <Box
                  id="exporting"
                  sx={{
                    width: { md: "100%", sm: "100%", lg: "100%" },
                    height: "100%",
                    margin: "auto",
                    backgroundImage: `url("${state.bg}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: { sm: 2, xs: 2 },
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 4,
                      left: { md: 20, sm: 10 },
                      color: "#fff",
                      fontSize: { md: 16, sm: 10, xs: 10 },
                    }}
                  >
                    #DevFestKivu22
                  </Typography>
                  <Box
                    sx={{
                      width: { md: "60%", sm: "40%" },
                      padding: 2,
                      background: "#fff",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={brace}
                      alt="brace"
                      style={{
                        top: { lg: -50, sm: -40, xs: -30 },
                        left: -25,
                        width: 90,
                        // right: 0,
                        position: "absolute",
                      }}
                    />
                    <Box
                      sx={{
                        width: state.circle ? 170 : "100%",
                        height: state.circle ? 170 : "auto",
                        borderRadius: state.circle ? "50%" : 2,
                        overflow: "hidden",
                        border: state.circle && "3px solid rgb(255, 255, 161)",
                      }}
                    >
                      <img
                        src={state.img}
                        alt="profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          margin: "auto",
                          maxHeight: { md: 250, sm: 80, xs: 80, lg: 200 },
                        }}
                      />
                    </Box>
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
                          fontSize: { xs: 10, sm: 10 },
                          fontFamily: "Google Sans",
                        }}
                      >
                        Je serais au{" "}
                        <p
                          style={{
                            fontFamily: "Google Sans",
                            textTransform: "uppercase",
                          }}
                        >
                          devfest kivu 2022
                        </p>
                      </Typography>

                      <Typography
                        style={{
                          textAlign: "center",
                          fontFamily: "Google Sans",
                          paddingTop: 10,
                          color: "#2228",
                        }}
                      >
                        Google Developers Group Bukavu
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Stack>
        </Box>
        <Box mt={2} p={3}>
          <Divider />
          <p style={{ textAlign: "center", paddingTop: 5 }}>
            Designed by tacite
          </p>
        </Box>
      </Container>
    </div>
  );
}
