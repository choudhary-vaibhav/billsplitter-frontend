import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Container } from "@mui/system";
import { Button } from "@mui/material";

export const FolderList = () => {
  return (
    <Container>
      <h2>Expense Tracker</h2>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#1C6DD0", borderRadius:"10px", color:"white" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="$5 by Amit" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="$50 by Amit" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="$70 BY Aman" />
        </ListItem>
      </List>

      <Button
            variant="contained"
            size="small"
            style={{ marginButton: "2em" }}
          >
            + Add Transaction
          </Button>
    </Container>
  );
};
