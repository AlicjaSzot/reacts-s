import './ExpenseItem.css';


  function ExpenseItem(props) {
    console.log(props);
    const month = props.date.toLocalString('en-US', { month: 'long' });
    const day = props.date.toLocalString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h2>Car Insurance</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }


export default ExpenseItem;