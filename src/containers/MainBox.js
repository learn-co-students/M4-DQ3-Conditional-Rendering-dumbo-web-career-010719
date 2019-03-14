import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    active: 'profile'
  }

  returnPage = (activeState) => {
    if(activeState === 'profile'){
      return Profile()
    } else if (activeState === 'photo') {
      return Photos()
    } else if (activeState === 'cocktail') {
      return Cocktails()
    } else if (activeState === 'pokemon') {
      return <Pokemon />
    }
  }


  clickHandler = (id) => {
    console.log('something')
    this.setState({
      active: id
    })

  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>{Profile()}</div>
    // console.log(Profile())
    return (
      <div>
        <MenuBar clickHandler={this.clickHandler}/>
        {this.returnPage(this.state.active)}
      </div>
    )
  }

}

export default MainBox
