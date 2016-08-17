# 表单 Form

表单相关元素。

## Switch

`````html
<label class="switch">
  <input type="checkbox">
  <span class="switch-label"></span>
</label>
`````

## Checkbox

`````html
<h3>单个 checkbox</h3>
<label class="checkbox">
  <input type="checkbox" name="checkbox-list-1">
  <span class="icon icon-check checkbox-icon"></span>
</label>


<h3>结合 label</h3>
<style>
  .cb-example {
    display: flex;
    border: 1px solid #ddd;
    border-width: 1px 0;
    background: #fff;
    align-items: center;
  }
  
  .cb-label {
    flex: 1;
  }
</style>
<label class="cb-example padding-sm">
  <div class="cb-label">Label Title</div>
  <div class="checkbox">
    <input type="checkbox" name="checkbox-list-1">
    <span class="icon icon-check checkbox-icon"></span>
  </div>
</label>
`````

## 表单元素演示

### 基本形式

`````html
<div class="group">
  <header class="group-header">基本样式</header>
  <div class="group-body">
    <label class="field-container">
      <span class="field-label">Your Name</span>
      <input type="text" placeholder="What's your name." class="field">
    </label>
    <label class="field-container">
      <span class="field-label">Password</span>
      <input type="password" placeholder="Your password." class="field">
    </label>
    <label class="field-container">
      <span class="field-label">Age</span>
      <input type="number" placeholder="Your age." class="field">
    </label>
    <label class="field-container">
      <span class="field-label">Select</span>
      <select type="select" class="field">
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
    </label>
    <label class="field-container">
      <span class="field-label">Commnet</span>
      <textarea placeholder="Say something you whant." type="textarea" class="field"></textarea>
    </label>
    
    <input type="submit" class="btn btn-secondary btn-block" value="提交">
  </div>
</div>
`````

### 表单集

`````html
<div class="group">
  <header class="group-header">Form Set</header>
  <div class="group-body">
    <div class="form-set">
      <input type="text" placeholder="Name." class="field">
      <input type="text" placeholder="Email." class="field">
      <input type="text" placeholder="Password." class="field">
    </div>
    <button class="btn btn-primary btn-block">提交</button>
  </div>
</div>
`````

### 输入框组

`````html
<div class="group">
  <header class="group-header">Field Group</header>
  <div class="group-body">
    <div class="field-group my-group">
      <span class="field-group-label">www.</span>
      <input type="text" placeholder="You domain." class="field">
      <span class="field-group-label">.com</span>
    </div>
    <div class="field-group">
      <span class="field-group-label">
        <span class="icon icon-person"></span>
      </span>
      <input type="text" placeholder="Your email." class="field">
      <button class="btn">Subscribe</button>
    </div>
    <div class="field-group">
      <span class="field-group-label">
        <span class="icon icon-search"></span>
      </span>
      <input type="text" placeholder="Keywords..." class="field">
      <button class="btn">Search</button>
    </div>
  </div>
</div>
`````

## 列表嵌套表单

### 纯表单

`````html
<div class="group group-no-padded">
  <header class="group-header">Fields List</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <div class="item-input"><input type="text" title="Username" placeholder="Username..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <div class="item-input"><input type="password" title="Password" placeholder="Password..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <div class="item-input"><input type="date" title="Birth date" placeholder="Birth date..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-select item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <div class="item-select">
              <select type="select" title="Select" class="field">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <li class="item item-nested-textarea item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <div class="item-textarea"><textarea type="textarea" title="TextArea" placeholder="TextArea..." class="field"></textarea></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`````

### 表单 + Label

`````html
<div class="group group-no-padded">
  <header class="group-header">With Label</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">Username</h3>
            <div class="item-input"><input type="text" title="Username" placeholder="Username..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">Password</h3>
            <div class="item-input"><input type="password" title="Password" placeholder="Password..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">Birth date</h3>
            <div class="item-input"><input type="date" title="Birth date" placeholder="Birth date..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-select item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">Select</h3>
            <div class="item-select">
              <select type="select" title="Select" class="field">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <li class="item item-nested-textarea item-nested-input">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">TextArea</h3>
            <div class="item-textarea"><textarea type="textarea" title="TextArea" placeholder="TextArea..." class="field"></textarea></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-switch">
        <div class="item-content">
          <div class="item-main">
            <h3 class="item-title">Switch</h3>
            <div class="item-switch"><label type="switch" class="switch"><input type="checkbox" ><span class="switch-label"></span></label></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`````

### 表单 + Icon

`````html
<div class="group group-no-padded">
  <header class="group-header">List with Icon</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-person"></span></div>
          <div class="item-main">
            <div class="item-input"><input type="text" title="Username" placeholder="Username..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-info"></span></div>
          <div class="item-main">
            <div class="item-input"><input type="password" title="Password" placeholder="Password..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-refresh"></span></div>
          <div class="item-main">
            <div class="item-input"><input type="date" title="Birth date" placeholder="Birth date..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-select item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-star"></span></div>
          <div class="item-main">
            <div class="item-select">
              <select type="select" title="Select" class="field">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <li class="item item-nested-textarea item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-list"></span></div>
          <div class="item-main">
            <div class="item-textarea"><textarea type="textarea" title="TextArea" placeholder="TextArea..." class="field"></textarea></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div class="group group-no-padded">
  <header class="group-header">List with Label &amp; Icon</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-person"></span></div>
          <div class="item-main">
            <h3 class="item-title">Username</h3>
            <div class="item-input"><input type="text" title="Username" placeholder="Username..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-info"></span></div>
          <div class="item-main">
            <h3 class="item-title">Password</h3>
            <div class="item-input"><input type="password" title="Password" placeholder="Password..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-refresh"></span></div>
          <div class="item-main">
            <h3 class="item-title">Birth date</h3>
            <div class="item-input"><input type="date" title="Birth date" placeholder="Birth date..." class="field"></div>
          </div>
        </div>
      </li>
      <li class="item item-nested-select item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-star"></span></div>
          <div class="item-main">
            <h3 class="item-title">Select</h3>
            <div class="item-select">
              <select type="select" title="Select" class="field">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <li class="item item-nested-textarea item-nested-input">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-list"></span></div>
          <div class="item-main">
            <h3 class="item-title">TextArea</h3>
            <div class="item-textarea"><textarea type="textarea" title="TextArea" placeholder="TextArea..." class="field"></textarea></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`````

### Checkbox 列表

`````html
<div class="group group-no-padded">
  <header class="group-header">Checkboxes</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-checkbox">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">iPhone 6</h3>
            <div class="checkbox item-checkbox"><input type="checkbox" name="checkbox-list-1" ><span class="icon icon-check checkbox-icon"></span></div>
          </div>
        </label>
      </li>
      <li class="item item-nested-checkbox">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">MacBook Pro Retina</h3>
            <div class="checkbox item-checkbox"><input type="checkbox" name="checkbox-list-1" ><span class="icon icon-check checkbox-icon"></span></div>
          </div>
        </label>
      </li>
      <li class="item item-nested-checkbox">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">iMac 5K</h3>
            <div class="checkbox item-checkbox"><input type="checkbox" name="checkbox-list-1" ><span class="icon icon-check checkbox-icon"></span></div>
          </div>
        </label>
      </li>
    </ul>
  </div>
  <footer class="group-footer">点击列表选择</footer>
</div>
`````

### Radio 列表

`````html
<div class="group group-no-padded">
  <header class="group-header">Radios</header>
  <div class="group-body">
    <ul class="list">
      <li class="item item-nested-radio">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">iPhone 6</h3>
            <div class="item-radio"><input type="radio" name="radio-list-1" ><span class="icon icon-check"></span></div>
          </div>
        </label>
      </li>
      <li class="item item-nested-radio">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">MacBook Pro Retina</h3>
            <div class="item-radio"><input type="radio" name="radio-list-1" ><span class="icon icon-check"></span></div>
          </div>
        </label>
      </li>
      <li class="item item-nested-radio">
        <label class="item-content">
          <div class="item-main">
            <h3 class="item-title">iMac 5K</h3>
            <div class="item-radio"><input type="radio" name="radio-list-1" ><span class="icon icon-check"></span></div>
          </div>
        </label>
      </li>
    </ul>
  </div>
  <footer class="group-footer">点击选择一项</footer>
</div>
`````
