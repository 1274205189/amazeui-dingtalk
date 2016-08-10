import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Icon from './Icon';

import '../scss/components/_searchbar.scss';

const noop = () => {};

const SearchBar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    placeholder: PropTypes.string,
    cancelText: PropTypes.string,
    onChange: PropTypes.func,
    onReset: PropTypes.func,
    onClear: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'searchbar',
      component: 'form',
      cancelText: 'Cancel',
      placeholder: 'Search',
      onChange: noop,
      onClear: noop,
      onReset: noop,
    };
  },

  getInitialState() {
    return {
      active: false,
      value: '',
    };
  },

  handleFocus() {
    this.setState({active: true});
  },

  handleBlur() {
    if (!this.state.value) {
      this.setState({active: false});
    }
  },

  handleChange(e) {
    this.setState({value: e.target.value});

    this.props.onChange(e);
  },

  clearValue() {
    this.setState({value: ''}, () => {
      this.refs.keyword.focus();
    });

    this.props.onClear();
  },

  reset() {
    this.setState(this.getInitialState());
    this.props.onReset();
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      cancelText,
      placeholder,
      ...props
    } = this.props;
    let {
      value,
      active,
    } = this.state;

    delete props.classPrefix;
    delete props.onClear;
    delete props.onChange;
    delete props.onReset;

    classSet[this.prefixClass('active')] = active;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        <div className={this.prefixClass('input')}>
          <input
            ref="keyword"
            type="search"
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            value={value}
          />
          <Icon name={`search`} className={this.prefixClass('icon-search')} />
          <span className={this.prefixClass('placeholder')}>{placeholder}</span>
          <Icon
            name={`close`}
            className={cx(this.prefixClass('icon-clear'), value && 'has-value')}
            onClick={this.clearValue}
          />
        </div>
        <button
          type="reset"
          className={this.prefixClass('reset')}
          onClick={this.reset}
        >
          {cancelText}
        </button>
      </Component>
    );
  }
});

export default SearchBar;

var brands = Array.from(document.querySelectorAll('.item-title')).map(function(item) {
  return item.textContent;
});
