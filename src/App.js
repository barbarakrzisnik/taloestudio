import logo from './logo.svg';
import './App.scss';
import Header from './Componentes/Header'
import PortfolioWindow from './Componentes/PortfolioWindow'
import Bodas from './Componentes/Bodas'
import Contacto from './Componentes/Contacto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <PortfolioWindow></PortfolioWindow>
        <Bodas></Bodas>
        <Contacto></Contacto>
      </header>
    </div>
  );
}

export default App;
