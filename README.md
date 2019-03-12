# python-dkim-verify

[![build status](https://img.shields.io/travis/com/niftylettuce/python-dkim-verify.svg)](https://travis-ci.com/niftylettuce/python-dkim-verify)
[![code coverage](https://img.shields.io/codecov/c/github/niftylettuce/python-dkim-verify.svg)](https://codecov.io/gh/niftylettuce/python-dkim-verify)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/python-dkim-verify.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/python-dkim-verify.svg)](https://npm.im/python-dkim-verify)

> Node.js wrapper around Python's [dkim.verify][dkim-verify] function which conforms to RFC spec


## Table of Contents

* [Requirements](#requirements)
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Requirements

1. Ensure that you have a Python version of >=2.7 or >= 3.5 installed per [dkimpy][] requirements:

   ```sh
   python --version
   ```

2. Install the packages [pynacl][] and [authres][] using `pip` globally:

   ```sh
   pip install pynacl
   pip install authres
   ```

3. Install the DNS package based off your version of Python:

   > Install [dnspython][] if possible:

   ```sh
   pip install dnspython
   ```

   > Otherwise If you are using Python version >= 3.5+:

   ```sh
   pip install py3dns
   ```

   > Otherwise install the older version (note `2.3.4` is the only version that seems to work OK on Mac):

   ```sh
   pip install pydns==2.3.4
   ```


## Install

[npm][]:

```sh
npm install python-dkim-verify
```

[yarn][]:

```sh
yarn add python-dkim-verify
```


## Usage

```js
const dkimVerify = require('python-dkim-verify');

// then/catch usage
dkimVerify(rawEmail)
  .then(result)
  .catch(console.error);

// async/await usage
(async () => {
  try {
    const result = await dkimVerify(rawEmail);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
```

Note that `result` is either `true` or `false` depending on whether or not DKIM verification was successful for the first `DKIM-Signature` header found on the email.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[pynacl]: https://pypi.org/project/PyNaCl/

[authres]: https://pypi.org/project/authres/

[dnspython]: https://pypi.org/project/dnspython/

[dkimpy]: https://pypi.org/project/dkimpy/

[dkim-verify]: https://git.launchpad.net/dkimpy/tree/dkim/dkimverify.py
