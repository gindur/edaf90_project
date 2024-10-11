import { Outlet, useNavigation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header'
import MoviePage from './components/MoviePage'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

function App() {
  const navigation = useNavigation();

  return (
    <div class="main-content">
      <Header />
      {navigation.state === "loading" ? (
        <Spinner />
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  )
}

export default App
