import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Router from './router/Router';
// import Footer from './components/Footer';
function App() {
  const first_Name = sessionStorage.getItem("first_Name");
  console.log("first_Name", first_Name);
  return (
    <>
      <div className='app' style={{ backgroundColor: "#b78876", height: "100vh" }} >
        <Navbar userName={first_Name} />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
