import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
  return (
    <div >
      <NavBar><CartWidget /></NavBar>
      {/* <ItemCount stock={6}/> */}
      <br/>
      <ItemListContainer />
    </div>
  );
}

export default App;
