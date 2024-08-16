import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  margin: auto;
  width: 400px;
  background-image: url("https://unsplash.it/600/400?image=1043&blur");
  background-size: cover;
  border-radius: 20px;
  box-shadow: 25px 25px 40px 0px rgba(0, 0, 0, 0.33);
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledTitleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCaptionBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  margin: 15px 0px 10px;
`;

export const StyledDaysBox = styled(Box)`
  display: "flex";
  flex-direction: "column";
  justify-content: "center";
  align-items: "center";
`;
