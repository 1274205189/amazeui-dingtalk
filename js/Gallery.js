import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Grid from './Grid';
import Col from './Col';

import '../scss/components/_gallery.scss';

const Gallery = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    avg: PropTypes.number,
    smAvg: PropTypes.number,
    mdAvg: PropTypes.number,
    lgAvg: PropTypes.number,
  },

  getDefaultProps() {
    return {
      classPrefix: 'gallery',
      avg: 2,
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      className,
      children,
      ...props,
    } = this.props;

    delete props.classPrefix;

    return (
      <Grid
        {...props}
        className={cx(className, classSet)}
      >
        {children}
      </Grid>
    );
  }
});

const GalleryItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    src: PropTypes.string,
    title: PropTypes.node,
    meta: PropTypes.node,
    href: PropTypes.string,
    linkComponent: PropTypes.any,
    linkProps: PropTypes.object,
  },

  getDefaultProps() {
    return {
      classPrefix: 'gallery'
    };
  },

  renderImg(src) {
    const {
      title,
    } = this.props;

    return src ? <img src={src} alt={title} key="galleryImg" /> : null;
  },

  renderTitle(title) {
    return title ? (
      <h3
        className={this.prefixClass('title')}
        key="galleryTitle"
      >
        {title}
      </h3>
    ) : null;
  },

  renderMeta(meta) {
    return meta ? (
      <div
        className={this.prefixClass('meta')}
        key="galleryMeta"
      >
        {meta}
      </div>
    ) : null;
  },

  renderChildren(children) {
    return children ? (
      <div
        className={this.prefixClass('body')}
        key="galleryBody"
      >
        {children}
        </div>
    ) : null;
  },

  renderAnchor(children) {
    let {
      linkComponent,
      linkProps,
      href,
    } = this.props;

    let Component = linkComponent || (href ? 'a' : null);

    return Component ? (
      <Component
        href={href}
        {...linkProps}
      >
        {children}
      </Component>
    ) : children;
  },

  render() {
    let {
      className,
      meta,
      title,
      src,
      children,
      ...props
    } = this.props;
    const main = [
      this.renderImg(src),
      this.renderTitle(title),
      this.renderMeta(meta),
      this.renderMeta(children),
    ];

    delete props.classPrefix;
    delete props.href;
    delete props.linkComponent;
    delete props.linkProps;

    return (
      <Col
        {...props}
        className={cx(className, this.prefixClass('item'))}
      >
        {this.renderAnchor(main)}
      </Col>
    );
  }
});

Gallery.Item = GalleryItem;

export default Gallery;
