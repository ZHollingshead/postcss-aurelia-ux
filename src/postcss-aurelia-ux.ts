import * as postcss from 'postcss';

export function PostcssAureliaUx() {
  return postcss.plugin('postcss-aurelia-ux', () => {
    return (root, result) => {

      root.replaceValues(/"\${[^\r\n]*}"/g, substring => {
        return substring.replace('"${', '${').replace('}"', '}');
      });
    };
  });
}