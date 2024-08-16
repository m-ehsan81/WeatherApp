import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

import {
  StyledBox,
  StyledCaptionBox,
  StyledDaysBox,
  StyledTitleBox,
} from "./styled";

function getDayName(dateStr = "") {
  var date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export default function WeatherBox() {
  const { current, location, forecast } = useSelector(
    (state: RootState) => state.weather.data
  );

  return (
    <StyledBox>
      <StyledTitleBox>
        <Box>
          <Typography variant="h4">{location?.name}</Typography>
          <Typography variant="body1">{current?.last_updated}</Typography>
        </Box>
        <Typography variant="h2">{current?.temp_c}°</Typography>
      </StyledTitleBox>

      <StyledCaptionBox>
        <Typography variant="h5">{current?.condition.text}</Typography>
        <Typography variant="h5">
          {`${forecast?.forecastday[0].day.mintemp_c.toFixed(
            0
          )}° / ${forecast?.forecastday[0].day.maxtemp_c.toFixed(0)}°`}
        </Typography>
      </StyledCaptionBox>

      <Grid container>
        {forecast?.forecastday.map((item, index) => (
          <Grid item xs={2} key={index}>
            <StyledDaysBox>
              <Typography variant="body2">
                {getDayName(item.date).substring(0, 3)}
              </Typography>
              <Typography variant="caption">
                {`${item.day.mintemp_c.toFixed(
                  0
                )}°/${item.day.maxtemp_c.toFixed(0)}°`}
              </Typography>
            </StyledDaysBox>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}
