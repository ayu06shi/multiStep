import { Button, TextField, Container } from "@mui/material";
import React from "react";

const Payment = ({ form, setForm, navigation }) => {
  const { cardNo, cvv, expiryDate } = form;
  return (
    <Container maxWidth="xs" className="bg-white justify-center my-auto mx-auto p-8 shadow-lg">
      <h3 className="font-bold text-purple-700 text-center text-2xl mb-4">Payment Details</h3>
      <TextField
        label="Card No"
        name="cardNo"
        value={form.cardNo}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="CVV"
        name="cvv"
        value={form.cvv}
        onChange={setForm}
        variant="outlined"
        margin="normal"
        autoComplete="off"
        fullWidth
        required
      />
      <p >Expiry Date</p>
      <TextField
        // label="Expiry Date"
        id="date"
        type="date"
        name="date"
        value={form.expiryDate}
        onChange={setForm}
        // format="MM-YYYY"
        variant="outlined"
        // autoComplete="off"
        fullWidth
        required
      />
      {/* <datepicker
  margin="normal"
  disablefuture
  opento="year"
  views={["year", "month", "day"]}
  value={selecteddate}
  onchange={this.handledatechange}
  maxdate={maxdate}
  format="dd-mm-yyyy"/> */}

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

export default Payment;
