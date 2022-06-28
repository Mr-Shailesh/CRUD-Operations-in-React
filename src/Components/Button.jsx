import * as React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../App.css";

export default function ColorButtons() {
  return (
    <Stack className="btn" direction="row" spacing={2}>
      <Link className="btnbtn" to="/">
        <Button variant="outlined" color="error">
          Go Home
        </Button>
      </Link>
    </Stack>
  );
}
