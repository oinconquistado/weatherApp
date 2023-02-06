import { TopBar, Main, Today, Details } from "@/components";

function App() {
  return (
    <div className='App grid place-items-center dark:bg-mineshaft-900'>
      <TopBar />
      <Main />
      <Today />
      <Details />
    </div>
  );
}

export default App;
