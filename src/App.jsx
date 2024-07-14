import { Header } from "./assets/components/Header";
import MyData from "./assets/components/MyData";

function App() {
  return (
    <div className="">
      <p className="font-sans ml-8 font-bold" id="navhead">Portfolio</p>
      <Header />
      <main>
      <MyData/>
      </main>
    </div>
  );
}

export default App;
