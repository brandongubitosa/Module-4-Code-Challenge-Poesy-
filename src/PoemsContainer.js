import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {



  mapPoems = () => {
    return this.props.poems.map(poemObj => <Poem key={poemObj.id} poem={poemObj} favHandler={this.props.favPoemHandler}/>)
  }


  render(){
    
    return (
      <div className="poems-container">
        {this.mapPoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;