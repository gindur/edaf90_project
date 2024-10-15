import { Outlet, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header'
import MoviePage from './components/MoviePage'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

function App() {
  const navigation = useNavigation();

  return (
    <div className="background-div">
      <div>
        <Header />
        {navigation.state === "loading" ? (
          <Spinner />
        ) : (
          <Outlet />
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App
