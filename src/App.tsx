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
        <div className='w-screen h-screen grid place-items-center'>
          <Spinner w='64' h='64' />
        </div>
      )}
    </>
  );
}

export default App;
