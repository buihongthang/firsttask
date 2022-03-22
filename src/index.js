import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';

// const reduxStore = createStore(rootReducer);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('app'));
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
