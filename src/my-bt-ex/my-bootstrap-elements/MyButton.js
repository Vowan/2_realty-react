import React, {Component} from 'react';
import classNames from 'classnames';


class MyButton extends Component {

    constructor(props) {
        super(props);
        
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        console.log('button clicked');
    }

    render() {

        const {block, active, type} = this.props;
        //       console.log(this.props);
        var btnClass = classNames({
            'btn': true,
            'btn-block': (block === "true"),
            'active': (active === "true"),
            [`btn-${this.props.style}`]: true,
            [`btn-${this.props.size}`]: true,
        });



        return (
                <button type={type} className={btnClass} disabled={(active !== "true")} onClick={this.buttonClick}>{this.props.text}</button>
                )
    }
}

// Specifies the default values for props:
MyButton.defaultProps = {
    style: 'default',
    size: 'sm',
    text: 'button',
    block: false,
    active: true,
    type: 'button'
};

export default MyButton;

