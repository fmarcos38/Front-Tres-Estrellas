import { Routes, Route } from 'react-router-dom';
import AppProvider from './Content';
import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/NavBar';
import BarraLateral from './Components/Barra-lateral-extendible';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <Navbar/>
        </header>

        <main>
          {/* barra lateral */}
          {/* <BarraLateral/> */}
          {/* rutas */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>

        <footer>

        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
