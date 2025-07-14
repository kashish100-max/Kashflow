import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./user_data.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Images/logo_page.png";
import Wallet from "../Images/Wallet_side_img.png";

export default function User_data(){
    const navigate = useNavigate();
    let [data,setData]=useState({name:"",budget:"",currency:""});
    const currency=[
        {
    value: '$',
    label: '$',
  },
  {
    value: '₹',
    label: '₹',
  },
    ]

    function valueChange(event){
        setData((data)=>{
            return {
                ...data,[event.target.name]:event.target.value
            }
        })
    }

    function dataHandler(event){
        event.preventDefault();
        console.log(data);
        localStorage.setItem("name",data.name);
        localStorage.setItem("budget",data.budget);
        localStorage.setItem("currency",data.currency);
        setData({name:"",currency:"",budget:""});
        navigate('/home-page');
    }
    return(
      <div className="box">
        <div className="form_data">
        <form onSubmit={dataHandler}>
            <div className="head">
              <img src={logo}/>
              <h1>KashFlow</h1>
            </div>
            <br></br>
            <h2>Let's Build Your Financial Control Center </h2>
            <br></br><br></br>
            <p>Set up your account</p>
            <TextField 
                   name="name"
                   id="outlined-basic" 
                   label="Username" 
                   variant="outlined" 
                   type="text" 
                   className="input" 
                   value={data.name} 
                   onChange={valueChange}/>
            <br></br><br></br>
            <TextField
          id="outlined-select-currency"
          select
          label="Currency"
          defaultValue="Rupees"
          className="input"
          name="currency"
          value={data.currency}
          onChange={valueChange}
        >
          {currency.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br><br></br>
        <TextField id="outlined-basic" 
               label="Budget" 
               variant="outlined" 
               type="number"
               className="input"
               helperText="Add your monthly budget"
               name="budget"
               value={data.budget}
               onChange={valueChange}
        />
        <br></br><br></br>
        <button type="submit" className="input" >Submit</button>
        </form>
        </div>
        <div className="Side_Image">
        <img src={Wallet}></img>
        </div>
        </div>
    )
}