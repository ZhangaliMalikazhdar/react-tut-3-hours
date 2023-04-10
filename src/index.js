import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOM.render(
//   <App />,
//   // React.createElement('button', {
//   //   disabled: false, onClick: () => console.log('clicked')
//   // }, 'click'),
//   // document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
