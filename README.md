# blink
[![Travis](https://img.shields.io/travis/aurbano/blink.svg?style=flat-square)](https://travis-ci.org/aurbano/blink)
[![npm](https://img.shields.io/npm/v/blinkjs.svg?style=flat-square)](https://www.npmjs.com/package/blinkjs)
[![David](https://img.shields.io/david/aurbano/blink.svg?style=flat-square)](https://david-dm.org/aurbano/blink)
[![GitHub license](https://img.shields.io/github/license/aurbano/blink.svg?style=flat-square)](https://github.com/aurbano/blink/blob/master/LICENSE)

>Real-time, unopinionated, modern web framework for node

```js
var blink = require('blinkjs')
var app = blink()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install blinkjs
```

## Features

  * Robust routing
  * Focus on high performance
  * Real-time support

[![Analytics](https://ga-beacon.appspot.com/UA-3181088-16/blink/readme)](https://github.com/aurbano)
