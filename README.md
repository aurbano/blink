# blink
Real-time, unopinionated, modern web framework for node

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
