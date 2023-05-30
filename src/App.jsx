import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='cuerpo'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={ "/nosotros" } element={ <Nosotros /> } />
          <Route path={ "/contacto" } element={ <Contacto /> } />
          
          {/* <Route path={"/destacados"} element={<Destacado />} /> */}
          {/* <Route path={"/*"} element={<Error404 />} /> */}
        </Routes>
        { <RedesSociales className="redesSociales" />}
        <Footer className="footer"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
