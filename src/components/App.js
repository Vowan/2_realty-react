import React, {Component} from 'react';

import NavMain from '../bt-ex-components/NavMain';

class App extends Component {
    render() {
        return (
                <div>
                    <NavMain activePage="home" />
                
                    {this.props.children}
                </div>
                )
    }
}

export default App;
