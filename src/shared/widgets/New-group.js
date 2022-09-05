import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Newgroup = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>Create a New Group</h1>
        <Box sx={{ height: "30vh" }}>
          <TextField
            id="outlined-basic"
            label="Group Name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained">
            ADD
          </Button>
        </Box>
      </Container>
    </>
  );
};
