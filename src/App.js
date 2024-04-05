import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Router from './router/router';
import Footer from './components/footer';
function App() {
  return (
    <>
      <div className='app' style={{ backgroundColor: "#b78876", height: "100vh" }} >
        <Navbar />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
