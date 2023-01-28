import { List, ListItem } from "@mui/material";
import React from "react";

export default function Root() {
  return <div>
    <p>We are at the 22nd table! </p>
    <List>Developers: 
    <ListItem>Annie Lu</ListItem>
    <ListItem>Kyle Machnicki</ListItem>
    <ListItem>Eric Wu</ListItem>
    <ListItem>Liyu Zariman</ListItem>
    </List>
    <p>This project is a work-in-progress. 
      Ideally, users would be able to sign up for an account, 
      login, view hospital information, and add comments if 
      they are registered. 
    </p>
    </div>;

}