import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './containers/App';
import './index.css';

Sentry.init({
  dsn: "https://bbd94b1581bf482fbab3ec774a22b017@o1241326.ingest.sentry.io/6394990",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
