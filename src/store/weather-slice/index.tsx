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
      .then((data) => data);
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
      state.data = action.payload;
      state.loading = false;
      state.error = "";
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

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const wheaderApi = createApi({
//   reducerPath: "wheader",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
//   endpoints: (builder) => ({
//     getWheader: builder.query({
//       query: (name) =>
//         `/current.json?key=6621365961234e75bcc155734241508&q=${name}&aqi=no`,
//     }),
//   }),
// });

// export const { useGetWheaderQuery } = wheaderApi;
