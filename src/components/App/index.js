// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Carousel from '../Carousel';
import Chat from '../Chat';

// == Composant
function App() {
  return (
    <div className="app">
      {/* <Chat /> */}
      <Header />
      <Main />
      <Carousel />
    </div>
  );
}

// == Export
export default App;
