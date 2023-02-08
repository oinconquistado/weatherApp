import { TopBar, Main, Today, Details } from "@/components";
import { FetchLocaleData, HelmetManager } from "@/controllers";

const MainPage = () => {
  return (
    <div className='App grid justify-items-center dark:bg-mineshaft-900 w-screen h-screen overflow-hidden	'>
      <HelmetManager />
      <FetchLocaleData />
      <TopBar />
      <Main />
      <Today />
      <Details />
    </div>
  );
};

export default MainPage;
