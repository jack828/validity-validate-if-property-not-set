# validity-validate-if-property-not-set

Validate the current property if another property is not set.

Useful if you would like either one or another field to be set.

## Installation

```
yarn add validity-validate-if-property-not-set
```

## Usage

Below is a simple example for usage with schemata and save:

```js
const required = require('validity-required')
const schemata = require('schemata')
const save = require('save')
const collection = save('comment')
const validateIfPropertyNotSet = require('validity-validate-if-property-not-set')

const schema = schemata({
  title: {
    type: String,
    validators: { all: [ validateIfPropertyNotSet('comment', required) ] }
  },
  comment: {
    type: String,
    validators: { all: [ validateIfPropertyNotSet('title', required) ] }
  }
})

```

## Credits

[Jack Burgess](https://github.com/jack828)
