import React, {
  PropTypes,
} from 'react';
import Container from '../../js/react/Container';
import Sidebar from './Sidebar';

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
      docName: 'getting-started',
    };
  },

  componentDidMount() {
    document.addEventListener('click', this._clickHandler);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this._clickHandler)
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
    e.preventDefault();

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
      </Container>
    );
  }
});

export default ComponentDoc;
