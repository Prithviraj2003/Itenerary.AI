import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = 'pk_test_aHVtYmxlLXR1cnRsZS03My5jbGVyay5hY2NvdW50cy5kZXYk'
console.log(PUBLISHABLE_KEY)
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
