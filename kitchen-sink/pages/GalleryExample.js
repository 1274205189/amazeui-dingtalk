import React from 'react';
import {
  Container,
  Group,
  Gallery,
} from 'amazeui-dingtalk';

const data = [
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
    "title": "远方 有一个地方 那里种有我们的梦想",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
    "title": "某天 也许会相遇 相遇在这个好地方",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
    "title": "不要太担心 只因为我相信",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
    "title": "终会走过这条遥远的道路",
    "desc": "2375-09-26"
  }
];

const GalleryExample = React.createClass({
  renderItem() {
    return data.map((item, index) => {
      return (
        <Gallery.Item
          src={item.img}
          title={item.title}
          meta={item.desc}
          key={index}
        />
      );
    });
  },

  render() {
    return (
      <Container {...this.props}>
        <Group
          noPadded={true}
          header="默认"
        >
          <Gallery>
            {this.renderItem()}
          </Gallery>
        </Group>

        <Group
          noPadded={true}
          header="响应式"
        >
          <Gallery
            mdAvg={3}
            lgAvg={4}
          >
            {this.renderItem()}
          </Gallery>
        </Group>
      </Container>
    );
  }
});

export default GalleryExample;
