import { Box, Button, styled, TextField } from "@mui/material";

export const StyledContainer = styled(Box)`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StylesSearchField = styled(TextField)`
  width: 300px;
  color: #fff;

  .MuiInputBase-root,
  .MuiInputBase-root:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: #fff;
      border-radius: 30px;
      color: #fff;
    }
  }

  .MuiInputBase-input {
    color: #fff;
  }

  .MuiFormLabel-root {
    color: #fff !important;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 30px;
  border-color: #fff;
  color: #fff;
  &:hover {
    color: #161218;
    border-color: #161218;
  }
`;
