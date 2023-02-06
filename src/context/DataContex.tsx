import React from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkmodeManager = atomWithStorage("darkmode", false);

const DataContext = () => {
  const [darkmode, setDarkMode] = useAtom(darkmodeManager);

  return {
    darkmode,
    setDarkMode,
  };
};

export default DataContext;
