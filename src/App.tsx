import { TopBar, Main, Today, Details } from "@/components";

function App() {
  return (
    <div className='App grid justify-items-center dark:bg-mineshaft-900 w-screen h-screen'>
      <TopBar />
      <Main />
      <Today />
      <Details />
    </div>
  );
}

export default App;
