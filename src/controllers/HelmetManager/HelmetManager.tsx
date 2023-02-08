import DataContext from "@/context/DataContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetManager = () => {
  const { weatherData } = DataContext();

  const { main, name } = weatherData;
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          WeatherApp - {name} {main?.temp.toFixed(0)}º
        </title>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetManager;
