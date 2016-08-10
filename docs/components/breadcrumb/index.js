const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const BreadcrumbDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="breadcrumb"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/BreadcrumbExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default BreadcrumbDoc;
