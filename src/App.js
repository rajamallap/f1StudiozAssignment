import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav/navBar';
import TabBar from './components/tabs/tabBar';
import Config from './components/configurtion/config.js';
import GrayBand from './components/grayBand/grayBand.js';
import Category from './components/category/category.js';

function App() {
  return (
    <>
      <NavBar />
      <TabBar />
      <Config />
      <GrayBand />
      <Category />
    </>
  );
}

export default App;
