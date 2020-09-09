import React from 'react'
import Poem from './Poem';



class FavPoem extends React.Component {

    mapPoems = () => {
        return this.props.favorite.map(poemObj => <Poem key={poemObj.id} poem={poemObj} favHandler={this.props.favPoemHandler}/>)
      }

    render() {
        return (
            <div>
                Favorite
                {this.mapPoems()}
            </div>
        )
    }
}

export default FavPoem
