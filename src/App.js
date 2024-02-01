import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Currencypage from "./pages/CurrencyPage";
import Homepage from "./pages/HomePage";
import BMIpage from "./pages/BMIPage";
import Temperature from "./pages/TemperaturePage";
import DiscountPage from "./pages/DiscountPage";
import InterestPage from "./pages/Interest";


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/currency' element={<Currencypage/>}/>
        <Route path='/bmi' element={<BMIpage/>}/>
        <Route path='/temperature' element={<Temperature/>}/>
        <Route path='/discount' element={<DiscountPage/>}/>
        <Route path='/bank' element={<InterestPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
