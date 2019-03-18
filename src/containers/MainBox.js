import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    clicked:"profile"
  }

  handler= (e) => {
    console.log(e.target.id);
    const userClicked = e.target.id
    this.setState({
      clicked: userClicked
    })
  }

  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    let detailsToDisplay

    if(this.state.clicked === "profile"){
      detailsToDisplay= <Profile/>
    } else if(this.state.clicked === "photo"){
      detailsToDisplay= <Photos/>
    } else if(this.state.clicked === "cocktail"){
      detailsToDisplay= <Cocktails/>
    } else if(this.state.clicked === "pokemon"){
      detailsToDisplay= <Pokemon/>
    }

    // switch (this.state.clicked){
    //   case "profile":
    //     detailsToDisplay  = <Profile />
    //     break;
    //   case "photo":
    //     detailsToDisplay  = <Photos />
    //     break;
    //   case "cocktail":
    //     detailsToDisplay  = <Cocktails />
    //     break;
    //   case "pokemon":
    //     detailsToDisplay  = <Pokemon />
    //     break;
    //   default:
    //     detailsToDisplay = null
    //     break;
    // }

    return (
      <div>
        <MenuBar handler= {this.handler} selected={this.state.clicked}/>
        {detailsToDisplay}
      </div>
    )
  }
}

export default MainBox
