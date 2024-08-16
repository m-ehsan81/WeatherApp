import { Formik } from "formik";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { fetchWheatherData } from "../../store/weather-slice";

import { StyledButton, StyledContainer, StylesSearchField } from "./styles";

export default function SearchBox() {
  const currentLocation = useSelector(
    (state: RootState) => state.weather.CurrentLocation
  );
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (values: { search: string }) => {
    dispatch(fetchWheatherData(values.search || currentLocation));
  };

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <StyledContainer>
            <StylesSearchField
              variant="outlined"
              label="search"
              name="search"
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledButton variant="outlined" type="submit">
              Search
            </StyledButton>
          </StyledContainer>
        </Box>
      )}
    </Formik>
  );
}
