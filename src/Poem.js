import React from 'react';

class Poem extends React.Component {
  
  render(){
    return (
      <div style={{color: "black"}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
