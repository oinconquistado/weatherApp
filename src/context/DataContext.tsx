import React from "react";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkmodeManager = atomWithStorage("darkmode", false);
const weatherdata = atom<any>({});
const locationdata = atom<any>({});

const DataContext = () => {
  const [darkmode, setDarkMode] = useAtom(darkmodeManager);
  const [weatherData, setWeatherData] = useAtom(weatherdata);
  const [locationData, setLocationData] = useAtom(locationdata);

  return {
    darkmode,
    setDarkMode,
    weatherData,
    setWeatherData,
    locationData,
    setLocationData,
  };
};

export default DataContext;
