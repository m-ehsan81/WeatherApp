type weatherDataType = {
  current?: {
    condition: { text: string };
    last_updated: string;
    temp_c: number;
  };
  location?: {
    name: string;
    [key: string]: string | number;
  };
  forecast?: {
    forecastday: {
      date: string;
      day: {
        mintemp_c: number;
        maxtemp_c: number;
        [key: string]: string | number;
      };
    }[];
  };
};

export type weatherSliceType = {
  loading: boolean;
  error: string | undefined;
  data: weatherDataType;
  CurrentLocation: string;
};
