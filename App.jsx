import React, {Component} from 'react';

// import './main.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [
        {'id':1,'name':'Yahir','age':'28'},
        {'id':2,'name':'Alejandra','age':'25'},
        {'id':3,'name':'Arturo','age':'21'},
      ]
    }
  }
  render(){
    return(
      <div>
        <Header/>
        <table>
          <tbody>
            {this.state.data.map((person,i)=><TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

class Header extends Component {
  render(){
    return(
      <div>
        <h1>Este es el Header</h1>
      </div>
    )
  }
}

class TableRow extends Component {
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }

}

export default App;
