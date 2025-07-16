import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import NavBar from "./navBar.jsx";
import "./BUdget.css";

export default function Budget(){
    const name=localStorage.getItem("name");
    const budget=localStorage.getItem("budget");
    const currency=localStorage.getItem("currency");
    let [balance,setBalance]=useState(Number(budget));
    let [transaction,setTransaction]=useState({category:"",date:"",amount:"",description:"",id:uuidv4()})
    let [transactions,setTransactions]=useState([]);



    function changeHandler(event){
        setTransaction((data)=>{
            return{
                ...data,[event.target.name]:event.target.value,
            }
        })
    }

    function DataHandler(event){
        event.preventDefault();
        const newTransaction={...transaction,id:uuidv4()};
        setTransactions((data)=>{
            return [...data,newTransaction];
        })
        console.log()
        setBalance((money)=>{
            return money-Number(transaction.amount);
        });

        setTransaction({category:"",date:"",amount:"",description:""})
    }


    return(
        <>
        <NavBar/>
        <div className="description">
            <div style={{width:"550px"}}>
                <h1>Hello {name.toUpperCase()}</h1>
                <h4>Welcome to the <b>Kashflow</b> family! Join us on your journey to financial well-being.</h4>
                <p></p>
            </div>
            <div>
                <h2>Montly budget</h2>
                <h5>{currency}{budget}</h5>
            </div>
            <div>
                <h2>Remaining Balance </h2>
                <h5>{currency}{balance}</h5>
            </div>
        </div>
        <div className="new-transaction">
            <h2>Add New Transaction</h2>
            <br></br>
            <form onSubmit={DataHandler}>
                <TextField 
                      id="outlined-basic" 
                      label="Category" 
                      variant="outlined" 
                      type="text" 
                      value={transaction.category} 
                      onChange={changeHandler}
                      name="category"
                      className="input"/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Date" 
                      variant="outlined" 
                      type="date" 
                      multiline={false}
                      value={transaction.date} 
                      onChange={changeHandler}
                      name="date"
                      className="input"
                      InputLabelProps={{
                        className: "DatePicker",
                        style: { color: "#ffff" },
                        shrink: true,
                       }}/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Description" 
                      variant="outlined" 
                      type="text" 
                      value={transaction.description} 
                      onChange={changeHandler}
                      name="description"
                      className="input"/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Amount" 
                      variant="outlined" 
                      type="Number"
                      helperText="*In the same selected currency"
                      value={transaction.amount}
                      onChange={changeHandler}
                      name="amount"
                      className="input"
                      sx={{
                 '& .MuiFormHelperText-root': {
          color: 'lightBlue',
        },
      }}/>
                <br></br><br></br>
                <button className="input">Add Transaction</button>
            </form>
        </div>
        <br></br>
        <div className="expense-history">
            {transactions.length>0 &&
            transactions.map((el)=>(
                <div key={el.id}>
                <p>category-{el.category}</p>
                <p>Amount-{currency}{el.amount}</p>
                <p>date-{el.date}</p>
                <p>Description-{el.description}</p>
                </div>
            ))}
        </div>

        </>
    )
}