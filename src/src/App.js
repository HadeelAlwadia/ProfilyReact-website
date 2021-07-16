import React,{component} from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navber';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Connent from './components/Conect';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Bolg from './components/Bolg'
import AboutHome from './components/About/AboutHome';
function App() {
 return(
  <div>
     <Navbar/>
     <Header/>
     <About/>
     <Services/>
     <Project/>
     <Connent/>
     <Skills/>
     <Timeline/>
     <Bolg/>
     <Footer/>

</div>

  
  
  
  );
}

export default App;
