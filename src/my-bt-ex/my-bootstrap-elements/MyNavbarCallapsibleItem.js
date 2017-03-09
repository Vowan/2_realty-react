import React, {Component} from 'react';
import classNames from 'classnames';


class MyNavbarCallapsibleItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(e) {
        e.preventDefault();
        this.setState((prevState) => ({active: true}));
    }

    render() {

        var collapseClass = classNames({
            'active': this.state.active,
        });

        return (
                <li className={collapseClass}>
                    <a href="" onClick={this.onItemClick}>myLink 
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                )
    }
}

export default MyNavbarCallapsibleItem;


