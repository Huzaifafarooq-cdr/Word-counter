import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';


function App() {
  return (
    <>
      <Navbar title="WORD COUNTER" about="About us" />
      <div className="container my-3">

        <TextForm heading="Enter the text to analyze below" />  
        {/*<About /> */}
      </div>
      
       

      
    </>
  );
}

export default App;
