# has-uber [![Build Status](https://travis-ci.org/bukinoshita/has-uber.svg?branch=master)](https://travis-ci.org/bukinoshita/has-uber)

> :car: Check if Uber is available in your city


## Install
```bash
$ npm install --save has-uber
```


## Usage
```js
import hasUber from 'has-uber'

hasUber('miami')
  .then(uber => {
    if (uber[0]) {
      console.log('Uber is available in Miami')  
    }
  })
// => Uber is available in Miami
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
MIT © [Bu Kinoshita](https://bukinoshita.io)
