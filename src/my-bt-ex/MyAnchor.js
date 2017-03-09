import React, {Component} from 'react';


class MyAnchor extends Component {
    render() {
        
        const{id} = this.props;
        
        return (
                <a id={this.props.id} href={'#' + this.props.id} className="anchor">
                    <span className="anchor-icon">#</span>
                    {this.props.children}
                </a>
                )
    }
}

export default MyAnchor;


