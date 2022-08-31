import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// class ExpenseItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: props.title, date: props.date };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentWillMount() {}
//   componentDidMount() {}

//   handleClick = () => {
//     this.setState((state) => ({
//       title: new Date().toLocaleString(),
//     }));
//   };

//   render = () => {
//     return (
//       <Card className="expense-item">
//         <ExpenseDate date={this.state.date} />
//         <div className="expense-item__description">
//           <h2>{this.state.title}</h2>
//           <div className="expense-item__price">${this.props.amount}</div>
//         </div>
//         <button onClick={this.handleClick}>Change title</button>
//       </Card>
//     );
//   };
// }

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const handleClick = () => {
    setTitle(title + "hi");
    setAmount(amount * 2);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
