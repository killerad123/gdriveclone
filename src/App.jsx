import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import "./App.css";
import MiddleBar from "./components/MiddleBar";

function App() {
  return (
    <div className="h-screen w-screen bg-white overflow-x-hidden flex flex-col">
      <div className="h-20 mb-2">
        <Navbar />
      </div>
      <div className="flex flex-grow">
        <Sidebar />
        <MiddleBar />
      </div>
    </div>
  );
}

export default App;
