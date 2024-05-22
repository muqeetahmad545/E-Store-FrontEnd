import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Router from './router/Router';
// import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className='app' style={{ backgroundColor: "#b78876", height :"100vh"}} >
        <Navbar />
        <Router />
        <Footer/>
      </div>
    </>
  );
}

export default App;
