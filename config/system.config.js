//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************.*************************************************************************************//

SystemJS.config({
  deafultJSExtensions: true,
  transpiler: 'plugin-babel',
  meta: {
    '*.vue': {
      'loader': 'vue-component-loader',
    },
    "*.css": {
      "loader": "css"
    }
  },
  map: {
    'plugin-babel': 'npm:plugin-babel.js',
    'babel': 'npm:babel.min.js', /*0.0.25*/
    'systemjs-babel-build': 'npm:systemjs-babel-browser.js',
    'vue': 'npm:vue',
    'vue-component-loader': 'npm:systemjs-vue-loader.js',
    'sass.js': 'npm:css/sass.js',
    'less': 'npm:css/less.js',
    "vue-router": "npm:vue/dist/vue-router.js",
    "css": "https://unpkg.com/systemjs-plugin-css@latest/css.js",
    "$": "./src/components/",
    "@": "./src/"
  },
  paths: {
    'npm:': "./pkg/"
  },
  packages: {
    'vue': {
      main: 'dist/vue.js'
    },
    'vue-component-loader': {
      map: {
        'css-parser': './libs/css/index.js'
      }
    }
  }
});
SystemJS.import('./src/index.js')
  .catch(console.error.bind(console));

window.onload = function() {
  const link = document.querySelectorAll(`link[type="text/tailwindcss"]`);
  link.forEach(async el => {
    const req = await fetch(el.getAttribute("href"));
    const text = await req.text();
    const styleTag = document.createElement("style");
    styleTag.setAttribute("type", "text/tailwindcss");
    styleTag.appendChild(document.createTextNode(text));
    document.head.appendChild(styleTag);
  });
}
