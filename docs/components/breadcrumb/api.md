# Breadcrumb

面包屑导航组件。

## 组件

### Breadcrumb

`<Breadcrumb>` 组件，面包屑导航容器。

#### Props

##### `component`

> PropType: `node`

组件使用的元素，默认为 `ol`。

##### `separator`

> PropType: `enum('slash', 'angle', 'chevron')`

导航分隔符，默认为 `chevron`。


### Breadcrumb.Item

`<Breadcrumb.Item>` 组件，面包屑子项。

##### `href`

> PropType: `string`

子项链接，如果设置 `href`，子元素将使用 `<a>` 包裹。

##### `target`

> PropType: `string`

链接打开方式，仅在设置 `href` 以后有效。

##### `linkComponent`

> PropType: `any`

渲染链接的组件，如可以传入 React Router `<Link>`。

也可以直接以子元素的形式嵌套：

```jsx
<Breadcrumb.Item>
  <Link to="/">
    <Icon name="info" />
  </Link>
</Breadcrumb.Item>
```

##### `linkProps`

> PropType: `object`

传递给 `linkComponent` 组件的属性。

## 示例
