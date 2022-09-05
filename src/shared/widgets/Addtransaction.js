import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Addtransaction = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>Add a Transaction</h1>
        <Box sx={{ height: "40vh" }}>
          <TextField
            id="outlined-basic"
            label="Details"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Expense"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Payed by:"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained">ADD</Button>
        </Box>
      </Container>
    </>
  );
};
