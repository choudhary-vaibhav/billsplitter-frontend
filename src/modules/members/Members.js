import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

export const Members = () => {



  return (
    <>
      <Container>
        
        <h2>Members</h2>

        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#1C6DD0", borderRadius:"10px" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Aman" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Amit" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>

          <Button
            variant="contained"
            size="small"
            style={{ marginButton: "2em" }}
          >
            + Add Members
          </Button>
        </Box>
      </Container>
    </>
  );
};
