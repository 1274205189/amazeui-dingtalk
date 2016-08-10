import React from 'react';
import {
  Container,
  Group,
  NavBar,
  amStyles,
} from 'amazeui-dingtalk';

const clickHandler = (item, e) => {
  e.preventDefault();
  console.log(item);
};

const itemLeft = {
  href: '#',
  title: 'Left'
};

const itemRight = {
  href: '#',
  title: 'Right'
};

const dataAll = {
  title: 'Navbar',
  leftNav: [{...itemLeft, icon: 'left-nav'}],
  rightNav: [{...itemRight, icon: 'right-nav'}],
  onAction: clickHandler,
};

const dataLeft = {
  title: 'Navbar',
  leftNav: [{...itemLeft, icon: 'left-nav'}],
  onAction: clickHandler,
};

const dataRight = {
  title: 'Navbar',
  rightNav: [itemRight, itemRight],
  onAction: clickHandler,
};

const NavBarExample = React.createClass({
  renderStyles(style, index) {
    return (
      <div key={index}>
        <NavBar
          {...dataAll}
          amStyle={style.toLowerCase()}
        />
        <br />
      </div>
    );
  },

  render() {
    return (
      <Container {...this.props}>
        <Group
          header="注意"
        >
          <p>钉钉提供的原生导航栏，H5 版本仅作演示，不建议使用</p>
        </Group>
        <Group
          header="颜色样式"
        >
          <NavBar {...dataAll} />

          <br />

          {amStyles.map(this.renderStyles)}
        </Group>

        <Group
          header="图标"
        >
          <NavBar {...dataLeft} rightNav={[{icon: 'bars'}]} />
        </Group>

        <Group
          header="多链接"
        >
          <NavBar {...dataRight} />
        </Group>

        <Group
          header="标题居左"
        >
          <NavBar
            {...dataRight}
            title="Title on Left"
            titleOnLeft
          />
        </Group>
      </Container>
    );
  }
});

export default NavBarExample;
