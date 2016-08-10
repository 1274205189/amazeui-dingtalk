import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_button.scss';

const Button = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    hollow: PropTypes.bool,
    // no horizontal borders, only working if `hollow` set
    noHb: PropTypes.bool,
    block: PropTypes.bool,
    radius: PropTypes.bool,
    rounded: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'btn',
    };
  },

  removeUnknownProp(props) {
    delete props.classPrefix;
    delete props.amStyle;
    delete props.amSize;
    delete props.hollow;
    delete props.block;
    delete props.active;
    delete props.radius;
    delete props.rounded;
    delete props.noHb;

    return props;
  },

  renderAnchor(classes) {
    let {
      href,
      component: Component,
      children,
      ...props
    } = this.props;
    Component = Component || 'a';

    href = href || '#';

    return (
      <Component
        {...this.removeUnknownProp(props)}
        href={href}
        className={classes}
        role="button"
      >
        {children}
      </Component>
    );
  },

  renderButton(classes) {
    let {
      component: Component,
      children,
      ...props,
    } = this.props;
    Component = Component || 'button';

    return (
      <Component
        {...this.removeUnknownProp(props)}
        className={classes}
      >
        {children}
      </Component>
    );
  },

  render() {
    let classSet = this.getClassSet();
    let {
      href,
      target,
      block,
      hollow,
      noHb,
      className,
    } = this.props;
    let renderType = href || target ? 'renderAnchor' : 'renderButton';

    // block button
    classSet[this.prefixClass('block')] = block;

    if (hollow && noHb) {
      classSet[this.prefixClass('no-hb')] = true;
    }

    return this[renderType](cx(classSet, className));
  }
});

export default Button;
