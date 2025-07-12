import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';



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
        <h1>Kashflow</h1>
        <div className="description">
            <div>
                <h1>Hello {name}</h1>
                <h3>Montly budget : {currency}{budget}</h3>
                <h3>Remaining Balance : {currency}{balance}</h3>
            </div>
            <div>
                <Avatar src="/broken-image.jpg" />
            </div>
        </div>
        <div className="new-transaction">
            <h2>Add Transaction</h2>
            <form onSubmit={DataHandler}>
                <TextField 
                      id="outlined-basic" 
                      label="Amount" 
                      variant="outlined" 
                      type="Number"
                      helperText="*In the same selected currency"
                      value={transaction.amount}
                      onChange={changeHandler}
                      name="amount"/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Category" 
                      variant="outlined" 
                      type="text" 
                      value={transaction.category} 
                      onChange={changeHandler}
                      name="category"/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Date" 
                      variant="outlined" 
                      type="date" 
                      value={transaction.date} 
                      onChange={changeHandler}
                      name="date"/>
                <br></br><br></br>
                <TextField 
                      id="outlined-basic" 
                      label="Description" 
                      variant="outlined" 
                      type="text" 
                      value={transaction.description} 
                      onChange={changeHandler}
                      name="description"/>
                <br></br><br></br>
                <button>Add Transaction</button>
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