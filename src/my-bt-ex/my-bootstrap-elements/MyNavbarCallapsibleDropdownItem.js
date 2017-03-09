import React, {Component} from 'react';
import classNames from 'classnames';


class MyNavbarCallapsibleDropdownItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            dropdown:false
        };
        this.dropdownClick = this.dropdownClick.bind(this);
    }
    
    dropdownClick(e) {
    //   console.log('button clicked');
        e.preventDefault();
        this.setState((prevState) => ({dropdown: !prevState.dropdown}));      
    }
    
  render() {
      
       var dropdownClass = classNames({
            'dropdown': true,
            'open': this.state.dropdown,           
        });
        
    return (
        <li className={dropdownClass}>
          <a href="#" className="dropdown-toggle" onClick={this.dropdownClick} role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
    )
  }
}

export default MyNavbarCallapsibleDropdownItem;

