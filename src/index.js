import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, Link } from 'react-router-dom'
import { HistoryRouter } from './redux-first-history/rr6'
import { Provider } from 'react-redux'
import { store, history } from './store'
import Counter from './components/Counter'
import Home from './components/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </HistoryRouter>
  </Provider>
);
