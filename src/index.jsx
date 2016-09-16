import React from 'react';
import { render } from 'react-dom';

import Raven from 'raven-js';

import AppGitHub from './components/AppGitHub';

/*
window.onerror = function(message, source, lineno, colno, error) {
   console.log(message);
   return false;
}
*/

Raven.config('https://59cd430997004591af3320a9875237d7@sentry.io/99461').install();

const _fnRemoveSpinner = function(){
  document.body.removeChild(document.getElementById('spinner'));
}


render(<AppGitHub />, document.getElementById("app"), _fnRemoveSpinner);
