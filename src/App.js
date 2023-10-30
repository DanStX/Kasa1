
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Logement from './pages/Logement';
import Error404 from './pages/Error404';
import './styles/scss/style.scss';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (

    <div className="App">
      {/* mise en place du react router dom  */}
      <BrowserRouter>
      <Header />

        {/* mise en place du react router dom  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/logement' element={<Logement />} />
          {/* path="*" fonctionne si jamais URL ne correspond à rien de déclaré au dessus   */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      
      <Footer />
    </div>
  );
}

export default App;
