import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Currencypage from "./pages/CurrencyPage";
import Homepage from "./pages/HomePage";
import BMIpage from "./pages/BMIPage";
import Temperature from "./pages/TemperaturePage";

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/currency' element={<Currencypage/>}/>
        <Route path='/bmi' element={<BMIpage/>}/>
        <Route path='/temperature' element={<Temperature/>}/>
      </Routes>
    </Router>
  )
}

export default App;
