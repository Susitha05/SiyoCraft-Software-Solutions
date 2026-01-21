import { Routes, Route } from "react-router-dom";
import Landpage from './landingPage'
import NavBar from './assets/header'
import './index.css'

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Landpage/>}/>
      </Routes>
      
    </>
  );
}
export default App
