const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const AvatarDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="avatar"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/AvatarExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default AvatarDoc;
