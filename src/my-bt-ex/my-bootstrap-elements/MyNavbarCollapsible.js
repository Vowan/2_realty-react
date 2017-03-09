import React, {Component} from 'react';

import MyNavbarCallapsibleBlock from './MyNavbarCallapsibleBlock';


class MyNavbarCollapsible extends Component {
  render() {
    const {collapseClass} = this.props;  
    return (
    <div className={collapseClass}>

        <MyNavbarCallapsibleBlock />
    
    </div>
    )
  }
}

export default MyNavbarCollapsible;

