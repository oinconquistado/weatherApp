import { TopBar, Main, Today, Details, Spinner } from "@/components";
import { useEffect } from "react";
import DataContext from "./context/DataContex";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const { weatherData, setWeatherData } = DataContext();

  const getData = async (latitude: number, longitude: number) => {
    const APPID = import.meta.env.VITE_APPID;

    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${APPID}`
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

  const { main, name } = weatherData;

  if (main && name)
    return (
      <div className='App grid justify-items-center dark:bg-mineshaft-900 w-screen h-screen overflow-hidden	'>
        <HelmetProvider>
          <Helmet>
            <meta charSet='utf-8' />
            <title>
              WeatherApp - {name} {main?.temp.toFixed(0)}º
            </title>
          </Helmet>
        </HelmetProvider>
        <TopBar />
        <Main />
        <Today />
        <Details />
      </div>
    );
  else return <Spinner />;
}

export default App;
