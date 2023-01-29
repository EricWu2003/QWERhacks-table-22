import { List, ListItem, Box } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box m={2}>
      <p>We are at the 22nd table for QWERHacks 2023!</p>
      <List>Developers: 
      <ListItem>Annie Lu</ListItem>
      <ListItem>Kyle Machnicki</ListItem>
      <ListItem>Eric Wu</ListItem>
      <ListItem>Liyu Zerihun</ListItem>
      </List>
      <p>This project is a work-in-progress. 
        Ideally, users would be able to sign up for an account, 
        login, view hospital information, and add comments if 
        they are registered. 
      </p>
      <p>
        As this is meant to be a healthcare equity product, the
        intention for this public forum is to provide a common
        space for minority peoples to voice their experiences with
        specific hospitals and their staff. When searching for 
        "queer ratings" of hospitals, the top sites are from the 
        Human Rights Campaign and news/journals. Respectively, 
        they show <b>self</b> reported diversity support of hospitals and 
        headlines of a gay rating publication by a small group of <b>individuals</b>. Neither of these offer detailed information
        about interpersonal conduct at the hospital regarding 
        minority treatment, and this public forum intends to 
        publicize anecdotes from minority patients regarding their
        care, in hopes of generating a popular, honest metric of 
        healthcare equity in hospitals. 
      </p>
    </Box>
  );
}