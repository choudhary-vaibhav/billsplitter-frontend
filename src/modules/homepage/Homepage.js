import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Logo from "../../assets/images/logo_img.png";

export const Homepage = () => {
  return (
    <Container>
      <Grid container justifyContent="center" direction="column" maxWidth="sm">
        <img src={Logo} alt="img" width="100" height="100" />
        <h1>SPLTTZER</h1>
        <Grid>
            <Button
                variant="contained"
                size="large"
                style={{ marginButton: "2em" }}
            >
                + CREATE GROUP
            </Button>
            &nbsp;
            <Button
                variant="contained"
                size="large"
                style={{ marginButton: "2em" }}
            >
                Already a Member
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
};