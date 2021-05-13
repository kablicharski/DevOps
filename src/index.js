import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

Amplify.configure({
  Auth: {
    region: "ca-central-1",
    userPoolId: "ca-central-1_GqRDUgxYl",
    userPoolWebClientId: "1gs0rpjvvem8kgocmo490rugum",
    oauth: {
      domain: "main.dervrwlcswqy8.amplifyapp.com",
      scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
      redirectSignIn: "main.dervrwlcswqy8.amplifyapp.com",
      redirectSignOut: "main.dervrwlcswqy8.amplifyapp.com",
      responseType: "code"
    }
  },
  API: {
    endpoints: [
      {
        name: "Stage_API",
        endpoint: "le35b9w0kl.execute-api.ca-central-1.amazonaws.com"
      }
    ]
  }
});