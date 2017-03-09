import React, {Component} from 'react';

import Anchor from '../MyAnchor';
import MyButton from '../my-bootstrap-elements/MyButton';

class MyButtonSection extends Component {
    render() {
        return (
                <div className="bs-docs-section">
                    <h1 className="page-header">
                        <Anchor id="buttons">Buttons</Anchor> <small>myButton</small>
                    </h1>
                    <MyButton style="primary" size="xs" block="false" active="true"/>
                </div>
                )
    }
}

export default MyButtonSection;


