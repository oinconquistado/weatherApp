import { useEffect } from "react";
import { fetchData } from "@/classes";
import DataContext from "@/context/DataContext";

const FetchInitialData = () => {
  const { setWeatherData } = DataContext();

  const dataFetcher = async (latitude: number, longitude: number) => {
    const APPID = import.meta.env.VITE_APPID;
    const baseurl = `https://api.openweathermap.org/data/2.5/`;
    const urlparams = `weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${APPID}`;
    const getWeatherData = new fetchData(`${baseurl}${urlparams}`);
    const { response } = await getWeatherData.getData();
    setWeatherData(response);
  };

  const getPostion = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dataFetcher(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getPostion();
  }, []);

  return null;
};

export default FetchInitialData;
