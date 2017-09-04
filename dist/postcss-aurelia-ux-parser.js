"use strict";
exports.__esModule = true;
var Input = require("postcss/lib/input");
var Parser = require("postcss/lib/parser");
function AureliaUxParse(cssBuffer, options) {
    options = options || {};
    var css = cssBuffer.toString();
    css = css.replace(/\${[^\r\n]*}/g, function (substring) {
        return "\"" + substring.replace('\"', '\'') + "\"";
    });
    cssBuffer = new Buffer(css);
    var input = new Input(css, options);
    var parser = new Parser(input);
    parser.tokenize();
    parser.loop();
    return parser.root;
}
exports.AureliaUxParse = AureliaUxParse;
