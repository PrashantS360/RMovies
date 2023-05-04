import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movie from './components/Movie';
import Search from './components/Search';


import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <Navbar />

      {/* Top Loading Bar */}
      <LoadingBar
        color='#fb641b'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Alert */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Switch>
        <Route exact path="/" >
          <Home setProgress={setProgress} toast={toast} />
        </Route>
        <Route exact path="/movie/:slug" >
          <Movie setProgress={setProgress} toast={toast} />
        </Route> 
        <Route exact path="/search/:slug" >
          <Search setProgress={setProgress} toast={toast}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
