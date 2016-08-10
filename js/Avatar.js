import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import AvatarService from './utils/AvatarService';

import '../scss/components/_avatar.scss';

const defaultAvatar = 'https://img.alicdn.com/tps/TB1.IgIKpXXXXbgXpXXXXXXXXXX-116-116.png';

// DingTalk UI guide sizes
const sizes= [88, 70, 60, 50, 40, 36, 28, 24, 20];

const Avatar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    name: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },

  getDefaultProps() {
    return {
      classPrefix: 'avatar',
      component: 'div',
      size: 40,
    };
  },

  renderImage(src) {
    return <img src={src} alt="User avatar" />
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      name,
      src,
      style,
      size,
      defaultSrc,
      ...props
    } = this.props;
    let children = this.renderImage(defaultSrc || defaultAvatar);
    let backgroundColor = null;
    let sizeStyle;

    delete props.classPrefix;

    Component = props.href ? 'a' : Component;

    // avatar-[size]
    classSet[this.prefixClass(size)] = size;

    if (sizes.indexOf(Number(size)) === -1) {
      sizeStyle = {
        width: size + 'px',
        height: size + 'px',
        lineHeight: size + 'px',
        fontSize: Math.floor(Number(size) / 3),
      }
    }

    if (src) {
      children = this.renderImage(src);
    } else if (name) {
      let {
        color,
        name: newName,
      } = AvatarService.getAvatar(name);

      backgroundColor = color;
      children = newName;
    }

    return (
      <Component
        {...props}
        style={Object.assign({backgroundColor}, sizeStyle, style)}
        className={cx(classSet, className)}
      >
        {children}
      </Component>
    );
  }
});

export default Avatar;
