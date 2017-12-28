# libregex

A regular expression library for NODE.JS


## Installation

```sh
$ npm install libregex --save
```

## Usage

```js
var ips = require('libregex').ip
,v4 = ips.v4 ,v6 = ips.v6 ,ip = ips.ip;

console.log(v4.is('192.168.0.1')); // true
console.log(v6.is('1:2:3:4:5:6:7:8')); // true
console.log(ip.is('1:2:3:4:5:6:7:8')); // true
console.log(ip.contain('abc 192.168.0.1')); // true
console.log(ip.match('abc 1:2:3:4:5:6:7:8')); // ['1:2:3:4:5:6:7:8']

console.log(ip.e('unicorn 192.168.0.1').is()); // false
console.log(ip.e('unicorn 192.168.0.1').contain());  // true
console.log(ip.e('unicorn 192.168.0.1').match());  // [ '192.168.0.1' ]
console.log(ip.e().test('unicorn 192.168.0.1')); // = .contain() -> true
console.log(ip.exact().e().test('unicorn 192.168.0.1')); // = .is() -> fasle
console.log(v6.e()); // /(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+/
```

## API
- [IP Address Regex](#ip)
- [Email Address Regex](#email)
- [Domain Regex with IDN Support](#domain)
- [URLs Regex](#url)
...

#### .is(String)

Check if a string is match the regex.

#### .contain(String)

Check if a string matching the regex.

#### .match(String)

Return an array if a string matching the regex.

<a name='ip'></a>
### IP Address Regex

* **.v4.is(), v4.contain(), v4.match()** - IPv4 regex
* **.v6.is(), v6.contain(), v6.match()** - IPv6 regex
* **.ip.is(), ip.contain(), ip.match()** - IPv4 or IPv6

```js
var ip = require('libregex').ip;
var v4 = require('libregex').ip.v4;
var v6 = require('libregex').ip.v6;

ip.is('1:2:3:4:5:6:7:8'); // true
ip.is('unicorn 192.168.0.1'); // false
ip.contain('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'); // true
ip.match('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'); // ['192.168.0.1', '1:2:3:4:5:6:7:8']

v4.is('192.168.0.1'); // true
v4.is('1:2:3:4:5:6:7:8'); // false
v6.is('1:2:3:4:5:6:7:8'); // true
```

<a name='email'></a>
### Email Address Regex

* **email.is(string)**  - Check if a string is email address.
* **email.contain(string)**  - Check if a string contains email address.
* **email.match(string)**  - Return an array if a string contains email address.

```js
var email = require('libregex').email;

email.is('xseano@yandex.com'); // true
email.contain('unicorn xseano@yandex.com'); // true
email.match('unicorn xseano@yandex.com cake john@doe.com rainbow'); // ['xseano@yandex.com', 'john@doe.com']
```

<a name='domain'></a>
### Domain Regex

* **domain.is(string)**  - Check if a string is domain.
* **domain.contain(string)**  - Check if a string contains domain.
* **domain.match(string)**  - Return an array if a string contains domain.

```js
var domain = require('libregex').domain;

domain.is('example.com'); // true
domain.is('unicorn example.com'); // false
domain.contain('unicorn example.com cake a.sub.domain.org rainbow'); // true
domain.match('unicorn example.com cake a.sub.domain.org rainbow'); // ['example.com', 'a.sub.domain.org']
```

<a name='url'></a>
### URLs Regex

* **url.is(string)**  - Check if a string is URL.
* **url.contain(string)**  - Check if a string contains URL.
* **url.match(string)**  - Return an array if a string contains URL.

```js
var url = require('libregex').url;

url.is('https://github.com'); // true
url.contain('foo github.com bar google.com'); // true
url.match('foo https://github.com bar google.com'); // ['https://github.com', 'google.com']
```

...


## Contributions

To run the tests for **libregex** simply run:
```sh
npm i && npm test  # install dev dependencies and test
```
For bugs and feature requests, [please create an issue](https://github.com/xseano/libregex/issues).

Pull requests is always welcome.

1. Fork it
2. Create your feature branch `git checkout -b my-new-feature`
3. Commit your changes `git commit -am 'Add some feature'`
4. Push to the branch `git push origin my-new-feature`
5. Create new Pull Request

[Contributors](https://github.com/xseano/libregex/graphs/contributors)


## License

Apache 2.0 © 2018 [Sean Oberoi](http://xseano.com).
