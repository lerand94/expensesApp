import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2012</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$297.68</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
