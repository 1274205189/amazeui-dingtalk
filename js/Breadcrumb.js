import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_breadcrumb.scss';

const Breadcrumb = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    separator: PropTypes.oneOf(['slash', 'angle', 'chevron']),
  },

  getDefaultProps() {
    return {
      classPrefix: 'breadcrumb',
      component: 'ol',
      separator: 'chevron',
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      separator,
      ...props
    } = this.props;

    delete props.classPrefix;

    // separator modifier
    classSet[this.prefixClass(separator)] = true;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        {this.props.children}
      </Component>
    );
  }
});

const BreadcrumbItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    component: PropTypes.any,
    title: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    active: PropTypes.bool,
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object
  },

  getDefaultProps() {
    return {
      component: 'li',
      classPrefix: 'breadcrumb-item',
    };
  },

  renderAnchor(classNames) {
    let {
      component: Component,
      href,
      title,
      target,
      linkComponent,
      linkProps,
      children,
      ...props
    } = this.props;
    linkComponent = linkComponent || 'a';

    delete props.classPrefix;
    delete props.active;

    return (
      <Component
        {...props}
        className={classNames}
      >
        {
          React.createElement(
            linkComponent,
            Object.assign({
              href,
              title,
              target,
            }, linkProps),
            children
          )
        }
      </Component>
    );
  },

  render() {
    let {
      className,
      href,
      linkComponent,
      component: Component,
      children,
      ...props
    } = this.props;
    let classNames = cx(this.getClassSet(), className);

    delete props.classPrefix;
    delete props.active;

    if (href || linkComponent) {
      return this.renderAnchor(classNames);
    }

    return (
      <Component
        {...props}
        className={classNames}
      >
        {children}
      </Component>
    );
  }
});

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
