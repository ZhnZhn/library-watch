import React from 'react';
import { render } from 'react-dom';

import Raven from 'raven-js';

import App from './components/AppLibraryWatch';

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

const _fnRenderApp = () => {
  document.body.removeChild(document.getElementById('preloader'));
  render(<App />, document.getElementById("app"));
}

const _fnLoading = function(){
  /*eslint-disable no-undef*/
  if (preloader) {
    if (!preloader.isErrCss && !preloader.isErrScript){
      _fnRenderApp();
    } else {
      preloader.stop();
    }
  /*eslint-enable no-undef*/
  } else {
    _fnRenderApp()
  }
}

_fnLoading();
