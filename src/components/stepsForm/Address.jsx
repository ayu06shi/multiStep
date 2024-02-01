import { Button, Container, TextField } from "@mui/material";
import React from "react";

const Address = ({ form, setForm, navigation }) => {
  const { city, pincode, state, country } = form;
  return (
    <Container maxWidth="xs"  className="bg-white justify-center mx-auto p-8 shadow-lg">
      <h3 className="font-bold text-purple-700 text-center text-2xl mb-4">Address</h3>
      <TextField
        label="City"
        name="city"
        value={form.city}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="Pincode"
        name="pincode"
        value={form.pincode}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        required
      />
      <TextField
        label="State"
        name="state"
        value={form.state}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        required
      />
      {/* <TextField
        label='City'
        name='city'
        value={form.address}
        onChange={setForm}
        variant='outlined' margin='normal' autoComplete='off' fullWidth
        /> */}
      <TextField
        label="Country"
        name="country"
        value={form.country}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        fullWidth
        required
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{ marginRight: "1rem" }}
          color="secondary"
          onClick={() => navigation.previous()}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>{" "}
    </Container>
  );
};

export default Address;
