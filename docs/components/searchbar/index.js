const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const SearchBarDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="searchbar"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/SearchBarExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default SearchBarDoc;
