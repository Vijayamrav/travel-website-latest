
import { Home } from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/common/Header/Header.jsx"
import Footer from "./components/common/Footer/Footer.jsx"
import "./App.css"


function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path="/"  element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
