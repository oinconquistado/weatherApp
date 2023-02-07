import { TopBar, Main, Today, Details } from "@/components";
import { useEffect } from "react";
import DataContext from "./context/DataContex";

const appID = import.meta.env.VITE_APPID;

function App() {
  const { weatherData, setWeatherData } = DataContext();

  const getData = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${appID}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };

  const getPostion = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getData(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getPostion();
  }, []);

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
