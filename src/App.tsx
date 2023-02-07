import { TopBar, Main, Today, Details } from "@/components";
import { QueryData } from "./services";
import { useEffect } from "react";
import DataContext from "./context/DataContex";

const appID = import.meta.env.VITE_APPID;
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=-2.529450&lon=-44.296951&units=metric&lang=pt_br&appid=${appID}`;

  const initalData = new QueryData("initalData", url);

  const { weatherData, setWeatherData } = DataContext();

  const { data, isLoading, isFetching } = initalData.getData();

  useEffect(() => {
    if (data) setWeatherData(data);
  });

  useEffect(() => {}, [weatherData]);

  if (weatherData.base === "stations")
    return (
      <div className='App grid justify-items-center dark:bg-mineshaft-900 w-screen h-screen'>
        <TopBar />
        <Main />
        <Today />
        <Details />
      </div>
    );
  else return <>Carregando...</>;
}

export default App;
