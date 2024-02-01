import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Names = ({ form, setForm, navigation }) => {
  const { firstName, lastName, gender } = form;
  console.log(firstName);

  return (
    <Container
      maxWidth="xs"
      className="bg-white items-center justify-center mx-auto p-8 shadow-lg"
    > <div className='text-center bg-opacity-10 text-purple-900 text-3xl font-bold underline'>E-Mart Shopping</div>
      {/* <div className="bg-opacity-7"> */}
        <h3 className="font-bold text-purple-700 text-center text-2xl mb-4">
          Personal Info
        </h3>
        <TextField
          label="First Name"
          name="firstName"
          onChange={setForm}
          value={form.firstName}
          className="mx-auto"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          onChange={setForm}
          value={form.lastName}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          required
        />
        <TextField
          label="Gender"
          name="gender"
          onChange={setForm}
          value={form.gender}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          required
        />

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      {/* </div> */}
    </Container>
  );
};
export default Names;
