import React from "react";
import { Link } from "react-router-dom"; 
import Container from "@mui/material/Container";

const Submit = (navigation) => {
  return (
    <Container
      maxWidth="xs"
      className="bg-white justify-center mt-6 mx-auto border p-8 shadow-md"
    >
      <h3 className="text-center font-bold m-7 text-3xl text-purple-700">
        Welcome to E-Mart !
      </h3>

      <h2 className="text-center font-bold m-7 text-2xl">
        We are thrilled to tell you that your details have been submitted
        successfully !
      </h2>

    <button className="text-md mx-auto w-full justify-center items-center text-center bg-purple-700 hover:bg-purple-600 transition-all duration-300 text-white p-2 rounded-md">
      <Link
        to="/home"
      >
      Click here to enter E-Mart
      </Link>
      </button>
      {/* <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: "auto" }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button> */}
    </Container>
  );
};

export default Submit;
