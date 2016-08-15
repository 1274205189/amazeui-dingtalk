import React, {
  PropTypes,
} from 'react';
import 'whatwg-fetch';
import Clipboard from 'clipboard';
import Container from '../../js/react/Container';
import Sidebar from './Sidebar';

const template = require('fs').readFileSync(`${__dirname}/../jq/template.html`, 'utf-8');

console.log(template);

const isSM = matchMedia('(max-width: 640px)').matches;

function isNodeInTree(node, tree) {
  while (node) {
    if (node === tree) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

const Doc = React.createClass({
  propTypes: {
    docName: PropTypes.string, // component name
  },

  getInitialState() {
    return {
      docName: this.props.docName,
      loading: true,
      error: false,
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.docName !== nextProps.docName) {
      this.setState({
        docName: nextProps.docName,
      }, () => {
        this.fetchData();
      });
    }
  },

  fetchData() {
    const {
      docName,
    } = this.state;

    this.setState({
      loading: true,
    });

    fetch(`/json/${docName}.json`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then(data => {
        this.setState({
          doc: data.body,
          loading: false,
          error: false,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  },

  renderError() {
    return (
      <div>
        <h1>请求文档时发生错误</h1>
        <p>错误代码：{this.state.error}</p>
      </div>
    );
  },

  renderLoading() {
    return (
      <p className="am-text-center">
        <span className="am-icon-spin am-icon-spinner" />
      </p>
    )
  },

  renderContent() {
    return <div dangerouslySetInnerHTML={{__html: this.state.doc}}></div>;
  },

  render() {
    let {
      loading,
      error,
    } = this.state;

    return (
      <div
        className="doc-content-container"
      >
        <div
          className="doc-content"
        >
          {error ? this.renderError() :
            (loading ? this.renderLoading() : this.renderContent())}
          <p
            className="am-text-right doc-version am-text-sm"
          >
            Version: {__VERSION__}
          </p>
        </div>
      </div>
    )
  }
});

const ComponentDoc = React.createClass({
  getInitialState() {
    return {
      sidebarActive: false,
      docName: this.props.params.component || 'getting-started',
      demoActive: false,
    };
  },

  componentDidMount() {
    document.addEventListener('click', this._clickHandler);
    document.addEventListener('click', this.openDemo);

    this._clipboard = new Clipboard('.code-copy', {
      target: (trigger) => {
        return trigger.parentNode.parentNode.querySelector('pre');
      }
    });

    this._clipboard.on('success', (e) => {
      console.info('success', e.text);
      e.clearSelection();
    });

    this._clipboard.on('error', (e) => {
      console.error(e);
    });
  },

  componentWillUnmount() {
    document.removeEventListener('click', this._clickHandler);

    try {
      this._clipboard.destroy();
    } catch(e) {}
  },

  openDemo(e) {
    const target = e.target;

    if (!target.classList.contains('code-demo')) {
      return;
    }

    e.stopPropagation();


    /*if (!this._demoFrame) {
      this._demoFrame = document.createElement('iframe');
      this._demoFrame.className = 'demo-frame';
      document.body.appendChild(this._demoFrame);
    }*/

    let code = target.parentNode.parentNode.querySelector('pre').innerText;
    const frame = this.refs.demoFrame;

    var html = `<body>${code}</body>`;
    frame.contentWindow.document.open();
    frame.contentWindow.document.write(html);
    frame.contentWindow.document.close();

    this.setState({demoActive: true});
  },

  closeDemo() {
    this.setState({
      demoActive: false,
    });
  },

  _clickHandler(e) {
    const isFilter = e.target === document.querySelector('#doc-filter');

    if (isSM && !isFilter && !isNodeInTree(e.target, this.refs.sidebarToggle) &&
      this.state.sidebarActive) {
      this.setState({
        sidebarActive: !this.state.sidebarActive,
      });
    }
  },

  sidebarToggle(e) {
    e && e.preventDefault();

    this.setState({
      sidebarActive: !this.state.sidebarActive,
    });
  },

  handleNavSelected(docName, e) {
    // e.preventDefault();

    this.setState({
      docName,
    }, () => {
      // console.log(this.state.docName);
    });
  },

  render() {
    let {
      component,
      params,
      ...props,
    } = this.props;

    const activeClassName = this.state.sidebarActive ? ' active' : '';
    const demoActive = this.state.demoActive ? 'active' : '';

    return (
      <Container
        fill
        role="doc-main"
      >
        <Sidebar
          className={activeClassName}
          parent={`jq`}
          onNavSelected={this.handleNavSelected}
        />
        <Doc docName={this.state.docName} />
        <a
          ref="sidebarToggle"
          onClick={this.sidebarToggle}
          href="#sidebar"
          className={`sidebar-toggle ${activeClassName}`}
        >
          <span />
        </a>
        <div className={`demo-wrap ${demoActive}`}>
          <iframe frameBorder="0" ref="demoFrame"></iframe>
          <span
            className="am-icon-close"
            onClick={this.closeDemo}
          />
        </div>
      </Container>
    );
  }
});

export default ComponentDoc;
