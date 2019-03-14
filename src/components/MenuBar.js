import React from 'react'

const MenuBar = (props) => {


  const handleEvent = (event) => {
    props.onHandleClick(event, event.target.id)
  }

  return (
    <div className="ui four item menu">
      <a onClick={ handleEvent  } className={(props.selected === 'profile') ? 'item active' : 'item'} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={ handleEvent } className={(props.selected === 'photo') ? 'item active' : 'item'} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={ handleEvent } className={(props.selected === 'cocktail') ? 'item active' : 'item'} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={ handleEvent } className={(props.selected === 'pokemon') ? 'item active' : 'item'} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
