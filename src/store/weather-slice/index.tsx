import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherSliceType } from "./type";

const initial: weatherSliceType = {
  loading: false,
  error: "",
  data: {},
  CurrentLocation: "",
};

const fetchWheatherData = createAsyncThunk(
  "cart/fetchWheaderData",
  (city: string) => {
    return fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6621365961234e75bcc155734241508&q=${city}&days=6&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        return data;
      });
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initial,
  reducers: {
    setCurrentLocation(state, action) {
      state.CurrentLocation = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWheatherData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWheatherData.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.message;
        state.loading = false;
        state.data = {};
      } else {
        state.data = action.payload;
        state.loading = false;
        state.error = "";
      }
    });
    builder.addCase(fetchWheatherData.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export const weatherActions = weatherSlice.actions;
export { fetchWheatherData };
export default weatherSlice.reducer;
