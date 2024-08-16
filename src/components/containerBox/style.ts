import { Box, styled, Typography } from "@mui/material";

export const StylesContainerBox = styled(Box)`
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;

export const StyledHeaderBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161218;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledError = styled(Typography)`
  color: red;
`;
