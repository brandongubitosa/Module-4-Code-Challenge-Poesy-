import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }


  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.submitHandler}>
          <input placeholder="Enter a username..." value={this.state.username} name="username" onChange={this.changeHandler}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;