import React from 'react';
import {
  Group,
} from 'amazeui-dingtalk';

const NotFound = React.createClass({
  render() {
    return (
      <Group
        header="404"
      >
        <h2>Not found.</h2>
      </Group>
    );
  }
});

export default NotFound;
