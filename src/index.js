import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import "array-includes";
import "custom-event-polyfill";

function parseQueryString(locationSearch) {
  let query = {};
  if (locationSearch) {
    locationSearch = locationSearch.replace("?", "");
    const params = locationSearch.split("&");
    params.forEach((param, idx) => {
      const keyValue = param.split("=");
      query[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });
  }
  return query;
}

if (process && process.env && process.env.NODE_ENV === "development") {
  window.NID = "0x3";
  window.CONTRACT_ADDRESS = "cx8328a4eacd313e761b3101ab1dc7c8813dbf4553";
} else {
  window.NID = "0x1";
  window.CONTRACT_ADDRESS = "cx881bb5a3a57eb12f05bfe5ea645bb921119b9168";
}
window.SPLITER = "#$*&#";

ReactDOM.render(
  <BrowserRouter>
    <Route
      render={props => {
        const newProps = {
          ...props,
          location: {
            ...props.location,
            query: parseQueryString(props.location.search),
            parseQueryString: parseQueryString
          }
        };

        return <App {...newProps} />;
      }}
    />
  </BrowserRouter>,
  document.getElementById("root")
);
