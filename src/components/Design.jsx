import {
  ContactSupportOutlined,
  Home,
  UploadFile,
  UploadFileOutlined,
} from "@mui/icons-material";
import { Stack, styled, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import backgrounds from "../bg";

export default function Design({ state, set }) {
  const [sh, setSh] = useState(false);
  const handleChange = (e) => {
    const nd = { ...state, nom: e.target.value };
    set(nd);
  };
  const handleFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    const n = { ...state, img: url };
    set(n);
    setSh(true);
  };
  const handleImg = (id) => {
    const n = { ...state, bg: id };
    set(n);
  };
  return (
    <Box flex={1} mt={2} mr={2}>
      <Typography>Générer automatiquement votre design</Typography>

      <Stack>
        <Box>
          <Box sx={{ width: { md: "90%", sm: "100%" } }} mt={3}>
            <TextField
              mt={3}
              fullWidth
              id="outlined-basic"
              size="small"
              sx={{ outline: "none" }}
              label="Votre nom "
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box
            mt={2}
            sx={{
              width: "100%",
              height: 70,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              style={{
                padding: 5,
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                borderRadius: "50%",
                background: "rgb(90, 178, 249)",
              }}
            >
              <input
                type="file"
                onChange={(e) => handleFile(e)}
                id="file-upload"
                accept="image/*"
                style={{
                  display: "none",
                }}
              />
              <label for="file-upload">
                <UploadFile
                  width={20}
                  color="#fff"
                  sx={{ color: "#fff", fontWeight: "600", cursor: "pointer" }}
                />
              </label>
            </Box>
            {!sh && <Typography>Choisir votre image</Typography>}
            {sh && (
              <img
                src={state.img}
                alt="profile"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                }}
              />
            )}
          </Box>
          <Box
            mt={2}
            sx={{
              padding: 1,
              background: "#3332",
              borderRadius: 2,

              color: "#333",
              width: "70%",
            }}
          >
            <Typography sx={{ fontSize: 11 }}>
              Pour un meilleur rendu de votre image, veuillez séléctionner une
              image en mode paysage
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>Choisir un background :</Typography>
            <Stack direction="row" gap={3}>
              {backgrounds.map((bg) => (
                <Box
                  width={60}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                  mt={2}
                  p={0.4}
                  onClick={() => handleImg(bg)}
                >
                  <img
                    src={bg}
                    alt="bg"
                    width="100%"
                    sx={{ borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
