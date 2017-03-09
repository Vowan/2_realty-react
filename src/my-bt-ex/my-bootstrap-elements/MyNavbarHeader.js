import React, {Component} from 'react';


class MyNavbarHeader extends Component {
    
     constructor(props) {
        super(props);
        this.collapseClick = this.collapseClick.bind(this);
    }

    collapseClick() {
        const {onClick} = this.props;
        onClick();
    }
    
  render() {
    return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" onClick={this.collapseClick} aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>
    )
  }
}

export default MyNavbarHeader;
