const docSources = require('../doc-sources.json');
const ncp = require('ncp').ncp;

Object.keys(docSources.sources).forEach((packageName) => {
  const source = docSources.sources[packageName];
  ncp(source, 'docs/modules/' + packageName, (err) => {
    console.log(err);
  });
});

Object.keys(docSources.apis).forEach((apiName) => {
  const readmeFile = docSources.apis[apiName];
  ncp(readmeFile, 'docs/api/' + apiName + '.md');
});



// const gulp = require('gulp');
// const typedoc = require('gulp-typedoc');
// const packageSources = require('../package-sources.json');

// console.log(packageSources);
// packageSources.packages.forEach((package) => {
//   console.log(package);
//   // typedoc --mode library --out docs2 docs.ts --theme minimal --disableSources
//   gulp
//     .src([package.source])
//     .pipe(typedoc({
//       module: 'esNext',
//       target: 'es6',

//       mode: 'library',
//       out: package.targetDir,
//       theme: 'minimal',
//       disableSources: true
//     }))
// });