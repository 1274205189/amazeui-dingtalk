import React from 'react';
import {
  Container,
  Group,
  Button,
  ButtonGroup,
  Icon,
  Badge,
} from 'amazeui-dingtalk';

const ButtonExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>
        <Group
          header="默认样式"
        >
          <Button>Default</Button>
        </Group>

        <Group
          header="颜色样式"
        >
          <Button amStyle="primary">Primary</Button>
          <Button amStyle="secondary">Secondary</Button>
          <Button amStyle="success">Success</Button>
          <Button amStyle="warning">Warning</Button>
          <Button amStyle="alert">Alert</Button>
          <Button amStyle="dark">Dark</Button>
        </Group>

        <Group
          header="形状：圆角"
        >
          <Button radius>Default</Button>
          <Button amStyle="primary" radius>Primary</Button>
          <Button amStyle="secondary" radius>Secondary</Button>
          <Button amStyle="success" radius>Success</Button>
          <Button amStyle="warning" radius>Warning</Button>
          <Button amStyle="alert" radius>Alert</Button>
          <Button amStyle="dark" radius>Dark</Button>
        </Group>

        <Group
          header="形状：椭圆"
        >
          <Button rounded>Default</Button>
          <Button amStyle="primary" rounded>Primary</Button>
          <Button amStyle="secondary" rounded>Secondary</Button>
          <Button amStyle="success" rounded>Success</Button>
          <Button amStyle="warning" rounded>Warning</Button>
          <Button amStyle="alert" rounded>Alert</Button>
          <Button amStyle="dark" rounded>Dark</Button>
        </Group>

        <Group
          header="块级显示"
          noPadded
        >
          <Button block>Default Block</Button>
          <Button amStyle="primary" block>Primary Block</Button>
        </Group>

        <Group
          header="按钮大小"
        >
          <Button amSize="xs">Default xs</Button>
          <Button amSize="sm">Default sm</Button>
          <Button>Default</Button>
          <Button amSize="lg">Default lg</Button>
          <Button amSize="xl">Default xl</Button>
        </Group>

        <Group
          header="按钮状态"
        >
          <h4>disabled</h4>
          <Button amStyle="primary" disabled>Primary</Button>

          <h4>active</h4>
          <Button amStyle="primary" active>Primary</Button>
        </Group>

        <Group
          header="形状镂空"
        >
          <Button hollow>Default</Button>
          <Button hollow amStyle="primary">Primary</Button>
          <Button hollow amStyle="secondary">Secondary</Button>
          <Button hollow amStyle="success">Success</Button>
          <Button hollow amStyle="warning">Warning</Button>
          <Button hollow amStyle="alert">Alert</Button>
          <Button hollow amStyle="dark">Dark</Button>
        </Group>

        <Group
          header="形状镂空 + 椭圆"
        >
          <Button hollow rounded>Default</Button>
          <Button hollow rounded amStyle="primary">Primary</Button>
          <Button hollow rounded amStyle="secondary">Secondary</Button>
          <Button hollow rounded amStyle="success">Success</Button>
          <Button hollow rounded amStyle="warning">Warning</Button>
          <Button hollow rounded amStyle="alert">Alert</Button>
          <Button hollow rounded amStyle="dark">Dark</Button>
        </Group>

        <Group
          header="形状镂空 + 没有水平边框"
          noPadded
        >
          <Button hollow noHb block>Default</Button>
          <Button hollow noHb block amStyle="primary">Primary</Button>
          <Button hollow noHb block amStyle="secondary">Secondary</Button>
          <Button hollow noHb block amStyle="success">Success</Button>
          <Button hollow noHb block amStyle="warning">Warning</Button>
          <Button hollow noHb block amStyle="alert">Alert</Button>
          <Button hollow noHb block amStyle="dark">Dark</Button>
        </Group>

        <h2>Button Group</h2>

        <Group
          header="默认形状"
        >
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup amStyle="primary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup amStyle="alert">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group
          header="镂空按钮组"
        >
          <ButtonGroup amStyle="primary" hollow>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group
          header="按钮组大小"
        >
          <ButtonGroup amSize="xs">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group
          header="宽度自适应"
        >
          <ButtonGroup amStyle="primary" justify>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group
          header="垂直堆叠"
        >
          <ButtonGroup amStyle="primary" stacked>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group
          header="工具栏"
        >
          <div className="btn-toolbar">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </div>
        </Group>

        <h2>组合使用</h2>
        <Group
          header="与 Icon 组合"
        >
          <Button>
            <Icon name="left-nav" />
            Default
          </Button>
          <Button
            amStyle="primary"
          >
            Primary
            <Icon name="right-nav" />
          </Button>

          <Button
            amStyle="secondary"
          >
            Search
            <Icon name="search" />
          </Button>
        </Group>
      </Container>
    );
  }
});

export default ButtonExample;
