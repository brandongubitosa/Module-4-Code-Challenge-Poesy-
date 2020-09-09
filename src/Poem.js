import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = (e) => {
    this.setState({clicked: !this.state.clicked})
  }

  likeHandler = () => {
    this.props.favHandler(this.props.poem)
  }
  
  render(){
    let css = {color: "black"}
    if(this.state.clicked){
      css.color = "red"
    }else{
      css.color="black"
    }
    return (
      <div onClick={this.clickHandler} style={css} >
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
        <button onClick={this.likeHandler}>Like</button>
      </div>
    ); 
  }
}

export default Poem;
