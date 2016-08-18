import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
} from 'react-router';

import {
  Container,
  List,
  NavBar,
  Group,
  View,
} from 'amazeui-dingtalk';

let pages = [
  // 'Accordion',
  'Button',
  'Badge',
  'Form',
  'Grid',
  'Icon',
  // 'Loader',
  // 'Modal',
  'Notification',
  // 'OffCanvas',
  // 'Popover',
  'Avatar',
  'Breadcrumb',
  'Card',
  'Carousel',
  'Gallery',
  'List',
  'NavBar',
  'SearchBar',
  'TabBar',
  'Tabs',
  'Typography',
];

const Default = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr'
    };
  },

  render() {
    let items = pages.sort().map((item, i) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.toLowerCase()}`}}
          title={item}
          key={i}
        />
      );
    });

    return (
      <View id="app-index">
        <NavBar
          amStyle="primary"
          title="钉钉UI"
        />
        <Container scrollable>
          <Group
            
            noPadded
          >
            <List>
              {items}
            </List>
          </Group>
        </Container>
      </View>
    )
  }
});

export default Default;
