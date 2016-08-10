import React from 'react';
import {
  Container,
  Grid,
  Col,
  Icon,
  Group,
  Avatar,
} from 'amazeui-dingtalk';

const sizes = [88, 70, 60, 50, 36, 28, 24, 20];

const AvatarExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="默认尺寸"
        >
          <Avatar />
          <Avatar name="纯天然" />
          <Avatar name="Bill Gates" />
          <Avatar name="BMW" />
          <Avatar name="M Benz" />
          <Avatar name="X Men" />
          <Avatar name="XYZ" />
        </Group>

        <Group
          header="size 88"
        >
          <Avatar name="Bill Gates" size="88" />
          <Avatar name="Hello World" size="88" />
          <Avatar name="小龙女" size="88" />
          <Avatar name="孔明" size="88" />
          <Avatar name="ABC" size="88" />
          <Avatar name="钉钉" size="88" />
          <Avatar name="Ding Talk" size="88" />
        </Group>

        <Group
          header="size 64"
        >
          <Avatar name="Bill Gates" size="64" />
          <Avatar name="Hello World" size="64" />
          <Avatar name="蔓珠莎华" size="64" />
          <Avatar name="逗号" size="64" />
          <Avatar name="ABC" size="64" />
          <Avatar name="钉钉" size="64" />
          <Avatar name="Ding Talk" size="64" />
        </Group>

        <Group
          header="钉钉 UI 规范尺寸"
        >
          {sizes.map((size, index) => {
            return <Avatar name="Ding Talk" size={size} key={index} />
          })}
        </Group>

        <Group
          header="Chrome 最小字号设置"
        >
          <dl>
            <dt>Google chrome can't set font-size less than 12px?</dt>
            <dd>The limit can be changed in Chrome's <code>preference</code> -> <code>custom fonts style</code>.</dd>
          </dl>
        </Group>
      </Container>
    );
  }
});

export default AvatarExample;
