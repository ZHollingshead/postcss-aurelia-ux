"use strict";
exports.__esModule = true;
var postcss = require("postcss");
function PostcssAureliaUx() {
    return postcss.plugin('postcss-aurelia-ux', function () {
        return function (root, result) {
            root.replaceValues(/"\${[^\r\n]*}"/g, function (substring) {
                return substring.replace('"${', '${').replace('}"', '}');
            });
        };
    });
}
exports.PostcssAureliaUx = PostcssAureliaUx;
