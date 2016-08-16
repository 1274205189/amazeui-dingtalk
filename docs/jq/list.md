# 列表 List

列表组件。

## 列表演示

### 静态列表

`````html
<div class="group group-no-padded">
  <header class="group-header">静态列表</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-header">A</li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
            <div class="item-after"><span class="badge badge-alert badge-rounded">5</span></div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
            <div class="item-after"><span class="badge badge-success badge-rounded">ok</span></div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after"><label class="switch"><input type="checkbox" value="on"><span class="switch-label"></span></label></div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 4</h3>
          </div>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="item item-header">B</li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
          </div>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="item item-header">C</li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after">After</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`````

### 包含链接的列表

`````html
<div class="group group-no-padded">
  <header class="group-header">包含链接的列表</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after">2015.08</div>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
`````

### 包含图标的列表

`````html
<div class="group group-no-padded">
  <header class="group-header">包含图标的列表</header>
  <div class="group-body">
    <ul class="list">
      <li class="item">
        <div class="item-content">
          <div class="item-media"><img width="32" src="http://lorempixel.com/128/128/people/"></div>
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
            <div class="item-after"><span class="badge badge-alert badge-rounded">5</span></div>
          </div>
        </div>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-media"><img width="32" src="http://lorempixel.com/128/128/people/"></div>
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
            <div class="item-after">2015.08</div>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-media"><img width="32" src="http://lorempixel.com/128/128/people/"></div>
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after"><span class="badge badge-alert badge-rounded">5</span></div>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
`````

### 含描述的文字列表

`````html
<div class="group group-no-padded">
  <header class="group-header">含描述的文字列表</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31308" target="_blank" class="item-content">
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">女爵</h3>
              <div class="item-after">2006-12</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：环球唱片</div>
            <div class="item-desc">
              她坦白了我们所虚伪的 她单纯了我们所复杂的
              五年以来…
              5年的等待，是个漫长也是耗损的过程。
              看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
              她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
              这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
              是我们唯一相信且期待杨乃文的理由。
            </div>
          </div>
        </a>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31312" target="_blank" class="item-content">
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">第一张精选</h3>
              <div class="item-after">2004-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：滚石唱片</div>
            <div class="item-desc">
              出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。
            </div>
          </div>
        </a>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31319" target="_blank" class="item-content">
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">Silence</h3>
              <div class="item-after">1999-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：魔岩唱片</div>
            <div class="item-desc">所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
`````

### 图文列表

`````html
<div class="group group-no-padded">
  <header class="group-header">图文列表</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-mixed">
        <div class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">女爵</h3>
              <div class="item-after">2006-12</div>
            </div>
            <div class="item-subtitle">发行公司：环球唱片</div>
          </div>
        </div>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31312" target="_blank" class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">第一张精选</h3>
              <div class="item-after">2004-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：滚石唱片</div>
          </div>
        </a>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31319" target="_blank" class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">Silence</h3>
              <div class="item-after">1999-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：魔岩唱片</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
`````

### 外边距

`````html
<ul class="list list-inset">
  <li class="item item-mixed">
    <div class="item-content">
      <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">女爵</h3>
          <div class="item-after">2006-12</div>
        </div>
        <div class="item-subtitle">发行公司：环球唱片</div>
      </div>
    </div>
  </li>
  <li class="item item-linked item-mixed">
    <a href="http://music.163.com/#/album?id=31312" target="_blank" class="item-content">
      <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">第一张精选</h3>
          <div class="item-after">2004-01</div>
          <span class="icon icon-right-nav item-icon"></span>
        </div>
        <div class="item-subtitle">发行公司：滚石唱片</div>
      </div>
    </a>
  </li>
  <li class="item item-linked item-mixed">
    <a href="http://music.163.com/#/album?id=31319" target="_blank" class="item-content">
      <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">Silence</h3>
          <div class="item-after">1999-01</div>
          <span class="icon icon-right-nav item-icon"></span>
        </div>
        <div class="item-subtitle">发行公司：魔岩唱片</div>
      </div>
    </a>
  </li>
</ul>
`````

### 图文混排

`````html
<ul class="list">
  <li class="item item-mixed">
    <div class="item-content">
      <div class="item-media"><img width="80" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">女爵</h3>
          <div class="item-after">2006-12</div>
        </div>
        <div class="item-subtitle">发行公司：环球唱片</div>
        <div class="item-desc">
          她坦白了我们所虚伪的 她单纯了我们所复杂的
          五年以来…
          5年的等待，是个漫长也是耗损的过程。
          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
          是我们唯一相信且期待杨乃文的理由。
        </div>
      </div>
    </div>
  </li>
  <li class="item item-linked item-mixed">
    <a href="http://music.163.com/#/album?id=31312" target="_blank" class="item-content">
      <div class="item-media"><img width="80" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">第一张精选</h3>
          <div class="item-after">2004-01</div>
          <span class="icon icon-right-nav item-icon"></span>
        </div>
        <div class="item-subtitle">发行公司：滚石唱片</div>
        <div class="item-desc">
          出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。
        </div>
      </div>
    </a>
  </li>
  <li class="item item-linked item-mixed">
    <a href="http://music.163.com/#/album?id=31319" target="_blank" class="item-content">
      <div class="item-media"><img width="80" src="http://lorempixel.com/160/160/people/"></div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">Silence</h3>
          <div class="item-after">1999-01</div>
          <span class="icon icon-right-nav item-icon"></span>
        </div>
        <div class="item-subtitle">发行公司：魔岩唱片</div>
        <div class="item-desc">所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量</div>
      </div>
    </a>
  </li>
</ul>
`````


## Card 嵌套

`````html
<div class="card">
  <div class="card-body">
    <ul class="list">
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
            <div class="item-after"><span class="badge badge-alert badge-rounded">5</span></div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
            <div class="item-after"><span class="badge badge-success badge-rounded">ok</span></div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after">After</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <ul class="list">
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 1</h3>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 2</h3>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
      <li class="item item-linked">
        <a href="#" class="item-content">
          <div class="item-main">
            <h3 class="item-title">List Item 3</h3>
            <div class="item-after">2015.08</div>
            <span class="icon icon-right-nav item-icon"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <ul class="list">
      <li class="item item-mixed">
        <div class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">女爵</h3>
              <div class="item-after">2006-12</div>
            </div>
            <div class="item-subtitle">发行公司：环球唱片</div>
          </div>
        </div>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31312" target="_blank" class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">第一张精选</h3>
              <div class="item-after">2004-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：滚石唱片</div>
          </div>
        </a>
      </li>
      <li class="item item-linked item-mixed">
        <a href="http://music.163.com/#/album?id=31319" target="_blank" class="item-content">
          <div class="item-media"><img width="48" src="http://lorempixel.com/160/160/people/"></div>
          <div class="item-main">
            <div class="item-title-row">
              <h3 class="item-title">Silence</h3>
              <div class="item-after">1999-01</div>
              <span class="icon icon-right-nav item-icon"></span>
            </div>
            <div class="item-subtitle">发行公司：魔岩唱片</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
`````


