import React, { cloneElement } from 'react';
import classNames from 'classnames';

import Nav from 'react-bootstrap';
import SafeAnchor from 'react-bootstrap';
import ValidComponentChildren from 'react-bootstrap';
import createChainedFunction from 'react-bootstrap';

const propTypes = {
  onSelect: React.PropTypes.func,
  active: React.PropTypes.bool,
  activeKey: React.PropTypes.any,
  activeHref: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  eventKey: React.PropTypes.any,
  href: React.PropTypes.string,
  text: React.PropTypes.node,
};

const defaultProps = {
  active: false,
  disabled: false,
};

class SubNav extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onSelect, disabled, eventKey } = this.props;

    if (onSelect) {
      e.preventDefault();

      if (disabled) {
        return;
      }

      onSelect(eventKey, e);
    }
  }

  isActive({ props }, activeKey, activeHref) {
    if (
      props.active ||
      activeKey != null && props.eventKey === activeKey ||
      activeHref && props.href === activeHref
    ) {
      return true;
    }

    if (ValidComponentChildren.some(props.children, (child) => (
      this.isActive(child, activeKey, activeHref)
    ))) {
      return true;
    }

    return props.active;
  }

  render() {
    const {
      onSelect,
      disabled,
      activeKey,
      activeHref,
      text,
      className,
      style,
      children,
      ...props
    } = this.props;

    delete props.active; // Accessed via this.isActive().
    delete props.eventKey; // Accessed via this.isActive().

    const classes = {
      active: this.isActive(this, activeKey, activeHref),
      disabled,
    };

    return (
      <li className={classNames(className, classes)} style={style}>
        <SafeAnchor {...props}>
          {text}
        </SafeAnchor>

        <Nav>
          {ValidComponentChildren.map(children, child => (
            cloneElement(child, {
              active: this.isActive(child, activeKey, activeHref),
              onSelect: createChainedFunction(child.props.onSelect, onSelect),
            })
          ))}
        </Nav>
      </li>
    );
  }
}

SubNav.propTypes = propTypes;
SubNav.defaultProps = defaultProps;

export default SubNav;