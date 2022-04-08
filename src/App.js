
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import fakeData from './fakeData';

function App() {
  console.log(fakeData);
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
