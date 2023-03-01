// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Carousel from '../Carousel';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Carousel />
    </div>
  );
}

// == Export
export default App;
