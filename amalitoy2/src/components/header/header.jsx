import { Box, Button, Container, IconButton, Stack, TextField } from "@mui/material";
import headerLogo from "../../assets/header/logo.svg"
import React from "react";
import { Location } from "../../assets/header/location";

export const Header = () =>{
    return (
      <>
        <Container>
          <Stack>
            <IconButton disableRipple = {true}>
              <Box>
                <img src={headerLogo} alt="logo" />
              </Box>
            </IconButton>
            <Button
                startIcon={<Location/>}
                disableRipple
                sx={{
                  color: "black",
                  "&:hover": {
                      backgroundColor: "transparent",
                  },
              }}>
                Алматы
            </Button>
            <Box position={"relative"}>
              <TextField
                id="search"
                label = "Поиск по товарам"
                sx={{width: 601}}
                variant="standard"
              />

            </Box>
 
          </Stack>
        </Container>
      </>
    )
}