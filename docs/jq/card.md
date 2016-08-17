# 卡片 Card

卡片式内容组件。

## 卡片演示

### 只包含内容的卡片

`````html
<div class="card">
  <div class="card-header" role="card-header">
    <h2 class="card-title">Card 标题</h2>
  </div>
  <div class="card-body">这是卡片内容。</div>
</div>
`````

### 包含头部和底部

`````html
<div class="card">
  <div class="card-header" role="card-header">Card header</div>
  <div class="card-body">Card 内容</div>
  <div class="card-footer" role="card-footer">Card footer</div>
</div>
`````

### 自定义头部和底部

`````html
<div class="card">
  <div class="card-header card-cover" role="card-header" style="background-image: url(&quot;http://lorempixel.com/1000/625/people/&quot;);">
    <h3 class="card-title">Cover + 标题: 我思念的城市</h3>
  </div>
  <div class="card-body">
    风路过的时候  没能吹走 <br>这个城市太厚的灰尘 <br>多少次的雨水  从来没有 <br>冲掉你那沉重的忧伤 <br>你的忧伤  像我的绝望 <br>那样漫长
  </div>
</div>
<div class="card">
  <div class="card-header" role="card-header">
    <h2 class="card-title">Card 标题</h2>
  </div>
  <div class="card-body">
    <p>Card 内容</p>
  </div>
  <div class="card-footer" role="card-footer"><a href="javascript: void(0)">Like</a><a href="javascript: void(0)">Comment</a><a href="javascript: void(0)">ReadMore</a></div>
</div>
`````

