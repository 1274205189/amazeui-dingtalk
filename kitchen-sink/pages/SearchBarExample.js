import React from 'react';
import {
  Container,
  Group,
  Icon,
  Badge,
  List,
  SearchBar,
} from 'amazeui-dingtalk';

const brands = [
  'Acura', 'Audi', 'BMW', 'Cadillac ', 'Chevrolet ', 'Chrysler ', 'Dodge ', 'Ferrari ', 'Ford ', 'GMC ', 'Honda', 'Hummer', 'Hyundai', 'Infiniti ', 'Isuzu ', 'Jaguar ', 'Jeep ', 'Kia', 'Lamborghini ', 'Land Rover', 'Lexus ', 'Lincoln ', 'Lotus ', 'Mazda', 'Mercedes-Benz', 'Mercury ', 'Mitsubishi', 'Nissan ', 'Oldsmobile ', 'Peugeot ', 'Pontiac ', 'Porsche', 'Regal', 'Saab ', 'Saturn ', 'Subaru ', 'Suzuki ', 'Toyota', 'Volkswagen', 'Volvo'
];

const SearchBarExample = React.createClass({
  getInitialState() {
    return {
      keyword: ''
    };
  },

  handleChange(e) {
    this.setState({
      keyword: e.target.value.trim(),
    });
  },

  handleReset() {
    this.setState(this.getInitialState())
  },

  renderList() {
    let keyword = this.state.keyword.toLowerCase();
    let matches = [];

    brands.forEach((brand, index) => {
      if (keyword === '' || brand.toLowerCase().indexOf(keyword) > -1) {
        matches.push(
          <List.Item
            title={brand}
            key={index}
          />
        );
      }
    });

    return (
      <List>
        {
          matches.length && matches || (
            <List.Item
              title="Nothing matched."
              key="no-matched"
              amStyle="alert"
            />
          )
        }
      </List>
    );
  },

  render() {
    let {
      className,
      ...props
    } = this.props;

    return (
      <Container
        {...this.props}
        className=""
      >
        <SearchBar
          placeholder="搜索"
          cancelText="取消"
          onChange={this.handleChange}
          onClear={this.handleReset}
          onReset={this.handleReset}
        />

        {this.renderList()}

        <br />
      </Container>
    );
  }
});
// test
export default SearchBarExample;
