import * as Input from 'postcss/lib/input';
import * as Parser from 'postcss/lib/parser';

export function AureliaUxParse(cssBuffer, options) {
    options = options || {};
  
    let css = cssBuffer.toString();
  
    css = css.replace(/\${[^\r\n]*}/g, (substring) => {
      return `"${substring.replace('\"', '\'')}"`;
    });
  
    cssBuffer = new Buffer(css);
  
    let input = new Input(css, options);
    let parser = new Parser(input);
  
    parser.tokenize();
    parser.loop();
  
    return parser.root;
  }