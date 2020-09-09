import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'
import FavPoem from './FavPoem'

class App extends React.Component {

  state = {
    username: "",
    display: false,
    poems: [],
    favorite: []
  }

 


  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(response => response.json())
    .then(poems => this.setState({poems: poems}))
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

  newPoemForm = (poemObj) => {
    this.setState({poems: [...this.state.poems, poemObj]})
    this.postPoem(poemObj)
  }

  postPoem = (poemObj) => {
    fetch("http://localhost:3000/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poemObj)
    })
  }

  favPoemHandler = (favPoemObj) => {
    this.setState({favorite: [...this.state.favorite, favPoemObj]})
  }
  


  render(){
    return (
      <div className="app">
        <div className="sidebar">
       
        { this.state.display
            ?
            <>
            <UserHeader username={this.state.username} logout={this.logoutHandler}/>
            <NewPoemForm poem={this.newPoemForm}/>
            <FavPoem favorite={this.state.favorite}/>
            </>
            :
            <LoginForm submitHandler={this.submitHandler} />
        }

          
        </div>
        <PoemsContainer poems={this.state.poems} favPoemHandler={this.favPoemHandler}/>
        
      </div>
    ); 
  }
}

export default App;
