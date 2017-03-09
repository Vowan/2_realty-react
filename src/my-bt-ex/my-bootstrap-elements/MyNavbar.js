import React, {Component} from 'react';
import classNames from 'classnames';

import MyNavbarHeader from './MyNavbarHeader';
import MyNavbarCollapsible from './MyNavbarCollapsible';

class MyNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
        };
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        // console.log('button clicked');
        this.setState((prevState) => ({collapse: !prevState.collapse}));
    }

    render() {

        var collapseClass = classNames({
            'collapse': this.state.collapse,
            'navbar-collapse': true,
        });


        return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                
                        <MyNavbarHeader onClick={this.buttonClick}/>
                
                        <MyNavbarCollapsible collapseClass={collapseClass} />
                    </div>
                </nav>
                )
    }
}


export default MyNavbar;



