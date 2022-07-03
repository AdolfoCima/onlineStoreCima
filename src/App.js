import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemCount from './components/ItemCount';




function App() {
  return (
    <div >
      <NavBar><CartWidget /></NavBar>
      {/* <ItemCount stock={6}/> */}
      <br/>
      <ItemListContainer />
      <br/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
