//import logo from './logo.svg';
import './App.css';
import CadastroCliente from './componentes/CadastroCliente';
import CadastroConteiner from './componentes/CadastroConteiner';
import Movimentacao from './componentes/Movimentacao';

function App() {
  return (
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
      <CadastroCliente />
      <CadastroConteiner />
      <Movimentacao />
      </div>

    </div>
  )
}

export default App