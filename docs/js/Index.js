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
    // this._qrcode = new QRCode(this.refs.qrcode, {
    //   text: `http://${host}/kitchen-sink/`,
    //   width: 80,
    //   height: 80,
    // });
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
                scrolling="no"
              ></iframe>
            </div>

            <div className="amt-intro">
              <h1>Amaze UI for 钉钉 移动版<span className="am-badge am-badge-danger am-radius">React</span></h1>
              <p className="amt-version">当前版本：v{__VERSION__} </p>
              <p className="amt-slogan">界面风格与钉钉设计规范完全统一的移动端web组件库 <br/>可以帮助企业开发者，快速开发出钉钉微应用系统</p>
              { // <div className="amt-ghbtns">
              //   <iframe
              //     src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=star&count=true"
              //     frameBorder="0" scrolling="0" width="120px"
              //     height="20px"></iframe>
              //   <iframe
              //     src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=fork&count=true"
              //     frameBorder="0" scrolling="0" width="120px"
              //     height="20px"></iframe>
              // </div>
              }
              <div className="am-btn-toolbar">
                <a
                  className="am-btn am-btn-success am-btn-lg sk-link"
                  href="kitchen-sink"
                >查看演示</a>
              <Link className="am-btn am-btn-danger am-btn-sm" to="/docs">开始使用</Link> &nbsp;&nbsp;
                <a
                  className="am-btn am-btn-default am-btn-sm"
                  href="https://github.com/amazeui/amazeui-touch"
                  target="_blank"
                >GitHub</a>
              </div>
              <div className="amt-promotion">
                <span className="amt-community">
                  <img
                    width="27px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACg0lEQVRYR+2X4XXTQBCEZyqADnAqIKkAqIBQAVABTgWECiAVQCogHRAqIFRAqACoYHmf30mcZEkn27LxD+0fv2fp7kazu7Nz1pGHjxyfZoC7ZmhmcGYwZyAinkh6mv6rfn9LupN0L+mrbX4ni2INRsSppDeSXo08FYAfJF3bBvxO0QswIh5K+ijpfMsTAHdp+2rL9atlnQATa18kAXLX+CTpIpXGY0kApxQoi2KsAZwYXAXgzvZZRNxKoo4JSgGGr4dQNgCmtP6YiLn2uaT6MgF7kD0E6Is+RtsAScfLIu/bv3CWavptxxavbXN+I2qAe2avOpR0LiX96vnGNZA5QHSNxthn3Ns+adVifh4NdJLLUw6Q+uiiflLAth0R6CTa2hXoZ625OUCofz8pmo7NEsAhMhosHjrFP20vIuJG0vMBMp7ZRpL+CXVELCQhMfuMVfoigiYZGgLvbMNyc5JExCFkBiI+F1i4sE2drgFkMSMoF9KpGL2yvYyIb5IwIEOxnuLq7TTq2GTK+J5mMd05phGRmpVt6zMLOBjSPQWTFTj2xB2Voltm2qtS0wCyGu6ljdvP/+ALKfaIgLkx4FhzmpveQcNaENQ+wCtgKQNoGikda3br2qs2HzKsfbJDytpOmXqhuW5xJWmuYzqQijGeko9aDpqFjhTnksMGiCsp6zSaqbkwpMx06m0MMI7lg8/77jJ9TVKxx2LSddN3v0hswVTfbC3Vbi3KXS8OdTEuePQNLQGFPTSuuvG1z+TDH7X+XHMw+fPira70+Zs+jwjA0zS5MW5Iy38FmA0EahSguChYrcX5KADmIFKDLWzTiI04eIo3LYkZ4KaMzSnelbGZwakZ/Au8J+MpHB5hRQAAAABJRU5ErkJggg==" /> &nbsp;
                  <a href="http://ask.amazeui.org">论坛</a>
                </span>
                <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                <span className="amt-dd-group">
                  <img
                    width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADMklEQVRYR+WYjU0VURCF51SgVqBUIFSgVKBUIFSgVCBWIFQgVCBUIFQgHYgVKBWM+V5mN3cf92/38RISJ9kQ8u6dPffMz5m7sidueuL47P8A6O6vzOxlROOtmd3FY5JuNonSYgbdfdfMPpjZezMDYM0uzYznRhLgu202QHeHoc9mxt8ldmpmXyT97dncDdDdn5vZt2Csx3dtDeBOJJ21HHUBjHB+7whl633rv59LOqptagJ0d3IM5mBwG3ZrZvulkFcBBnM/tghuOPC1pP3c6YsAI+d+biGspShkw10DCHO5SqWvvdlGrCPU16nvLMBoJQB8YJIUjfkkKvrZI4K9k7TTA7DEHnt3hmYbaXBoZp8SJdkU75Gk88HJAwajMMi9kk0cDIui2gH7bkOEExZzAOn0HysvuZJE68lahB+gPIM+z8U8RikH8FdH5e5Jon9VLXIZoBxoTq4eS4Ko6bgVpwdgy5Aq8uSiByjOIgXI1Z4OwFCx6iATBmvVu4b4OMYpnKAw5Cyhb04q8Q4mmxqjt5L2NgF4Jgk2RosXA3Y1C9amFXenRTERFY12lgPY3BgeCTGJ3DUyraNwd9KDWXI2QFj52krA+P1S0kHn2pRphltSojp8lBgkp7IKUgBCOMemGuG9MrNdSRPJGvb3sGdm95JWB1haJCneiwBJYldD3iECg99iFYP6z8ywdYfa3WsSmr52FINcoyY0Pb0qdUjbQAJHBtHptf9p2Ay+PTbKaQ7gnEJJXzY0b/6iHC8kjbc9d+cQRIjndQMle1eHzQHEaY+atJhAZWBtYu5OBXNlLdlE60vzYLNPtdBFyNMKR+5agwhuuZ+MHaAEcFCEOQJfwrzKp9BiboY1e8B6beTvVZUWmcOE3GrO99E/J3reutVtGurfFEpH3nHIA0kU0sRaAAk1+dCquhKLNHGqsTYAs3ec/2YBZHHcO5aCRPZaV4AiuGybKVHRqaGtfEx/J+cOc2FNFzU/faSL3Z2+RvEsvWsM7gg9H4+aA+4sgIN3d0dtllw1CflpadLJ0b8IYAIURUDWGNPSr6zDEr5CUCSrD5itaefRAc5JuKVrN2Jw6Uvn7PsHRy00OK6GFDgAAAAASUVORK5CYII=" />&nbsp;
                  钉群
                </span>
              </div>
              { /* <div ref="qrcode" className="ks-qrcode am-hide-sm-only"></div>
               <p>扫码查看演示</p> */ }
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
              <span className="amt-circle-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADpklEQVRYR+VYXU4bMRD2GMRrwwkKJyicoHCCwgkaJLzirXAC6Aka3pAHieQEDSeAnABu0PQEhdddslNN5I2cjf92N5WQOm9R7PHn+fs+L4h3bvDO8Yn/A+DZ2dnObDb7yNkAgAMhxJSIpvwbESddstQ6gkqpPQD4KoQ4EkLsRECMhRBjKeXk5uZmDjzVGgM8PT09AIBLE6nUc+x1gzzPvw+Hw5eUzckA+/1+b2tr685ELMW3dw0RMbgrRLyOOUoCaNL5MyGVsfOW/ieiISKehDZFAWZZdkREdwDQa3R64mIiei6K4tCX8iBAjpwQ4uFfgavuQESPiHjoupMXoKm5p3Wn1RdYX7q9AJVSHDmeafW6mQDA58QMNlpWluXh7e3to73JCZBHiZTyweVdaw08mMuyvDId/aERivDiqdZ6NwrQFz3eKKXcrYatKYM+EZ0DwJxJuhoRnSDisPKzEkEzUrj2nFZ3UC0y3d4HgC8dQS5F0QVwAADfAgDvEZHpzWkm/RxVBtsqqnaWVgBmWfYr1rlEtI+Iz7FImVrut6jVC631gP0vATS3Z4BBY6oCgCERjVKAsjNTAlyr0QlARBNEnE+QJYCh7q0hvjCSioVDj4ieNjY27lOUijmD1Y23+5ldEHG/NUAiukbEcxu0OZjBTouimIbUSpZlPKIuQ2nicbYCMGUjb+IUF0WxmyqZ6kCyLOMxwlrSaz6AHJUfsRo0/4+11seJaxfLjPp+ivG7E2CDGqwOZHW8GKpcl3me329ubu7VKcual9HoCSFetdZz9dS2SezAjcqyHL69vT3HUh4jgcqpt4sNdf1pmLbkVIco1D6TiBZk4GKSx5RZVbvEOM/zEzuCfFn7t1KKmYWfDFGz6dTFJE0aZXFYNbyFEC9ExFS4jYiL155SimdfzzTHpxDKPM+3q8utAExlk2gYhBhprZnmlkwpxR3MSt1pdnpXmqRhpwUxulSPUiooRNhhXbQ6BatpFh4hncVoBZS5WAjBL8OQrUTdK/lTWSWWapZOvGY2m8WG86uUcq/O58FXXQolhQAS0W9ulFjdGR/HWmtupCULAjSp5kdMsOsCIEemu70C2Oxd6L9GAHlxF5DckQlPAC84bxe7ItI13Q6fr3x/V1rttdFPH/ZiZgP+6NP2rWH5Gkkpr1IEbiOA1pw8b/PU5JQT0cCndFyZawWwcmTUCX9c4vfDTj2yrEqY+vjjZVEU45jaWTvA2Axcx/+dIrgOADEffwENCug4L1DfxwAAAABJRU5ErkJggg==" />
              </span>
              <h2>专注于 UI</h2>
              <p>默认样式和钉钉设计风格完全统一节省大量二次开发工作量。</p>
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
