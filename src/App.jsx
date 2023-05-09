import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <ItemListContainer bienvenida="Bienvenido al Ecommerce" />
      <Main />
    </div>
  );
}

export default App;
