import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';

import '../style/app.scss';

import Container from '../../js/react/Container';

import ComponentDoc from './ComponentDoc';
import DocJQ from './DocJQ';
import Index from './Index';

const Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      navActive: false,
    };
  },

  onClick() {
    this.setState({
      navActive: !this.state.navActive,
    });
  },

  onMatchClick() {
    if (global.matchMedia && global.matchMedia('(max-width: 640px)').matches) {
      this.onClick();
    }
  },

  renderLink(route, title) {
    const pathName = `/${route}`;

    return (
      <li className={this.context.router.isActive(pathName) ? 'am-active' : ''}>
        <Link
          to={pathName}
          onClick={this.onMatchClick}
        >
          {title}
        </Link>
      </li>
    );
  },

  render() {
    const navActive = this.state.navActive;
    const active = navActive ? 'am-in' : '';
    const icon = navActive ? 'close' : 'bars';

    return (
      <header className="am-topbar am-topbar-inverse amt-header">
        <h1 className="am-topbar-brand">
          <a href="/" className="am-text-ir">Amaze UI Touch</a>
        </h1>

        <a
          className="am-show-sm-only am-topbar-toggle"
          onClick={this.onClick}
        >
          <span className={`am-icon-${icon}`} />
        </a>

        <div className={`am-collapse am-topbar-collapse ${active}`}>
          <ul className="am-nav am-nav-pills am-topbar-nav am-topbar-left">
            {// {this.renderLink('docs/getting-started', '开发文档')}
          }
            {this.renderLink('react/getting-started', 'React 版文档')}
            <li className="amt-tooltip" data-tooltip="正在极速开发中" >
              <a
                href="#"
                className="amt-disable"
              >
                jQuery版
              </a>
            </li>
            { // {this.renderLink('jq', 'jQuery 版文档')}
          }
            <li>
              <a
                href="http://amazeui.org/"
                target="_blank"
                onClick={this.onMatchClick}
              >
                Amaze UI 主页
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <Container direction="column" id="main-route">
        <Header />
        <Container fill direction="column">
          {this.props.children}
        </Container>
      </Container>
    );
  }
});

App.NotFound = React.createClass({
  render() {
    return (
      <h2>Oops, 404 Not Found.</h2>
    );
  }
});

App.Components = React.createClass({
  render() {
    return (
      <Container fill direction="column">
        {this.props.children}
      </Container>
    );
  }
});

const GettingStarted = React.createClass({
  render() {
    return <ComponentDoc component="getting-started" />
  }
});

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="react" component={App.Components}>
        <Route path=":component" component={ComponentDoc} />
        <IndexRoute component={GettingStarted} />
      </Route>
      <Route path="jq" component={DocJQ}>
        <Route path=":component" component={DocJQ} />
      </Route>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

// Initial App
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
