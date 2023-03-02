import './App.css';
import Header from './headerComponent/header';
import Footer from './footer/footer';
import Body from './body/bodyComponent';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;