import './App.css'
import Brand from './components/Brand'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar'

function App() {
  return (
    <div>
      <div className="header_wrapper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer  saludo= "Hola a profe"/>
    </div>
  );
}

export default App
