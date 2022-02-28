import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function DirectionStack({ props }) {
  const { title, items } = props;
  return (
    <div>
      <h2>{title}</h2>
      <Stack direction="row" spacing={2}>
        {items.map((item) => {
          return item;
        })}
      </Stack>
    </div>
  );
}
