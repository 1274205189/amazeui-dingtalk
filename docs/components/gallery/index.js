const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const GalleryDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="gallery"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/GalleryExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default GalleryDoc;
