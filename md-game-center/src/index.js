import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/Index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
strict mode sources for react 18:
1. https://medium.com/geekculture/the-tricky-behavior-of-useeffect-hook-in-react-18-282ef4fb570a
2. https://www.techiediaries.com/react-18-useeffect/
3. https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
*/