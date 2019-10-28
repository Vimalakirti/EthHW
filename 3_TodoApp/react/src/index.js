import React from 'react';
import ReactDOM from 'react-dom';
import getWeb3 from "./utils/getWeb3";

import TodoAppContract from "../../build/contracts/TodoApp.json"

import TodoHeader from './pages/TodoHeader';
import TodoForm from './pages/TodoForm';
import TodoList from './pages/TodoList';
import './index.css';

/* Reference: https://codepen.io/marekdano/pen/bVNYpq
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/

var todoItems = [];
  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems, web3: null, accounts: null, contract: null };
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TodoAppContract.networks[networkId];
      const instance = new web3.eth.Contract(
        TodoAppContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  /* YOUR CODE HERE*/
  /* An EXAMPLE FOR YOU */
  contractAddTodo = async (v) => {
    const { accounts, contract } = this.state;
    await contract.methods.addTodo(v).send({ from: accounts[0] });
  };

  
  

  /* END */

  addItem (todoItem) {
    //this.contractAddTodo(todoItem.newItemValue);
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp initItems={todoItems}/>,
  document.getElementById('root')
);