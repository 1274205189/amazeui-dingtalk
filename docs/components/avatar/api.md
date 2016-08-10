# Avatar

头像组件，根据名字和头像地址生成头像。

## 组件

### Avatar

`<Avatar>` 组件。

#### Props

##### `component`

> PropType: `node`

组件使用的元素，默认为 `div`。

##### `name`

> PropType: `string`

用户名称。未设置头像地址时根据用户名称通过[内置算法](https://github.com/noonnightstorm/dd-avatar)生成头像。

##### `src`

> PropType: `string`

头像图片地址。

##### `href`

> PropType: `string`

如果设置 `href` 属性将忽略 `component` 属性，渲染为 `<a>`。

##### `size`

> PropType: `number|string`

头像大小（`px`）。

## 示例
