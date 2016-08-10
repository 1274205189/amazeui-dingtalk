import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Icon from './Icon';
import Field from './Field';
import Switch from './Switch';

import '../scss/components/_list.scss';

const nestedFields = ['input', 'radio', 'checkbox', 'switch', 'select', 'textarea'];

const List = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    inset: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'list',
    };
  },

  render() {
    let classSet = this.getClassSet();
    const {
      className,
      inset,
      ...props
    } = this.props;

    delete props.classPrefix;

    classSet[this.prefixClass('inset')] = inset;

    // TODO: 使用 ul 可能不是太好的选择，在一些需要定义 component 的场合缺乏灵活性
    return (
      <ul
        {...props}
        className={cx(classSet, className)}
      >
      </ul>
    );
  }
});

const ListItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    role: PropTypes.oneOf(['header', 'item']),
    title: PropTypes.node,
    subTitle: PropTypes.node,
    href: PropTypes.string,
    linked: PropTypes.bool, // linked flag for custom href like route Link
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object,
    media: PropTypes.node,
    after: PropTypes.node,
    desc: PropTypes.node,
    nested: PropTypes.oneOf(nestedFields), // nested field
    nestedProps: PropTypes.object,
    amStyle: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'item',
      role: 'item'
    };
  },

  getContentClassName() {
    return this.prefixClass('content');
  },

  isNestedField() {
    const nested = this.props.nested;

    return nestedFields.indexOf(nested) > -1 ? nested : false;
  },

  renderField() {
    const nested = this.isNestedField();
    const {
      nestedProps,
    } = this.props;
    let field = null;

    if (nested) {
      let Component = nested === 'switch' ? Switch : Field;

      field = (
        <div
          className={this.prefixClass(nested)}
        >
          <Component
            type={nested}
            {...nestedProps}
          />
          {(nested === 'radio' || nested === 'checkbox') && <Icon name='check' />}
        </div>
      );
    }

    return field;
  },

  renderTitleRow() {
    let {
      title,
      subTitle,
      href,
      linkComponent,
    } = this.props;

    let itemTitle = title ? (
      <h3
        key="itemTitle"
        className={this.prefixClass('title')}
      >
        {title}
      </h3>
    ) : null;

    let titleChildren = [
      itemTitle,
      this.renderAddon('after'),
      href || linkComponent ? (
        <Icon
          className={this.prefixClass('icon')}
          name="right-nav"
          key="itemChevron"
        />
      ) : null,
    ];

    return subTitle ? (
      <div
        className={this.prefixClass('title-row')}
        key="itemTitleRow"
      >
        {titleChildren}
      </div>
    ) : titleChildren;
  },

  renderMain() {
    return (
      <div
        key="itemMain"
        className={this.prefixClass('main')}
      >
        {this.renderTitleRow()}
        {this.renderAddon('subTitle')}
        {this.renderAddon('desc')}
        {this.renderField()}
        {this.props.children}
      </div>
    );
  },

  wrapLink(children) {
    let {
      linkComponent,
      linkProps,
      href,
      target,
    } = this.props;
    const contentClassName = this.getContentClassName();

    return linkComponent ?
      React.createElement(linkComponent, {
        ...linkProps,
        className: cx(
          contentClassName,
          linkProps && linkProps.className
        ),
      }, children) : (
      <a
        href={href}
        target={target}
        className={contentClassName}
      >
        {children}
      </a>);
  },

  wrapContent(children) {
    let {
      nested,
    } = this.props;
    let Component = nested === 'checkbox' || nested === 'radio' ? 'label' : 'div';

    return (
      <Component className={this.getContentClassName()}>
        {children}
      </Component>
    )
  },

  renderAddon(type) {
    return this.props[type] ? (
      <div
        key={'item-' + type}
        className={this.prefixClass(type.toLowerCase())}
      >
        {this.props[type]}
      </div>
    ) : null;
  },

  render() {
    let {
      className,
      role,
      subTitle,
      desc,
      href,
      media,
      children,
      linkComponent,
      linked,
      nested,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.title;
    delete props.after;
    delete props.linkProps;
    delete props.nestedProps;
    delete props.amStyle;

    let itemChildren = [
      this.renderAddon('media'),
      this.renderMain(),
    ];
    let classSet = this.getClassSet();

    classSet[this.prefixClass(`nested-${nested}`)] = nested;
    if (nested === 'select' || nested === 'textarea') {
      classSet[this.prefixClass(`nested-input`)] = true;
    }
    classSet[this.prefixClass('header')] = role === 'header';
    classSet[this.prefixClass('linked')] = href || linkComponent || linked;
    (subTitle || desc) && (classSet[this.prefixClass('mixed')] = true);

    return (
      <li
        {...props}
        className={cx(classSet, className)}
      >
        {role === 'header' ? children :
          (href || linkComponent) ? this.wrapLink(itemChildren) :
            this.wrapContent(itemChildren)}
      </li>
    );
  }
});

List.Item = ListItem;

export default List;

/**
 * TODO:
 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
 *   以便图文混排选择实现。
 */
