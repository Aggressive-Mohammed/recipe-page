import './App.css';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Main from './components/Main';
import Nutriction from './components/Nutriction';
import Preparation from './components/Preparation';

function App() {
  return (
    <>
      <Main />
      <Preparation />
      <Ingredients />
      <hr className='' />
      <Instructions/>
      <hr className='' />
      <Nutriction/>
    </>
  );
}

export default App;
