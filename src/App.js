import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    
  {/* <Navbar/> */}
  <Navbar title="TextUtles"/>
  <div className='container my-3'>
    <Textform  heading="Enter the text to analyze"/>
  </div>
  {/* <About/> */}
  
    </>
  );
}

export default App;
