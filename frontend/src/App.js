import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";

function App() {

  axios.interceptors.request.use(config => {
        config.headers['Origin'] = 'http://localhost:3001';
        return config;
      });
  return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Booking />} />
      <Route path="/MyBookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;