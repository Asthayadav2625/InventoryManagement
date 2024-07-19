import './App.css';
import Body from './component/Body'; 
import Navbar from './component/Navbar';

function App() {
   
console.log("Hello");
  return (
    <>
        <div className='flex flex-col h-screen overflow-x-hidden'>
           <Navbar/>
           <Body/>
        </div>
    </>
  );
}

export default App;
