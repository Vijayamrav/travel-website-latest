
import { Home } from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css"
import FlightBookingPage from "./pages/FlightBooking.jsx";
import PaymentPage from "./pages/paymentPage.jsx";
import HotelBookingForm from "./pages/HoteBooking/HotelBookingForm.jsx";
import HotelPaymentPage from "./pages/HoteBooking/HotelPaymentPage.jsx";
import HotelConfirmationPage from "./pages/HoteBooking/HotelConfirmationPage.jsx";


function App() {
  return (
    <div>
      
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/flightbooking" element={<FlightBookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/hotel-booking-form" element={<HotelBookingForm/>}/>
      <Route path="/hotel-payment" element={<HotelPaymentPage/>}/>
      <Route path="/confirmation" element={<HotelConfirmationPage/>}/>
      
      
     </Routes>
     

     
    </div>
  );
}

export default App;
