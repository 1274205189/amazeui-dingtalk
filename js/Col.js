import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_grid.scss';

const Col = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    cols: PropTypes.number,
    smCols: PropTypes.number,
    mdCols: PropTypes.number,
    lgCols: PropTypes.number,
    offset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    shrink: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'col',
      component: 'div'
    };
  },

  render() {
    let {
      component: Component,
      cols,
      offset,
      shrink,
      className,
      ...props,
    } = this.props;
    let classSet = this.getClassSet();

    delete props.classPrefix;

    if (cols) {
      classSet[this.prefixClass(cols)] = true;
    }

    if (offset) {
      classSet[this.prefixClass('offset-' + offset)] = true;
    }

    // responsive classNames
    ['sm', 'md', 'lg'].forEach((bp) => {
      let colsProp =  bp + 'Cols';
      let offsetProp = bp + 'Offset';
      let bpCols = props[colsProp];
      let bpOffset = props[offsetProp];

      if (bpCols) {
        classSet[this.prefixClass(`${bp}-${bpCols}`)] = true;
      }

      if (bpOffset) {
        classSet[this.prefixClass(`${bp}-offset-${bpOffset}`)] = true;
      }

      delete props[colsProp];
      delete props[offsetProp];
    });

    classSet[this.prefixClass('shrink')] = shrink;

    return (
      <Component
        {...props}
        className={cx(className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  }
});

export default Col;
