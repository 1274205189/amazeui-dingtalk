# Grid
---

网格组件，Amaze UI DingTalk 默认提供了 **`12`** 列的网格系统。

考虑到应用嵌入钉钉桌面版的场景，增加了响应式支持，断点为：

| 关键词 | 媒体查询 | 区间 |
|-------| --- | --- |
| 无 | 无 | 始终应用 |
| `sm` | `@media only screen and (min-width: 35.5rem)` | `≥ 568px` |
| `md` | `@media screen and (min-width: 48rem)` | `≥ 768px` |
| `lg` | `@media screen and (min-width: 64em)`	| `≥ 1024px` |


为方便查看效果，添加了线框边距，实际使用时没有：

- `.g`: 虚线框
- `.col`: 灰色线框
- 演示容器 `div.ks-grid`: 仅作辅助演示用，实际使用时请删除

## 基本演示

### 基本网格

列分布在一行上。

`````html
<div class="ks-grid">
  <div class="g">
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
`````

### 指定列所占比例

在 `.col` 上通过 `col-{n}` 属性指定列所占比例（总数为 12）

`````html
<div class="ks-grid">
<div class="g">
  <div class="col col-4">cols: 4</div>
  <div class="col col-8">cols: 8</div>
</div>
</div>
`````

### 换行

在容器上添加 `.g-wrap`。

`````html
<div class="ks-grid">
  <div class="g g-wrap">
    <div class="col col-4">cols: 4</div>
    <div class="col col-8">cols: 8</div>
    <div class="col col-8">cols: 8</div>
    <div class="col col-4">cols: 4</div>
  </div>
</div>
`````

### 换行并反转顺序

在容器上添加 `.g-wrap-reverse`。

没有反转时的顺序为 8-4-7-5。

`````html
<div class="ks-grid">
  <div class="g g-wrap-reverse">
    <div class="col col-8">cols: 8</div>
    <div class="col col-4">cols: 4</div>
    <div class="col col-7">cols: 7</div>
    <div class="col col-5">cols: 5</div>
  </div>
</div>
`````

### 等分网格

超出等分数的将分布到下一行（上面的示例中为 4 等分）。

`````html
<div class="ks-grid">
  <div class="g g-avg-4">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
`````

### 收缩的列

`.col` 添加 `.col-shrink` 属性后自动收缩到内容所占宽。

`````html
<div class="ks-grid">
  <div class="g">
    <div class="col col-shrink">Shrink me</div>
    <div class="col">col</div>
  </div>
</div>
`````

### 列偏移

`````html
<div class="ks-grid">
  <div class="g">
    <div class="col col-3 col-offset-1">cols: 3, offset: 1</div>
  </div>
</div>
`````

## 网格嵌套

`````html
<div class="ks-grid">
  <div class="g">
    <div class="col">
      <div class="g">
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
    </div>
    <div class="col">
      <div class="g">
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
    </div>
  </div>
</div>
`````

## 不足 12 时对齐方式


### 默认：左对齐

`````html
<div class="ks-grid">
  <div class="g">
    <div class="col col-2">cols: 2</div>
    <div class="col col-2">cols: 2</div>
  </div>
</div>
`````

### 居中对齐

`````html
<div class="ks-grid">
  <div class="g g-center">
    <div class="col col-2">cols: 2</div>
    <div class="col col-2">cols: 2</div>
  </div>
</div>
`````

### 右对齐

`````html
<div class="ks-grid">
  <div class="g g-right">
    <div class="col col-2">cols: 2</div>
    <div class="col col-2">cols: 2</div>
  </div>
</div>
`````

### 左右分布

使用 `justify-content: space-between` 实现。

`````html
<div class="ks-grid">
  <div class="g g-between">
    <div class="col col-2">cols: 2</div>
    <div class="col col-2">cols: 2</div>
  </div>
</div>
`````

### 平均分布

`````html
<div class="ks-grid">
  <div class="g g-around">
    <div class="col col-2">cols: 2</div>
    <div class="col col-2">cols: 2</div>
  </div>
</div>
`````

## 网格边框

### `g-bordered`

在 `.g` 上添加 `.g-bordered`，`.g-avg-{n}` 可以实现九宫格效果。

`````html
<div class="g g-bordered g-avg-3 text-center">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
  <div class="col">4</div>
  <div class="col">5</div>
  <div class="col">6</div>
  <div class="col">7</div>
  <div class="col">8</div>
  <div class="col">9</div>
</div>
`````
