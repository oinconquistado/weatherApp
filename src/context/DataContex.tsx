import React from "react";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkmodeManager = atomWithStorage("darkmode", false);
const weatherdata = atom<any>({});

const DataContext = () => {
  const [darkmode, setDarkMode] = useAtom(darkmodeManager);
  const [weatherData, setWeatherData] = useAtom(weatherdata);

  return {
    darkmode,
    setDarkMode,
    weatherData,
    setWeatherData,
  };
};

export default DataContext;
