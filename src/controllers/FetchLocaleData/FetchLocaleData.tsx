import { useEffect } from "react";
import { fetchData } from "@/classes";
import DataContext from "@/context/DataContext";

const FetchLocaleData = () => {
  const { setLocationData, weatherData } = DataContext();
  const { name, sys }: any = weatherData;

  const dataFetcher = async () => {
    const timeapi = import.meta.env.VITE_TIMEAPI;
    let baseurl = `https://timezone.abstractapi.com/v1/current_time/`;
    let urlparams = `?api_key=${timeapi}&location=${name},${sys.country}`;
    const getTimeData = new fetchData(`${baseurl}${urlparams}`);
    const { response } = await getTimeData.getData();
    setLocationData(response);
  };

  useEffect(() => {
    dataFetcher();
  }, [sys]);

  return null;
};

export default FetchLocaleData;
