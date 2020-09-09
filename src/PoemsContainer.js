import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  state = {
    poems: []
  }


  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(response => response.json())
    .then(poems => this.setState({poems: poems}))
  }

  mapPoems = () => {
    return this.state.poems.map(poemObj => <Poem key={poemObj.id} poem={poemObj}/>)
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