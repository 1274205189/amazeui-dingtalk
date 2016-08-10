# Grid

网格组件，Amaze UI DingTalk 默认提供了 **`12`** 列的网格系统。

考虑到应用嵌入钉钉桌面版的场景，增加了响应式支持，断点为：

| 关键词 | 媒体查询 | 区间 |
|-------| --- | --- |
| 无 | 无 | 始终应用 |
| `sm` | `@media only screen and (min-width: 35.5rem)` | `≥ 568px` |
| `md` | `@media screen and (min-width: 48rem)` | `≥ 768px` |
| `lg` | `@media screen and (min-width: 64em)`	| `≥ 1024px` |

## 组件

### Grid

`<Grid>` 组件，网格容器，行。

#### Props

##### `collapse`

> PropType: `bool`

是否移除列默认的内边距（`padding`）。

##### `wrap`

> PropType: `enum('wrap', 'wrap-reverse')`

网格容器 `flex-wrap` 属性，是否换行，默认为 `nowrap`。

##### `avg`

> PropType: `number`

平均分配单元格为 n 列。

响应式属性：

- `smAvg`：`sm` 区间均分列数
- `mdAvg`：`md` 区间均分列数
- `lgAvg`：`lg` 区间均分列数

##### `align`

> PropType: `enum('right', 'center', 'between', 'around')`

行中列宽度总和不足 6 时的对齐方式，不同值的含义参见 [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)。

##### `bordered`

> PropType: `bool`

网格是否显示边框，边框可用于制作九宫格效果。


### Col

`<Col>` 组件，网格中列，嵌套在 `<Grid>` 中。

#### Props

##### `cols`

> PropType: `number`

列宽所占的比例，`1-12` 的数字。

响应式属性：

- `smCols`：`sm` 区间所占比例
- `mdCols`：`md` 区间所占比例
- `lgCols`：`lg` 区间所占比例

##### `offset`

> PropType: `number`

列偏移（与左边元素的外边距）的数量。

响应式属性：

- `smOffset`：`sm` 区间偏移
- `mdOffset`：`md` 区间偏移
- `lgOffset`：`lg` 区间偏移

##### `shrink`

> PropType: `bool`

列是否自动收缩为内容宽度。

## 示例
