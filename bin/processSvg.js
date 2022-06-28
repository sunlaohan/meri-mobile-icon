const Svgo = require('svgo');
const cheerio = require('cheerio')
const framework = process.env.npm_package_config_framework || 'react'

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg,isOriginCode) {
    const plugins = [
        { convertShapeToPath: false },
        { mergePaths: false },
        { removeTitle: true },
    ]
    if(!isOriginCode){
        plugins.push({ removeAttrs: { attrs: '(fill|stroke.*)' } })
    }
  const svgo = new Svgo({plugins});

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

// 获取svg的属性值

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg,isOriginCode) {
    const attrs = {}
  const optimized = await optimize(svg,isOriginCode)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    .then(svg => {
        if(isOriginCode){
            const reg = /(?<=^<svg\s+).*?(?=>)/g;
            const attrString = svg.match(reg)[0]
            if(attrString){
                const matchs = attrString.replace(/'|"/g,'').match(/\S+\s*=\s*\S+/g);
                matchs.forEach(one=>{
                    const keyValue = one.split('=')
                    attrs[keyValue[0].trim()] = keyValue[1].trim()
                })
            }
        }
        return removeSVGElement(svg)
    })
    .then(svg =>
      framework==='react' ?
      svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`) :
      svg
    )
  return {svg:optimized, attrs};
}

module.exports = processSvg;
