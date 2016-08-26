# Carousel

轮播组件。

## 组件

### Carousel

`<Carousel>` 组件，轮播容器。

#### Props

##### `controls`

> PropType: `bool`

是否显示「上、下翻页」按钮，默认为 `true`。

##### `pager`

> PropType: `bool`

是否显示「分页圆点」按钮，默认为 `true`。

##### `interval`

> PropType: `number`

轮播间隔时间，默认为 `5000`（ms）。

##### `autoPlay`

> PropType: `bool`

是否自动播放，默认为 `true`。

##### `loop`

> PropType: `bool`

是否循环播放，默认为 `true`。

##### `defaultActiveIndex`

> PropType: `number`

默认激活的幻灯片编号。

##### `onAction`

> PropType: `func`

幻灯片切换后的回调函数，接受两个参数 `(index, direction)`，`index` 为幻灯片编号，`direction` 为滚动方向。


### Carousel.Item

`<Carousel.Item>` 组件，轮播子项。

#### Props

##### `caption`

> PropType: `node`

幻灯片标题。

##### `thumbnail`

> PropType: `string`

幻灯片缩略图 URL，设置 `thumbnail` 以后，分页圆点将替换为缩略图。


## 示例

```javascript
import React from 'react';
import {
  Container,
  Group,
  Button,
  Carousel,
} from 'amazeui-dingtalk';

const onAction = function(index, direction) {
  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};

const carouselIntance = (
  <Carousel
    onAction={onAction}
  >
    <Carousel.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Carousel.Item>
    <Carousel.Item><img
      src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Carousel.Item>
    <Carousel.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></Carousel.Item>
    <Carousel.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></Carousel.Item>
  </Carousel>
);

const data = [
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
  }];

const data2 = [
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    desc: '这是标题标题标题标题标题标题标题0'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    desc: '这是标题标题标题标题标题标题标题1'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
    desc: '这是标题标题标题标题标题标题标题2'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
    desc: '这是标题标题标题标题标题标题标题3'
  }
];

const carouselCaption = (
  <Carousel>
    {data2.map(function(item, i) {
      return (
        <Carousel.Item
          key={i}
        >
          <img src={item.img} />
          <div className="carousel-caption">
            {item.desc}
          </div>
        </Carousel.Item>
      );
    })}
  </Carousel>
);


const carouselThumbs = (
  <Carousel
    controls={false}
  >
    {data.map(function(item, i) {
      return (
        <Carousel.Item
          key={i}
          thumbnail={item.thumb}
        >
          <img src={item.img} />
        </Carousel.Item>
      );
    })}
  </Carousel>
);

const SliderExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="默认"
          noPadded
        >
          {carouselIntance}
        </Group>

        <Group
          header="缩略图"
          noPadded
        >
          {carouselThumbs}
        </Group>

        <Group
          header="标题"
          noPadded
        >
          {carouselCaption}
        </Group>
      </Container>
    );
  }
});

export default SliderExample;

```
