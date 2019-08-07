import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from '../streams';
import Header from '../header';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
