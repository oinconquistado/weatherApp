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
      {weatherData.base === "stations" ? (
        <MainPage />
      ) : (
        <div className='grid place-items-center h-screen w-screen'>
          <Spinner size='12' />
        </div>
      )}
    </>
  );
}

export default App;
