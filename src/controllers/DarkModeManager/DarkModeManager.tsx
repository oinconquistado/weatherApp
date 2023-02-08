import DataContext from "@/context/DataContext";
import { useEffect } from "react";

const DarkModeManager = () => {
  const body = document.getElementsByTagName("body")[0];
  const { darkmode } = DataContext();

  useEffect(() => {
    if (darkmode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkmode]);

  return null;
};

export default DarkModeManager;
