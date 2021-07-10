import React from 'react'


const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  let inactiveItem = 'item'


  const barClickHandler = (e) => {
    // debugger
    props.clickHandler(e.target.id)
    inactiveItem = 'item'
    //
    e.target.className = 'item active'
  }


  return (
    <div className="ui four item menu">

      <a className={inactiveItem} id="profile" onClick={barClickHandler}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={inactiveItem} id="photo" onClick={barClickHandler}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={inactiveItem} id="cocktail" onClick={barClickHandler}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={inactiveItem} id="pokemon" onClick={barClickHandler}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>

    </div>
  )

}

export default MenuBar
