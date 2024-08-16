import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

import SearchBox from "../searchBox";
import WeatherBox from "../weatherBox";
import { RootState } from "../../store";

import { StyledError, StyledHeaderBox, StylesContainerBox } from "./style";

export default function ContainerBox() {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.weather
  );
  return (
    <StylesContainerBox>
      <StyledHeaderBox>
        <Typography variant="h2">Weather App</Typography>
      </StyledHeaderBox>
      <SearchBox />
      {error ? (
        <StyledError>{error} !</StyledError>
      ) : loading || Object.keys(data).length === 0 ? (
        <ThreeDots visible height="80" width="80" color="#161218" radius="9" />
      ) : (
        <WeatherBox />
      )}
    </StylesContainerBox>
  );
}
