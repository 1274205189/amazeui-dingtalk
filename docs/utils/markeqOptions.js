import marked from 'marked';
import Prism from './Prism';

let renderer = new marked.Renderer();

renderer.code = function(code, language) {
  /*if (!language || language === '+' || language === '-') {
    return codeHl(code);
  }*/

  let lastChar = language.slice(-1);
  let hide = (lastChar === '-');
  let inject = (lastChar === '-' || lastChar === '+');

  if (inject) {
    language = language.slice(0, -1);
  }

  // language = getLang(language);

  if (['javascript', 'css', 'html'].indexOf(language) !== -1) {
    inject = inject && true;
  }

  let html = '';
  const hightlighted = Prism.amtHighlight({
    text: code,
    language: language,
    ln: 1
  });

  if (inject) {
    html = {
      javascript: `<script>${code}</script>`,
      css: `<style type="text/css">${code}</style>`,
      html: `
            <div class="live-example">
               ${hightlighted}
                <div class="code-actions">
                  <a href="javascript: void(0)" class="code-demo">演示</a>
                  <span class="code-copy">复制</span>
                </div>
            </div>`,
    }[language];
  }

  if (hide && inject) {
    return html;
  }

  return hightlighted;
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
