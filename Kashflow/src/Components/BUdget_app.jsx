import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User_data from "./user_data.jsx";
import Budget from "./Budget.jsx";
import Feedback from "./Feedback.jsx";

export default function Budget_app() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/home-page" element={<Budget />} />
           <Route path="/" element={<User_data />} />
           <Route path="/feedback" element={<Feedback/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}