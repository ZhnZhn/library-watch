import React from 'react';
import { render } from 'react-dom';

import Raven from 'raven-js';

import AppGitHub from './components/AppGitHub';

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== 'production'){
/* eslint-disable no-undef */
  console.log('Development Mode:');
  window.onerror = function(message, source, lineno, colno, error) {
     console.log('window.onerror:');
     console.log(message);
     return false;
  }
}

if (process.env.NODE_ENV === 'production'){
   Raven.config('https://59cd430997004591af3320a9875237d7@sentry.io/99461').install();
}

const _fnRemoveSpinner = function(){
  document.body.removeChild(document.getElementById('spinner'));
}


render(<AppGitHub />, document.getElementById("app"), _fnRemoveSpinner);
