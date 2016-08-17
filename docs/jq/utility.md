# 辅助类 Utility

常用样式 class 封装。

## 布局相关

### `.root`

```css
.root {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
```

### float

- `.cf`: 清除浮动
- `.fl`: 向左浮动
- `.fr`: 向右浮动
- `.fn`: 不浮动

`````html
<div class="cf">
  <div class="fl">fl</div>
  <div class="fr">fr</div>
</div>
`````

### 边距

类名命名规则：

```css
.{type}[-(v|h|top|right|bottom|left)][-0|xs|sm|lg|xl]
```

- **`type`**：`margin` 或者 `padding`
- **`[-(v|h|top|right|bottom|left)]`**：可选的方式
  - 不加则为上右下左皆有，即 `padding: value;`/`margin: value;`
  - `v` 为垂直方向， `h` 为垂直方向
- **`[-0|xs|sm|lg|xl]`**：值修饰符
  - 不添加为 `0.9375rem` (`15px`)
  - `0`: 0
  - `xs`: 0.3125rem
  - `sm`: 0.625rem
  - `lg`: 1.25rem
  - `xl`: 2rem

**示例：**

- `margin`: 外边距为 `0.9375rem`
- `margin-v`: 垂直（上下）外边距为 `0.9375rem`
- `margin-v-xs`: 垂直外边距为 `0.3125rem`
- `padding-left-0`: 左内边距为 `0`

`````html
<style>
[data-spacing-demo] {
  border: 1px dashed royalblue;
}
</style>
<h2>margin</h2>
<div class="margin-0" data-spacing-demo>margin-0</div>
<div class="margin-xs" data-spacing-demo>margin-xs</div>
<div class="margin-sm" data-spacing-demo>margin-sm</div>
<div class="margin-lg" data-spacing-demo>margin-lg</div>
<div class="margin-xl" data-spacing-demo>margin-xl</div>

<h2>margin</h2>
<div class="padding-0" data-spacing-demo>padding-0</div>
<div class="padding-xs" data-spacing-demo>padding-xs</div>
<div class="padding-sm" data-spacing-demo>padding-sm</div>
<div class="padding-lg" data-spacing-demo>padding-lg</div>
<div class="padding-xl" data-spacing-demo>padding-xl</div>
`````


## 文本

### 单行文字截断

- `.text-truncate`: 需要添加 `block` 或 `inline-block` 样式。


`````html
<p class="text-truncate">无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
`````

### 文本对齐

- `.text-left`: 左对齐
- `.text-center`: 居中
- `.text-right`: 右对齐
- `.text-justify`: 两端对齐

`````html
<p class="text-left">左对齐</p>
<p class="text-center">居中</p>
<p class="text-right">右对齐</p>
<p class="text-justify" style="width: 100px">两端对齐</p>
`````

### 文本颜色

- `.text-primary`
- `.text-secondary`
- `.text-success`
- `.text-warning`
- `.text-alert`

`````html
<p class="text-primary">陌上花开，可缓缓归矣</p>
<p class="text-secondary">陌上花开，可缓缓归矣</p>
<p class="text-success">陌上花开，可缓缓归矣</p>
<p class="text-warning">陌上花开，可缓缓归矣</p>
<p class="text-alert">陌上花开，可缓缓归矣</p>
`````
