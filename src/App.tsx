import { DarkModeManager, FetchInitialData } from "@/controllers/";
import DataContext from "./context/DataContext";
import { MainPage } from "./pages";
import { Spinner } from "./components";

function App() {
  const { weatherData } = DataContext();

  return (
    <>
      <FetchInitialData />
      <DarkModeManager />
      {weatherData.base === "stations" ? <MainPage /> : <Spinner />}
    </>
  );
}

export default App;
