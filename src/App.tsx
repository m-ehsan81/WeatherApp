import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "./store";
import { fetchWheatherData, weatherActions } from "./store/weather-slice";
import ContainerBox from "./components/containerBox";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("http://ip-api.com/json");
        const data = await response.json();
        dispatch(weatherActions.setCurrentLocation(data.city));
        dispatch(fetchWheatherData(data.city));
      } catch (error) {
        dispatch(weatherActions.setError("Failed to fetch"));
      }
    })();
  }, []);

  return <ContainerBox />;
}
