import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const DialogDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
      </Doc>
    );
  }
});

export default DialogDoc;
