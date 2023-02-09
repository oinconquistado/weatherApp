import { TopBar, Main, Today, Details } from "@/components";
import { FetchLocaleData, HelmetManager } from "@/controllers";

const MainPage = () => {
  return (
    <div className='App dark:bg-mineshaft-900 w-screen h-screen overflow-hidden'>
      <HelmetManager />
      <FetchLocaleData />

      <div className='mt-[2.68vh]'>
        <div className='h-[6.65vh] centralize w-12/12 md:w-8/12'>
          <TopBar />
        </div>
      </div>

      <div className='md:grid md:place-items-center md:grid-cols-[2fr_2fr] md:w-8/12 w-11/12 centralize  mt-[6.44vh] md:mt-[15vh] '>
        <div className='md:w-10/12'>
          <div className='grid place-items-center centralize h-[46.14vh] w-11/12 md:w-10/12  md:h-[50vh]'>
            <Main />
          </div>
        </div>
        <div className='mt-[10.73vh] md:mt-0 md:w-10/12 '>
          <div className='grid gap-[2.15vh] md:gap-4 grid-rows-[1fr_2fr] md:grid-rows-[3fr_7fr] place-items-center centralize h-[23.5vh]  w-12/12 md:w-11/12 md:h-[60vh] md:dark:bg-mineshaft-600 md:rounded md:bg-mineshaft-100 md:dark:'>
            <div className='animate-showUP h-full w-11/12'>
              <Today />
            </div>
            <div className='animate-showUP h-full w-11/12'>
              <Details />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
