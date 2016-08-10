import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Container,
  Breadcrumb,
  Icon,
  Group,
} from 'amazeui-dingtalk';

const IconExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>

        <Group
          noPadded
          header="默认分隔符"
        >
          <Breadcrumb>
            <Breadcrumb.Item href="http://amazeui.org">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="http://amazeui.org/css">分类</Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>

        <Group
          noPadded
          header="slash 分隔符"
        >
          <Breadcrumb separator="slash">
            <Breadcrumb.Item href="http://amazeui.org">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="http://amazeui.org/css">分类</Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>

        <Group
          noPadded
          header="angle 分隔符"
        >
          <Breadcrumb separator="angle">
            <Breadcrumb.Item href="http://amazeui.org">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="http://amazeui.org/css">分类</Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>

        <Group
          noPadded
          header="结合图标使用"
        >
          <Breadcrumb>
            <Breadcrumb.Item href="http://amazeui.org">
              <Icon name="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="http://amazeui.org/css">分类</Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>

        <Group
          noPadded
          header="传递 Route"
        >
          <Breadcrumb>
            <Breadcrumb.Item
              linkComponent={Link}
              linkProps={{to: '/'}}
            >
              <Icon name="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkComponent={Link}
              linkProps={{to: '/icon'}}
            >
              Icon
            </Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>

        <Group
          noPadded
          header="嵌套 Route"
        >
          <Breadcrumb
            separator="angle"
          >
            <Breadcrumb.Item>
              <Link to="/">
                <Icon name="info" />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/icon">
                Icon
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>内容</Breadcrumb.Item>
          </Breadcrumb>
        </Group>
      </Container>
    );
  }
});

export default IconExample;
