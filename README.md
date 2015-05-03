# gulp-amd [![NPM version](https://badge.fury.io/js/gulp-amd.svg)](http://badge.fury.io/js/gulp-amd)

> gulp plugin for working with AMD-files

## Install with [npm](npmjs.org)

```sh
npm install gulp-amd
```

## Usage

```js
var amd = require('gulp-amd');

gulp.src('src/**/*.js')
    .pipe(amd(options));
```


## API
### options

Add dependencies

#### Parameters

##### add
Type: `String` or `Array`

Dependencies names to add to AMD-files

##### remove
Type: `String` or `Array`

Remove certain dependencies from AMD-files

##### clear
Type: `Boolean`

Remove all dependencies from AMD-files

##### setName
Type: `String`

Set module name to each AMD-file

##### clearName
Type: `String`

Clear module name from each AMD-file


#### Usage

```js
gulp.src('src/**/*.js')
    .pipe(amd({clearName: true, add: 'config'}));
```


## License

Copyright (c) 2014-2015 Oleg Istomin
Released under the MIT license

***