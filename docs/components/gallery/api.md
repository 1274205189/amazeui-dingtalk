# Gallery

图文混排组件。

## 组件

### Gallery

`<Gallery>` 组件，图文混排容器。

#### Props

##### `avg`

> PropType: `number`

列数，默认为 `2`。

##### `smAvg`

> PropType: `number`

##### `mdAvg`

> PropType: `number`

##### `lgAvg`

> PropType: `number`


### Gallery.Item

`<Gallery.Item>` 组件，图文条目。

##### `src`

> PropType: `string`

图片地址。

##### `title`

> PropType: `node`

标题。

##### `meta`

> PropType: `node`

元数据。

##### `href`

> PropType: `string`

子项链接，如果设置 `href`，子元素将使用 `<a>` 包裹。

##### `linkComponent`

> PropType: `any`

渲染链接的组件，如可以传入 React Router `<Link>`。

##### `linkProps`

> PropType: `object`

传递给 `linkComponent` 组件的属性。


## 示例
