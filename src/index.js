import * as utils from './utils.js';
import Polyglot from 'node-polyglot';

function getDefaults() {
  return {
  };
}

class PolyglotFormat {
  constructor(options) {
    this.type = 'i18nFormat';

    this.init(null, options);
  }

  init(i18next, options) {
    const i18nextOptions = (i18next && i18next.options && i18next.options.i18nFormat) || {};
    this.options = utils.defaults(i18nextOptions, options, this.options || {}, getDefaults());
  }

  parse(res, options, lng, ns, key) {
    return Polyglot.transformPhrase(res, options, lng);
  }

  addLookupKeys(finalKeys, key, code, ns, options) {
    // no additional keys needed for select or plural
    // so there is no need to add keys to that finalKeys array
    return finalKeys;
  }
}

PolyglotFormat.type = 'i18nFormat';


export default PolyglotFormat;
