import React from 'react';
import {
  Link,
} from 'react-router';
import Container from '../../js/Container';
import Field from '../../js/Field';
import {
  QRCode,
} from '../utils';

const Index = React.createClass({
  componentDidMount() {
    const {
      host,
      } = global.location;
    this._qrcode = new QRCode(this.refs.qrcode, {
      text: `http://${host}/kitchen-sink/`,
      width: 80,
      height: 80,
    });
  },

  render() {
    const year = new Date().getFullYear();

    return (
      <Container scrollable>
        <div className="amt-banner">
          <div className="am-container">
            <div className="amt-sk">
              <iframe
                src="kitchen-sink"
                frameBorder="0"
                scrolling="no"></iframe>
            </div>

            <div className="amt-intro">
              <h1>Amaze UI for 钉钉 移动版</h1>
              <span className="am-badge am-badge-danger am-radius">React</span>
              <p className="amt-version">当前版本：v{__VERSION__} </p>
              <div className="amt-ghbtns">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=star&count=true"
                  frameBorder="0" scrolling="0" width="120px"
                  height="20px"></iframe>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=fork&count=true"
                  frameBorder="0" scrolling="0" width="120px"
                  height="20px"></iframe>
              </div>
              <div>
                <span>
                  <a href="http://ask.amazeui.org">论坛</a>
                </span>
                <span> | </span>
                <span>
                  QQ群：601297199
                </span>
              </div>
              <div className="am-btn-toolbar">
                <a
                  className="am-btn am-btn-success am-btn-lg sk-link"
                  href="kitchen-sink"
                >查看演示</a>
                <Link className="am-btn am-btn-secondary am-btn-lg" to="/docs">开始使用</Link>
                <a
                  className="am-btn am-btn-default am-btn-lg"
                  href="https://github.com/amazeui/amazeui-touch"
                  target="_blank"
                >GitHub</a>
              </div>
              <div ref="qrcode" className="ks-qrcode am-hide-sm-only"></div>
              <p>扫码查看演示</p>
            </div>
          </div>
        </div>
        <div className="amt-description">
          <div className="am-g am-g-fixed">
            <h1>Amaze UI for 钉钉是什么？</h1>
            <p>Amaze UI for 钉钉是由前端开源框架Amaze UI开发团队、阿里钉钉开发团队联合出品，为企业开发者提供与钉钉设计风格完全统一的开源前端框架，以下简称“钉钉UI”。</p>
            <p>“钉钉UI”是由钉钉团队提供企业开发者组件需求、统一设计风格，由Amaze UI团队进行开发、维护的开源前端框架。目前第一个版本为基于React.js的web移动端组件库，陆续将出品基于jQuery.js的移动端组件库、跨屏组件库等内容。以满足不同企业开发者在实际业务中的需求。
            </p>
          </div>
        </div>
        <div className="amt-features">
          <div className="am-g am-g-fixed">
            <hr/>
            <div className="am-u-md-6">
              <span className="am-icon-mobile" />
              <h2>专属于移动</h2>
              <p>钉钉UI 专为移动打造，在技术实现、交互设计上只考虑主流移动设备，保证代码轻、性能高。</p>
            </div>
            <div className="am-u-md-6">
              <span className="am-icon-paint-brush" />
              <h2>专注于 UI</h2>
              <p>只提供 UI 组件（View），对配套技术不做限定，方便用户与现有技术栈快速整合，降低使用成本。</p>
            </div>
          </div>
          <div className="am-g am-g-fixed">
            <div className="am-u-md-6">
              <span className="am-icon-building" />
              <h2>采用 Flexbox 布局</h2>
              <p>使用 Flexbox 技术，灵活自如地对齐、收缩、扩展元素，轻松搞定移动页面布局。</p>
            </div>
            <div className="am-u-md-6">
              <span className="am-icon-server" />
              <h2>基于 React.js</h2>
              <p>基于风靡社区的 React.js 封装组件，沿袭高性能、可复用、易扩展、一处学习多端编写特性。</p>
            </div>
          </div>
        </div>
        <div className="amt-subscribe">
          <div className="am-g am-g-fixed">
            <div className="am-u-sm-6">
              2016-8-15 | Amaze UI for 钉钉 v1.0.0发布
            </div>
            <div className="am-u-sm-2 am-u-sm-offset-2">
              <input type="email" className="" placeholder="输入电子邮件" />
            </div>
            <div className="am-u-sm-2">
              <button type="submit" className="am-btn am-btn-default">提交</button>
            </div>
          </div>
        </div>
        <div className="amt-about">
          <div className="am-g am-g-fixed">
            <h1>关于我们</h1>
            <p>Amaze UI是由云适配发起的中国首个开源 HTML5 前端框架，可以帮助企业开发者通过80余个css组件、超过40个js插件快速构建出功能完整、性能高效的企业级移动应用和自适应各种终端的HTML5跨屏网站。在大幅度提升开发效率的同时，大大节省了企业对不同终端开发时的研发成本。</p>
            <p>开源两年间，逐渐成长为国内最流行的HTML5前端框架，现包含Amaze UI 、和Amaze UI Touch、Amaze UI React、Amaze UI for 钉钉四个版本。在Github上star超过7500，目前服务于超过40万开发者，移动端组件广泛应用于 微软、海信、中国政府网、国资委、清华大学等众多机构移动门户。
            </p>
          </div>
        </div>
        <footer className="amt-footer">
          <div className="am-g am-g-fixed">
            <div className="am-u-md-4 am-u-md-push-8">
              <ul className="amt-footer-socials">
                <li>
                  <a
                    href="http://amazeui.org/about/contact"
                    target="_blank"
                    className="am-icon-qq am-icon-btn"
                  />
                </li>
                <li>
                  <a
                    href="http://weibo.com/amazeui"
                    target="_blank"
                    className="am-icon-weibo am-icon-btn" />
                </li>
                <li>
                  <span className="am-icon-wechat am-icon-btn" />
                </li>
              </ul>
            </div>
            <div className="am-u-md-8 am-u-md-pull-4">
              <h2 className="amt-footer-fd">
                <a href="http://www.yunshipei.com" target="_blank">云适配</a>
              </h2>
              <p className="amt-cp">© {year} AllMobilize, Inc. Licensed under <a
                href="http://opensource.org/licenses/MIT" target="_blank">MIT
                license</a>. Developed with <a
                href="http://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>.
              </p>
            </div>
          </div>
        </footer>
      </Container>
    );
  }
});

export default Index;
