# Introduction

[![Travis](https://img.shields.io/travis/i18next/i18next-polyglot/master.svg?style=flat-square)](https://travis-ci.org/i18next/i18next-polyglot)
[![Coveralls](https://img.shields.io/coveralls/i18next/i18next-polyglot/master.svg?style=flat-square)](https://coveralls.io/github/i18next/i18next-polyglot)
[![npm version](https://img.shields.io/npm/v/i18next-polyglot.svg?style=flat-square)](https://www.npmjs.com/package/i18next-polyglot)
[![David](https://img.shields.io/david/i18next/i18next-polyglot.svg?style=flat-square)](https://david-dm.org/i18next/i18next-polyglot)

This changes i18n format from i18next json to polyglot using [airbnb/polyglot.js](https://github.com/airbnb/polyglot.js)

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-polyglot) or [downloaded](https://github.com/i18next/i18next-polyglot/blob/master/i18nextPolyglot.min.js) from this repo.

```
# npm package
$ npm install i18next-polyglot
```

Wiring up:

```js
import i18next from 'i18next';
import Polyglot from 'i18next-polyglot';

i18next
  .use(Polyglot)
  .init(i18nextOptions);
```

- As with all modules you can either pass the constructor function (class) to the i18next.use or a concrete instance.
- If you don't use a module loader it will be added to `window.i18nextPolyglot`

## Backend Options

```js
{
  // currently there are no extra options
}
```

Options can be passed in by setting options.i18nFormat in i18next.init:

```js
import i18next from 'i18next';
import Polyglot from 'i18next-polyglot';

i18next
  .use(Polyglot)
  .init({
    i18nFormat: options
  });
```

### more complete sample

```js
import i18next from 'i18next';
import Polyglot from 'i18next-polyglot';

i18next
  .use(Polyglot)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          "hello_name": "Hola, %{name}."
        }
      }
    }
  });

 i18next.t('hello_name', { name: "DeNiro" }); // -> "Hola, DeNiro."
```

--------------

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://locize.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>
