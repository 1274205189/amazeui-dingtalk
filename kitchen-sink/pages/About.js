import React from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  NavBar,
  Group,
} from 'amazeui-dingtalk';

const About = React.createClass({
  getDefaultProps() {
    return {
      year: new Date().getFullYear(),
    };
  },

  render() {
    let {
      year,
      ...props,
    } = this.props;
    return (
      <Container {...props}>
        <Group
          header="关于 Amaze UI DingTalk"
          footer={`ver ${__VERSION__}`}
        >
          <p>Amaze UI DingTalk 是为钉钉定制的 UI 组件库，当前版本基于 React.js。</p>
        </Group>
        <Group
          header="开发人员"
        >
          <ul>
            <li><a href="https://github.com/minwe" target="_blank">@minwe</a>
            </li>
          </ul>
        </Group>
        <Group
          header="鸣谢"
        >
          <p>感谢所有参与、关注 Amaze UI 的用户。</p>
        </Group>
        <Group
          header="版权"
        >
          <p>MIT © 2015 - {year} AllMobilize Inc.</p>
        </Group>
        <Group
          header="UA"
        >
          <p><code>{navigator.userAgent}</code></p>
        </Group>
      </Container>
    )
  }
});

export default About;
