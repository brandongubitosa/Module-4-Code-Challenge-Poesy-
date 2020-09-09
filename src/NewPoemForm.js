import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.poem(this.state)
    this.setState({
      title: "",
      content: ""
    })
  }



  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.submitHandler}>
          <input name="title" value={this.state.title}  onChange={this.changeHandler} placeholder="Name your masterpiece..." />
          <textarea name="content" value={this.state.content}  onChange={this.changeHandler} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;