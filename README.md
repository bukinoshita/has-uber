# has-uber [![Build Status](https://travis-ci.org/bukinoshita/has-uber.svg?branch=master)](https://travis-ci.org/bukinoshita/has-uber)

> :car: Check if Uber is available in your city

## Install
```bash
$ npm install has-uber
```

## Usage
```js
import hasUber from 'has-uber'

hasUber('miami').then(res => res)
// => true
```

## API

### hasUber(place)

#### place

Type: `string`<br/>
Required

Returns a promise (true / false)


## License

[MIT](https://raw.githubusercontent.com/bukinoshita/has-uber/master/LICENSE) &copy; Bu Kinoshita
