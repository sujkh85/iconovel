import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import 'array-includes';
import 'custom-event-polyfill';

function parseQueryString(locationSearch) {
  let query = {};
  if (locationSearch) {
    locationSearch = locationSearch.replace('?', '');
    const params = locationSearch.split('&');
    params.forEach((param, idx) => {
      const keyValue = param.split('=');
      query[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });
  }
  return query;
}

ReactDOM.render(
    <BrowserRouter>
      <Route
        render={props => {
          const newProps = {
            ...props,
            location: {
              ...props.location,
              query: parseQueryString(props.location.search),
              parseQueryString:parseQueryString
            }
          };

          return <App {...newProps} />;
        }}
      />
    </BrowserRouter>
  ,
  document.getElementById('root')
);
