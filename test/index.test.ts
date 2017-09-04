const preCss = `
test {
  margin: 0;
  height: 100%;
  background-color: \${ foreground || '#fff'};
  color: \${ foreground || '#fff'};
}
`;

const transformedCss = `
test {
   margin: 0;
   height: 100%;
   background-color: "\${ foreground || '#fff'}";
   color: "\${ foreground || '#fff'}";
 }  
`;


var postcss = require('postcss');
var result;

let postcssAurelia = require('../dist/index');

function run(input, output, opts) {
    return postcss([ postcssAurelia.PostcssAureliaUx ], { parser: postcssAurelia.AureliaUxParse }).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Can run together', () => {
    return run(preCss, preCss, { });
});
