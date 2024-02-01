import { Button, TextField, Container } from "@mui/material";
import React from "react";

const Contact = ({ form, setForm, navigation }) => {
  const { phone, email } = form;
  return (
    <Container maxWidth="xs" className="bg-white justify-center mx-auto p-8 shadow-lg">
      <h3 className="font-bold text-purple-700 text-center text-2xl mb-4">Contact Info</h3>
      <TextField
        label="Phone No"
        name="phone"
        value={form.phone}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
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
      </div>
    </Container>
  );
};

export default Contact;
