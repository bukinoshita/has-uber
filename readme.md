# has-uber [![Build Status](https://travis-ci.org/bukinoshita/has-uber.svg?branch=master)](https://travis-ci.org/bukinoshita/has-uber) [![codecov](https://codecov.io/gh/bukinoshita/has-uber/branch/master/graph/badge.svg)](https://codecov.io/gh/bukinoshita/has-uber)

> :car: Check if Uber is available in your city

## Install

```bash
$ yarn add has-uber
```

## Usage

```js
const hasUber = require('has-uber')

await hasUber('miami')
// ~> true
```

## API

### hasUber(place)

#### place

Type: `string`<br/>
Required

Returns a promise

## Related

- [has-uber-cli](https://github.com/bukinoshita/has-uber-cli) — :car: Check if Uber is available in your city with CLI

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
