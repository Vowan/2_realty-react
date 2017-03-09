import React, {Component} from 'react';


import MyNavbarCallapsibleItem from './MyNavbarCallapsibleItem';
import MyNavbarCallapsibleDropdownItem from './MyNavbarCallapsibleDropdownItem';


class MyNavbarCallapsibleBlock extends Component {
    

    
  render() {
      
            
    return (
    <ul className="nav navbar-nav">
        
        <MyNavbarCallapsibleItem />
        <MyNavbarCallapsibleItem />
        <MyNavbarCallapsibleDropdownItem />
        <MyNavbarCallapsibleDropdownItem />

      </ul>
    )
  }
}

export default MyNavbarCallapsibleBlock;