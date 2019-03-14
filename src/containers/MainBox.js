import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

state = {
  active: 'profile'
}

onHandleClick = (event, id) => {
  this.setState({
    active: id
  })
}

  render() {
    let detailsToDisplay;

    switch (this.state.active) {
      case 'profile':
        detailsToDisplay = <Profile />
        break;
      case 'photo':
        detailsToDisplay = <Photos />
        break;
      case 'cocktail':
        detailsToDisplay = <Cocktails />
        break;
      case 'pokemon':
        detailsToDisplay = <Pokemon />
        break;
      default:
        detailsToDisplay = null
      }

      console.log(detailsToDisplay);
    return (
      <div>
        <MenuBar onHandleClick={this.onHandleClick} selected={this.state.active}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
