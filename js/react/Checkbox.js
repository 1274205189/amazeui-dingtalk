import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Icon from './Icon';
import Field from './Field';

import '../../scss/components/_checkbox.scss';

const Checkbox = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    container: PropTypes.node.isRequired,
    containerClassName: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'checkbox',
      container: 'div'
    };
  },

  getChecked() {
    return this.refs.field.getChecked();
  },

  render() {
    let classSet = this.getClassSet();
    let {
      container: Container,
      containerClassName,
      ...props
    } = this.props;

    delete props.classPrefix;

    return (
      <Container
        className={cx(classSet, containerClassName)}
      >
        <Field
          {...props}
          type="checkbox"
          ref="field"
        />
        <Icon
          name="check"
          className={this.prefixClass('icon')}
        />
      </Container>
    );
  }
});

export default Checkbox;
