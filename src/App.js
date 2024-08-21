
import { Home } from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/common/Header/Header.jsx"
import Footer from "./components/common/Footer/Footer.jsx"
import "./App.css"
import FlightBookingPage from "./pages/FlightBooking.jsx";
import PaymentPage from "./pages/paymentPage.jsx";


function App() {
  return (
    <div>
      
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/flightbooking" element={<FlightBookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      
     </Routes>
     

     
    </div>
  );
}

export default App;
