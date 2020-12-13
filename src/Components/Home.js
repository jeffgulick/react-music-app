import { Component } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    submit = (value) => {
        let username = value.username
        let password = value.password

        if(username && password){
            this.setState({loggedIn: true})
        }
    }
    render(){
      return(
        <div>
            {!this.state.loggedIn ?
                <Login logIn = {this.submit} /> :
                <Dashboard /> }
        </div>
      )
    }
  }
  