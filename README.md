<img src="http://bitcore.io/css/images/module-message.png" alt="flashcore message" height="35">
# Flashcoin Message Verification and Signing for Litecore


[![NPM Package](https://img.shields.io/npm/v/flashcore-message.svg?style=flat-square)](https://www.npmjs.org/package/flashcore-message)
[![Build Status](https://img.shields.io/travis/flash-coin/flashcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/flash-coin/flashcore-message)
[![Coverage Status](https://img.shields.io/coveralls/flash-coin/flashcore-message.svg?style=flat-square)](https://coveralls.io/r/flash-coin/flashcore-message?branch=master)

flashcore-message adds support for verifying and signing flashcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main flashcore repo](https://github.com/flash-coin/flashcore) for more information.

## Getting Started

```sh
npm install flashcore-message
```

```sh
bower install flashcore-message
```

To sign a message:

```javascript
var flashcore = require('flashcore-lib');
var Message = require('flashcore-message');

var privateKey = flashcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/flash-coin/flashcore/blob/master/CONTRIBUTING.md) on the main flashcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/flash-coin/flashcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Flashcoin Core Developers

