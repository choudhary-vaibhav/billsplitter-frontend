import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Logo from "../../assets/images/logo_img.png";
import './homepage.css';
import { Link } from "react-router-dom";
import { Ledger } from "../ledger/pages/Ledger";

export const Homepage = () => {
  return (
    <Container id='homepage' st>
      <Grid container alignItems="center" justifyContent="center" direction="column" maxWidth="sm" style={{ minHeight: '80vh' }}>
        <img src={Logo} alt="img" width="100" height="100" />
        <h1>SPLITTZER</h1>
        <Grid>
            <Link style={{textDecoration: 'none'}} to="/CreateGroup">
            <Button
                variant="contained"
                size="large"
                style={{ marginButton: "2em" }}
            >
                + CREATE GROUP
            </Button>
            </Link>
            &nbsp;
            <Link style={{textDecoration: 'none', color:"white"}} to={{pathname: `/GroupLogin`}}>
            <Button
                variant="contained"
                size="large"
                style={{ marginButton: "2em" }}
            >
                Already have a group?
            </Button>
            </Link>
        </Grid>
      </Grid>
    </Container>
  );
};