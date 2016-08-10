import marked from 'marked';
import Prism from './Prism';

let renderer = new marked.Renderer();

renderer.code = function(code, lang) {
  return Prism.amtHighlight({
    text: code,
    language: lang,
    ln: 1
  });
};

renderer.table = function(header, body) {
  return `<table class="am-table am-table-bordered am-table-striped">
  <thead>${header}</thead>
  <tbody>${body}</tbody>
  </table>`;
};

export default {
  renderer: renderer,
  gfm: true
};
