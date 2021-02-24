import './App.css';
import React from 'react';
import store from './redux/store';
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import GeneralContainer from './component/GeneralContainer';

function App() {
  return (
    <div className="App" >
      <Provider store={store}>
        {/* <HashRouter > */}
        <BrowserRouter>
          <GeneralContainer />
        </BrowserRouter>
        {/* </HashRouter> */}
      </Provider>
    </div>
  );
}

export default App

