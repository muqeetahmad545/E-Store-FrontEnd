import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Router from './router/router';
import Footer from './components/footer';
function App() {
  return (
    <>
      <div className='app' style={{ backgroundColor: "#b78876", height :"100vh"}} >
        <Navbar name ="Muqeet" lastName= "Ahmad" > 
        <p>Muqeet This is A Goal To accive One in Life </p>
        </Navbar>
        {/* <Navbar name = "Muqeet" lastName = "Ahmad"
        <Navbar/> */}
        <Router />
        <Footer/>
      </div>
    </>
  );
}

export default App;
