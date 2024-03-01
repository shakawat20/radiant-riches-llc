import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Main></Main>
     <div style={{display:"flex",justifyContent:"center"}}>
       <Footer></Footer>
     </div>
    
    </div>
  );
}

export default App;
