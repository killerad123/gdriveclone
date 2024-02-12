// import React from 'react'

import Sidebar from "./components/SideBar"
import "./App.css"
import MiddleBar from "./components/MiddleBar"
function App() {
  return (
    <div className="h-screen w-screen bg-white overflow-x-hidden">
      <div className="w-full h-20 bg-red-400 mb-2"></div>
      <div className="w-full">
      <Sidebar/>
      <MiddleBar/>
      </div>
    </div>
  )
}

export default App