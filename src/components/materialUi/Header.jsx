import React from 'react'
import {AppBar} from 'material-ui'
import DrawerView from './DrawerView.jsx'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMenu(){

  }

  render() {
    return (
      <div>
        <DrawerView />
        <AppBar
          title="Chat React"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleMenu}
        />
      </div>
    )
  }
};
