import { createRoot } from 'react-dom/client';
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

const _renderApp = () => {
  const preloader = document.getElementById('preloader')
  if (preloader){
    document.body.removeChild(document.getElementById('preloader'));
  }
  createRoot(document.getElementById("app"))
    .render(<App />)
}

const _loadingApp = function(){
  const preloader = window.preloader
  if (preloader) {
    if (!preloader.isErrCss && !preloader.isErrScript){
      _renderApp();
    } else {
      preloader.stop();
    }
  } else {
    _renderApp()
  }
}

_loadingApp();
