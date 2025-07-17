import "./Expense_history.css";

export default function Expense_history({transactions,currency}){
    return(
        <>
        <div className="expense-history">
            <div className="expense-heading"><h1>Expense History</h1></div>
            &nbsp; 
            {transactions.length>0 && 
            transactions.map((el)=>(
                <>
                <div key={el.id} className="history">
                <div className="part1">
                    <h5>{el.category.toUpperCase()}</h5>
                    <h6>{el.date}</h6>
                </div>
                <div className="part2">
                    <h5 style={{color:"red"}}>-{currency}{el.amount}</h5>
                    <h6>{el.description.toUpperCase()}</h6>
                </div>
                </div>
                {transactions[transactions.length-1]!=el &&
                <hr style={{margin:"0px 1rem"}}></hr>}
                </>
            ))}
        </div>
        </>
    )
}