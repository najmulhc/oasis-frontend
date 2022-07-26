import "./App.css";
import LeftImg from "./Components/LeftImg";
import {Routes, Route} from "react-router-dom"
import AuthHome from "./Components/AuthHome";
import AccountBasic from "./Components/AccountBasic";
import AccountDetails from "./Components/AccountDetails";
function App() {
  return (
    <main className="App min-h-screen min-w-screen  flex justify-center items-center bg-[#1565D8]  bg-opacity-40">
      <div className="w-[1080px] ">
      <section className="w-full min-h-[640px] grid grid-cols-2 shadow-xl">
        <LeftImg /> 
          <div className="w-full h-full bg-white">
            <Routes>
              <Route path="/" element={<AuthHome />} />
              <Route path="/basic" element={<AccountBasic />} />
              <Route path="/details" element={<AccountDetails /> } />
            </Routes>
          </div>
      </section>
    </div>
    </main>
  );
}

export default App;
