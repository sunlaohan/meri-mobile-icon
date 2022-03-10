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

const getElementCode = (ComponentName, attrs, svgCode) => `
    export default function ${ComponentName}(options){
        return '<svg ${attrs}>${svgCode}</svg>'
    }
`

module.exports = { getAttrs, getElementCode }
