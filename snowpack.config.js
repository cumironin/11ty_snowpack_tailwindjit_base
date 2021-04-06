module.exports = {
  mount: {
    // '_site': { url: '/', static: true, resolve: false },
    // _site  akan di mount(di export ke dist) kalau npm run dev dijalankan,
    // jadi ga ada notif di console lagi, dan ga perlu pake rimraf
    _site: {
      url: '/',
      static: true
    },
    'src/scripts': {
      url: '/scripts'
    },
    'src/styles': {
      url: '/styles'
    },
  },

  //plugins ini otomatis jalan klo di run
  plugins: [
    //script ini dijalankan untuk me run post css
    '@snowpack/plugin-postcss',
    [
      //run script ini digunakan untuk memproses eleventy & proses-watch
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],

    [
      //run script ini digunakan untuk mengoutput css di _site bukan di build nya.
      '@snowpack/plugin-run-script',
      {
        cmd: 'postcss src/styles/index.css -o _site/styles/index.css',
        watch: 'postcss src/styles/index.css -o _site/styles/index.css -w',
      },
    ],
    // plugin optimize & bawaaan optimize es2020 bikin ESR HMR error - sungguh membagongkan
    // nunggu versi stabil snowpack paling klo mamke plugin optimize, katro

    // [
    //   '@snowpack/plugin-optimize',
    //   {
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyHTML: true,
    //     target: 'es2020',
    //   }
    // ],

  ],
  packageOptions: {
    NODE_ENV: true,
    // source: 'remote',
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
  //ganti ke port 8081 dari 8080 (karena 8080 bentrok dengan service worker/bugs di snowpack)
  devOptions: {
    open: 'none',
    port: 8080,
    hmrDelay: 300,
  },
};