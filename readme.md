# has-uber

> Check if Uber is available in your city

## Install

```bash
$ yarn add has-uber
```

## Usage

```js
const hasUber = require('has-uber')

await hasUber('brazil')
// ~> true

await hasUber('brazil', 'Sao Paulo')
// ~> true
```

## API

### hasUber(country, city)

#### country

Type: `string`<br/>
Required

Returns a promise

#### city

Type: `string`<br/>
Optional

Returns a promise

## Related

- [has-uber-cli](https://github.com/bukinoshita/has-uber-cli) — Check if Uber is available in your city with CLI
- [uber-availability](https://github.com/bukinoshita/uber-availability) — The API for this module

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
