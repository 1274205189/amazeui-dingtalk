/**
 * Amaze UI DingTalk Building Tasks
 *
 * @author Minwe <minwe@yunshipei.com>
 */

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';
import webpackConfigDev from './webpack.docs.babel';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const banner = `/** ${pkg.title} v${pkg.version} | by Amaze UI Team
  * (c) ${$.util.date(Date.now(), 'UTC:yyyy')} AllMobilize, Inc., Licensed under ${pkg.license}
  * ${$.util.date(Date.now(), 'isoDateTime')}
  */
  `;

const paths = {
  scss: 'scss/amazeui-dingtalk.scss',
  scssModules: 'scss/**/*.scss',
  fonts: 'fonts/*',
  reactEntry: 'js/react/index.js',
  dist: 'dist',
  docsDist: 'www',
  jqDocs: 'docs/jq/*.md',
};

const autoprefixerOptions = {
  browsers: ['> 1%', 'last 2 versions', 'ie 10']
};

const replaceVersion = function() {
  return $.replace('__VERSION__', pkg.version);
};

const addBanner = function() {
  return $.header(banner);
};

gulp.task('clean', () => {
  return del(['dist', 'www', 'lib']);
});

/**
 * Build Amaze UI DingTalk
 */

gulp.task('build:clean', () => {
  return del([paths.dist, 'lib']);
});

gulp.task('style:scss', () => {
  return gulp.src(paths.scss)
    // inject fonts path
    .pipe($.replace(/\/\/ INJECT_SASS_VAR/g, ''))
    .pipe($.sass({
      outputStyle: 'expanded',
      importer: require('node-sass-import-once'),
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(autoprefixerOptions))
    .pipe(addBanner())
    .pipe(gulp.dest(paths.dist))
    .pipe($.csso())
    .pipe(addBanner())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('style:fonts', () => {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.dist + '/fonts'));
});

gulp.task('style', ['style:scss', 'style:fonts']);

// transform ES6 & JSX
gulp.task('build:babel', () => {
  return gulp.src('js/**/*')
    .pipe(replaceVersion())
    // .pipe($.replace(/(import '\.\.\/scss\/components)/g, '// $1'))
    .pipe($.babel({
      plugins: require('./scripts/babel-require-ignore'),
    }))
    .pipe(gulp.dest('lib'));
});

gulp.task('build:pack', () => {
  return gulp.src(paths.reactEntry)
    .pipe(webpackStream(webpackConfig))
    .pipe(replaceVersion())
    .pipe(addBanner())
    .pipe($.rename('amazeui-dingtalk.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe($.uglify())
    .pipe(addBanner())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', (callback) => {
  runSequence(
    'build:clean',
    ['style', 'build:babel', 'build:pack',],
    callback
  );
});

gulp.task('watch', () => {
  // gulp.watch('js/**/*.js', ['build:babel']);
  gulp.watch(paths.jqDocs, ['jq:md2json']);
});

/**
 * Dev server
 */
gulp.task('docs:clean', () => {
  return del(paths.docsDist);
});

gulp.task('server', () => {
  const bundler = webpack(webpackConfigDev);
  const bs = browserSync.create();

  bs.init({
    logPrefix: 'AMT',
    server: {
      baseDir: [paths.docsDist],
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: '/', // webpackConfigDev.output.publicPath,
          stats: {colors: true}
        }),
        webpackHotMiddleware(bundler)
      ]
    },
  });
});

gulp.task('docs', (callback) => {
  runSequence('docs:clean', 'jq', 'server', callback);
});

import markedToJSON from './scripts/gulp-marked-json';

gulp.task('jq:md2json', () => {
  return gulp.src(paths.jqDocs)
    .pipe(markedToJSON())
    .pipe(gulp.dest('www/json'));
});

gulp.task('jq', ['jq:md2json']);

gulp.task('default', ['docs', 'watch']);
