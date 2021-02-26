import marked from 'marked';
import hljs from 'highlight.js';
var renderer = new marked.Renderer();
renderer.heading = function(text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `
    <h${level}>
      <a class="anchor" name="${escapedText}" href="#${escapedText}">
        <span class="header-link"></span>
      </a>
      <span>${text}</span>
    </h${level}>
    `;
};
marked.setOptions({
  renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

export default marked;