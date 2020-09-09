import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    username: "",
    display: false
  }


  submitHandler = (userObj) => {
    this.setState({username: userObj.username})
    if(userObj.username !== ""){
      this.setState({
        display: true
      })
    }
  }  

  logoutHandler = (userObj) => {
    this.setState({username: "", display: false})
  } 
  


  render(){
    return (
      <div className="app">
        <div className="sidebar">
       
        { this.state.display
            ?
            <UserHeader username={this.state.username} logout={this.logoutHandler}/>
            :
            <LoginForm submitHandler={this.submitHandler} />
        }

          <NewPoemForm />
        </div>
        <PoemsContainer/>
      </div>
    ); 
  }
}

export default App;
