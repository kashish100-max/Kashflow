import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User_data from "./Components/user_data.jsx";
import Budget from "./Components/Budget.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/home-page" element={<Budget />} />
           <Route path="/" element={<User_data />} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
