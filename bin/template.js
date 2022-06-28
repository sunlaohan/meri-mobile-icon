const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'width': '+ (options.size || 16) +',
    'height': '+ (options.size || 16) +',
    'viewBox': '0 0 24 24',
    'aria-hidden': 'true',
    // 'v-on': '$listeners'
  }
  const fillAttrs = {
    'fill': '+ (options.color || "currentColor") +'
  }
  const strokeAttrs = {
    'stroke': '+ (options.color || "currentColor") +',
    'fill': 'none',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}
  
// const getElementCode = (ComponentName, attrs, svgCode) => `
//   <template>
//     <svg
//       ${attrs}
//     >
//       ${svgCode}
//     </svg>
//   </template>
//   <script>
//     export default {
//       name: "Icon${ComponentName}",
//       props: {
//         size: {
//           type: Number,
//           default: 16
//         },
//         color: {
//           type: String,
//           default: "currentColor"
//         }
//       }
//     };
//   </script>
// `

const otherAttrToString = (svgOriginAttrs) => {
    let str = ' '
   for(let key in svgOriginAttrs){
    if(key === 'width' || key === 'height') continue;
    str += ` ${key}="${svgOriginAttrs[key]}"`
   }
   return str;
}

const getElementCode = (ComponentName, attrs, svgCode, svgOriginCode, svgOriginAttrs) => `
    export default function ${ComponentName}(options){
        if(!options || !options.color){
            return '<svg  width="'+(options.size || 16) +'" height="'+(options.size || 16) +'" ${otherAttrToString(svgOriginAttrs)} viewBox="0 0 24 24">${svgOriginCode}</svg>'
        }
        return '<svg ${attrs}>${svgCode}</svg>'
    }
`

module.exports = { getAttrs, getElementCode }
